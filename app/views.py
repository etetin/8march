from django.shortcuts import render
from app import settings
from app.lib import imageHandler
from app.lib.models import Stickerpack
from django.http import HttpResponse

def index(request):
    id = request.GET.get('id')
    if id != None:
        try:
            stickerpack = Stickerpack.objects.get(id=id)

            # imitate fb image extension
            filename = str(stickerpack.id) + '.jpg'
            if imageHandler.ImageHandler.alreadyExist(filename):
                with open(settings.MEDIA_ROOT + filename, "rb") as f:
                    return HttpResponse(f.read(), content_type="image/jpeg")
        except Stickerpack.DoesNotExist:
            print('object does not exist')

    return render(request, 'index.html')
