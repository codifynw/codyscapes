from django.conf.urls import include, url
from . import views
#from django.contrib import admin

urlpatterns = [
    # url(r'home$', views.home, name='home'),
    # url(r'contact$', views.contact, name='contact'),
    url(r'about$', views.about, name='about'),
    url(r'workshops$', views.workshops, name='workshops'),
    url(r'jaclyn$', views.jaclyn, name='jaclyn'),
    # url(r'licensing$', views.license, name='license'),
    url(r'^$', views.index, name='index'),
]

