from rest_framework import generics

from . import models
from . import serializers


class ListTeam(generics.ListCreateAPIView):
    queryset = models.Team.objects.all()
    serializer_class = serializers.TeamSerializer

class DetailTeam(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Team.objects.all()
    serializer_class = serializers.TeamSerializer
    