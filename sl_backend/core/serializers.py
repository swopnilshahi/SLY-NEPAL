from rest_framework import serializers
from .models import Service, Condition,HealingMethod,SuccessStory,Appointment,Schedule,ContactMessage

import re

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


class SuccessStorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SuccessStory
        fields = "__all__"
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = "__all__"

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = "__all__"

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

    def validate_full_name(self, value):
        if len(value) < 3:
            raise serializers.ValidationError("Name too short")
        return value

    
    def validate_phone(self, value):
        digits = re.sub(r"\D", "", value)

        if digits.startswith("977"):
            return "+" + digits

        if digits.startswith("98"):
            return "+977" + digits

        raise serializers.ValidationError("Invalid Nepal phone number")

    def validate_message(self, value):
        if len(value) < 10:
            raise serializers.ValidationError("Message too short")
        return value