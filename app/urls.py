from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from . import views, api

urlpatterns = [
    #path('admin/', admin.site.urls),
    url(r'^$', views.index, name='index'),
    url(r'^api\/$', api.main, name='main'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)