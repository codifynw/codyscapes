from __future__ import unicode_literals

from django.db import models

class Photo(models.Model):
    title = models.CharField(max_length=140) 
    latitude = models.FloatField(default=32.7833333)
    longitude = models.FloatField(default=-96.7970)
    date = models.DateTimeField()
    photo_file = models.FileField(upload_to='photos')

    def __str__(self):
        return self.title
