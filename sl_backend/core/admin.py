from django.contrib import admin
from .models import (
    Service,
    HealingMethod,
    Condition,
    SuccessStory,
    Schedule,
    Appointment,
    ContactMessage
)


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("name", "description")
    search_fields = ("name",)


@admin.register(HealingMethod)
class HealingMethodAdmin(admin.ModelAdmin):
    list_display = ("title", "order", "created_at")
    search_fields = ("title",)
    list_filter = ("created_at",)
    ordering = ("order",)


@admin.register(Condition)
class ConditionAdmin(admin.ModelAdmin):
    list_display = ("title", "category")
    search_fields = ("title", "category")
    list_filter = ("category",)


@admin.register(SuccessStory)
class SuccessStoryAdmin(admin.ModelAdmin):
    list_display = ("name", "title", "rating")
    search_fields = ("name", "title", "story")
    list_filter = ("rating", "conditions")
    filter_horizontal = ("conditions",)


@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ("date", "start_time", "end_time", "is_booked")
    list_filter = ("date", "is_booked")
    ordering = ("date", "start_time")


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ("name", "phone", "date", "time", "status")
    search_fields = ("name", "phone", "email")
    list_filter = ("status", "date")
    autocomplete_fields = ("condition", "method")


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "created_at")
    search_fields = ("full_name", "email", "phone")
    list_filter = ("created_at",)