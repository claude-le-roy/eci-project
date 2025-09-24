import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, BookOpen, Target, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventRegistrationForm from "@/components/programs/EventRegistrationForm";
import { format } from "date-fns";
import programsHeroImage from "@/assets/programs-hero.jpg";

const Programs = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showRegistration, setShowRegistration] = useState(false);

  // Sample programs data - can be updated from admin dashboard
  const programs = [
    {
      id: 1,
      title: "Tech Skills Bootcamp",
      description: "Intensive 12-week program focusing on web development, data analysis, and digital marketing skills.",
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      category: "Technology",
      features: ["Web Development", "Data Analysis", "Digital Marketing", "Portfolio Building"],
      color: "bg-gradient-primary"
    },
    {
      id: 2,
      title: "Entrepreneurship Academy",
      description: "Comprehensive program for aspiring entrepreneurs to develop business acumen and leadership skills.",
      duration: "8 weeks",
      level: "All Levels",
      category: "Business",
      features: ["Business Planning", "Financial Literacy", "Market Research", "Pitch Development"],
      color: "bg-gradient-secondary"
    },
    {
      id: 3,
      title: "Career Transition Program",
      description: "Specialized program for career changers and recent graduates entering the job market.",
      duration: "6 weeks",
      level: "All Levels",
      category: "Career Development",
      features: ["Resume Building", "Interview Skills", "Networking", "Industry Insights"],
      color: "bg-gradient-accent"
    }
  ];

  // Sample upcoming events data - can be updated from admin dashboard
  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      description: "Learn the fundamentals of HTML, CSS, and JavaScript in this hands-on workshop.",
      date: new Date(2024, 9, 15), // October 15, 2024
      time: "10:00 AM - 4:00 PM",
      location: "ECI Training Center, Accra",
      type: "Workshop",
      maxParticipants: 30,
      currentParticipants: 18,
      requirements: "Basic computer skills",
      programId: 1
    },
    {
      id: 2,
      title: "Business Pitch Competition",
      description: "Present your business ideas to a panel of investors and industry experts.",
      date: new Date(2024, 9, 22), // October 22, 2024
      time: "2:00 PM - 6:00 PM",
      location: "Ghana Tech Hub, Kumasi",
      type: "Competition",
      maxParticipants: 20,
      currentParticipants: 12,
      requirements: "Completed business plan",
      programId: 2
    },
    {
      id: 3,
      title: "Career Fair & Networking",
      description: "Connect with potential employers and expand your professional network.",
      date: new Date(2024, 9, 28), // October 28, 2024
      time: "9:00 AM - 5:00 PM",
      location: "University of Ghana, Legon",
      type: "Networking",
      maxParticipants: 100,
      currentParticipants: 67,
      requirements: "Resume required",
      programId: 3
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      description: "Advanced strategies for social media marketing and content creation.",
      date: new Date(2024, 10, 5), // November 5, 2024
      time: "1:00 PM - 5:00 PM",
      location: "Online Event",
      type: "Masterclass",
      maxParticipants: 50,
      currentParticipants: 23,
      requirements: "Basic marketing knowledge",
      programId: 1
    }
  ];

  const handleRegisterClick = (event: any) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  const handleRegistrationClose = () => {
    setShowRegistration(false);
    setSelectedEvent(null);
  };

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'workshop':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'competition':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'networking':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'masterclass':
        return 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />
      
      <main className="pb-12">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={programsHeroImage} 
            alt="Diverse young Ghanaian students and professionals collaborating in a modern training environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Programs & Events
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover our comprehensive career development programs and upcoming events designed to empower Ghana's youth with essential skills and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-12 relative z-10">

          {/* Programs Section */}
          <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Our Programs</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Card key={program.id} className="hover:shadow-elegant transition-all duration-300 border-border/50">
                <div className={`h-2 ${program.color} rounded-t-lg`} />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                      <CardDescription className="mt-2">{program.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {program.duration}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Target className="w-3 h-3 mr-1" />
                      {program.level}
                    </Badge>
                    <Badge variant="default" className="text-xs">
                      {program.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

          {/* Upcoming Events Section */}
          <section>
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {event.currentParticipants}/{event.maxParticipants} registered
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground">{event.title}</CardTitle>
                      <CardDescription className="mt-2">{event.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {format(event.date, "MMMM d, yyyy")}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {event.requirements}
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        onClick={() => handleRegisterClick(event)}
                        className="w-full"
                        disabled={event.currentParticipants >= event.maxParticipants}
                      >
                        {event.currentParticipants >= event.maxParticipants ? (
                          <>
                            <Users className="w-4 h-4 mr-2" />
                            Event Full
                          </>
                        ) : (
                          <>
                            <Briefcase className="w-4 h-4 mr-2" />
                            Register Now
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Event Registration Modal */}
      {showRegistration && selectedEvent && (
        <EventRegistrationForm
          event={selectedEvent}
          isOpen={showRegistration}
          onClose={handleRegistrationClose}
        />
      )}
    </div>
  );
};

export default Programs;