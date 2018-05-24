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

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'quiz', 'question')

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('id', 'question', 'answer', 'is_correct')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'team', 'name')