from rest_framework import generics

from .models import Quiz, Quiz_link
from .serializers import QuizSerializer

class ListQuiz(generics.ListCreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class DetailQuiz(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

def Quiz_link(request, label):
    quiz_link, created = Quiz_link.objects.get_or_create(label=label)
    