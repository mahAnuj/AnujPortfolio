import { Brain, Code, Cloud, Bot, Smartphone, Database, ShoppingCart, Globe, Shield, BarChart3, Gamepad2, Search, TestTube } from "lucide-react";

// Skills/Expertise Configuration
export const skillsConfig = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent applications with AI/ML capabilities, LLMs, and natural language processing.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    hoverColor: "group-hover:bg-purple-500/30",
    technologies: ["OpenAI API", "GPT-4", "LangChain", "LangGraph", "CrewAI", "AutoGen", "Python", "TensorFlow", "PyTorch", "Hugging Face"]
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites, landing pages, and business web applications with modern design and performance optimization.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    hoverColor: "group-hover:bg-emerald-500/30",
    technologies: ["WordPress", "Custom CMS", "Landing Pages", "Portfolio Sites", "Business Websites", "SEO Optimization", "Performance Optimization", "Responsive Design", "Web Analytics", "Contact Forms"]
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern, responsive user interfaces with cutting-edge frameworks and best practices.",
    color: "text-primary",
    bgColor: "bg-primary/20",
    hoverColor: "group-hover:bg-primary/30",
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux", "Zustand", "React Query", "Framer Motion", "PWA"]
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable server-side applications with robust APIs and efficient data management.",
    color: "text-accent",
    bgColor: "bg-accent/20",
    hoverColor: "group-hover:bg-accent/30",
    technologies: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure, containerization, and automated deployment pipelines.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    hoverColor: "group-hover:bg-cyan-500/30",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions", "Jenkins", "Monitoring", "Load Balancing", "Auto-scaling"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform and native mobile applications with excellent user experience.",
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    hoverColor: "group-hover:bg-orange-500/30",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", "Push Notifications", "App Store", "Google Play", "WebRTC"]
  },
  {
    icon: Bot,
    title: "Chatbot & Automation",
    description: "Intelligent chatbots, workflow automation, and AI-powered customer service solutions.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    hoverColor: "group-hover:bg-blue-500/30",
    technologies: ["ChatGPT API", "Dialogflow", "Webhook Integration", "Natural Language Processing", "Workflow Automation", "Slack Bots", "Discord Bots", "Customer Support", "Lead Generation", "FAQ Automation"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores, payment processing, and inventory management systems.",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    hoverColor: "group-hover:bg-green-500/30",
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Inventory Management", "Order Processing", "Customer Management", "Analytics", "SEO", "Marketing Tools"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Application security, data protection, and secure development practices.",
    color: "text-red-400",
    bgColor: "bg-red-500/20",
    hoverColor: "group-hover:bg-red-500/30",
    technologies: ["OWASP", "Security Audits", "Penetration Testing", "Encryption", "Authentication", "Authorization", "HTTPS", "Data Privacy", "GDPR", "Secure APIs"]
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Business intelligence, data visualization, and analytics dashboard development.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    hoverColor: "group-hover:bg-yellow-500/30",
    technologies: ["Python", "R", "Tableau", "Power BI", "D3.js", "Chart.js", "SQL", "Data Mining", "Statistical Analysis", "Predictive Modeling"]
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Interactive games, gamification features, and immersive web experiences.",
    color: "text-pink-400",
    bgColor: "bg-pink-500/20",
    hoverColor: "group-hover:bg-pink-500/30",
    technologies: ["Unity", "Three.js", "WebGL", "Canvas API", "Game Physics", "WebRTC", "Socket.io", "Real-time Multiplayer", "VR/AR", "Interactive UI"]
  },
  {
    icon: TestTube,
    title: "QA & Testing",
    description: "Comprehensive testing strategies, automated testing frameworks, and quality assurance processes.",
    color: "text-rose-400",
    bgColor: "bg-rose-500/20",
    hoverColor: "group-hover:bg-rose-500/30",
    technologies: ["Jest", "Cypress", "Playwright", "Selenium", "Unit Testing", "Integration Testing", "E2E Testing", "Performance Testing", "Load Testing", "Test Automation"]
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Search engine optimization, technical SEO, and digital marketing strategies for better visibility.",
    color: "text-amber-400",
    bgColor: "bg-amber-500/20",
    hoverColor: "group-hover:bg-amber-500/30",
    technologies: ["Technical SEO", "Google Analytics", "Search Console", "Page Speed Optimization", "Schema Markup", "Meta Tags", "Sitemap Generation", "Core Web Vitals", "Local SEO", "Content Strategy"]
  },
  {
    icon: Brain,
    title: "GEO & LLM Optimization",
    description: "Generative Engine Optimization and Large Language Model optimization for AI-powered search and content discovery.",
    color: "text-teal-400",
    bgColor: "bg-teal-500/20",
    hoverColor: "group-hover:bg-teal-500/30",
    technologies: ["Prompt Engineering", "RAG Optimization", "Vector Search", "LLM Fine-tuning", "AI Content Strategy", "Semantic Search", "Knowledge Graphs", "Perplexity Optimization", "ChatGPT Optimization", "AI Answer Engines"]
  }
];

