import os
import django
from channels.routing import get_default_applicationos.environ.setdefault(“DJANGO_SETTINGS_MODULE”, “my_project.settings”)

django.setup()
application=get_default_application()