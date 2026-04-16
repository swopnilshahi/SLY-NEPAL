from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ServiceViewSet, ConditionViewSet, HealingMethodViewSet
from django.conf.urls.static import static
from django.conf import settings

router = DefaultRouter()    
router.register(r'services', ServiceViewSet)
router.register(r'conditions', ConditionViewSet)
router.register(r'methods', HealingMethodViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)