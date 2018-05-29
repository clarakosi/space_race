from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListQuiz.as_view()),
    path('<int:pk>/', views.DetailQuiz.as_view()),
    path('questions/', views.ListQuestion.as_view()),
    path('questions/<int:pk>', views.DetailQuestion.as_view())
]
