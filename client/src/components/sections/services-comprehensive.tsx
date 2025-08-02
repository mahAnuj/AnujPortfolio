import { useState } from "react";
import { Code, Cloud, Brain, Bot, Smartphone, Settings, Database, Globe, ShoppingCart, Users, Gamepad2, Shield, BarChart3, Blocks, Cpu, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/20",
    description: "Modern web applications with cutting-edge frameworks",
    services: [
      { name: "React & Next.js Applications", popular: true },
      { name: "Vue.js & Nuxt.js Development", popular: false },
      { name: "Angular Applications", popular: false },
      { name: "TypeScript Development", popular: true },
      { name: "Progressive Web Apps (PWA)", popular: false },
      { name: "Single Page Applications (SPA)", popular: true },
      { name: "Server-Side Rendering (SSR)", popular: false },
      { name: "Static Site Generation (SSG)", popular: false },
      { name: "Svelte & SvelteKit", popular: false },
      { name: "Remix Applications", popular: false }
    ]
  },
  {
    id: "programming-languages",
    title: "Programming Languages",
    icon: Cpu,
    color: "text-accent",
    bgColor: "bg-accent/20",
    description: "Expert-level programming across multiple languages",
    services: [
      { name: "JavaScript/TypeScript", popular: true },
      { name: "Python", popular: true },
      { name: "Node.js", popular: true },
      { name: "Java", popular: false },
      { name: "C#/.NET", popular: false },
      { name: "PHP", popular: false },
      { name: "Go (Golang)", popular: false },
      { name: "Rust", popular: false },
      { name: "Ruby", popular: false },
      { name: "Kotlin", popular: false }
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    icon: Smartphone,
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    description: "Cross-platform and native mobile applications",
    services: [
      { name: "React Native", popular: true },
      { name: "Flutter", popular: true },
      { name: "iOS (Swift)", popular: false },
      { name: "Android (Kotlin/Java)", popular: false },
      { name: "Xamarin", popular: false },
      { name: "Ionic", popular: false },
      { name: "Cordova/PhoneGap", popular: false },
      { name: "Progressive Web Apps", popular: true }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    description: "Scalable cloud infrastructure and automation",
    services: [
      { name: "AWS Solutions", popular: true },
      { name: "Docker & Kubernetes", popular: true },
      { name: "CI/CD Pipelines", popular: true },
      { name: "Azure Cloud", popular: false },
      { name: "Google Cloud Platform", popular: false },
      { name: "Terraform (IaC)", popular: false },
      { name: "Jenkins", popular: false },
      { name: "GitHub Actions", popular: true },
      { name: "Microservices Architecture", popular: true }
    ]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Brain,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    description: "Intelligent applications with AI/ML capabilities",
    services: [
      { name: "OpenAI API Integration", popular: true },
      { name: "Custom LLM Applications", popular: true },
      { name: "Chatbot Development", popular: true },
      { name: "Natural Language Processing", popular: false },
      { name: "TensorFlow", popular: false },
      { name: "PyTorch", popular: false },
      { name: "Computer Vision", popular: false },
      { name: "Predictive Analytics", popular: false },
      { name: "LangChain Integration", popular: true }
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    icon: ShoppingCart,
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    description: "Complete e-commerce solutions and integrations",
    services: [
      { name: "Shopify Development", popular: true },
      { name: "WooCommerce", popular: true },
      { name: "Magento", popular: false },
      { name: "Custom E-commerce Platforms", popular: true },
      { name: "Payment Gateway Integration", popular: true },
      { name: "Inventory Management", popular: false },
      { name: "Multi-vendor Marketplaces", popular: false },
      { name: "B2B E-commerce", popular: false }
    ]
  },
  {
    id: "database",
    title: "Database & Backend",
    icon: Database,
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/20",
    description: "Robust backend systems and data management",
    services: [
      { name: "PostgreSQL", popular: true },
      { name: "MongoDB", popular: true },
      { name: "MySQL", popular: false },
      { name: "Redis", popular: false },
      { name: "Elasticsearch", popular: false },
      { name: "GraphQL APIs", popular: true },
      { name: "RESTful APIs", popular: true },
      { name: "Prisma ORM", popular: false },
      { name: "Drizzle ORM", popular: false }
    ]
  },
  {
    id: "game-development",
    title: "Game Development",
    icon: Gamepad2,
    color: "text-pink-400",
    bgColor: "bg-pink-500/20",
    description: "Interactive games and immersive experiences",
    services: [
      { name: "Unity 3D", popular: false },
      { name: "Unreal Engine", popular: false },
      { name: "Web-based Games", popular: true },
      { name: "Mobile Games", popular: false },
      { name: "VR/AR Applications", popular: false },
      { name: "Game Physics", popular: false },
      { name: "Multiplayer Systems", popular: false }
    ]
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    icon: Blocks,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    description: "Decentralized applications and blockchain solutions",
    services: [
      { name: "Smart Contracts", popular: false },
      { name: "DeFi Applications", popular: false },
      { name: "NFT Platforms", popular: false },
      { name: "Web3 Integration", popular: false },
      { name: "Ethereum Development", popular: false },
      { name: "Solidity Programming", popular: false },
      { name: "Cryptocurrency Wallets", popular: false }
    ]
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    icon: BarChart3,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    description: "Data visualization and business intelligence",
    services: [
      { name: "Business Intelligence Dashboards", popular: true },
      { name: "Data Visualization", popular: true },
      { name: "Real-time Analytics", popular: false },
      { name: "ETL Pipelines", popular: false },
      { name: "Power BI Integration", popular: false },
      { name: "Tableau Development", popular: false },
      { name: "Custom Reporting", popular: true }
    ]
  },
  {
    id: "security",
    title: "Security & Testing",
    icon: Shield,
    color: "text-red-400",
    bgColor: "bg-red-500/20",
    description: "Security audits and comprehensive testing",
    services: [
      { name: "Security Audits", popular: false },
      { name: "Penetration Testing", popular: false },
      { name: "Automated Testing", popular: true },
      { name: "Performance Testing", popular: false },
      { name: "Code Quality Assessment", popular: true },
      { name: "Vulnerability Assessment", popular: false }
    ]
  },
  {
    id: "consulting",
    title: "Consulting & Strategy",
    icon: Users,
    color: "text-violet-400",
    bgColor: "bg-violet-500/20",
    description: "Technical leadership and strategic guidance",
    services: [
      { name: "Technical Architecture", popular: true },
      { name: "Code Reviews", popular: true },
      { name: "Technology Selection", popular: true },
      { name: "Performance Optimization", popular: false },
      { name: "Team Training", popular: false },
      { name: "Project Management", popular: false },
      { name: "Digital Transformation", popular: false }
    ]
  }
];

export default function ServicesComprehensive() {
  const [activeCategory, setActiveCategory] = useState("web-development");
  
  const currentCategory = serviceCategories.find(cat => cat.id === activeCategory);
  const IconComponent = currentCategory?.icon || Code;

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Services I Provide</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive software development services across modern technologies and platforms
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border overflow-hidden">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3 p-6 bg-secondary/30">
            <div className="space-y-2">
              {serviceCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all flex items-center space-x-3 ${
                      activeCategory === category.id
                        ? 'bg-primary/20 border border-primary/50 text-primary'
                        : 'hover:bg-card/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <CategoryIcon className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 p-6">
            {currentCategory && (
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${currentCategory.bgColor} rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 ${currentCategory.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentCategory.title}</h3>
                    <p className="text-muted-foreground">{currentCategory.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {currentCategory.services.map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-sm">{service.name}</span>
                      </div>
                      {service.popular && (
                        <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                          Popular
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-card/30 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2">Need something specific?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Don't see exactly what you're looking for in {currentCategory.title.toLowerCase()}? 
                    I work with the latest tools and am always ready to learn new technologies.
                  </p>
                  <Button variant="outline" size="sm" className="text-xs">
                    Discuss Custom Requirements
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card/30 rounded-xl border border-border">
            <div className="text-2xl font-bold text-primary mb-2">12+</div>
            <div className="text-sm text-muted-foreground">Service Categories</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-border">
            <div className="text-2xl font-bold text-accent mb-2">80+</div>
            <div className="text-sm text-muted-foreground">Technologies & Tools</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-border">
            <div className="text-2xl font-bold text-purple-400 mb-2">14+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-border">
            <div className="text-2xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}