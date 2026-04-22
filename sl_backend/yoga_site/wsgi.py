"""
WSGI config for yoga_site project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""


import os, sys

from django.core.wsgi import get_wsgi_application
sys.path.insert(0, "/home2/laughter/projects/django-react")
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'yoga_site.settings')

application = get_wsgi_application()
