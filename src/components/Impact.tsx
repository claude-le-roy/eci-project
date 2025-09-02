import { Card, CardContent } from "@/components/ui/card";

const Impact = () => {
  const testimonials = [
    {
      name: "Kwame Asante",
      role: "Software Developer",
      company: "Tech Solutions Ghana",
      quote: "ECI's mentorship program was a game-changer. My mentor helped me navigate the tech industry and land my dream job within 3 months of graduating.",
      image: "🧑‍💻"
    },
    {
      name: "Akosua Mensah",
      role: "Marketing Manager",
      company: "Creative Agency Accra",
      quote: "The career workshops gave me the confidence and skills I needed. I went from unemployed graduate to marketing manager in just 6 months.",
      image: "👩‍💼"
    },
    {
      name: "Samuel Ofori",
      role: "Financial Analyst",
      company: "Ghana Investment Bank",
      quote: "ECI didn't just help me find a job - they helped me build a career. The professional network I gained has been invaluable for my growth.",
      image: "👨‍💼"
    }
  ];

  const stats = [
    { number: "95%", label: "Job Placement Rate", description: "Within 6 months of program completion" },
    { number: "500+", label: "Graduates Placed", description: "Across various industries in Ghana" },
    { number: "₵2.5M", label: "Average Salary Increase", description: "First year after program completion" },
    { number: "50+", label: "Partner Companies", description: "Actively hiring our graduates" }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Impact Statistics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Transforming lives and building Ghana's future workforce, one career at a time.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Success Stories
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from graduates who have transformed their careers through ECI programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-elegant hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">{testimonial.image}</div>
                <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-primary font-medium text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;