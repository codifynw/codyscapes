from django import forms

class SuggestionForm(forms.Form):
	year = forms.IntegerField()
