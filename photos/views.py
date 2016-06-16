import os
from django.shortcuts import render

from rest_framework import generics

from .models import Photo
from . import models
from . import serializers
from . import forms

def index(request):
	photos = Photo.objects.all().filter(visible="true").order_by('-date')
	return render(request, 'photos/index.html', {'photos': photos, 'key': os.environ['MAPS_KEY']})

def dev_form(request):
	form = forms.SuggestionForm()
	return render(request, 'photos/index2.html', {'form': form})

def suggestion_view(request):
	form = forms.SuggestionForm()
	return render(request, 'photos/suggestion_form.html', {'form': form})

#API views
class ListCreatePhoto(generics.ListCreateAPIView):
	queryset = models.Photo.objects.all()
	serializer_class = serializers.PhotoSerializer

class RetrieveUpdateDestroyPhoto(generics.RetrieveUpdateDestroyAPIView):
	queryset = models.Photo.objects.all()
	serializer_class = serializers.PhotoSerializer
