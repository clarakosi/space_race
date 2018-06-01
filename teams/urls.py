from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListQuiz.as_view()),
    path('<int:pk>/', views.DetailQuiz.as_view()),
]
