from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField()
# class Condition(models.Model):
#     name = models.CharField(max_length=50)
#     icon = models.CharField(max_length=50)W

class HealingMethod(models.Model):

    title = models.CharField(max_length=200)
    icon = models.CharField(max_length=100)
    description_en = models.TextField()
    description_np = models.TextField(blank=True)

    details = models.TextField(blank=True)

    image = models.ImageField(upload_to="healing_methods/")

    order = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title

class Condition(models.Model):
    title = models.CharField(max_length=255  , null=True, blank=True)
    description = models.TextField( null=True, blank=True)
    category = models.CharField(max_length=100 , null=True, blank=True)
    icon = models.CharField(max_length=100, null=True, blank=True)
    
    def __str__(self):
        return self.title
class SuccessStory(models.Model):
    name = models.CharField(max_length=150)
    title = models.CharField(max_length=200, blank=True)
    story = models.TextField()
    image = models.ImageField(upload_to="success_stories/", blank=True, null=True)

    conditions = models.ManyToManyField(Condition, blank=True)

    rating = models.IntegerField(default=5)

    def __str__(self):
        return self.name

class Schedule(models.Model):
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()

    is_booked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.date} ({self.start_time} - {self.end_time})"
class Appointment(models.Model):
    PENDING = "pending"
    CONFIRMED = "confirmed"
    CANCELLED = "cancelled"

    STATUS_CHOICES = [
        (PENDING, "Pending"),
        (CONFIRMED, "Confirmed"),
        (CANCELLED, "Cancelled"),
    ]

    condition = models.ForeignKey(Condition, on_delete=models.SET_NULL, null=True)
    method = models.ForeignKey(HealingMethod, on_delete=models.SET_NULL, null=True)

    date = models.DateField()
    time = models.CharField(max_length=20)  # keep flexible (AM/PM)

    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True, null=True)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=PENDING)

    created_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

class ContactMessage(models.Model):
    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name