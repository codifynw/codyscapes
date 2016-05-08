from django.conf.urls import include, url
from django.contrib import admin

from . import views

urlpatterns = [
    url(r'^polls', views.index, name='index'),
    url(r'^$', views.coming_soon),
]