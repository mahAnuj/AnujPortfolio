import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">Anuj Mahajan</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:text-accent transition-colors"
            >
              Home
            </button>

            <button 
              onClick={() => scrollToSection('skills')} 
              className="hover:text-accent transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-accent transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left hover:text-accent transition-colors"
              >
                Home
              </button>

              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-left hover:text-accent transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-left hover:text-accent transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left hover:text-accent transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
