from django import forms

class SuggestionForm(forms.Form):
	year = forms.IntegerField()
	#email = forms.EmailField()
	#suggestion = forms.CharField(widget=forms.Textarea)
