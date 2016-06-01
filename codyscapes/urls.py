from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import  static
from django.conf import settings

urlpatterns = [
    # Examples:
    # url(r'^$', 'codyscapes.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^polls/', include('polls.urls')),
    url(r'^personal/', include('personal.urls')),
    url(r'^blog/', include('blog.urls')),
    url(r'^photos/', include('photos.urls')),
    url(r'^', include('personal.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
