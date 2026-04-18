from django.contrib import admin
from django.utils.html import format_html
from .models import (
    Service,
    HealingMethod,
    Condition,
    SuccessStory,
    Schedule,
    Appointment,
    ContactMessage
)


# -----------------------------
# Service
# -----------------------------
@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("name", "short_description")
    search_fields = ("name",)

    def short_description(self, obj):
        return obj.description[:50]


# -----------------------------
# Healing Method
# -----------------------------
@admin.register(HealingMethod)
class HealingMethodAdmin(admin.ModelAdmin):
    list_display = ("title", "order", "image_preview", "created_at")
    search_fields = ("title",)
    list_filter = ("created_at",)
    ordering = ("order",)

    fieldsets = (
        ("Basic Info", {
            "fields": ("title", "icon", "order")
        }),
        ("Descriptions", {
            "fields": ("description_en", "description_np", "details")
        }),
        ("Media", {
            "fields": ("image",)
        }),
    )

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="60" />', obj.image.url)
        return "-"
    image_preview.short_description = "Preview"


# -----------------------------
# Condition
# -----------------------------
@admin.register(Condition)
class ConditionAdmin(admin.ModelAdmin):
    list_display = ("title", "category")
    search_fields = ("title", "category")
    list_filter = ("category",)


# -----------------------------
# Success Story
# -----------------------------
@admin.register(SuccessStory)
class SuccessStoryAdmin(admin.ModelAdmin):
    list_display = ("name", "title", "rating", "image_preview")
    search_fields = ("name", "title", "story")
    list_filter = ("rating", "conditions")
    filter_horizontal = ("conditions",)

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="50" />', obj.image.url)
        return "-"


# -----------------------------
# Schedule
# -----------------------------
@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ("date", "start_time", "end_time", "is_booked")
    list_filter = ("date", "is_booked")
    ordering = ("date", "start_time")


# -----------------------------
# Appointment
# -----------------------------
@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ("name", "phone", "date", "time", "status")
    search_fields = ("name", "phone", "email")
    list_filter = ("status", "date")
    date_hierarchy = "date"

    autocomplete_fields = ("condition", "method")

    fieldsets = (
        ("Patient Info", {
            "fields": ("name", "phone", "email")
        }),
        ("Appointment Details", {
            "fields": ("condition", "method", "date", "time", "status")
        }),
    )


# -----------------------------
# Contact Message
# -----------------------------
@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "created_at")
    search_fields = ("full_name", "email", "phone")
    list_filter = ("created_at",)