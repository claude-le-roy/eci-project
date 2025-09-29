import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { Download, FileText, Users, Heart, TrendingUp, Calendar, Filter } from "lucide-react";
import { useState } from "react";

const impactData = [
  { program: "Youth Empowerment", beneficiaries: 247, sessions: 156, placements: 89, completion: 85 },
  { program: "Women in Tech", beneficiaries: 89, sessions: 67, placements: 45, completion: 92 },
  { program: "Health Outreach", beneficiaries: 156, sessions: 89, placements: 0, completion: 78 },
  { program: "Digital Literacy", beneficiaries: 67, sessions: 45, placements: 23, completion: 88 },
];

const monthlyImpact = [
  { month: "Jan", beneficiaries: 245, sessions: 189, placements: 67 },
  { month: "Feb", beneficiaries: 298, sessions: 234, placements: 89 },
  { month: "Mar", beneficiaries: 367, sessions: 289, placements: 112 },
  { month: "Apr", beneficiaries: 445, sessions: 356, placements: 134 },
  { month: "May", beneficiaries: 523, sessions: 434, placements: 156 },
  { month: "Jun", beneficiaries: 598, sessions: 489, placements: 178 },
];

const regionData = [
  { region: "Lagos", beneficiaries: 1245, programs: 8, events: 23 },
  { region: "Accra", beneficiaries: 867, programs: 6, events: 18 },
  { region: "Nairobi", beneficiaries: 934, programs: 7, events: 21 },
  { region: "Cape Town", beneficiaries: 567, programs: 4, events: 12 },
  { region: "Abuja", beneficiaries: 789, programs: 5, events: 16 },
];

const DashboardReports = () => {
  const [timeFilter, setTimeFilter] = useState("yearly");
  const [programFilter, setProgramFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const totalBeneficiaries = impactData.reduce((sum, p) => sum + p.beneficiaries, 0);
  const totalSessions = impactData.reduce((sum, p) => sum + p.sessions, 0);
  const totalPlacements = impactData.reduce((sum, p) => sum + p.placements, 0);
  const avgCompletion = Math.round(impactData.reduce((sum, p) => sum + p.completion, 0) / impactData.length);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-warm">
        <AppSidebar />
        
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          
          <div className="flex-1 p-4 md:p-6 space-y-6 overflow-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Impact Reports</h1>
                <p className="text-muted-foreground">Comprehensive impact metrics and analytics</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export PDF
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
                <Button className="w-full sm:w-auto">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </div>

            {/* Filters */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Report Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Select value={timeFilter} onValueChange={setTimeFilter}>
                    <SelectTrigger>
                      <Calendar className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Time Period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={programFilter} onValueChange={setProgramFilter}>
                    <SelectTrigger>
                      <Heart className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Programs</SelectItem>
                      <SelectItem value="youth">Youth Empowerment</SelectItem>
                      <SelectItem value="women">Women in Tech</SelectItem>
                      <SelectItem value="health">Health Outreach</SelectItem>
                      <SelectItem value="digital">Digital Literacy</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger>
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="lagos">Lagos</SelectItem>
                      <SelectItem value="accra">Accra</SelectItem>
                      <SelectItem value="nairobi">Nairobi</SelectItem>
                      <SelectItem value="capetown">Cape Town</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <DatePicker placeholderText="Custom Date Range" />
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Beneficiaries</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{totalBeneficiaries.toLocaleString()}</div>
                  <p className="text-xs text-green-600 dark:text-green-400">+15.2% from last period</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Mentorship Sessions</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{totalSessions.toLocaleString()}</div>
                  <p className="text-xs text-green-600 dark:text-green-400">+8.7% from last period</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Job Placements</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{totalPlacements}</div>
                  <p className="text-xs text-green-600 dark:text-green-400">+23.4% from last period</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Completion Rate</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{avgCompletion}%</div>
                  <p className="text-xs text-green-600 dark:text-green-400">+3.1% from last period</p>
                </CardContent>
              </Card>
            </div>

            {/* Impact Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Impact Trends */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">Monthly Impact Trends</CardTitle>
                  <p className="text-sm text-muted-foreground">Growth in beneficiaries, sessions, and placements</p>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      beneficiaries: { label: "Beneficiaries", color: "hsl(var(--primary))" },
                      sessions: { label: "Sessions", color: "hsl(var(--secondary))" },
                      placements: { label: "Placements", color: "hsl(var(--accent))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyImpact}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                        <XAxis dataKey="month" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line type="monotone" dataKey="beneficiaries" stroke="hsl(var(--primary))" strokeWidth={2} />
                        <Line type="monotone" dataKey="sessions" stroke="hsl(var(--secondary))" strokeWidth={2} />
                        <Line type="monotone" dataKey="placements" stroke="hsl(var(--accent))" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Program Comparison */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">Program Performance</CardTitle>
                  <p className="text-sm text-muted-foreground">Beneficiaries and completion rates by program</p>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      beneficiaries: { label: "Beneficiaries", color: "hsl(var(--primary))" },
                      completion: { label: "Completion %", color: "hsl(var(--secondary))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={impactData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                        <XAxis dataKey="program" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="beneficiaries" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="completion" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Regional Impact */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Regional Impact Distribution</CardTitle>
                <p className="text-sm text-muted-foreground">Impact metrics across different regions</p>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    beneficiaries: { label: "Beneficiaries", color: "hsl(var(--primary))" },
                    programs: { label: "Programs", color: "hsl(var(--secondary))" },
                    events: { label: "Events", color: "hsl(var(--accent))" },
                  }}
                  className="h-[350px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={regionData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                      <XAxis dataKey="region" className="text-muted-foreground" />
                      <YAxis className="text-muted-foreground" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="beneficiaries" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="programs" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="events" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Impact Summary */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Impact Summary</CardTitle>
                <p className="text-sm text-muted-foreground">Key achievements and milestones</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Program Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2,847</div>
                    <div className="text-sm text-muted-foreground">Lives Directly Impacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">85%</div>
                    <div className="text-sm text-muted-foreground">Employment Rate Post-Program</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardReports;