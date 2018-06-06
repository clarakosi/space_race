from django.core.mail import send_mail, BadHeaderError
from rest_framework import permissions, status, views, viewsets
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework.response import Response
from django.conf import settings
import stripe_
stripe_.api_key = settings.STRIPE_SECRET_KEY

from django.urls import reverse_lazy
from django.views.generic import FormView, TemplateView

from .forms import StripeForm


class StripeMixin(object):
    def get_context_data(self, kwargs):
        context = super(StripeMixin, self).get_context_data(kwargs)
        context['publishable_key'] = settings.STRIPE_PUBLIC_KEY
        return context


class SuccessView(TemplateView):
    template_name = 'stripe_/templates/stripe/thank_you.html'


class SubscribeView(StripeMixin, FormView):
    template_name = 'stripe_/templates/stripe/subscribe.html'
    form_class = StripeForm
    success_url = reverse_lazy('thank_you')

    def form_valid(self, form):
        stripe_.api_key = settings.STRIPE_SECRET_KEY

        customer_data = {
            'description': 'Some Customer Data',
            'card': form.cleaned_data['stripe_token']
        }
        customer = stripe_.Customer.create(**customer_data)

        customer.subscriptions.create(plan="basic_plan")

        return super(SubscribeView, self).form_valid(form)



"""class StripeView(views.APIView): """ 