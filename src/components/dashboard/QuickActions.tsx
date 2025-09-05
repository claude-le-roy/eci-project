import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  FileText, 
  Users, 
  Calendar,
  Mail,
  Settings,
  Download,
  Upload
} from "lucide-react";

const quickActions = [
  {
    title: "Add New Program",
    description: "Create a new program for beneficiaries",
    icon: Plus,
    variant: "default" as const,
    action: "primary"
  },
  {
    title: "Generate Report",
    description: "Create impact and financial reports",
    icon: FileText,
    variant: "outline" as const,
    action: "secondary"
  },
  {
    title: "Manage Users",
    description: "Add or edit user permissions",
    icon: Users,
    variant: "outline" as const,
    action: "secondary"
  },
  {
    title: "Schedule Event",
    description: "Plan upcoming community events",
    icon: Calendar,
    variant: "outline" as const,
    action: "secondary"
  },
  {
    title: "Send Newsletter",
    description: "Communicate with stakeholders",
    icon: Mail,
    variant: "outline" as const,
    action: "secondary"
  },
  {
    title: "Export Data",
    description: "Download program data",
    icon: Download,
    variant: "outline" as const,
    action: "secondary"
  }
];

export function QuickActions() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>
          Frequently used dashboard actions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className={`h-auto flex flex-col items-center justify-center p-4 space-y-2 text-center ${
                action.action === "primary" 
                  ? "bg-gradient-brand hover:bg-gradient-brand/90 text-primary-foreground" 
                  : ""
              }`}
            >
              <action.icon className="h-5 w-5" />
              <div>
                <div className="text-sm font-medium">
                  {action.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {action.description}
                </div>
              </div>
            </Button>
          ))}
        </div>
        
        {/* Additional Actions */}
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="flex-1">
              <Upload className="h-4 w-4 mr-2" />
              Import Data
            </Button>
            <Button variant="ghost" size="sm" className="flex-1">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}