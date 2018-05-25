<<<<<<< HEAD
from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListQuiz.as_view()),
    path('<int:pk>/', views.DetailQuiz.as_view()),
    path('teams/', views.ListTeam.as_view()),
    path('teams/<int:pk>/', views.DetailTeam.as_view()),
    path('questions/', views.ListQuestion.as_view()),
    path('questions/<int:pk>/', views.DetailQuestion.as_view()),
    path('answers/', views.ListAnswer.as_view()),
    path('answers/<int:pk>/', views.DetailAnswer.as_view()),
    path('students/', views.ListStudent.as_view()),
    path('students/<int:pk>/', views.DetailStudent.as_view()),
]
=======
from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListTeam.as_view()),
    path('<int:pk>/', views.DetailTeam.as_view()),
]
>>>>>>> 6dd9e7f68282f1c00d1989c599658b39fc7e72e9
