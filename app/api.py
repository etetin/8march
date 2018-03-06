from django.http import HttpResponse
import json

from app.lib import imageHandler, telegram as telegramApi
from app.lib.models import *
from app import settings

#TOOD don't run in production!
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def main(request):
	data = request.POST
	if 'action' in data and request.FILES['file']:
		if data['action'] == 'givemesticker':
			# create uniq ID
			stickerpack = Stickerpack()
			stickerpack.save()

			image_handler = imageHandler.ImageHandler()
			filename = image_handler.save(image=request.FILES['file'], name=str(stickerpack.id) + '.png')

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

			telegram = telegramApi.Telegram()
			stickerpack_url = telegram.createStikerpack(path_to_image=path_to_image, id=stickerpack.id)

			response = {
				"success": True,
				"stickerpack_url": stickerpack_url
			}
		elif data['action'] == 'sharefb':
			# create uniq ID
			fbImage = FacebookImage()
			fbImage.save()

			image_handler = imageHandler.ImageHandler()
			filename = image_handler.save(image=request.FILES['file'], name=str(fbImage.id) + '.jpg')

			response = {
				"success": True,
				"url": settings.HOST_ADRESS + '/?id=' + str(fbImage.id),
				"filename": filename
			}

		else:
			response = {
				"success": False,
				"error_message": "wrong action or file is empty/file is empty"
			}
	else:
		response = {
			"success": False,
			"error_message": "key of 'action' not exist"
		}

	return HttpResponse(json.dumps(response), content_type="application/json")