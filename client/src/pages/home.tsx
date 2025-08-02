import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import PricingSection from "@/components/sections/pricing";
import TestimonialsSection from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
