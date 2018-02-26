from django.shortcuts import render
from app import settings

def index(request):
    args = {}
    id = request.GET.get('id')
    if id != None:
        # TODO need to check file existing, now id - its filename
        args['image_url'] = settings.HOST_ADRESS + '/' + id

    return render(request, 'index.html', args)
