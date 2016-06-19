from django import forms

class SuggestionForm(forms.Form):
	#year = forms.IntegerField()
	#year = forms.ChoiceField(choices=[(x, x) for x in range(2011, 2017)],
	#							label="")
	year = forms.ChoiceField(choices=[("all","Choose a Year (Showing All)"),("2016","2016"),("2015","2015")
										,("2014","2014"),("2013","2013"),("2012","2012"),("2011","2011")],
								label="",
								initial="all")
	#email = forms.EmailField()
	#suggestion = forms.CharField(widget=forms.Textarea)
