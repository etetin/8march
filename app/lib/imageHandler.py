from django.core.files.storage import FileSystemStorage
import urllib3
from krakenio import Client
import os
from app import settings

class ImageHandler:
	KRAKEN_API_KEY = '7aef411271c7a3c37c3636c75d88aa2c'
	KRAKEN_API_SECRET = '18170855209683edde2b78967e0c737437958e67'

	def getPathToImage(self):
		return self.path_to_image

	def getUrlToImage(self):
		return self.url_to_image

	def __setPathToImage(self, filename):
		self.path_to_image = settings.MEDIA_ROOT + filename

	def __setUrlToImage(self, filename):
		self.url_to_image = settings.HOST_ADRESS + settings.MEDIA_URL + filename

	def alreadyExist(self, filename):
		return os.path.isfile(settings.MEDIA_ROOT + filename)

	def needToCompress(self):
		file_size = os.path.getsize(self.path_to_image) // 1024
		if file_size >= 512:
			return True
		else:
			return False

	# try to compress saved image
	def compress(self):
		image_url = self.url_to_image
		api = Client(self.KRAKEN_API_KEY, self.KRAKEN_API_SECRET)
		data = {
			'wait': True
		}

		result = api.url(image_url, data)
		status = result.get('success')
		message, compressed_image_url = ['', '']
		if status:
			url_of_compressed_image = result.get('kraked_url')
			self.url_of_compressed_image = url_of_compressed_image
		else:
			message = result.get('message')


		return [status, message]

	# download compressed image on server and rewrite original image
	def download(self):
		urllib3.disable_warnings()
		http = urllib3.PoolManager()
		request = http.request('GET', self.url_of_compressed_image, preload_content=False)

		with open(self.path_to_image, 'wb') as out:
			while True:
				data = request.read(1024)
				if not data:
					break
				out.write(data)

		request.release_conn()

	# save image on server from request
	def save(self, image, name):
		fs = FileSystemStorage()
		self.__setPathToImage(name)
		self.__setUrlToImage(name)
		filename = fs.save(name, image)

		return filename