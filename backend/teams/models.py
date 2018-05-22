from uuid import uuid4
from django.contrib.auth.models import User
from django.db import models

class Team(models.Model):
    title = models.CharField(max_length=20)

    def __str__(self):
        return self.title
