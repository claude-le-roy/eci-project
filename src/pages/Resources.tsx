import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Download, Search, BookOpen, Video, FileText, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy data for resources
  const resources = {
    templates: [
      {
        id: 1,
        title: "Modern CV Template - Tech Professionals",
        description: "Clean, professional CV template perfect for software developers and tech professionals",
        type: "PDF Template",
        downloads: 1250,
        tags: ["Tech", "Professional", "Modern"]
      },
      {
        id: 2,
        title: "Graduate CV Template",
        description: "Entry-level CV template designed for fresh graduates and students",
        type: "Word Template", 
        downloads: 980,
        tags: ["Graduate", "Entry-Level", "Student"]
      },
      {
        id: 3,
        title: "Creative Portfolio CV",
        description: "Visually appealing template for creative professionals and designers",
        type: "PDF Template",
        downloads: 720,
        tags: ["Creative", "Portfolio", "Design"]
      }
    ],
    guides: [
      {
        id: 4,
        title: "Complete Interview Preparation Guide",
        description: "Comprehensive guide covering common interview questions and best practices",
        type: "PDF Guide",
        downloads: 2100,
        tags: ["Interview", "Preparation", "Career"]
      },
      {
        id: 5,
        title: "LinkedIn Optimization Handbook", 
        description: "Step-by-step guide to creating a powerful LinkedIn profile",
        type: "PDF Guide",
        downloads: 1650,
        tags: ["LinkedIn", "Networking", "Professional"]
      },
      {
        id: 6,
        title: "Salary Negotiation Strategies",
        description: "Learn proven techniques for negotiating better compensation packages",
        type: "PDF Guide",
        downloads: 890,
        tags: ["Salary", "Negotiation", "Career Growth"]
      }
    ],
    webinars: [
      {
        id: 7,
        title: "Building Your Personal Brand in Tech",
        description: "Live webinar on establishing yourself as a thought leader in technology",
        type: "Webinar Recording",
        duration: "45 mins",
        tags: ["Personal Brand", "Tech", "Leadership"]
      },
      {
        id: 8,
        title: "Remote Work Success Strategies",
        description: "Essential skills and tools for thriving in remote work environments",
        type: "Webinar Recording", 
        duration: "60 mins",
        tags: ["Remote Work", "Productivity", "Skills"]
      },
      {
        id: 9,
        title: "Entrepreneurship in Ghana",
        description: "Panel discussion with successful Ghanaian entrepreneurs",
        type: "Panel Discussion",
        duration: "90 mins",
        tags: ["Entrepreneurship", "Ghana", "Business"]
      }
    ],
    blogs: [
      {
        id: 10,
        title: "Top 10 Skills Employers Want in 2024",
        description: "Analysis of the most in-demand skills in today's job market",
        type: "Blog Article",
        readTime: "8 min read",
        tags: ["Skills", "Trends", "Employment"]
      },
      {
        id: 11,
        title: "Transitioning from University to Workplace",
        description: "Essential tips for new graduates entering the professional world",
        type: "Blog Article",
        readTime: "6 min read", 
        tags: ["Graduate", "Transition", "Career Start"]
      },
      {
        id: 12,
        title: "The Future of Work in Africa",
        description: "Exploring emerging career opportunities across African markets",
        type: "Blog Article",
        readTime: "10 min read",
        tags: ["Africa", "Future", "Opportunities"]
      }
    ]
  };

  const getIcon = (type: string) => {
    if (type.includes('Template')) return <FileText className="w-6 h-6" />;
    if (type.includes('Guide')) return <BookOpen className="w-6 h-6" />;
    if (type.includes('Webinar') || type.includes('Discussion')) return <Video className="w-6 h-6" />;
    return <Users className="w-6 h-6" />;
  };

  const filteredResources = (items: any[]) => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />
      
      <main className="container mx-auto px-4 pt-20 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resource Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive collection of career development resources to accelerate your professional journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search resources, guides, templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            aria-label="Search resources"
          />
        </div>

        {/* Resource Categories */}
        <Tabs defaultValue="templates" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="templates" aria-label="CV Templates">CV Templates</TabsTrigger>
            <TabsTrigger value="guides" aria-label="Career Guides">Career Guides</TabsTrigger>
            <TabsTrigger value="webinars" aria-label="Webinars">Webinars</TabsTrigger>
            <TabsTrigger value="blogs" aria-label="Blog Articles">Blog Articles</TabsTrigger>
          </TabsList>

          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources(resources.templates).map((resource) => (
                <Card key={resource.id} className="hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {getIcon(resource.type)}
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      <Badge variant="secondary">{resource.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {resource.downloads} downloads
                      </span>
                      <Button size="sm" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources(resources.guides).map((resource) => (
                <Card key={resource.id} className="hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {getIcon(resource.type)}
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      <Badge variant="secondary">{resource.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {resource.downloads} downloads
                      </span>
                      <Button size="sm" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="webinars">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources(resources.webinars).map((resource) => (
                <Card key={resource.id} className="hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {getIcon(resource.type)}
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      <Badge variant="secondary">{resource.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Duration: {resource.duration}
                      </span>
                      <Button size="sm" className="gap-2">
                        <Video className="w-4 h-4" />
                        Watch
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blogs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources(resources.blogs).map((resource) => (
                <Card key={resource.id} className="hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {getIcon(resource.type)}
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      <Badge variant="secondary">{resource.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {resource.readTime}
                      </span>
                      <Button size="sm" variant="outline">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;