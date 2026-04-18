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