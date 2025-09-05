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
import { useState } from "react";
import { AddProgramModal } from "./modals/AddProgramModal";
import { GenerateReportModal } from "./modals/GenerateReportModal";
import { ScheduleEventModal } from "./modals/ScheduleEventModal";
import { ManageUsersModal } from "./modals/ManageUsersModal";

const quickActions = [
  {
    id: "add-program",
    title: "Add New Program",
    description: "Create a new program for beneficiaries",
    icon: Plus,
    variant: "default" as const,
    action: "primary"
  },
  {
    id: "generate-report",
    title: "Generate Report",
    description: "Create impact and financial reports",
    icon: FileText,
    variant: "outline" as const,
    action: "secondary"
  },
  {
    id: "manage-users",
    title: "Manage Users",
    description: "Add or edit user permissions",
    icon: Users,
    variant: "outline" as const,
    action: "secondary"
  },
  {
    id: "schedule-event",
    title: "Schedule Event",
    description: "Plan upcoming community events",
    icon: Calendar,
    variant: "outline" as const,
    action: "secondary"
  },
  {
    id: "send-newsletter",
    title: "Send Newsletter",
    description: "Communicate with stakeholders",
    icon: Mail,
    variant: "outline" as const,
    action: "secondary"
  },
  {
    id: "export-data",
    title: "Export Data",
    description: "Download program data",
    icon: Download,
    variant: "outline" as const,
    action: "secondary"
  }
];

export function QuickActions() {
  const [modals, setModals] = useState({
    addProgram: false,
    generateReport: false,
    scheduleEvent: false,
    manageUsers: false
  });

  const openModal = (modalName: keyof typeof modals) => {
    setModals({ ...modals, [modalName]: true });
  };

  const closeModal = (modalName: keyof typeof modals) => {
    setModals({ ...modals, [modalName]: false });
  };

  const handleActionClick = (actionId: string) => {
    switch (actionId) {
      case "add-program":
        openModal("addProgram");
        break;
      case "generate-report":
        openModal("generateReport");
        break;
      case "manage-users":
        openModal("manageUsers");
        break;
      case "schedule-event":
        openModal("scheduleEvent");
        break;
      case "send-newsletter":
        // Handle newsletter action
        break;
      case "export-data":
        // Handle export action
        break;
      default:
        break;
    }
  };

  return (
    <>
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
                onClick={() => handleActionClick(action.id)}
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

      {/* Modals */}
      <AddProgramModal 
        isOpen={modals.addProgram} 
        onClose={() => closeModal("addProgram")} 
      />
      <GenerateReportModal 
        isOpen={modals.generateReport} 
        onClose={() => closeModal("generateReport")} 
      />
      <ScheduleEventModal 
        isOpen={modals.scheduleEvent} 
        onClose={() => closeModal("scheduleEvent")} 
      />
      <ManageUsersModal 
        isOpen={modals.manageUsers} 
        onClose={() => closeModal("manageUsers")} 
      />
    </>
  );
}