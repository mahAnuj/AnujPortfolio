import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold gradient-text mb-2">Anuj Mahajan</div>
            <p className="text-muted-foreground">Software Architect & Freelance Consultant</p>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* <a 
              href="https://www.linkedin.com/in/anuj-mahajan-a2063790/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a> */}
            <a 
              href="mailto:anujmahajan.dev@gmail.com" 
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/mahAnuj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Anuj Mahajan. All rights reserved. | Professional freelance services available</p>
        </div>
      </div>
    </footer>
  );
}
