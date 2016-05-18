from django.shortcuts import render

def index(request):
	return render(request, 'personal/home.html')

def coming_soon(request):
	return render(request, 'personal/coming_soon.html')