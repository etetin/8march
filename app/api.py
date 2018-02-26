from django.http import HttpResponse
import json

from app.lib import imageHandler, telegram as telegramApi
from app.lib.models import Stickerpack

def main(request):
	data = request.POST
	if 'action' in data and request.method == 'POST' and request.FILES['file']:
		if data['action'] == 'givemesticker':
			image_handler = imageHandler.ImageHandler()
			filename = image_handler.save(image=request.FILES['file'])
			image_handler.setPathToImage(filename)

			if image_handler.needToCompress():
				status, message = image_handler.compress()
				if status:
					image_handler.download()
				else:
					response = {
						"success": False,
						"error_message": message
					}
					return HttpResponse(json.dumps(response), content_type="application/json")

			path_to_image = image_handler.getPathToImage()

			# insert new row in DB
			stickerpack = Stickerpack()
			stickerpack.path_to_image = path_to_image
			stickerpack.save()

			telegram = telegramApi.Telegram()
			stickerpack_url = telegram.createStikerpack(path_to_image=path_to_image, id=stickerpack.id)

			response = {
				"success": True,
				"stickerpack_url": stickerpack_url
			}
		if data['action'] == 'sharefb':
			image_handler = imageHandler.ImageHandler()
			filename = image_handler.save(image=request.FILES['file'])
			image_handler.setPathToImage(filename)

			response = {
				"success": True,
				"url": image_handler.getPathToImage()
			}

		else:
			response = {
				"success": False,
				"error_message": "wrong action or file is empty"
			}
	else:
		response = {
			"success": False,
			"error_message": "key of 'action' not exist/not post request/file is empty"
		}

	return HttpResponse(json.dumps(response), content_type="application/json")