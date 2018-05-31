from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListQuiz.as_view()),
    path('<int:pk>/', views.DetailQuiz.as_view()),
    # path('<slug>', views.Quiz_link),
    path('students', views.ListStudent.as_view()),
    path('students/<int:pk>', views.DetailStudent.as_view())
]
