import CallToAction from '@/components/ui/CallToAction';
import FeaturedServices from '@/components/home/FeaturedServices';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import StatsBand from '@/components/home/StatsBand';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ParticipantReviews from '@/components/home/ParticipantReviews';
import ProjectsShowcase from '@/components/home/ProjectsShowcase';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedServices />
      <WhyChooseUs />
      <StatsBand />
      <ProjectsShowcase />
      <TestimonialsSection />
      <ParticipantReviews />
      <CallToAction
        title="Ready to simplify your data and content operations?"
        description="Tell us what you need and we will propose a clear plan and team tailored to your goals."
      />
    </>
  );
}
