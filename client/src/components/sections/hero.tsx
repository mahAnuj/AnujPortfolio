import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Linkedin, Mail, Github } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="py-16 md:py-20 flex items-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float [animation-delay:-3s]"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-6">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-sm font-medium text-green-400 animate-pulse">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <span>Available for Freelance Projects</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Anuj Mahajan</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
            Software Architect with 14+ Years Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
          Software architect specializing in AI-powered applications, cloud-native infrastructure, and enterprise-grade solutions. 
I help companies leverage cutting-edge AI, scale their platforms, and deliver exceptional user experiences across web and mobile.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 animate-glow"
          >
            Start a Project
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-6">
          {/* <a 
            href="https://www.linkedin.com/in/anuj-mahajan-a2063790/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a> */}
          <a 
            href="mailto:anujmahajan.dev@gmail.com" 
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/mahAnuj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
