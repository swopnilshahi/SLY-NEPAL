import HeroSection from "../components/about/HeroSections";
import AboutSection from "../components/about/AboutSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import WhyChooseSection from "../components/about/WhyChooseSection";
import StatsSection from "../components/about/StatsSection";
import TestimonialsSection from "../components/about/TestimonialsSection";
import CTA from "../components/methods/CTA";
import Pactitioner from "../components/about/Pactitioner";

export default function AboutPage() {
  return (
    <>
      <HeroSection/>
      <AboutSection />
      <MissionVisionSection />
      <WhyChooseSection />
      <Pactitioner/>
      <StatsSection />
      <TestimonialsSection />
      <CTA/>
    </>
  );
}