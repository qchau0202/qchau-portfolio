import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsMarquee from "@/components/SkillsMarquee";
import ExperienceSection from "@/components/ExperienceSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <SkillsMarquee />
      <ProjectsGrid />
      <ExperienceSection />
      <ContactFooter />
    </main>
  );
};

export default Index;
