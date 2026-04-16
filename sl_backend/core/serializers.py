from rest_framework import serializers
from .models import Service, Condition,HealingMethod
from .models import Condition

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class ConditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Condition
        fields = '__all__'



class HealingMethodSerializer(serializers.ModelSerializer):

    class Meta:
        model = HealingMethod
        fields = "__all__"


# class ConditionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Condition
#         fields = "__all__"