import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Users, Calendar, DollarSign, Download, Filter } from "lucide-react";
import { useState } from "react";

const monthlyData = [
  { month: "Jan", users: 2400, donations: 3400, events: 12 },
  { month: "Feb", users: 1398, donations: 2210, events: 8 },
  { month: "Mar", users: 9800, donations: 7290, events: 15 },
  { month: "Apr", users: 3908, donations: 4000, events: 18 },
  { month: "May", users: 4800, donations: 4810, events: 22 },
  { month: "Jun", users: 3800, donations: 3800, events: 19 },
];

const engagementData = [
  { name: "High", value: 45, color: "hsl(var(--primary))" },
  { name: "Medium", value: 35, color: "hsl(var(--secondary))" },
  { name: "Low", value: 20, color: "hsl(var(--muted))" },
];

const ageDemographicsData = [
  { ageRange: "13-17", count: 45, percentage: 12.9 },
  { ageRange: "18-24", count: 120, percentage: 34.3 },
  { ageRange: "25-34", count: 95, percentage: 27.1 },
  { ageRange: "35-44", count: 58, percentage: 16.6 },
  { ageRange: "45-54", count: 22, percentage: 6.3 },
  { ageRange: "55+", count: 10, percentage: 2.8 },
];

const kpiData = [
  { title: "User Engagement Rate", value: "78.5%", change: "+5.2%", icon: Users },
  { title: "Program Completion", value: "82.3%", change: "+3.1%", icon: TrendingUp },
  { title: "Event Attendance", value: "91.7%", change: "+2.8%", icon: Calendar },
  { title: "Revenue Growth", value: "$52,847", change: "+12.4%", icon: DollarSign },
];

const DashboardAnalytics = () => {
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [timeFilter, setTimeFilter] = useState("monthly");

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
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Analytics Dashboard</h1>
                <p className="text-muted-foreground">Comprehensive performance metrics and insights</p>
              </div>
              
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Select value={timeFilter} onValueChange={setTimeFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Time Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                
                <DatePicker
                  selected={dateRange.from}
                  onSelect={(date) => setDateRange({...dateRange, from: date})}
                  placeholderText="Start Date"
                  className="w-full sm:w-auto"
                />
                
                <DatePicker
                  selected={dateRange.to}
                  onSelect={(date) => setDateRange({...dateRange, to: date})}
                  placeholderText="End Date"
                  className="w-full sm:w-auto"
                />
                
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {kpiData.map((kpi, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {kpi.title}
                    </CardTitle>
                    <div className="p-2 bg-gradient-brand rounded-lg">
                      <kpi.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl md:text-2xl font-bold text-foreground">
                      {kpi.value}
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      {kpi.change} from last period
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Trends */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">Monthly Trends</CardTitle>
                  <p className="text-sm text-muted-foreground">Users, donations, and events over time</p>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      users: { label: "Users", color: "hsl(var(--primary))" },
                      donations: { label: "Donations", color: "hsl(var(--secondary))" },
                      events: { label: "Events", color: "hsl(var(--accent))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                        <XAxis dataKey="month" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2} />
                        <Line type="monotone" dataKey="donations" stroke="hsl(var(--secondary))" strokeWidth={2} />
                        <Line type="monotone" dataKey="events" stroke="hsl(var(--accent))" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Engagement Distribution */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">User Engagement</CardTitle>
                  <p className="text-sm text-muted-foreground">Distribution of engagement levels</p>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      high: { label: "High", color: "hsl(var(--primary))" },
                      medium: { label: "Medium", color: "hsl(var(--secondary))" },
                      low: { label: "Low", color: "hsl(var(--muted))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={engagementData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {engagementData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Performance Comparison</CardTitle>
                <p className="text-sm text-muted-foreground">Monthly performance across key metrics</p>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    users: { label: "Users", color: "hsl(var(--primary))" },
                    donations: { label: "Donations", color: "hsl(var(--secondary))" },
                  }}
                  className="h-[350px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                      <XAxis dataKey="month" className="text-muted-foreground" />
                      <YAxis className="text-muted-foreground" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="users" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="donations" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Age Demographics Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Age Demographics</CardTitle>
                <p className="text-sm text-muted-foreground">Distribution of users by age range - insights on target demographic</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ChartContainer
                  config={{
                    count: { label: "User Count", color: "hsl(var(--primary))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ageDemographicsData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                      <XAxis dataKey="ageRange" className="text-muted-foreground" />
                      <YAxis className="text-muted-foreground" />
                      <ChartTooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-background border border-border p-3 rounded-lg shadow-elegant">
                                <p className="font-semibold text-foreground">{payload[0].payload.ageRange} years</p>
                                <p className="text-sm text-muted-foreground">
                                  Count: {payload[0].payload.count} users
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Percentage: {payload[0].payload.percentage}%
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Legend />
                      <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="User Count" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {ageDemographicsData.map((range, index) => (
                    <div key={index} className="p-4 border border-border/50 rounded-lg bg-card/30 hover:shadow-lg transition-all">
                      <p className="text-sm font-medium text-muted-foreground">{range.ageRange} yrs</p>
                      <p className="text-2xl font-bold text-foreground">{range.count}</p>
                      <p className="text-xs text-muted-foreground">{range.percentage}%</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Key Demographic Insights
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span><strong>Primary Target (18-34):</strong> 61.4% of users fall in this range, indicating strong engagement from young adults and early career professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span><strong>Emerging Demographic (13-17):</strong> 12.9% are teenagers, showing growing interest in early career development and mentorship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span><strong>Growth Opportunity (45+):</strong> Only 9.1% of users are 45+, presenting an opportunity to expand programs targeting experienced professionals as mentors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span><strong>Program Alignment:</strong> Current age distribution aligns well with ECI's mission to train and empower young professionals entering the workforce</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardAnalytics;