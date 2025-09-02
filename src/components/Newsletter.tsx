import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, CheckCircle, Users, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    { id: "career-tips", label: "Career Development Tips" },
    { id: "job-opportunities", label: "Job Opportunities" },
    { id: "workshops", label: "Workshop Announcements" },
    { id: "mentorship", label: "Mentorship Programs" },
    { id: "success-stories", label: "Success Stories" },
    { id: "industry-insights", label: "Industry Insights" }
  ];

  const handleInterestChange = (interestId: string, checked: boolean) => {
    if (checked) {
      setInterests(prev => [...prev, interestId]);
    } else {
      setInterests(prev => prev.filter(id => id !== interestId));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate subscription process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully Subscribed!",
      description: "Welcome to the ECI community. Check your email for confirmation.",
    });
    
    setEmail("");
    setInterests([]);
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-gradient-brand" aria-labelledby="newsletter-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Newsletter Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h2 id="newsletter-heading" className="text-2xl lg:text-3xl font-bold text-foreground">
                      Stay Updated
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    Join thousands of young professionals receiving weekly insights, 
                    job opportunities, and career development resources.
                  </p>

                  {/* Newsletter Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-bold text-foreground">5,000+</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Subscribers</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="font-bold text-foreground">Weekly</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Updates</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="font-bold text-foreground">Expert</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Content</p>
                    </div>
                  </div>

                  {/* What You'll Get */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Weekly job opportunities from partner companies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Career development tips from industry experts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Early access to workshops and mentorship programs</span>
                    </div>
                  </div>
                </div>

                {/* Subscription Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="newsletter-email" className="text-foreground font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background"
                        aria-describedby="email-help"
                      />
                      <p id="email-help" className="text-xs text-muted-foreground">
                        We'll never share your email address
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-foreground font-medium">
                        What interests you? (Optional)
                      </Label>
                      <div className="grid grid-cols-1 gap-3">
                        {interestOptions.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={option.id}
                              checked={interests.includes(option.id)}
                              onCheckedChange={(checked) => 
                                handleInterestChange(option.id, checked as boolean)
                              }
                              aria-describedby={`${option.id}-description`}
                            />
                            <Label 
                              htmlFor={option.id} 
                              className="text-sm text-foreground cursor-pointer"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={!email || isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By subscribing, you agree to our Privacy Policy and Terms of Service. 
                      Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;