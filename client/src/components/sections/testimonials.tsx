import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "CTO, TechCorp",
    initials: "JD",
    feedback: "Anuj delivered exceptional work on our AI chatbot project. His technical expertise and communication skills made the entire process smooth and successful.",
    gradient: "from-primary to-accent"
  },
  {
    name: "Sarah Miller",
    role: "Founder, StartupXYZ",
    initials: "SM",
    feedback: "Outstanding full-stack development work. Anuj built our entire platform from scratch with modern technologies and best practices. Highly recommended!",
    gradient: "from-accent to-purple-500"
  },
  {
    name: "Mike Roberts",
    role: "Product Manager, E-commerce Co",
    initials: "MR",
    feedback: "Anuj's cloud-native solution improved our application performance significantly. His expertise in AWS and microservices architecture is impressive.",
    gradient: "from-cyan-500 to-blue-500"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-accent/50 transition-all">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.feedback}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
