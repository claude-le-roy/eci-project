import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, Eye, Route, Building, Users, Award, Lightbulb, HandHeart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const organizationalPillars = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for the highest standards in all our programs and services, ensuring quality outcomes for every participant."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusivity",
      description: "We welcome students from all backgrounds and provide equal opportunities for growth and development."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously evolve our methods and embrace new technologies to better serve Ghana's youth."
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Impact",
      description: "We focus on creating measurable, lasting change in the lives of young Ghanaians and their communities."
    }
  ];

  const roadmapMilestones = [
    {
      year: "2024",
      title: "Foundation & Growth",
      objectives: [
        "Reach 5,000 program participants",
        "Establish partnerships with 50+ companies",
        "Launch online learning platform",
        "Expand to 3 major Ghanaian cities"
      ],
      progress: 75
    },
    {
      year: "2025",
      title: "Digital Innovation",
      objectives: [
        "Launch AI-powered career matching system",
        "Develop mobile app for all services",
        "Create virtual reality training modules",
        "Partner with 5 international organizations"
      ],
      progress: 30
    },
    {
      year: "2026",
      title: "Regional Expansion",
      objectives: [
        "Expand to 5 West African countries",
        "Establish regional training centers",
        "Launch cross-border mentorship program",
        "Create youth entrepreneurship fund"
      ],
      progress: 15
    },
    {
      year: "2027",
      title: "Sustainability & Scale",
      objectives: [
        "Achieve financial self-sustainability",
        "Impact 100,000+ young professionals",
        "Establish alumni network across Africa",
        "Launch corporate training division"
      ],
      progress: 10
    },
    {
      year: "2028",
      title: "Continental Impact",
      objectives: [
        "Operate in 10+ African countries",
        "Become leading youth development organization",
        "Launch policy advocacy initiatives",
        "Create youth development research institute"
      ],
      progress: 5
    }
  ];

  const achievements = [
    { number: "2,500+", label: "Lives Transformed", description: "Students successfully placed in careers" },
    { number: "85%", label: "Success Rate", description: "Job placement within 6 months" },
    { number: "45+", label: "Partner Organizations", description: "Companies providing opportunities" },
    { number: "150+", label: "Active Mentors", description: "Industry professionals volunteering" }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />
      
      <main className="container mx-auto px-4 pt-20 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Elite Career Initiative
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Founded with a passion for empowering Ghana's youth, we bridge the gap between education and employment, 
            creating pathways for young professionals to thrive in the modern economy.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground leading-relaxed">
                To empower Ghanaian students and young professionals with the skills, resources, and networks 
                needed to successfully transition from academic life into meaningful careers. We provide comprehensive 
                career development programs, mentorship opportunities, and industry connections that prepare our 
                participants for the challenges and opportunities of the modern workplace.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="w-8 h-8 text-secondary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground leading-relaxed">
                To become the leading career development platform in West Africa, known for transforming lives 
                and strengthening the regional economy through youth empowerment. We envision a future where 
                every young Ghanaian has access to quality career guidance, relevant skills training, and 
                meaningful employment opportunities that align with their passions and potential.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Building className="w-8 h-8 text-primary" />
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Elite Career Initiative was born from a simple observation: despite Ghana's growing economy and 
                excellent educational institutions, many talented young people struggled to transition from 
                university to meaningful employment. The disconnect between academic preparation and industry 
                expectations created barriers that limited potential and hindered economic growth.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2023 by a team of passionate educators, industry professionals, and former students 
                who experienced these challenges firsthand, ECI set out to create comprehensive solutions. We 
                began with small workshops at the University of Ghana, focusing on CV writing and interview 
                preparation. The overwhelming response and success stories from our first participants confirmed 
                the critical need for our services.
              </p>
              <p className="text-lg leading-relaxed">
                Today, ECI has evolved into a comprehensive career development platform serving thousands of 
                young Ghanaians. Our programs have expanded to include mentorship matching, skills training, 
                industry networking events, and direct job placement services. We work closely with leading 
                companies across various sectors to ensure our training remains relevant and our participants 
                are equipped with the skills employers actually need.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="font-semibold text-foreground mb-1">{achievement.label}</div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organizational Pillars */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our approach to youth development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizationalPillars.map((pillar, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-primary flex-shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 5-Year Roadmap */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Route className="w-8 h-8 text-primary" />
              5-Year Strategic Roadmap
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our ambitious plan to transform career development across West Africa
            </p>
          </div>

          <div className="space-y-8">
            {roadmapMilestones.map((milestone, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-2">{milestone.year}</Badge>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{milestone.progress}%</div>
                      <div className="text-sm text-muted-foreground">Progress</div>
                    </div>
                  </div>
                  <Progress value={milestone.progress} className="w-full" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {milestone.objectives.map((objective, objIndex) => (
                      <div key={objIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-foreground">{objective}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-brand text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Whether you're a student seeking guidance, a professional wanting to mentor, or an organization 
              looking to make an impact, there's a place for you in the ECI community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#get-involved" 
                className="bg-background text-foreground hover:bg-background/90 transition-colors px-8 py-3 rounded-md font-semibold inline-block"
              >
                Get Involved
              </a>
              <a 
                href="/contact" 
                className="border border-background text-background hover:bg-background hover:text-foreground transition-colors px-8 py-3 rounded-md font-semibold inline-block"
              >
                Contact Us
              </a>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default About;