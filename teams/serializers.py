from rest_framework import serializers, viewsets

from .models import Team, Quiz, Question, Answer, Student, CustomUser
from django.contrib.auth import login

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'username', )

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('question_id', 'id', 'answer', 'is_correct', )

class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)
    class Meta:
        model = Question
        fields = ('quiz_id','id', 'question', 'shuffle_answers','number_of_responses', 'answers')

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
        fields = ('id', 'name', 'score', 'students')

class QuizSerializer(serializers.HyperlinkedModelSerializer):
    teams = TeamSerializer(many=True)
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = ('id', 'name', 'randomize_team', 'number_of_participants', 'teams', 'questions')

    def create(self, validated_data):
        """Override create to associate current user with Quiz creator and add fields"""

        user = self.context['request'].user
        teams_data = validated_data.pop('teams')
        questions_data = validated_data.pop('questions')
        quiz = Quiz.objects.create(user=user, **validated_data)

        for team_data in teams_data:
            Team.objects.create(quiz=quiz, **team_data)
        
        for question_data in questions_data:
            answers_data = question_data.pop('answers')
            question = Question.objects.create(quiz=quiz, **question_data)
            for answer_data in answers_data:
                Answer.objects.create(question=question, **answer_data)

        return quiz

    def update(self, instance, validated_data):
        teams_data = validated_data.pop('teams')
        teams_list = (instance.teams).all()
        teams_list = list(teams_list)

        questions_data = validated_data.pop('questions')
        questions_list = (instance.questions).all()
        questions_list = list(questions_list)        

        instance.name = validated_data.get('name', instance.name)
        instance.randomize_team = validated_data.get('randomize_team', instance.randomize_team)
        instance.number_of_participants = validated_data.get('number_of_participants', instance.number_of_participants)
        instance.save()

        for team_data in teams_data:
            team = teams_list.pop(0)
            team.name = team_data.get('name', team.name)
            team.score = team_data.get('score', team.score)
            team.save()
        
        for question_data in questions_data:
            question = questions_list.pop(0)
            answers_data = question_data.pop('answers')
            answers_list = (question.answers).all()
            answers_list = list(answers_list)

            question.question = question_data.get('question', question.question)
            question.shuffle_answers = question_data.get('shuffle_answers', question.shuffle_answers)
            question.save()

            for answer_data in answers_data:
                answer = answers_list.pop(0)
                answer.answer  = answer_data.get('answer', answer.answer)
                answer.is_correct = answer_data.get('is_correct', answer.is_correct)
                answer.save()

        return instance




class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'team', 'name')
