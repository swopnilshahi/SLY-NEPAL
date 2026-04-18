from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ServiceViewSet, ConditionViewSet, HealingMethodViewSet,SuccessStoryViewSet,AppointmentViewSet,ScheduleViewSet,available_slots,ContactMessageView
from django.conf.urls.static import static
from django.conf import settings

router = DefaultRouter()    
router.register(r'services', ServiceViewSet)
router.register(r'conditions', ConditionViewSet)
router.register(r'methods', HealingMethodViewSet)
router.register(r'successstories', SuccessStoryViewSet)
router.register(r'appointments', AppointmentViewSet)
router.register(r"schedules", ScheduleViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path("schedules/available/", available_slots),
    path('contact/', ContactMessageView.as_view(), name='contact')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)