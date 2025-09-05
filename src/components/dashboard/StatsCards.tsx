import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Heart, 
  TrendingUp, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight 
} from "lucide-react";

const stats = [
  {
    title: "Total Beneficiaries",
    value: "12,847",
    change: "+12.5%",
    changeType: "positive",
    icon: Users,
    description: "Active program participants"
  },
  {
    title: "Programs Running",
    value: "24",
    change: "+3",
    changeType: "positive", 
    icon: Heart,
    description: "Currently active programs"
  },
  {
    title: "Monthly Donations",
    value: "$47,392",
    change: "+8.2%",
    changeType: "positive",
    icon: TrendingUp,
    description: "This month's donations"
  },
  {
    title: "Upcoming Events",
    value: "8",
    change: "-2",
    changeType: "negative",
    icon: Calendar,
    description: "Next 30 days"
  }
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className="p-2 bg-gradient-brand rounded-lg">
              <stat.icon className="h-4 w-4 text-primary-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="flex items-center gap-2">
              <Badge 
                variant={stat.changeType === "positive" ? "default" : "destructive"}
                className={`text-xs ${
                  stat.changeType === "positive" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}
              >
                {stat.changeType === "positive" ? (
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                )}
                {stat.change}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}