import { AboutSection } from "./AboutSection/AboutSection";
import { ContactSection } from "./ContactSection/ContactSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { ProjectsSection } from "./ProjectsSection/ProjectsSection";
import { SkillsSection } from "./SkillsSection/SkillsSection";
import shared from "./shared/shared.module.css";

export function PortfolioPage() {
  return (
    <main className={shared.portfolioPage}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
