import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const programs = [
    {
      title: "Career Development Workshops",
      description: "Comprehensive training on professional skills, interview preparation, and workplace readiness.",
      features: ["Resume Building", "Interview Skills", "Professional Communication", "Industry Insights"],
      duration: "6 weeks",
      participants: "150+ graduates",
      icon: "📚"
    },
    {
      title: "Mentorship Program",
      description: "One-on-one guidance from industry professionals to navigate career transitions successfully.",
      features: ["Personal Mentor", "Career Planning", "Network Building", "Goal Setting"],
      duration: "6 months",
      participants: "200+ matched pairs",
      icon: "🤝"
    },
    {
      title: "Job Placement Initiative",
      description: "Direct connections with hiring partners and exclusive access to entry-level opportunities.",
      features: ["Partner Companies", "Job Matching", "Application Support", "Follow-up Assistance"],
      duration: "Ongoing",
      participants: "85% placement rate",
      icon: "🚀"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-warm" aria-labelledby="programs-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="programs-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive career development programs designed to bridge the gap between 
            education and meaningful employment opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card shadow-elegant hover:shadow-brand transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-2xl" role="img" aria-label={`Program ${index + 1} icon`}>{program.icon}</span>
                </div>
                <CardTitle className="text-xl text-card-foreground">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-foreground font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Success:</span>
                    <span className="text-primary font-medium">{program.participants}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6" role="list" aria-label={`${program.title} features`}>
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm" role="listitem">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" aria-hidden="true"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full" variant="outline" aria-label={`Learn more about ${program.title}`}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;