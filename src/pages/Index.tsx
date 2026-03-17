import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsMarquee from "@/components/SkillsMarquee";
import ExperienceSection from "@/components/ExperienceSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <SkillsMarquee />
      <div id="projects" className="scroll-mt-32">
        <ProjectsGrid />
      </div>
      <ExperienceSection />
      <div id="contact" className="scroll-mt-32">
        <ContactFooter />
      </div>
    </main>
  );
};

export default Index;