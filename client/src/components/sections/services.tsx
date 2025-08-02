import { Code, Cloud, Brain, Bot, Smartphone, Settings, Database, Globe, ShoppingCart, Users, Zap, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const serviceCategories = [
  {
    title: "Web Development",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/20",
    services: [
      "React & Next.js Applications",
      "Vue.js & Nuxt.js Development", 
      "Angular Applications",
      "TypeScript Development",
      "Progressive Web Apps (PWA)",
      "Single Page Applications (SPA)",
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)"
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-accent",
    bgColor: "bg-accent/20",
    services: [
      "Node.js & Express.js APIs",
      "Python & Django/Flask",
      "RESTful API Development",
      "GraphQL Implementation",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Third-party API Integration"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    services: [
      "AWS Cloud Solutions",
      "Docker Containerization",
      "Kubernetes Orchestration",
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Auto-scaling Solutions",
      "Monitoring & Logging",
      "Performance Optimization"
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    services: [
      "OpenAI API Integration",
      "Custom LLM Applications",
      "Natural Language Processing",
      "Machine Learning Models",
      "AI-Powered Analytics",
      "Intelligent Automation",
      "Computer Vision Solutions",
      "Predictive Analytics"
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    services: [
      "React Native Apps",
      "Flutter Development",
      "Cross-platform Solutions",
      "Native iOS Development",
      "Native Android Development",
      "Mobile API Integration",
      "App Store Deployment",
      "Mobile Performance Optimization"
    ]
  },
  {
    title: "E-commerce Solutions",
    icon: ShoppingCart,
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    services: [
      "Shopify Custom Development",
      "WooCommerce Solutions",
      "Custom E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management Systems",
      "Order Processing Automation",
      "Multi-vendor Marketplaces",
      "B2B E-commerce Solutions"
    ]
  },
  {
    title: "Chatbot & Automation",
    icon: Bot,
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/20",
    services: [
      "AI-Powered Chatbots",
      "WhatsApp Business API",
      "Slack Bot Development",
      "Discord Bot Creation",
      "Customer Support Automation",
      "Lead Generation Bots",
      "Process Automation",
      "Voice Assistant Integration"
    ]
  },
  {
    title: "Consulting & Strategy",
    icon: Users,
    color: "text-pink-400",
    bgColor: "bg-pink-500/20",
    services: [
      "Technical Architecture Review",
      "Code Quality Assessment",
      "Performance Auditing",
      "Security Consulting",
      "Technology Stack Selection",
      "Digital Transformation",
      "Team Training & Mentoring",
      "Project Management"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Services I Provide</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive software development services spanning modern web technologies, cloud solutions, and emerging AI applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <IconComponent className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-4">Need Something Else?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? I work with cutting-edge technologies and am always ready to tackle new challenges. Let's discuss your unique requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Blockchain Development</Badge>
              <Badge variant="secondary">IoT Solutions</Badge>
              <Badge variant="secondary">AR/VR Applications</Badge>
              <Badge variant="secondary">Data Science</Badge>
              <Badge variant="secondary">Cybersecurity</Badge>
              <Badge variant="secondary">Custom Integrations</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}