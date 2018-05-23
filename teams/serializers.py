from rest_framework import serializers
from .models import Team, Quiz

# class TeamSerializer(serializers.ModelSerializer):
#     class Meta:
#         fields = (
#             'id',
#             'title',
#         )
#         model = models.Team

class TeamSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Team
        fields = ('name')
    
    def create(self, validated_data):
        """Override create to associate current user with Team creator"""
        user = self.context['request'].user
        team = Team.objects.create(user=user, **validated_data)
        return team

class QuizSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Quiz
        fields = ('name')

    def create(self, validated_data):
    """Override create to associate current user with Quiz creator"""
    user = self.context['request'].user
    quiz = Quiz.objects.create(user=user, **validated_data)
    return quiz  

