from django.conf.urls import include, url
from . import views
#from django.contrib import admin

urlpatterns = [
    #url(r'^$', views.index, name='index'),
    url(r'^$', views.coming_soon, name='coming_soon'),
]
	