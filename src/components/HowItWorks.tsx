import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Apply & Assess",
      description: "Submit your application and complete our career readiness assessment to understand your current position and goals.",
      icon: "📝"
    },
    {
      step: "2", 
      title: "Match & Connect",
      description: "Get matched with industry mentors and join cohorts based on your career interests and development needs.",
      icon: "🤝"
    },
    {
      step: "3",
      title: "Learn & Develop",
      description: "Participate in workshops, training sessions, and one-on-one mentoring to build essential professional skills.",
      icon: "📚"
    },
    {
      step: "4",
      title: "Apply & Succeed",
      description: "Access exclusive job opportunities with our partner companies and receive ongoing support throughout your career transition.",
      icon: "🚀"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step process guides you from where you are to where you want to be in your career journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative bg-card shadow-elegant hover:shadow-warm transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-2xl mb-4">
                        {step.icon}
                      </div>
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm absolute -top-2 -left-2">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;