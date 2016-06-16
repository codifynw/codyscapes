from django import forms

class SuggestionForm(forms.Form):
	#year = forms.IntegerField()
	year = forms.ChoiceField(choices=[(x, x) for x in range(2011, 2017)],label="")
	#email = forms.EmailField()
	#suggestion = forms.CharField(widget=forms.Textarea)
