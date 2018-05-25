from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^accounts/$', views.UserCreate.as_view(), name='account-create'),
]
