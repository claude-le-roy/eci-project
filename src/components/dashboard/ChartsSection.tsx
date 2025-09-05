import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const monthlyData = [
  { month: "Jan", donations: 32000, beneficiaries: 8200, events: 5 },
  { month: "Feb", donations: 38000, beneficiaries: 8900, events: 7 },
  { month: "Mar", donations: 42000, beneficiaries: 9500, events: 6 },
  { month: "Apr", donations: 39000, beneficiaries: 10200, events: 8 },
  { month: "May", donations: 45000, beneficiaries: 11100, events: 9 },
  { month: "Jun", donations: 47392, beneficiaries: 12847, events: 8 },
];

const programData = [
  { name: "Education", value: 35, color: "hsl(280 100% 50%)" },
  { name: "Healthcare", value: 25, color: "hsl(320 100% 70%)" },
  { name: "Housing", value: 20, color: "hsl(340 100% 80%)" },
  { name: "Food Security", value: 20, color: "hsl(300 100% 60%)" },
];

const chartConfig = {
  donations: {
    label: "Donations ($)",
    color: "hsl(280 100% 50%)",
  },
  beneficiaries: {
    label: "Beneficiaries",
    color: "hsl(320 100% 70%)",
  },
  events: {
    label: "Events",
    color: "hsl(340 100% 80%)",
  },
};

export function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Monthly Trends */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Monthly Trends</CardTitle>
          <CardDescription>
            Track donations, beneficiaries, and events over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="donations" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="donations">Donations</TabsTrigger>
              <TabsTrigger value="beneficiaries">Beneficiaries</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="donations" className="space-y-4">
              <ChartContainer config={chartConfig} className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyData}>
                    <defs>
                      <linearGradient id="donationsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(280 100% 50%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(280 100% 50%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="month" className="text-muted-foreground" />
                    <YAxis className="text-muted-foreground" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="donations"
                      stroke="hsl(280 100% 50%)"
                      fill="url(#donationsGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </TabsContent>
            
            <TabsContent value="beneficiaries" className="space-y-4">
              <ChartContainer config={chartConfig} className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="month" className="text-muted-foreground" />
                    <YAxis className="text-muted-foreground" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="beneficiaries"
                      stroke="hsl(320 100% 70%)"
                      strokeWidth={3}
                      dot={{ fill: "hsl(320 100% 70%)", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </TabsContent>
            
            <TabsContent value="events" className="space-y-4">
              <ChartContainer config={chartConfig} className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="month" className="text-muted-foreground" />
                    <YAxis className="text-muted-foreground" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="events"
                      fill="hsl(340 100% 80%)"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Program Distribution */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Program Distribution</CardTitle>
          <CardDescription>
            Breakdown of active programs by category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={programData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {programData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
          
          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {programData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}