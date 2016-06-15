import os
from django.shortcuts import render

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Photo
from . import models
from . import serializers

def index(request):
	photos = Photo.objects.all().filter(visible="true").order_by('-date')
	return render(request, 'photos/index.html', {'photos': photos, 'key': os.environ['MAPS_KEY']})


#def index2(request):
#	photos = Photo.objects.all().filter(visible="true").order_by('-date')
#	return render(request, 'photos/index2.html', {'photos': photos})

#	def index(request):
#		photos = Photo.objects.all().order_by('-date').filter(date__year='2016')
#		return render(request, 'photos/index.html', {'photos': photos})


#API views
class ListCreatePhoto(APIView):
	def get(self, request, fromat=None):
		photos = models.Photo.objects.all()
		serializer = serializers.PhotoSerializer(photos,many=True)
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer = serializers.CourseSerializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		serializer.save()
		return Reponse(serializer.data, satus=status.HTTP_201_CREATED)







