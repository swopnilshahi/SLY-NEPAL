from django.core.management.base import BaseCommand
from core.models import Condition, SuccessStory, Service, HealingMethod
from faker import Faker
import random

fake = Faker()

class Command(BaseCommand):
    help = "Seed full database with realistic data"

    def handle(self, *args, **kwargs):

        # ⚠️ Optional reset (use only in dev)
        SuccessStory.objects.all().delete()
        Condition.objects.all().delete()
        Service.objects.all().delete()
        HealingMethod.objects.all().delete()

        # =========================
        # CONDITIONS
        # =========================
        conditions = [
            ("Diabetes", "Chronic disease affecting blood sugar"),
            ("Cancer", "Abnormal cell growth"),
            ("Stress", "Mental pressure"),
            ("Anxiety", "Excess worry and fear"),
            ("Back Pain", "Spinal discomfort"),
        ]

        condition_objs = []

        for title, desc in conditions:
            obj = Condition.objects.create(
                title=title,
                description=desc,
                category=random.choice(["Chronic", "Mental Health", "Lifestyle"]),
                icon="healing"
            )
            condition_objs.append(obj)

        # =========================
        # SERVICES
        # =========================
        services = [
            ("Yoga Therapy", "Healing through yoga practices"),
            ("Natural Consultation", "Personalized healing guidance"),
            ("Meditation Coaching", "Mind relaxation techniques"),
        ]

        for name, desc in services:
            Service.objects.create(
                name=name,
                description=desc,
                image="https://picsum.photos/400/300"
            )

        # =========================
        # HEALING METHODS
        # =========================
        methods = [
            ("Laughter Yoga", "mood", "Healing through laughter", "हाँसो योग"),
            ("Energy Healing", "bolt", "Balancing body energy", "ऊर्जा उपचार"),
            ("Naturopathy", "spa", "Natural drug-free healing", "प्राकृतिक चिकित्सा"),
        ]

        for i, (title, icon, en, np) in enumerate(methods):
            HealingMethod.objects.create(
                title=title,
                icon=icon,
                description_en=en,
                description_np=np,
                details=fake.paragraph(),
                image="healing_methods/sample.jpg",
                order=i
            )

        # =========================
        # SUCCESS STORIES
        # =========================
        for i in range(20):

            story = SuccessStory.objects.create(
                name=fake.name(),
                title=fake.sentence(nb_words=6),
                story=fake.paragraph(nb_sentences=5),
                rating=random.randint(3, 5)
            )

            # assign random conditions (1–3)
            story.conditions.set(
                random.sample(condition_objs, random.randint(1, 3))
            )

        self.stdout.write(self.style.SUCCESS("Database seeded successfully 🚀"))