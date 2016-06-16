from django import forms

class SuggestionForm(forms.Form):
	#year = forms.IntegerField()
	#year = forms.ChoiceField(choices=[(x, x) for x in range(2011, 2017)],
	#							label="")
	year = forms.ChoiceField(choices=[("all","all"),("2011","2011"),("2012","2012")
										,("2013","2013"),("2014","2014"),("2015","2015"),("2016","2016")],
								label="",
								initial="2016")
	#email = forms.EmailField()
	#suggestion = forms.CharField(widget=forms.Textarea)
