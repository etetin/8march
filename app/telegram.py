from telegram import Bot

class Telegram:
	def createStikerpack(self, path_to_img, stickerpack_name):

		token = '517147871:AAH6OAGMqFL8-3ZJ_zXqz7OlUjVr7ZRei_A'

		bot = Bot(token=token)
		base_url = 'https://t.me/addstickers/'
		# change uid on another user(hpmd dev dev)
		uid = 191346331
		name = name = stickerpack_name + 'by_HPMDBOT'
		title = 'test sticker try3'

		with open(path_to_img, 'rb') as f:
			file = bot.upload_sticker_file(uid, f)
			file_url = file['file_id']

		# file_url = 'BQADAgADTQEAAqKWaEgQODLlhr7QmgI'
		t = bot.create_new_sticker_set(user_id=uid, name=name, title=title, png_sticker=file_url, emojis='💪')
		print(t)
		return base_url + name