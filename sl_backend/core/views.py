from rest_framework import viewsets
from .models import Service, Condition, HealingMethod,SuccessStory,Appointment,Schedule
from .serializers import ServiceSerializer, ConditionSerializer,HealingMethodSerializer,SuccessStorySerializer,AppointmentSerializer,ScheduleSerializer,ContactMessageSerializer

from rest_framework import status
from rest_framework.response import Response

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets

from datetime import datetime, time
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
import requests

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    

class ConditionViewSet(viewsets.ModelViewSet):
    queryset = Condition.objects.all()
    serializer_class = ConditionSerializer

class HealingMethodViewSet(viewsets.ModelViewSet):

    queryset = HealingMethod.objects.all()
    serializer_class = HealingMethodSerializer
class SuccessStoryViewSet(viewsets.ModelViewSet):
    queryset = SuccessStory.objects.all()
    serializer_class = SuccessStorySerializer


class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def create(self, request, *args, **kwargs):
        data = request.data

        date = data.get("date")
        time = data.get("time")

        # 🚨 BLOCK DOUBLE BOOKINGS
        if Appointment.objects.filter(date=date, time=time).exists():
            return Response(
                {"error": "This slot is already booked"},
                status=status.HTTP_400_BAD_REQUEST
            )

        return super().create(request, *args, **kwargs)
    


class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer

    @action(detail=False, methods=["get"])
    def available(self, request):
        date = request.query_params.get("date")

        if not date:
            return Response({"error": "date required"}, status=400)

        schedules = Schedule.objects.filter(date=date)

        data = []

        for s in schedules:
            is_taken = Appointment.objects.filter(
                date=s.date,
                time=s.start_time.strftime("%I:%M %p")
            ).exists()

            data.append({
                "id": s.id,
                "time": s.start_time.strftime("%I:%M %p"),
                "available": not is_taken
            })

        return Response(data)
    


@api_view(["GET"])
def available_slots(request):
    date_str = request.GET.get("date")

    if not date_str:
        return Response([])

    date_obj = datetime.strptime(date_str, "%Y-%m-%d").date()

    # all slots for that day
    schedules = Schedule.objects.filter(date=date_obj, is_booked=False)

    data = [
        {
            "id": s.id,
            "time": f"{s.start_time.strftime('%I:%M %p')}"
        }
        for s in schedules
    ]

    # return Response(data)
    return Response([
  {"time": "09:00 AM"},
  {"time": "11:30 AM"},
  {"time": "02:00 PM"},
])



class ContactMessageView(APIView):
    def post(self, request):
        captcha = request.data.get("captcha")

        # ✅ Step 1: Verify captcha
        if not verify_captcha(captcha):
            return Response(
                {"error": "Invalid captcha"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # ✅ Step 2: Validate form
        serializer = ContactMessageSerializer(data=request.data)

        if serializer.is_valid():
            contact = serializer.save()

            # ✅ Step 3: Send email
            send_mail(
                subject=f"New Contact from {contact.full_name}",
                message=f"""
Name: {contact.full_name}
Phone: {contact.phone}
Email: {contact.email}

Message:
{contact.message}
                """,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=["your@email.com"],
                fail_silently=False,
            )

            return Response(
                {"message": "Message sent successfully"},
                status=status.HTTP_201_CREATED
            )
        print("DATA RECEIVED:", request.data)
        print("SERIALIZER ERRORS:", serializer.errors)
        return Response(serializer.errors, status=400)

def verify_captcha(token):
    SECRET_KEY = "6LcCubosAAAAABQL-gUD3-SZEcs_QEDgoVFxKSgk"

    response = requests.post(
        "https://www.google.com/recaptcha/api/siteverify",
        data={
            "secret": SECRET_KEY,
            "response": token,
        },
    )

    result = response.json()
    return result.get("success", False)

