from django.shortcuts import render
from app import settings
from app.lib.models import FacebookImage

def index(request):
    args = {
        'img_param': ''
    }
    img_id = request.GET.get('img')
    if img_id != None and img_id.isnumeric() and FacebookImage.objects.filter(id=img_id).exists():
        filename = str(img_id) + '.jpg'
        args['image_url'] = settings.MEDIA_URL + filename
        args['img_param'] = '/?img=' + str(img_id)
    else:
        filename = 'fb_share_static.jpg'
        args['image_url'] = settings.STATIC_URL + 'img/' + filename

    return render(request, 'index.html', args)

def privacy(request):
    return render(request, 'privacy.html')