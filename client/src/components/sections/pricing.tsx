import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pricingOptions = [
  {
    region: "Global Clients",
    rate: "$50",
    currency: "USD",
    description: "Competitive international rates for clients worldwide",
    icon: Star,
    color: "text-primary",
    bgColor: "bg-primary/20",
    borderColor: "border-primary/50",
    features: [
      "All web development services",
      "AI/ML integration projects", 
      "Custom application development",
      "E-commerce solutions",
      "API development & integration",
      "Consultation & project planning"
    ],
    recommended: true
  },
  {
    region: "Indian Clients",
    rate: "₹2,000",
    currency: "INR", 
    description: "Local pricing for Indian businesses and startups",
    icon: Zap,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
    features: [
      "All web development services",
      "AI/ML integration projects",
      "Custom application development", 
      "E-commerce solutions",
      "API development & integration",
      "Consultation & project planning"
    ],
    recommended: false
  }
];

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Straightforward hourly rates with no hidden fees. All services included at one simple rate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div 
                key={index}
                className={`bg-card/80 backdrop-blur-sm p-8 rounded-2xl border ${option.borderColor} relative hover:border-opacity-75 transition-all group hover:transform hover:scale-105 ${option.recommended ? 'ring-2 ring-primary/20' : ''}`}
              >
                {option.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Clients
                    </Badge>
                  </div>
                )}
                
                <div className={`w-16 h-16 ${option.bgColor} rounded-xl flex items-center justify-center mb-6 transition-colors`}>
                  <IconComponent className={`h-8 w-8 ${option.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{option.region}</h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>
                
                <div className="mb-6">
                  <div className={`text-4xl font-bold ${option.color} mb-1`}>{option.rate}</div>
                  <div className="text-sm text-muted-foreground">per hour</div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                    All Services Included
                  </h4>
                  <ul className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${option.recommended ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'border-border hover:border-primary text-foreground hover:text-primary'} px-6 py-3 rounded-lg font-medium transition-all`}
                  variant={option.recommended ? "default" : "outline"}
                >
                  Start Project
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-card/40 backdrop-blur-sm p-6 rounded-xl border border-border">
            <h3 className="text-lg font-semibold mb-4">What's Included</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>✓ Free initial consultation</span>
              <span>✓ Detailed project timeline</span>
              <span>✓ Regular progress updates</span>
              <span>✓ Source code ownership</span>
              <span>✓ 30-day post-launch support</span>
              <span>✓ No hidden fees</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Simple hourly billing - you only pay for actual work time. Minimum 1-hour billing increments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}