import os
from pathlib import Path
from dotenv import load_dotenv

# ==================================================
# LOAD ENV VARIABLES
# ==================================================
load_dotenv()

# ==================================================
# BASE DIRECTORY
# ==================================================
BASE_DIR = Path(__file__).resolve().parent.parent

# ==================================================
# SECURITY
# ==================================================
SECRET_KEY = os.getenv(
    "SECRET_KEY",
    "django-insecure-change-this-in-production"
)

DEBUG = os.getenv("DEBUG", "False") == "True"

ALLOWED_HOSTS = [
    '127.0.0.1',
    'localhost',
    'api.laughteryoga.com.np',
    'laughteryoga.com.np',
    'www.laughteryoga.com.np'
]

# ==================================================
# APPLICATIONS
# ==================================================
INSTALLED_APPS = [
    "jazzmin",
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    "corsheaders",

    'core',
]

# ==================================================
# MIDDLEWARE
# ==================================================
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',

    # 👇 IMPORTANT for production static files
    'whitenoise.middleware.WhiteNoiseMiddleware',

    'django.contrib.sessions.middleware.SessionMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'yoga_site.urls'

# ==================================================
# TEMPLATES
# ==================================================
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / "templates"],  # optional but useful
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'yoga_site.wsgi.application'

# ==================================================
# DATABASE
# ==================================================
if DEBUG:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': os.getenv("DB_NAME"),
            'USER': os.getenv("DB_USER"),
            'PASSWORD': os.getenv("DB_PASSWORD"),
            'HOST': os.getenv("DB_HOST"),
            'PORT': os.getenv("DB_PORT"),
        }
    }

# ==================================================
# PASSWORD VALIDATION
# ==================================================
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# ==================================================
# INTERNATIONALIZATION
# ==================================================
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# ==================================================
# STATIC & MEDIA FILES  ✅ FIXED SECTION
# ==================================================
STATIC_URL = "/static/"

# Where Django looks for static files (development)
STATICFILES_DIRS = [
    BASE_DIR / "static",
]

# 🔥 REQUIRED for collectstatic (THIS FIXES YOUR ERROR)
STATIC_ROOT = BASE_DIR / "staticfiles"

# WhiteNoise (production static serving)
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"

# ==================================================
# EMAIL
# ==================================================
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_USE_TLS = True

EMAIL_HOST_USER = "sololaughteryoganepal@gmail.com"
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_PASSWORD")  # ✅ safer
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER

# ==================================================
# CORS & CSRF
# ==================================================
CORS_ALLOWED_ORIGINS = [
    "https://laughteryoga.com.np",
    "https://www.laughteryoga.com.np",
    "http://localhost:5173",
    "https://example.com",
    "https://sub.example.com",
    "http://localhost:8080",
    "http://127.0.0.1:9000",
    "http://192.168.1.145:5173",
]

CSRF_TRUSTED_ORIGINS = [
    "https://laughteryoga.com.np",
    "https://www.laughteryoga.com.np",
    "https://api.laughteryoga.com.np",
]
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True

CSRF_COOKIE_SAMESITE = "None"
SESSION_COOKIE_SAMESITE = "None"
# ==================================================
# JAZZMIN
# ==================================================
JAZZMIN_SETTINGS = {
    "site_title": "SLY NEPAL Admin",
    "site_header": "SLY NEPAL Center Admin",
    "site_brand": "SLY NEPAL Dashboard",
    "welcome_sign": "Welcome to SLY NEPAL Center Admin",
    "copyright": "SLY NEPAL Center",
    "site_logo": "logo.png",
    "topmenu_links": [{"name": "Dashboard", "url": "admin:index"}],
    "icons": {
        "core.Service": "fas fa-cogs",
        "core.HealingMethod": "fas fa-spa",
        "core.Condition": "fas fa-heartbeat",
        "core.SuccessStory": "fas fa-star",
        "core.Schedule": "fas fa-clock",
        "core.Appointment": "fas fa-calendar-check",
        "core.ContactMessage": "fas fa-envelope",
    },
    "show_sidebar": True,
    "navigation_expanded": True,
    "custom_css": "admin/custom.css",
}

# ==================================================
# SECURITY (FOR DEPLOYMENT BEHIND PROXY)
# ==================================================
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'