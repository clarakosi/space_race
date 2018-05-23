from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListTeam.as_view()),
    path('<int:pk>/', views.DetailTeam.as_view()),
]
