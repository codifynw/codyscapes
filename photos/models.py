from __future__ import unicode_literals
from django.db import models


class Photo(models.Model):
    title = models.CharField(max_length=140)
    location_string = models.CharField(max_length=50, default="The World")
    purchase_link = models.CharField(max_length=200, default="http://www.codyscapes.com")
    latitude = models.FloatField(default=32.7833333)
    longitude = models.FloatField(default=-96.7970)
    date = models.DateTimeField()
    caption = models.TextField(default="")
    slug = models.SlugField(default="", blank=True)
    #photo_file = models.ImageField(upload_to="photos/media/",
    #	null=False,
    #	blank=False,
    #	height_field="height_field",
    #	width_field="width_field")
    #height_field = models.IntegerField(default=0)
    #width_field = models.IntegerField(default=0)
    url = models.CharField(max_length=200, default="http://www.codyscapes.com/gallery/")
    isphoto = models.BooleanField(default=True)
    visible = models.BooleanField(default=True)

    def __str__(self):
        return self.title
