from django.http import HttpResponse
import json

from app.lib import imageHandler, telegram as telegramApi


def main(request):
	data = request.POST
	if 'action' in data:
		if data['action'] == 'givemesticker' and request.method == 'POST' and request.FILES['file']:
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

			telegram = telegramApi.Telegram()
			stickerpack_url = telegram.createStikerpack(path_to_img=path_to_image)

			response = {
				"success": True,
				"error_message": stickerpack_url
			}
		else:
			response = {
				"success": False,
				"error_message": "wrong action"
			}
	else:
		response = {
			"success": False,
			"error_message": "key of 'action' not exist"
		}

	return HttpResponse(json.dumps(response), content_type="application/json")