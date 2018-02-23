from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse
from krakenio import Client
import json
import urllib3
from app import telegram as telegramApi
from random import randint

def main(request):
	data = request.POST
	if 'action' in data:
		if data['action'] == 'givemesticker' and request.method == 'POST' and request.FILES['file']:
			# save image on server from request
			myfile = request.FILES['file']
			fs = FileSystemStorage()
			filename = fs.save(myfile.name, myfile)

			# try to compress saved image
			image_url, status = compress(filename)

			# download compressed image on server and rewrite original image
			compressed_filename = filename.split('.')[0] + '.png'
			path_to_final_img = download_image(image_url, compressed_filename)

			stickerpack_name = str(randint(0, 100))

			telegram = telegramApi.Telegram()
			path_stickerpack = telegram.createStikerpack(path_to_final_img, stickerpack_name)
			response = {"success": True, "path_stickerpack": path_stickerpack}
		else:
			response = {"success": False}
	else:
		response = {"success": False}

	return HttpResponse(json.dumps(response), content_type="application/json")

def compress(filename):
	key = '7aef411271c7a3c37c3636c75d88aa2c'
	secret = '18170855209683edde2b78967e0c737437958e67'
	image_url = 'http://138.68.70.255:8000/media/' + filename
	api = Client(key, secret)
	data = {
		'wait': True
	}

	result = api.url(image_url, data)
	compressed_image_url = ''
	if result.get('success'):
		compressed_image_url = result.get('kraked_url')

	status = result.get('success')

	return [compressed_image_url, status]

def download_image(image_url, filename):
	urllib3.disable_warnings()
	http = urllib3.PoolManager()
	r = http.request('GET', image_url, preload_content=False)

	path = 'media/' + filename
	with open(path, 'wb') as out:
		while True:
			data = r.read(1024)
			if not data:
				break
			out.write(data)

	r.release_conn()

	return path
