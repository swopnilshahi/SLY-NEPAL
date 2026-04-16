from django.contrib import admin
from .models import HealingMethod


@admin.register(HealingMethod)
class HealingMethodAdmin(admin.ModelAdmin):

    list_display = ["title", "order"]