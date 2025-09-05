import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, Users, Calendar, DollarSign } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "donation",
    title: "New donation received",
    description: "John Smith donated $500 to Education Program",
    time: "2 minutes ago",
    icon: DollarSign,
    badge: "New"
  },
  {
    id: 2,
    type: "program",
    title: "Program milestone reached",
    description: "Healthcare Initiative reached 1000 beneficiaries",
    time: "1 hour ago",
    icon: Heart,
    badge: "Milestone"
  },
  {
    id: 3,
    type: "user",
    title: "New volunteer registered",
    description: "Sarah Johnson joined the Housing program team",
    time: "3 hours ago",
    icon: Users,
    badge: "Volunteer"
  },
  {
    id: 4,
    type: "event",
    title: "Event scheduled",
    description: "Community Outreach event set for next week",
    time: "5 hours ago",
    icon: Calendar,
    badge: "Event"
  },
  {
    id: 5,
    type: "donation",
    title: "Monthly recurring donation",
    description: "ECI Foundation monthly donation processed",
    time: "1 day ago",
    icon: DollarSign,
    badge: "Recurring"
  }
];

const getIconBgColor = (type: string) => {
  switch (type) {
    case "donation": return "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400";
    case "program": return "bg-gradient-brand text-primary-foreground";
    case "user": return "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400";
    case "event": return "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400";
    default: return "bg-muted text-muted-foreground";
  }
};

const getBadgeVariant = (badge: string) => {
  switch (badge) {
    case "New": return "default";
    case "Milestone": return "secondary";
    case "Volunteer": return "outline";
    case "Event": return "secondary";
    case "Recurring": return "outline";
    default: return "secondary";
  }
};

export function RecentActivity() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest updates and notifications from your programs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <Avatar className={`h-10 w-10 ${getIconBgColor(activity.type)}`}>
                <AvatarFallback className="bg-transparent">
                  <activity.icon className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">
                    {activity.title}
                  </p>
                  <Badge variant={getBadgeVariant(activity.badge)} className="text-xs">
                    {activity.badge}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}