import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, CheckCircle, Users, TrendingUp, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import NewsletterConfirmationModal from "@/components/modals/NewsletterConfirmationModal";
import NewsletterSuccessModal from "@/components/modals/NewsletterSuccessModal";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [lastSubmission, setLastSubmission] = useState<number | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [confirmedEmail, setConfirmedEmail] = useState("");
  const [confirmedInterests, setConfirmedInterests] = useState<string[]>([]);

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    if (email.length > 254) {
      setEmailError("Email address is too long");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value.slice(0, 254); // Limit input length
    setEmail(newEmail);
    if (newEmail && emailError) {
      validateEmail(newEmail);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    const now = Date.now();
    if (lastSubmission && now - lastSubmission < 30000) {
      toast({
        title: "Please Wait",
        description: "Please wait 30 seconds before submitting again.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      // Announce error to screen readers
      const errorAnnouncement = document.createElement('div');
      errorAnnouncement.setAttribute('aria-live', 'polite');
      errorAnnouncement.setAttribute('aria-atomic', 'true');
      errorAnnouncement.className = 'sr-only';
      errorAnnouncement.textContent = emailError;
      document.body.appendChild(errorAnnouncement);
      setTimeout(() => document.body.removeChild(errorAnnouncement), 1000);
      return;
    }

    // Show confirmation modal instead of directly subscribing
    setShowConfirmationModal(true);
  };

  const handleConfirmSubscription = async (confirmedEmail: string) => {
    setShowConfirmationModal(false);
    setIsSubmitting(true);
    setLastSubmission(Date.now());
    
    // Simulate subscription process
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store confirmed details for success modal
    setConfirmedEmail(confirmedEmail);
    setConfirmedInterests([...interests]);
    
    // Show success modal
    setShowSuccessModal(true);
    
    // Reset form
    setEmail("");
    setInterests([]);
    setEmailError("");
    setIsSubmitting(false);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setConfirmedEmail("");
    setConfirmedInterests([]);
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
                        onChange={handleEmailChange}
                        placeholder="your.email@example.com"
                        required
                        maxLength={254}
                        className={`bg-background ${emailError ? 'border-destructive' : ''}`}
                        aria-describedby={emailError ? "email-error email-help" : "email-help"}
                        aria-invalid={!!emailError}
                      />
                      {emailError && (
                        <div id="email-error" className="flex items-center gap-2 text-sm text-destructive" role="alert">
                          <AlertCircle className="w-4 h-4" />
                          {emailError}
                        </div>
                      )}
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

      {/* Confirmation Modal */}
      <NewsletterConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onConfirm={handleConfirmSubscription}
        email={email}
        interests={interests}
        interestOptions={interestOptions}
      />

      {/* Success Modal */}
      <NewsletterSuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccessModal}
        email={confirmedEmail}
        interests={confirmedInterests}
        interestOptions={interestOptions}
      />
    </section>
  );
};

export default Newsletter;