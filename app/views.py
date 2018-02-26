from django.shortcuts import render
from app.lib.models import Stickerpack

def index(request):
    args = {
        'test': 'tese',
    }

    return render(request, 'index.html', args)
