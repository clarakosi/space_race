from rest_framework import serializers, viewsets
from django.utils.text import slugify
import itertools

from .models import Team, Quiz, Question, Answer, Student
from accounts.models import CustomUser
from django.contrib.auth import login

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'username', )

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('question', 'id', 'answer', 'is_correct', )

class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, required=False)
    class Meta:
        model = Question
        fields = ('quiz','id', 'question', 'shuffle_answers','number_of_responses', 'answers')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'team', 'name')
    
    def create(self, validated_data):
        student = Student.objects.create(**validated_data)
        team = Team.objects.get(pk=student.team.id)
        quiz = Quiz.objects.get(pk=team.quiz.id)
        quiz.number_of_participants = quiz.number_of_participants + 1
        quiz.save()
        return student

class TeamSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True, required=False)
    class Meta:
        model = Team
        fields = ('id', 'name', 'color', 'mascot', 'score', 'quiz_id', 'students')

class QuizSerializer(serializers.HyperlinkedModelSerializer):
    teams = TeamSerializer(many=True, required=False)
    questions = QuestionSerializer(many=True, required=False)

    class Meta:
        model = Quiz
        fields = ('id', 'name', 'randomize_team', 'number_of_participants','slug', 'teams', 'questions')


""" serializers for CRUD operations """


class QuizModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('id', 'name', 'randomize_team', 'number_of_participants', 'slug')
    
    def create(self, validated_data):
        """ Override create to build a unique slug """

        user = self.context['request'].user
        max_length = Quiz._meta.get_field('slug').max_length
        validated_data['slug'] = url = slugify(validated_data['name'])[:max_length]

        for i in itertools.count(1):
            if not Quiz.objects.filter(slug=validated_data['slug']).exists():
                break
            validated_data['slug'] = '%s-%d' % (url[:max_length - len(str(i)) - 1], i)

        quiz = Quiz.objects.create(user=user, **validated_data)
        return quiz

class TeamModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'quiz', 'name', 'color', 'mascot', 'score')

class QuestionModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'quiz', 'question', 'shuffle_answers','number_of_responses') 