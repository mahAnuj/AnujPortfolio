import { Briefcase, ShoppingCart, Store, Smartphone } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Senior Software Engineer",
    company: "Adobe Systems, Noida",
    period: "2020 - Present",
    status: "Current",
    description: "Leading development of enterprise-grade software solutions, focusing on scalable architecture and modern development practices. Working with cross-functional teams to deliver high-impact products.",
    color: "bg-primary",
    side: "left"
  },
  {
    icon: ShoppingCart,
    title: "Full-Stack Developer",
    company: "Jabong.com (Fashion E-commerce)",
    period: "2017 - 2020",
    description: "Developed and maintained large-scale e-commerce platform serving millions of users. Implemented performance optimizations and new features for both web and mobile platforms.",
    color: "bg-accent",
    side: "right"
  },
  {
    icon: Store,
    title: "Software Developer",
    company: "Koovs.com (Online Fashion Platform)",
    period: "2014 - 2017",
    description: "Built responsive web applications and integrated third-party services. Focused on user experience optimization and conversion rate improvements.",
    color: "bg-purple-500",
    side: "left"
  },
  {
    icon: Smartphone,
    title: "Mobile Application Developer",
    company: "Samsung Electronics",
    period: "2010 - 2014",
    description: "Started career in mobile development, creating innovative applications for Samsung devices. Gained strong foundation in software development principles and mobile technologies.",
    color: "bg-orange-500",
    side: "right"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            14+ years of experience building innovative solutions across diverse industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-purple-500"></div>

          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isLeft = exp.side === "left";
            
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                <div className={`flex-shrink-0 w-16 h-16 ${exp.color} rounded-full border-4 border-background flex items-center justify-center relative z-10 md:order-2`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className={`bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border ml-8 md:ml-0 md:w-5/12 ${isLeft ? 'md:mr-8 md:order-1' : 'md:ml-8 md:order-3'}`}>
                  <div className="flex items-center mb-4">
                    {exp.status && (
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mr-4">
                        {exp.status}
                      </span>
                    )}
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <h4 className="text-accent font-semibold mb-4">{exp.company}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
