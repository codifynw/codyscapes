from django.conf.urls import include, url
from . import views
#from django.contrib import admin

urlpatterns = [
    url(r'home/', views.home, name='home'),
    url(r'contact/', views.contact, name='contact'),
    url(r'live_map/', views.coming_soon, name='coming_soon'),
    url(r'^$', views.index, name='index'),
]
	