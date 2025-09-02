import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Linkedin, Twitter, Mail, Award, Users, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Team = () => {
  // CEO Information
  const ceo = {
    name: "Dr. Kwame Asante",
    position: "Chief Executive Officer & Founder",
    image: "👨‍💼",
    bio: "Dr. Kwame Asante brings over 15 years of experience in education and youth development. Former Director of Career Services at University of Ghana, he holds a PhD in Educational Leadership and has been recognized as a leading voice in African youth empowerment.",
    achievements: [
      "PhD in Educational Leadership, Harvard University",
      "Former Director of Career Services, University of Ghana",
      "Author of 'Bridging the Gap: Education to Employment in Africa'",
      "Recipient of the Ghana Youth Development Excellence Award 2022"
    ],
    social: {
      linkedin: "https://linkedin.com/in/kwameasante",
      twitter: "https://twitter.com/kwameasante",
      email: "kwame.asante@eci.gh"
    }
  };

  // Board of Directors
  const boardMembers = [
    {
      name: "Prof. Akosua Mensah",
      position: "Chairperson of the Board",
      image: "👩‍🎓",
      company: "University of Ghana Business School",
      bio: "Leading academic and researcher in business education with 20+ years experience. Former Dean of UGBS.",
      expertise: ["Academic Leadership", "Strategic Planning", "Research"]
    },
    {
      name: "Mr. Kofi Oppong",
      position: "Board Member - Finance",
      image: "👨‍💻",
      company: "PwC Ghana, Managing Partner",
      bio: "Senior financial executive with extensive experience in corporate finance and business development.",
      expertise: ["Corporate Finance", "Business Strategy", "Risk Management"]
    },
    {
      name: "Ms. Ama Darko",
      position: "Board Member - Industry Relations",
      image: "👩‍💼",
      company: "MTN Ghana, HR Director",
      bio: "Human resources leader specializing in talent development and organizational transformation.",
      expertise: ["Talent Development", "HR Strategy", "Change Management"]
    },
    {
      name: "Dr. Yaw Osei",
      position: "Board Member - Technology",
      image: "👨‍🔬",
      company: "Tech Innovators Ghana, CTO",
      bio: "Technology entrepreneur and innovator focused on digital solutions for education and career development.",
      expertise: ["EdTech", "Digital Innovation", "Software Development"]
    }
  ];

  // Core Team
  const coreTeam = [
    {
      name: "Sarah Adjei",
      position: "Director of Programs",
      image: "👩‍🏫",
      department: "Programs & Training",
      bio: "Leads all career development programs with expertise in curriculum design and student success.",
      experience: "8 years in youth development"
    },
    {
      name: "Michael Boateng",
      position: "Head of Partnerships",
      image: "👨‍🤝‍👨",
      department: "Corporate Relations",
      bio: "Manages relationships with partner organizations and develops new collaboration opportunities.",
      experience: "10 years in business development"
    },
    {
      name: "Grace Owusu",
      position: "Director of Operations",
      image: "👩‍💻",
      department: "Operations & Finance",
      bio: "Oversees daily operations, financial management, and organizational efficiency initiatives.",
      experience: "12 years in operations management"
    },
    {
      name: "Daniel Nkrumah",
      position: "Technology Lead",
      image: "👨‍💻",
      department: "Technology & Innovation",
      bio: "Develops and maintains our digital platforms and explores innovative tech solutions.",
      experience: "6 years in software development"
    },
    {
      name: "Abena Gyasi",
      position: "Communications Manager",
      image: "👩‍📢",
      department: "Marketing & Communications",
      bio: "Manages all communications, marketing campaigns, and social media presence.",
      experience: "5 years in digital marketing"
    },
    {
      name: "Joseph Mensah",
      position: "Mentorship Coordinator",
      image: "👨‍🏫",
      department: "Mentorship Programs",
      bio: "Coordinates our mentorship programs and facilitates mentor-mentee matching.",
      experience: "7 years in program coordination"
    }
  ];

  // Program Coordinators
  const programCoordinators = [
    {
      name: "Fatima Abdul-Rahman",
      position: "Skills Training Coordinator",
      image: "👩‍🎯",
      programs: ["CV Workshops", "Interview Preparation", "Soft Skills Training"],
      bio: "Specializes in professional skills development and career readiness training."
    },
    {
      name: "Richmond Appiah",
      position: "Job Placement Specialist",
      image: "👨‍💼",
      programs: ["Job Matching", "Career Counseling", "Industry Networking"],
      bio: "Connects students with employment opportunities and provides career guidance."
    },
    {
      name: "Priscilla Nkansah",
      position: "Workshop Facilitator",
      image: "👩‍🏫",
      programs: ["Leadership Training", "Entrepreneurship", "Digital Literacy"],
      bio: "Experienced trainer in leadership development and entrepreneurial skills."
    },
    {
      name: "Emmanuel Owusu",
      position: "Student Success Advisor",
      image: "👨‍🎓",
      programs: ["Academic Support", "Career Planning", "Alumni Relations"],
      bio: "Provides comprehensive support to ensure student success throughout their journey."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />
      
      <main className="container mx-auto px-4 pt-20 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate professionals dedicated to empowering Ghana's youth and transforming career development across West Africa.
          </p>
        </div>

        <Tabs defaultValue="ceo" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="ceo" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              CEO
            </TabsTrigger>
            <TabsTrigger value="board" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Board
            </TabsTrigger>
            <TabsTrigger value="core" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Core Team
            </TabsTrigger>
            <TabsTrigger value="coordinators" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Coordinators
            </TabsTrigger>
          </TabsList>

          {/* CEO Section */}
          <TabsContent value="ceo">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="text-center">
                    <div className="text-8xl mb-4">{ceo.image}</div>
                    <h2 className="text-2xl font-bold text-foreground mb-1">{ceo.name}</h2>
                    <p className="text-lg text-primary font-medium mb-4">{ceo.position}</p>
                    <div className="flex justify-center gap-3">
                      <Button size="sm" variant="outline" onClick={() => window.open(ceo.social.linkedin, "_blank")}>
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => window.open(ceo.social.twitter, "_blank")}>
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => window.open(`mailto:${ceo.social.email}`)}>
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-4">Biography</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{ceo.bio}</p>
                    
                    <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                    <ul className="space-y-3">
                      {ceo.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Board of Directors */}
          <TabsContent value="board">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boardMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{member.image}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <p className="text-primary font-medium">{member.position}</p>
                        <p className="text-sm text-muted-foreground">{member.company}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Core Team */}
          <TabsContent value="core">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreTeam.map((member, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{member.image}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-1">{member.position}</p>
                    <Badge variant="outline" className="mb-4">{member.department}</Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{member.bio}</p>
                    <p className="text-xs text-muted-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Program Coordinators */}
          <TabsContent value="coordinators">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programCoordinators.map((coordinator, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{coordinator.image}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{coordinator.name}</CardTitle>
                        <p className="text-primary font-medium">{coordinator.position}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{coordinator.bio}</p>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Programs Led:</h4>
                      <div className="flex flex-wrap gap-2">
                        {coordinator.programs.map((program) => (
                          <Badge key={program} variant="secondary">{program}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Team Stats */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-center">Team by the Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <p className="text-sm text-muted-foreground">Years Combined Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <p className="text-sm text-muted-foreground">Different Departments</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <p className="text-sm text-muted-foreground">Universities Represented</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Join Our Team CTA */}
        <Card className="mt-16 bg-gradient-brand text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Are you passionate about youth development and want to make a lasting impact? 
              We're always looking for talented individuals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-background text-foreground hover:bg-background/90 transition-colors px-8 py-3 rounded-md font-semibold inline-block"
              >
                View Open Positions
              </a>
              <a 
                href="mailto:careers@eci.gh" 
                className="border border-background text-background hover:bg-background hover:text-foreground transition-colors px-8 py-3 rounded-md font-semibold inline-block"
              >
                Send Your CV
              </a>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Team;