from django.conf.urls import include, url
from . import views
from django.conf import settings
from django.conf.urls.static import static
#from django.contrib import admin

urlpatterns = [
	url(r'dev_form', views.dev_form, name='dev_form'),
	url(r'suggest', views.suggestion_view, name='suggest'),
	url(r'v1/photos(?P<pk>\d+)$',
		views.RetrieveUpdateDestroyPhoto.as_view(),
		name='photo_detail'),
	url(r'v1/photos',views.ListCreatePhoto.as_view(), name='photo_list'),
    url(r'^$', views.index, name='index'),
]

#urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

