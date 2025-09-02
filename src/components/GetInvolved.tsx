import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  const opportunities = [
    {
      title: "Students & Graduates",
      subtitle: "Ready to launch your career?",
      description: "Join our programs to gain the skills, mentorship, and connections you need for career success.",
      benefits: [
        "Free career development workshops",
        "Personal industry mentor",
        "Job placement assistance",
        "Professional network access"
      ],
      cta: "Apply Now",
      highlight: "New cohort starts monthly"
    },
    {
      title: "Industry Professionals",
      subtitle: "Share your expertise",
      description: "Become a mentor and help shape the next generation of Ghana's workforce while giving back to your community.",
      benefits: [
        "Flexible mentoring schedule",
        "Leadership development",
        "Community impact",
        "Professional recognition"
      ],
      cta: "Become a Mentor",
      highlight: "2 hours per month commitment"
    },
    {
      title: "Companies & Organizations",
      subtitle: "Find top talent",
      description: "Partner with us to access a pipeline of well-prepared, motivated candidates ready to contribute to your organization.",
      benefits: [
        "Pre-screened candidates",
        "Reduced hiring costs",
        "CSR impact",
        "Talent pipeline access"
      ],
      cta: "Partner With Us",
      highlight: "50+ companies trust ECI"
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to advance your career, share your expertise, or find great talent, 
            there's a place for you in the ECI community.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="bg-card shadow-elegant hover:shadow-warm transition-all duration-300 flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">
                    {index === 0 ? "🎓" : index === 1 ? "🌟" : "🏢"}
                  </span>
                </div>
                <CardTitle className="text-xl text-card-foreground mb-2">
                  {opportunity.title}
                </CardTitle>
                <p className="text-primary font-medium text-sm">
                  {opportunity.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 text-center">
                  {opportunity.description}
                </p>
                
                <div className="flex-1 space-y-3 mb-6">
                  {opportunity.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <div className="bg-muted rounded-lg p-3 mb-4 text-center">
                    <span className="text-xs font-medium text-muted-foreground">
                      {opportunity.highlight}
                    </span>
                  </div>
                  <Button className="w-full" variant={index === 0 ? "hero" : "cta"} size="lg">
                    {opportunity.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Support Our Mission
            </h3>
            <p className="text-muted-foreground mb-6">
              Help us expand our impact and reach more young professionals across Ghana. 
              Your donation directly funds scholarships, programs, and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Donate Now
              </Button>
              <Button variant="outline" size="lg">
                Learn About Impact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;