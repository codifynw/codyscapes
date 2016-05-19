from django.shortcuts import render

def home(request):
	return render(request, 'personal/home.html')

def coming_soon(request):
	return render(request, 'personal/coming_soon.html')
