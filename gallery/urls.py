from django.conf.urls import include, url
from . import views
#from django.contrib import admin

urlpatterns = [
    url(r'^$', views.redirect, name='redirect'),
]

