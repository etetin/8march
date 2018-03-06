from django.db import models

class Stickerpack(models.Model):
    id = models.AutoField(primary_key=True)

class FacebookImage(models.Model):
    id = models.AutoField(primary_key=True)
