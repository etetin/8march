from django.shortcuts import render
from app import settings
from app.lib.models import FacebookImage

def index(request):
    args = {}
    id = request.GET.get('id')
    if id != None and id.isnumeric() and FacebookImage.objects.filter(id=id).exists():
        filename = str(id) + '.jpg'
        args['image_url'] = settings.MEDIA_URL + filename
    else:

        filename = 'fb_share_static.jpg'
        args['image_url'] = settings.STATIC_URL + 'img/' + filename

    return render(request, 'index.html', args)

def privacy(request):
    return render(request, 'privacy.html')