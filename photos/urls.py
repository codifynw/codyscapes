from django.conf.urls import include, url
from . import views
from django.conf import settings
from django.conf.urls.static import static
#from django.contrib import admin

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^test$', views.index2, name='index2'),
]

#urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

