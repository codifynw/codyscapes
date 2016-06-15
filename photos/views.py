import os
from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

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
class ListPhotos(APIView):
	def get(self, request, fromat=None):
		photos = models.Photo.objects.all()
		serializer = serializers.PhotoSerializer(photos,many=True)
		return Response(serializer.data)








