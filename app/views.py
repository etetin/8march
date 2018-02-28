from django.shortcuts import render
from app import settings
from app.lib import imageHandler

def index(request):
    args = {}
    id = request.GET.get('id')
    if id != None:
        image_handler = imageHandler.ImageHandler()
        if image_handler.alreadyExist(id):
            # TODO need to check file existing, now id - its filename
            args['image_url'] = settings.HOST_ADRESS + '/media/' + id

    return render(request, 'index.html', args)
