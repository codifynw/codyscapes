from django.contrib import admin
from blog.models import Post
from photos.models import Photo

admin.site.register(Post)
admin.site.register(Photo)