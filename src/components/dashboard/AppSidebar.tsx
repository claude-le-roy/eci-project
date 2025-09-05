import { 
  BarChart3, 
  Users, 
  Calendar, 
  Settings, 
  FileText, 
  TrendingUp,
  MapPin,
  Heart,
  MessageSquare,
  Home
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import EciLogo from "@/components/EciLogo";

const navigationItems = [
  { title: "Overview", url: "/dashboard", icon: Home },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Programs", url: "/dashboard/programs", icon: Heart },
  { title: "Users", url: "/dashboard/users", icon: Users },
  { title: "Events", url: "/dashboard/events", icon: Calendar },
  { title: "Impact Reports", url: "/dashboard/reports", icon: FileText },
  { title: "Growth", url: "/dashboard/growth", icon: TrendingUp },
  { title: "Locations", url: "/dashboard/locations", icon: MapPin },
  { title: "Messages", url: "/dashboard/messages", icon: MessageSquare },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-gradient-brand text-primary-foreground">
        {/* Logo Section */}
        <div className="p-4 border-b border-primary-foreground/20">
          <div className="flex items-center gap-3">
            <EciLogo />
            {!isCollapsed && (
              <div>
                <h2 className="font-semibold text-lg">ECI Dashboard</h2>
                <p className="text-sm text-primary-foreground/80">Admin Panel</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-primary-foreground/80">
            {!isCollapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-primary-foreground/20 text-primary-foreground font-medium"
                            : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Profile Section */}
        {!isCollapsed && (
          <div className="mt-auto p-4 border-t border-primary-foreground/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary-foreground">Admin User</p>
                <p className="text-xs text-primary-foreground/60 truncate">admin@eci.org</p>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}