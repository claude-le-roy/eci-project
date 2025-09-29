import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Users, Target, DollarSign, Calendar, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const growthData = [
  { year: "2020", users: 1200, revenue: 45000, programs: 5, events: 12 },
  { year: "2021", users: 2400, revenue: 89000, programs: 8, events: 24 },
  { year: "2022", users: 4800, revenue: 156000, programs: 12, events: 45 },
  { year: "2023", users: 8900, revenue: 234000, programs: 18, events: 67 },
  { year: "2024", users: 12847, revenue: 347000, programs: 24, events: 89 },
];

const quarterlyGrowth = [
  { quarter: "Q1 2023", userGrowth: 15, revenueGrowth: 22, programGrowth: 8 },
  { quarter: "Q2 2023", userGrowth: 28, revenueGrowth: 34, programGrowth: 12 },
  { quarter: "Q3 2023", userGrowth: 45, revenueGrowth: 41, programGrowth: 18 },
  { quarter: "Q4 2023", userGrowth: 67, revenueGrowth: 56, programGrowth: 25 },
  { quarter: "Q1 2024", userGrowth: 78, revenueGrowth: 67, programGrowth: 33 },
  { quarter: "Q2 2024", userGrowth: 89, revenueGrowth: 78, programGrowth: 42 },
];

const projectionData = [
  { period: "Current", value: 347000, projection: null },
  { period: "Q3 2024", value: null, projection: 425000 },
  { period: "Q4 2024", value: null, projection: 520000 },
  { period: "Q1 2025", value: null, projection: 640000 },
  { period: "Q2 2025", value: null, projection: 780000 },
];

const DashboardGrowth = () => {
  const [timeFilter, setTimeFilter] = useState("yearly");

  const currentUsers = 12847;
  const userGrowth = 44.3; // % growth
  const currentRevenue = 347000;
  const revenueGrowth = 48.3; // % growth

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
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Growth Analytics</h1>
                <p className="text-muted-foreground">Platform growth metrics, trends, and projections</p>
              </div>
              
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Growth KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{currentUsers.toLocaleString()}</div>
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span className="text-xs">+{userGrowth}% YoY</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Annual Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">${currentRevenue.toLocaleString()}</div>
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span className="text-xs">+{revenueGrowth}% YoY</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Program Expansion</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">24</div>
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span className="text-xs">+33% YoY</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Event Growth</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">89</div>
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span className="text-xs">+33% YoY</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Growth Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Year-over-Year Growth */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">Year-over-Year Growth</CardTitle>
                  <p className="text-sm text-muted-foreground">5-year platform evolution</p>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      users: { label: "Users", color: "hsl(var(--primary))" },
                      revenue: { label: "Revenue ($)", color: "hsl(var(--secondary))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={growthData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                        <XAxis dataKey="year" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Area 
                          type="monotone" 
                          dataKey="users" 
                          stackId="1"
                          stroke="hsl(var(--primary))" 
                          fill="hsl(var(--primary))"
                          fillOpacity={0.3}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          stackId="2"
                          stroke="hsl(var(--secondary))" 
                          fill="hsl(var(--secondary))"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Quarterly Growth Rates */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">Quarterly Growth Rates</CardTitle>
                  <p className="text-sm text-muted-foreground">Growth percentage by quarter</p>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      userGrowth: { label: "User Growth %", color: "hsl(var(--primary))" },
                      revenueGrowth: { label: "Revenue Growth %", color: "hsl(var(--secondary))" },
                      programGrowth: { label: "Program Growth %", color: "hsl(var(--accent))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={quarterlyGrowth}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                        <XAxis dataKey="quarter" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line type="monotone" dataKey="userGrowth" stroke="hsl(var(--primary))" strokeWidth={2} />
                        <Line type="monotone" dataKey="revenueGrowth" stroke="hsl(var(--secondary))" strokeWidth={2} />
                        <Line type="monotone" dataKey="programGrowth" stroke="hsl(var(--accent))" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Growth Comparison */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Growth Metrics Comparison</CardTitle>
                <p className="text-sm text-muted-foreground">Comprehensive view of all growth metrics</p>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    users: { label: "Users", color: "hsl(var(--primary))" },
                    programs: { label: "Programs", color: "hsl(var(--secondary))" },
                    events: { label: "Events", color: "hsl(var(--accent))" },
                  }}
                  className="h-[350px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={growthData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                      <XAxis dataKey="year" className="text-muted-foreground" />
                      <YAxis className="text-muted-foreground" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="users" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="programs" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="events" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Growth Insights & Projections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Key Insights */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">Growth Insights</CardTitle>
                  <p className="text-sm text-muted-foreground">Key observations and achievements</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground">User Acquisition Acceleration</h4>
                      <p className="text-sm text-muted-foreground">44% year-over-year growth in user base, exceeding targets by 15%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Revenue Growth Momentum</h4>
                      <p className="text-sm text-muted-foreground">48% revenue increase driven by program expansion and donor engagement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Program Scalability</h4>
                      <p className="text-sm text-muted-foreground">Successfully expanded to 24 programs across 5 countries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Event Impact</h4>
                      <p className="text-sm text-muted-foreground">89 events this year with 95% satisfaction rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Future Projections */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">Revenue Projections</CardTitle>
                  <p className="text-sm text-muted-foreground">Based on current growth trends</p>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      value: { label: "Current", color: "hsl(var(--primary))" },
                      projection: { label: "Projected", color: "hsl(var(--secondary))" },
                    }}
                    className="h-[250px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={projectionData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                        <XAxis dataKey="period" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          connectNulls={false}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="projection" 
                          stroke="hsl(var(--secondary))" 
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          connectNulls={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Projected Q4 2024:</span>
                      <span className="font-medium">$520,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Projected Q2 2025:</span>
                      <span className="font-medium">$780,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Growth Rate:</span>
                      <span className="font-medium text-green-600">+125%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardGrowth;