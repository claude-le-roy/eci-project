import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, Award, Shield, CheckCircle, Building, Handshake, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [lastSubmission, setLastSubmission] = useState<number | null>(null);

  const donationAmounts = [25, 50, 100, 250, 500, 1000];
  
  const handleDonation = (amount: number) => {
    toast({
      title: "Thank You!",
      description: `Redirecting to secure payment for GH₵${amount}...`,
    });
    // Here would integrate with actual payment gateway
  };

  const sponsorshipTiers = [
    {
      name: "Bronze Partner",
      price: "GH₵5,000 - GH₵15,000",
      benefits: [
        "Logo on website footer",
        "Social media recognition",
        "Quarterly impact reports",
        "Certificate of partnership"
      ],
      popular: false
    },
    {
      name: "Silver Partner", 
      price: "GH₵15,000 - GH₵50,000",
      benefits: [
        "Logo on website header",
        "Event co-branding opportunities",
        "Monthly progress updates",
        "Access to exclusive networking events",
        "Custom impact reports"
      ],
      popular: true
    },
    {
      name: "Gold Partner",
      price: "GH₵50,000+",
      benefits: [
        "Premium logo placement",
        "Naming rights for programs",
        "Dedicated partnership manager",
        "Custom CSR content creation",
        "Board advisory opportunities",
        "Priority event partnerships"
      ],
      popular: false
    }
  ];

  const impactStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "2,500+",
      label: "Students Supported",
      description: "Young professionals empowered through our programs"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "150+",
      label: "Mentorship Matches",
      description: "Successful mentor-mentee relationships facilitated"
    },
    {
      icon: <Building className="w-8 h-8" />,
      number: "45+",
      label: "Partner Companies",
      description: "Organizations providing opportunities to our students"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      number: "85%",
      label: "Job Placement Rate",
      description: "Of program graduates secured employment within 6 months"
    }
  ];

  const currentPartners = [
    { name: "Ghana Commercial Bank", logo: "🏦", category: "Financial Services" },
    { name: "MTN Ghana", logo: "📱", category: "Telecommunications" },
    { name: "University of Ghana", logo: "🎓", category: "Education" },
    { name: "KPMG Ghana", logo: "💼", category: "Professional Services" },
    { name: "Vodafone Ghana", logo: "📡", category: "Telecommunications" },
    { name: "Ecobank Ghana", logo: "🏪", category: "Banking" }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />
      
      <main className="container mx-auto px-4 pt-20 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Support Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us bridge the gap between education and employment in Ghana. Your contribution makes a lasting impact.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="donate" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="donate" aria-label="Make a Donation">Donate Now</TabsTrigger>
            <TabsTrigger value="partner" aria-label="Partnership Opportunities">Partnership</TabsTrigger>
          </TabsList>

          {/* Donation Tab */}
          <TabsContent value="donate" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Donation Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-primary" />
                    Make a Donation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Select Amount (GH₵)</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {donationAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={selectedAmount === amount ? "default" : "outline"}
                          onClick={() => setSelectedAmount(amount)}
                          className="h-12"
                        >
                          GH₵{amount}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-3">Your Impact:</h4>
                    {selectedAmount > 0 && (
                      <div className="bg-muted p-4 rounded-lg">
                        {selectedAmount >= 25 && selectedAmount < 100 && (
                          <p className="text-sm">Provides career coaching for 1 student for a month</p>
                        )}
                        {selectedAmount >= 100 && selectedAmount < 250 && (
                          <p className="text-sm">Sponsors a CV workshop for 10 students</p>
                        )}
                        {selectedAmount >= 250 && selectedAmount < 500 && (
                          <p className="text-sm">Funds mentorship matching for 5 students</p>
                        )}
                        {selectedAmount >= 500 && (
                          <p className="text-sm">Supports comprehensive career program for 20 students</p>
                        )}
                      </div>
                    )}
                  </div>

                      <Button 
                        className="w-full" 
                        size="lg"
                        onClick={() => {
                          // Rate limiting check
                          const now = Date.now();
                          if (lastSubmission && now - lastSubmission < 30000) {
                            toast({
                              title: "Please Wait",
                              description: "Please wait before making another donation attempt.",
                              variant: "destructive",
                            });
                            return;
                          }
                          handleDonation(selectedAmount);
                        }}
                        disabled={selectedAmount === 0}
                      >
                    Donate GH₵{selectedAmount}
                  </Button>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      Secure payment powered by Stripe
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Donation Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Campaigns</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Scholarship Fund 2024</span>
                      <span className="text-sm text-muted-foreground">73%</span>
                    </div>
                    <Progress value={73} className="mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>GH₵36,500 raised</span>
                      <span>GH₵50,000 goal</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Mentorship Program</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <Progress value={45} className="mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>GH₵13,500 raised</span>
                      <span>GH₵30,000 goal</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Skills Training Workshops</span>
                      <span className="text-sm text-muted-foreground">89%</span>
                    </div>
                    <Progress value={89} className="mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>GH₵17,800 raised</span>
                      <span>GH₵20,000 goal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Other Ways to Give */}
            <Card>
              <CardHeader>
                <CardTitle>Other Ways to Support Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Volunteer Your Time</h3>
                    <p className="text-sm text-muted-foreground mb-3">Share your expertise as a mentor or workshop facilitator</p>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Building className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Corporate Partnership</h3>
                    <p className="text-sm text-muted-foreground mb-3">Partner with us for internships and job opportunities</p>
                    <Button variant="outline" size="sm">Contact Us</Button>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Handshake className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">In-Kind Donations</h3>
                    <p className="text-sm text-muted-foreground mb-3">Contribute services, equipment, or venue space</p>
                    <Button variant="outline" size="sm">Get Started</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partnership Tab */}
          <TabsContent value="partner" className="space-y-8">
            {/* Sponsorship Tiers */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Partnership Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sponsorshipTiers.map((tier, index) => (
                  <Card key={index} className={`relative ${tier.popular ? 'border-primary shadow-brand' : ''}`}>
                    {tier.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader>
                      <CardTitle className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Star className="w-5 h-5" />
                          {tier.name}
                        </div>
                      </CardTitle>
                      <div className="text-2xl font-bold text-center text-primary">{tier.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {tier.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full mt-6" 
                        variant={tier.popular ? "default" : "outline"}
                        onClick={() => toast({
                          title: "Partnership Inquiry Sent",
                          description: "We'll contact you within 24 hours to discuss your partnership."
                        })}
                      >
                        Become a Partner
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Current Partners */}
            <Card>
              <CardHeader>
                <CardTitle>Our Current Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentPartners.map((partner, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                      <div className="text-2xl">{partner.logo}</div>
                      <div>
                        <div className="font-semibold">{partner.name}</div>
                        <div className="text-sm text-muted-foreground">{partner.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Partnership Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Why Partner With Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Access to Top Talent</h3>
                        <p className="text-sm text-muted-foreground">Connect with Ghana's brightest young professionals</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Brand Visibility</h3>
                        <p className="text-sm text-muted-foreground">Reach thousands of students and professionals</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">CSR Impact</h3>
                        <p className="text-sm text-muted-foreground">Make a measurable difference in youth development</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Networking Opportunities</h3>
                        <p className="text-sm text-muted-foreground">Connect with other leading organizations</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Tax Benefits</h3>
                        <p className="text-sm text-muted-foreground">Eligible for corporate tax deductions</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Customized Programs</h3>
                        <p className="text-sm text-muted-foreground">Tailor initiatives to your business needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
