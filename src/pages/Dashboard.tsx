import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ChartsSection } from "@/components/dashboard/ChartsSection";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { DashboardFilters } from "@/components/dashboard/DashboardFilters";
import { DashboardLoader } from "@/components/dashboard/DashboardLoader";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    dateRange: { from: null, to: null },
    program: "",
    status: "",
    location: "",
    searchTerm: ""
  });

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second loading simulation

    return () => clearTimeout(timer);
  }, []);

  // Handle filter changes
  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
    // Here you would typically refetch data based on filters
    console.log("Filters changed:", newFilters);
  };

  if (isLoading) {
    return <DashboardLoader />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-warm">
        <AppSidebar />
        
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          
          <div className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Data Filters */}
            <DashboardFilters onFiltersChange={handleFiltersChange} />
            
            {/* Dashboard Stats */}
            <StatsCards />
            
            {/* Charts and Analytics */}
            <ChartsSection />
            
            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentActivity />
              <QuickActions />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;