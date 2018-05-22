from django.test import TestCase
from .models import Todo


class TeamModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Team.objects.create(title='Slytherin')

    def test_title_content(self):
        team = Team.objects.get(id=1)
        expected_object_name = f'{team.title}'
        self.assertEquals(expected_object_name, 'Slytherin')
