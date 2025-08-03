import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { skillsConfig, portfolioMeta } from "@/config/portfolio";

export default function SkillsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skillsConfig : skillsConfig.slice(0, 6);

  return (
    <section id="skills" className="py-16 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across {portfolioMeta.skillsCount} specialized domains with {portfolioMeta.technologiesCount}+ technologies and frameworks for modern software development, utilizing AI-assisted coding, advanced workflows, and rapid prototyping methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/50 transition-all group hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 ${skill.bgColor} rounded-xl flex items-center justify-center mb-6 ${skill.hoverColor} transition-colors`}>
                  <IconComponent className={`h-8 w-8 ${skill.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-muted-foreground mb-6">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105"
          >
            {showAll ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                View All Skills ({portfolioMeta.skillsCount - 6} More)
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
