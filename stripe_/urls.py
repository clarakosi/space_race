from django.conf.urls import url

from .views import SubscribeView, SuccessView

from django.urls import path

urlpatterns = [
    path('.*', SubscribeView.as_view(template_name='stripe_/templates/base.html')),
    path('.*', SuccessView.as_view(template_name='stripe_/templates/stripe/thank_you.html'))

  #  url(r'^base/$', SubscribeView.as_view(), name='base'),
  #  url(r'^thank_you/$', SuccessView.as_view(), name='thank_you')
]