// Projects Configuration
export const projectsConfig = [
  {
    title: "AI Chat Assistant",
    description: "Advanced conversational AI with RAG capabilities and knowledge base integration. Features real-time responses, context awareness, and multi-language support.",
    technologies: ["OpenAI GPT-4", "LangChain", "Vector Database", "React", "Node.js"],
    metrics: {
      improvement: "85% faster response time",
      impact: "40% increase in user engagement",
      scale: "10,000+ conversations processed"
    },
    liveDemo: true,
    category: "AI/ML"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured online marketplace with advanced search, real-time inventory, and integrated payment processing. Includes admin dashboard and analytics.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    metrics: {
      improvement: "60% faster page load times",
      impact: "25% increase in conversion rate",
      scale: "50,000+ products managed"
    },
    liveDemo: true,
    category: "E-commerce"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Interactive business intelligence platform with real-time data visualization, custom reports, and predictive analytics capabilities.",
    technologies: ["Python", "D3.js", "PostgreSQL", "FastAPI", "React"],
    metrics: {
      improvement: "90% reduction in report generation time",
      impact: "35% better decision-making speed",
      scale: "1M+ data points analyzed daily"
    },
    liveDemo: true,
    category: "Analytics"
  },
  {
    title: "Mobile Learning App",
    description: "Cross-platform educational app with offline capabilities, progress tracking, and adaptive learning algorithms.",
    technologies: ["React Native", "Firebase", "TensorFlow", "Redux", "WebRTC"],
    metrics: {
      improvement: "70% higher user retention",
      impact: "45% improvement in learning outcomes",
      scale: "25,000+ active users"
    },
    liveDemo: false,
    category: "Mobile"
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Automated deployment pipeline with container orchestration, monitoring, and auto-scaling capabilities for enterprise applications.",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    metrics: {
      improvement: "80% reduction in deployment time",
      impact: "99.9% uptime achieved",
      scale: "500+ services deployed"
    },
    liveDemo: false,
    category: "DevOps"
  },
  {
    title: "AI Content Generator",
    description: "Advanced content creation platform with SEO optimization, multi-format output, and brand voice consistency.",
    technologies: ["GPT-4", "LangChain", "React", "Python", "MongoDB"],
    metrics: {
      improvement: "95% faster content creation",
      impact: "300% increase in content output",
      scale: "100,000+ articles generated"
    },
    liveDemo: true,
    category: "AI/Content"
  }
];

// Configuration metadata
export const portfolioMeta = {
  skillsCount: skillsConfig.length,
  technologiesCount: skillsConfig.reduce((total, skill) => total + skill.technologies.length, 0),
  projectsCount: projectsConfig.length,
  liveDemoCount: projectsConfig.filter(project => project.liveDemo).length
};