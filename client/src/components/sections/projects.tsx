import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projectsConfig, portfolioMeta } from "@/config/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of {portfolioMeta.projectsCount} recent projects with {portfolioMeta.liveDemoCount} live demos demonstrating technical expertise and measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsConfig.map((project, index) => (
            <div 
              key={index} 
              className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all group hover:transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-primary">
                    {project.category}
                  </Badge>
                  {project.liveDemo && project.liveDemoUrl && (
                    <a 
                      href={project.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/20 hover:bg-green-500/30 cursor-pointer transition-colors">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live Demo
                      </Badge>
                    </a>
                  )}
                  {project.liveDemo && !project.liveDemoUrl && (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/20">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Live Demo
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-green-400">⚡ Performance:</span> {project.metrics.improvement}
                  </div>
                  <div className="text-sm">
                    <span className="text-blue-400">📈 Impact:</span> {project.metrics.impact}
                  </div>
                  {project.metrics.scale && (
                    <div className="text-sm">
                      <span className="text-purple-400">📊 Scale:</span> {project.metrics.scale}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            These represent the type of high-impact solutions I deliver for clients. 
            <span className="text-primary ml-2">Ready to discuss your project?</span>
          </p>
        </div>
      </div>
    </section>
  );
}