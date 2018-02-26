from telegram import Bot
from app.lib.models import Stickerpack

class Telegram:
	TOKEN = '517147871:AAH6OAGMqFL8-3ZJ_zXqz7OlUjVr7ZRei_A'
	BASEURL = 'https://t.me/addstickers/'
	# change uid on another user(hpmd dev dev)
	UID = 191346331

	def createStikerpack(self, path_to_img):
		bot = Bot(token=self.TOKEN)

		# insert new row in DB
		stickerpack = Stickerpack()
		stickerpack.save()

		name = 'hpmd' + str(stickerpack.id) + 'test_local' + '_by_HPMDBOT'
		title = stickerpack.id

		with open(path_to_img, 'rb') as f:
			file = bot.upload_sticker_file(self.UID, f)
			file_url = file['file_id']

		bot.create_new_sticker_set(user_id=self.UID, name=name, title=title, png_sticker=file_url, emojis='💪')

		return self.BASEURL + name