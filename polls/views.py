from django.http import HttpResponse

def index(request):
    return HttpResponse("coming soon")
    
def coming_soon(request):
	return HttpResponse("Coming Soon!")