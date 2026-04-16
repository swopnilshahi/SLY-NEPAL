from rest_framework import viewsets
from .models import Service, Condition, HealingMethod
from .serializers import ServiceSerializer, ConditionSerializer,HealingMethodSerializer
class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    

class ConditionViewSet(viewsets.ModelViewSet):
    queryset = Condition.objects.all()
    serializer_class = ConditionSerializer

class HealingMethodViewSet(viewsets.ModelViewSet):

    queryset = HealingMethod.objects.all()
    serializer_class = HealingMethodSerializer