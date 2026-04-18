
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

        # ==================================
        # CONDITIONS (Expanded)
        # ==================================
        conditions = [
            ("Diabetes", "Chronic disease affecting blood sugar"),
            ("Cancer", "Abnormal cell growth"),
            ("Stress", "Mental pressure"),
            ("Anxiety", "Excess worry and fear"),
            ("Back Pain", "Spinal discomfort"),
            ("Depression", "Persistent sadness and low mood"),
            ("Obesity", "Excess body weight issues"),
            ("Migraine", "Recurring severe headaches"),
            ("Insomnia", "Difficulty sleeping"),
            ("Hypertension", "High blood pressure"),
            ("Arthritis", "Joint inflammation and pain"),
            ("Heart Disease", "Conditions affecting heart health"),
            ("Digestive Disorder", "Problems with digestion"),
            ("PCOS", "Hormonal disorder in women"),
            ("Fatigue", "Constant tiredness"),
        ]

        categories = [
            "Chronic",
            "Mental Health",
            "Lifestyle",
            "Pain Relief",
            "Women Health",
            "General Wellness",
        ]

        condition_objs = []

        for title, desc in conditions:
            obj = Condition.objects.create(
                title=title,
                description=desc,
                category=random.choice(categories),
                icon=random.choice(
                    ["healing", "favorite", "spa", "self_improvement"]
                ),
            )
            condition_objs.append(obj)

        # ==================================
        # SERVICES (Expanded)
        # ==================================
        services = [
            ("Yoga Therapy", "Healing through yoga practices"),
            ("Natural Consultation", "Personalized healing guidance"),
            ("Meditation Coaching", "Mind relaxation techniques"),
            ("Detox Program", "Body cleansing and rejuvenation"),
            ("Diet Counseling", "Healthy eating guidance"),
            ("Stress Management", "Relaxation and mental balance"),
            ("Pain Relief Therapy", "Natural pain management"),
            ("Sleep Recovery Program", "Improve sleeping naturally"),
            ("Women Wellness Consultation", "Support for female health"),
            ("Energy Balancing", "Restore inner energy naturally"),
        ]

        for name, desc in services:
            Service.objects.create(
                name=name,
                description=desc,
                image=f"https://picsum.photos/seed/{random.randint(1,999)}/400/300",
            )

        # ==================================
        # HEALING METHODS (Expanded)
        # ==================================
        methods = [
            ("Laughter Yoga", "mood", "Healing through laughter", "हाँसो योग"),
            ("Energy Healing", "bolt", "Balancing body energy", "ऊर्जा उपचार"),
            ("Naturopathy", "spa", "Natural drug-free healing", "प्राकृतिक चिकित्सा"),
            ("Meditation", "self_improvement", "Peace through meditation", "ध्यान"),
            ("Acupressure", "pan_tool", "Pressure point healing", "एक्युप्रेसर"),
            ("Ayurveda", "local_florist", "Ancient herbal treatment", "आयुर्वेद"),
            ("Breathing Therapy", "air", "Healing through breathing", "श्वास उपचार"),
            ("Sound Healing", "music_note", "Vibration based healing", "ध्वनि उपचार"),
        ]

        for i, (title, icon, en, np) in enumerate(methods):
            HealingMethod.objects.create(
                title=title,
                icon=icon,
                description_en=en,
                description_np=np,
                details=fake.paragraph(nb_sentences=5),
                image="healing_methods/sample.jpg",
                order=i,
            )

        # ==================================
        # SUCCESS STORIES (Expanded)
        # ==================================
        testimonials = [
            "Recovered naturally after months of struggle.",
            "Life-changing experience with holistic treatment.",
            "Now living stress-free and energetic.",
            "Amazing support and real healing results.",
            "Pain reduced significantly in few weeks.",
        ]

        for i in range(60):   # increased from 20 to 60
            story = SuccessStory.objects.create(
                name=fake.name(),
                title=random.choice(testimonials),
                story=fake.paragraph(nb_sentences=8),
                rating=random.randint(3, 5),
            )

            # assign random conditions (1–4)
            story.conditions.set(
                random.sample(condition_objs, random.randint(1, 4))
            )

        self.stdout.write(
            self.style.SUCCESS("Database seeded successfully 🚀 with extra data")
        )

