import { useState } from "react";
import { Code, Cloud, Brain, Bot, Smartphone, Settings, Database, Globe, ShoppingCart, Users, Gamepad2, Shield, BarChart3, Blocks, Cpu, Server, ChevronRight, Search, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const serviceCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/20",
    featured: true,
    services: [
      { name: "React & Next.js", level: "Expert", popular: true, years: "5+" },
      { name: "Vue.js & Nuxt", level: "Advanced", popular: false, years: "3+" },
      { name: "TypeScript", level: "Expert", popular: true, years: "4+" },
      { name: "Tailwind CSS", level: "Expert", popular: true, years: "3+" },
      { name: "Progressive Web Apps", level: "Advanced", popular: false, years: "2+" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development", 
    icon: Server,
    color: "text-accent",
    bgColor: "bg-accent/20",
    featured: true,
    services: [
      { name: "Node.js & Express", level: "Expert", popular: true, years: "6+" },
      { name: "Python & Django", level: "Advanced", popular: true, years: "4+" },
      { name: "GraphQL APIs", level: "Advanced", popular: false, years: "2+" },
      { name: "Microservices", level: "Expert", popular: true, years: "3+" },
      { name: "Database Design", level: "Expert", popular: true, years: "8+" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    featured: true,
    services: [
      { name: "React Native", level: "Expert", popular: true, years: "4+" },
      { name: "Flutter", level: "Advanced", popular: true, years: "2+" },
      { name: "iOS (Swift)", level: "Intermediate", popular: false, years: "3+" },
      { name: "Android (Kotlin)", level: "Advanced", popular: false, years: "4+" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    featured: true,
    services: [
      { name: "AWS Solutions", level: "Expert", popular: true, years: "5+" },
      { name: "Docker & Kubernetes", level: "Advanced", popular: true, years: "3+" },
      { name: "CI/CD Pipelines", level: "Expert", popular: true, years: "4+" },
      { name: "Infrastructure as Code", level: "Advanced", popular: false, years: "2+" }
    ]
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: Brain,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    featured: true,
    services: [
      { name: "OpenAI Integration", level: "Expert", popular: true, years: "2+" },
      { name: "Custom LLM Apps", level: "Advanced", popular: true, years: "1+" },
      { name: "Chatbot Development", level: "Expert", popular: true, years: "3+" },
      { name: "NLP Solutions", level: "Advanced", popular: false, years: "2+" }
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: ShoppingCart,
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    featured: false,
    services: [
      { name: "Shopify Development", level: "Expert", popular: true, years: "4+" },
      { name: "WooCommerce", level: "Advanced", popular: true, years: "3+" },
      { name: "Payment Integration", level: "Expert", popular: true, years: "5+" },
      { name: "Custom Platforms", level: "Expert", popular: false, years: "6+" }
    ]
  }
];

export default function ServicesModern() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeView, setActiveView] = useState("cards");

  const filteredServices = serviceCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.services.some(service => 
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const featuredServices = serviceCategories.filter(cat => cat.featured);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "text-green-400 bg-green-500/20";
      case "Advanced": return "text-blue-400 bg-blue-500/20";
      case "Intermediate": return "text-yellow-400 bg-yellow-500/20";
      default: return "text-gray-400 bg-gray-500/20";
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Services & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            14+ years of experience across modern technologies and platforms
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search services or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="cards">Overview</TabsTrigger>
            <TabsTrigger value="detailed">Detailed</TabsTrigger>
            <TabsTrigger value="matrix">Skills Matrix</TabsTrigger>
          </TabsList>

          {/* Cards View */}
          <TabsContent value="cards">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div 
                    key={category.id}
                    className="group bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                        <IconComponent className={`h-6 w-6 ${category.color}`} />
                      </div>
                      {category.featured && (
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      {category.services.slice(0, 3).map((service, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{service.name}</span>
                          <Badge variant="outline" className={`text-xs ${getLevelColor(service.level)}`}>
                            {service.level}
                          </Badge>
                        </div>
                      ))}
                      {category.services.length > 3 && (
                        <div className="text-xs text-muted-foreground">
                          +{category.services.length - 3} more
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground group-hover:text-accent transition-colors">
                      <span>View Details</span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* Detailed View */}
          <TabsContent value="detailed">
            <div className="space-y-8">
              {filteredServices.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                        <IconComponent className={`h-8 w-8 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                        <p className="text-muted-foreground">Professional services and solutions</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="p-4 bg-background/50 rounded-lg border border-border">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{service.name}</h4>
                            {service.popular && (
                              <Badge variant="secondary" className="text-xs bg-accent/20 text-accent">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <Badge className={`text-xs ${getLevelColor(service.level)}`}>
                              {service.level}
                            </Badge>
                            <span className="text-muted-foreground">{service.years} exp</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* Skills Matrix */}
          <TabsContent value="matrix">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Technical Expertise Matrix</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4">Technology</th>
                      <th className="text-center p-4">Expertise Level</th>
                      <th className="text-center p-4">Experience</th>
                      <th className="text-center p-4">Market Demand</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceCategories.flatMap(cat => 
                      cat.services.map((service, idx) => (
                        <tr key={`${cat.id}-${idx}`} className="border-b border-border/50 hover:bg-card/30">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 ${cat.bgColor} rounded-full`}></div>
                              <span>{service.name}</span>
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <Badge className={`${getLevelColor(service.level)}`}>
                              {service.level}
                            </Badge>
                          </td>
                          <td className="p-4 text-center text-muted-foreground">
                            {service.years}
                          </td>
                          <td className="p-4 text-center">
                            {service.popular ? (
                              <Badge className="bg-green-500/20 text-green-400">High</Badge>
                            ) : (
                              <Badge variant="outline">Moderate</Badge>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-purple-500/10 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how my expertise can help bring your ideas to life. 
            From concept to deployment, I'll guide you through every step.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}