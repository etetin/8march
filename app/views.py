from django.conf import settings
from django.shortcuts import render, redirect

def index(request):
    print()
    args = {
        'test': 'tese',
    }
    return render(request, 'index.html', args)
