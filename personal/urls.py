from django.conf.urls import include, url
from . import views
#from django.contrib import admin

urlpatterns = [
    url(r'home/', views.home, name='home'),
    url(r'contact/', views.contact, name='contact'),
    url(r'^$', views.coming_soon, name='coming_soon'),
]
	