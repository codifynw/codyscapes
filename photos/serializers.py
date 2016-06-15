from rest_framework import serializers

from . import models

class PhotoSerializer(serializers.ModelSerializer):
	class Meta:
		fields = (
			'id',
			'title',
			'location_string',
			'purchase_link',
			'latitude',
			'longitude',
			'date',
			'url',
			'isphoto',
			'visible')
		model = models.Photo
