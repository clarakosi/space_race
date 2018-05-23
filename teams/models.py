from uuid import uuid4
from django.contrib.auth.models import User
from django.db import models

# class Team(models.Model):
#     title = models.CharField(max_length=20)

#     def __str__(self):
#         return self.title

class Student(model.Model):
    name = models.CharField(max_length=None)

class Team(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_lengh=200)
    students = models.ForeignKey(Student)
    score = models.IntegerField(default=0)

class Quiz(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    teams = models.ForeignKey(Team)
    created_at = models.DateTimeField(auto_now=True)
    last_modified = models.DateTimeField(auto_now=True)

class Question(models.Model):
    quiz = models.ForeignKey(Quiz)
    question = models.CharField(max_length=None)

class Answer(models.Model):
    question = models.ForeignKey(Question)
    answer = models.CharField(max_lengh=None)
    is_correct = models.BooleanField(initial=False)