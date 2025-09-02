import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, MessageSquare, Facebook, Twitter, Instagram, Linkedin, Clock, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import { useToast } from "@/hooks/use-toast";
import contactHeroImage from "@/assets/contact-hero.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@elitecareerinitiative.gh",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us", 
      details: "+233 24 123 4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Accra, Ghana",
      description: "University of Ghana Campus"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
      description: "Weekend consultations by appointment"
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com/eci" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/eci" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/eci" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/company/eci" }
  ];

  const faqs = [
    {
      question: "What programs does ECI offer?",
      answer: "We offer comprehensive career development programs including CV workshops, interview preparation, mentorship matching, skills training, job placement assistance, and networking events. All programs are designed to bridge the gap between education and employment."
    },
    {
      question: "How can I join the mentorship program?",
      answer: "You can apply for our mentorship program by filling out the application form on our website or contacting us directly. We match mentees with industry professionals based on career interests, educational background, and professional goals."
    },
    {
      question: "Are there any fees for participating in ECI programs?",
      answer: "Most of our core programs are offered free of charge to students and recent graduates. Some specialized workshops or certification programs may have minimal fees to cover materials and resources."
    },
    {
      question: "Who is eligible to participate in ECI programs?",
      answer: "Our programs are primarily designed for university students, recent graduates, and young professionals in Ghana. We welcome participants from all academic backgrounds and career stages who are committed to their professional development."
    },
    {
      question: "How can companies partner with ECI?",
      answer: "Companies can partner with us through various channels including sponsorship, providing internship opportunities, offering mentorship, hosting workshops, or participating in our job fairs. Contact our partnerships team for more information."
    },
    {
      question: "What is the duration of your programs?",
      answer: "Program duration varies depending on the type. Workshops typically last 1-3 days, mentorship programs run for 3-6 months, and our comprehensive career development programs can span 6-12 months with ongoing support."
    },
    {
      question: "How do I become a volunteer mentor?",
      answer: "We welcome experienced professionals who want to give back. You can apply through our volunteer section, attend an orientation session, and complete our mentor training program. We provide ongoing support to all our volunteer mentors."
    },
    {
      question: "Do you provide job placement guarantees?",
      answer: "While we cannot guarantee job placement, we have an 85% success rate in helping participants secure employment within 6 months of program completion. We provide ongoing support throughout the job search process."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />
      
      <main className="pb-12">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={contactHeroImage} 
            alt="Professional team meeting in a modern office environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Get In Touch
                </h1>
                <p className="text-xl text-muted-foreground">
                  Have questions about our programs? Want to get involved? We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        aria-describedby="firstName-error"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        aria-describedby="lastName-error"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      aria-describedby="email-error"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="mentorship">Mentorship Program</SelectItem>
                          <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="donation">Donation</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                        aria-describedby="subject-error"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      placeholder="Tell us how we can help you..."
                      aria-describedby="message-error"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

            {/* Contact Information */}
            <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* WhatsApp Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get instant support through WhatsApp for quick questions and updates.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => window.open("https://wa.me/23324123456", "_blank")}
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay connected with us on social media for updates and career tips.
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(social.url, "_blank")}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      {social.icon}
                      {social.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            </div>
          </div>

          {/* FAQs Section */}
          <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-center justify-center">
              <HelpCircle className="w-6 h-6" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
          </Card>

          {/* Location & Map Section */}
          <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Find Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <GoogleMap />
          </CardContent>
          </Card>

          {/* Quick Response Times */}
          <Card>
            <CardContent className="py-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Response Times</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">General Inquiries</Badge>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">WhatsApp</Badge>
                    <p className="text-muted-foreground">Within 2 hours</p>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">Urgent Matters</Badge>
                    <p className="text-muted-foreground">Within 4 hours</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;