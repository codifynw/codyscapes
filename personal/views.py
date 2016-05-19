from django.shortcuts import render

def coming_soon(request):
	return render(request, 'personal/coming_soon.html')

def contact(request):
	return render(request, 'personal/basic.html', {'content':['if you would like to contact me, please email me','cody@codyscapes.com']})

def home(request):
	return render(request, 'personal/home.html')

def index(request):
	return render(request, 'personal/index.html')

