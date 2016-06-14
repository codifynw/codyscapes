import os
from django.shortcuts import render

# Create your views here.
from .models import Photo

def index(request):
	photos = Photo.objects.all().filter(visible="true").order_by('-date')
	return render(request, 'photos/index.html', {'photos': photos, 'key': os.environ['MAPS_KEY']})


#def index2(request):
#	photos = Photo.objects.all().filter(visible="true").order_by('-date')
#	return render(request, 'photos/index2.html', {'photos': photos})

#	def index(request):
#		photos = Photo.objects.all().order_by('-date').filter(date__year='2016')
#		return render(request, 'photos/index.html', {'photos': photos})

