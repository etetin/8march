from django.shortcuts import render
from app import settings
from app.lib import imageHandler
from app.lib.models import FacebookImage
from django.http import HttpResponse

def index(request):
    id = request.GET.get('id')
    if id != None:
        try:
            fbImage = FacebookImage.objects.get(id=id)

            # imitate fb image extension
            filename = str(fbImage.id) + '.jpg'
            if imageHandler.ImageHandler().alreadyExist(filename=filename):
                with open(settings.MEDIA_ROOT + filename, "rb") as f:
                    return HttpResponse(f.read(), content_type="image/jpeg")
        except FacebookImage.DoesNotExist:
            print('object does not exist')

    return render(request, 'index.html')
