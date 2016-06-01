from django.shortcuts import render

# Create your views here.
from .models import Photo

def index(request):
	photos = Photo.objects.all().order_by('-date')
	return render(request, 'photos/index.html', {'photos': photos,'mystring':'poop'})

