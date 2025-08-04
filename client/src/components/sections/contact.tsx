import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Clock, MapPin, Phone } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  country: string;
  projectType: string;
  budget: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    country: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: "Message Sent!",
        description: result.message,
      });
      setFormData({
        name: '',
        email: '',
        country: '',
        projectType: '',
        budget: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCountryChange = (value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      country: value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and how I can help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">mahajananuj07@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">WhatsApp / Mobile</h4>
                  <a 
                    href="https://wa.me/919560519689" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-green-400 transition-colors"
                  >
                    +91 9560519689
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-accent" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/anuj-mahajan-a2063790/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Professional Networking Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-purple-400" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Availability</h4>
                  <p className="text-muted-foreground">Available for new projects</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-orange-400" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Noida, India (Open to Remote Work)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card/50 rounded-2xl border border-border">
              <h4 className="font-bold mb-3">Professional Note</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                LinkedIn profile is maintained for professional networking and industry connections. 
                All freelance inquiries are separate from current employment and handled with complete professionalism.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="country">Country/Region</Label>
                <Select value={formData.country} onValueChange={handleCountryChange}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your country/region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="eu">European Union</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="project">Project Type</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fullstack">Full-Stack Web Application</SelectItem>
                    <SelectItem value="frontend">Frontend Web Application</SelectItem>
                    <SelectItem value="mobile">Mobile App Development</SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="cloud">Cloud-Native Solution</SelectItem>
                    <SelectItem value="ai">AI/LLM Application</SelectItem>
                    <SelectItem value="chatbot">Chatbot Development</SelectItem>
                    <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                    <SelectItem value="integrations">Integrations</SelectItem>
                    <SelectItem value="testing">Testing & QA</SelectItem>
                    <SelectItem value="devops">DevOps & Infrastructure</SelectItem>
                    <SelectItem value="saas">SaaS Application</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget">Project Budget</Label>
                <Input
                  id="budget"
                  type="text"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  placeholder="e.g., ₹50,000, $5,000, €4,000, or 'Let's discuss'"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell me about your project, timeline, and specific requirements..."
                  required
                  rows={4}
                  className="mt-2 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 animate-glow"
              >
                {contactMutation.isPending ? "Sending..." : "Send Project Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
