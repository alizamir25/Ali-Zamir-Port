
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import HobbiesSection from '../components/HobbiesSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <HobbiesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-gradient-to-r from-background/50 to-muted/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Ali Ahmed Zamir. Crafted with passion and cutting-edge technology.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
