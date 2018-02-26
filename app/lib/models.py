from django.db import models

class Stickerpack(models.Model):
    id = models.AutoField(primary_key=True)
    path_to_image = models.CharField(max_length=200)
