import os
from django.shortcuts import render

from rest_framework import generics

from .models import Photo
from . import models
from . import serializers
from . import forms

#For the email part:
from django.contrib import messages
from django.core.mail import send_mail
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect

def index(request):
	photos = Photo.objects.all().filter(visible="true").order_by('-date')
	return render(request, 'photos/index.html', {'photos': photos, 'key': os.environ['MAPS_KEY']})

def dev_form(request):
	form = forms.SuggestionForm()
	return render(request, 'photos/index2.html', {'form': form})

def suggestion_view(request):
	form = forms.SuggestionForm()
	if request.method == 'POST':
		form = forms.SuggestionForm(request.POST)
		if form.is_valid():
			print("good form")
			#send_mail(
			#	'Email From {}'.format(form.cleaned_data['name']),
			#	form.cleaned_data['suggestion'],
			#	'{name} <{email}>'.format(**form.cleaned_data),
			#	['cheex11@gmail.com']
			#)
			#messages.add_message(request, messages.SUCCESS,
			#					'The year has changed')
			data = request.POST.get('year')
			print data
			return HttpResponseRedirect(reverse('suggest'))
	return render(request, 'photos/suggestion_form.html', {'form': form})


#API views
class ListCreatePhoto(generics.ListCreateAPIView):
	queryset = models.Photo.objects.all()
	serializer_class = serializers.PhotoSerializer

class RetrieveUpdateDestroyPhoto(generics.RetrieveUpdateDestroyAPIView):
	queryset = models.Photo.objects.all()
	serializer_class = serializers.PhotoSerializer
