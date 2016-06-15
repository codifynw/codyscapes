import os
from django.shortcuts import render

from rest_framework import generics

from .models import Photo
from . import models
from . import serializers

def index(request):
	photos = Photo.objects.all().filter(visible="true").order_by('-date')
	return render(request, 'photos/index.html', {'photos': photos, 'key': os.environ['MAPS_KEY']})

#API views
class ListCreatePhoto(generics.ListCreateAPIView):
	queryset = models.Photo.objects.all()
	serializer_class = serializers.PhotoSerializer

class RetrieveUpdateDestroyPhoto(generics.RetrieveUpdateDestroyAPIView):
	queryset = models.Photo.objects.all()
	serializer_class = serializers.PhotoSerializer



