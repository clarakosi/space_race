<<<<<<< HEAD
from rest_framework import serializers, viewsets
from .models import Team, Quiz, Question, Answer, Student

# class TeamSerializer(serializers.ModelSerializer):
#     class Meta:
#         fields = (
#             'id',
#             'title',
#         )
#         model = models.Team

class QuizSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Quiz
        fields = ('id', 'name')

    def create(self, validated_data):
        """Override create to associate current user with Quiz creator"""
        user = self.context['request'].user
        quiz = Quiz.objects.create(user=user, **validated_data)
        return quiz  

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name', 'quiz')

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('id', 'question', 'answer', 'is_correct')

class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True, required=False)
    class Meta:
        model = Question
        fields = ('id', 'quiz', 'question', 'answers')


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'team', 'name')
=======
from rest_framework import serializers
from . import models

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
        )
        model = models.Team
        
>>>>>>> 6dd9e7f68282f1c00d1989c599658b39fc7e72e9
