import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Users, Calendar, Heart, Search, Plus, Filter, Globe } from "lucide-react";
import { useState } from "react";

const locationsData = [
  {
    id: 1,
    city: "Lagos",
    country: "Nigeria",
    region: "West Africa",
    coordinates: { lat: 6.5244, lng: 3.3792 },
    users: 3247,
    programs: 8,
    events: 23,
    status: "Active",
    established: "2022-01-15",
    impact: "High"
  },
  {
    id: 2,
    city: "Accra",
    country: "Ghana",
    region: "West Africa",
    coordinates: { lat: 5.6037, lng: -0.1870 },
    users: 1867,
    programs: 6,
    events: 18,
    status: "Active",
    established: "2022-06-20",
    impact: "High"
  },
  {
    id: 3,
    city: "Nairobi",
    country: "Kenya",
    region: "East Africa",
    coordinates: { lat: -1.2921, lng: 36.8219 },
    users: 2134,
    programs: 7,
    events: 21,
    status: "Active",
    established: "2022-03-10",
    impact: "High"
  },
  {
    id: 4,
    city: "Cape Town",
    country: "South Africa",
    region: "Southern Africa",
    coordinates: { lat: -33.9249, lng: 18.4241 },
    users: 1567,
    programs: 5,
    events: 15,
    status: "Active",
    established: "2023-01-08",
    impact: "Medium"
  },
  {
    id: 5,
    city: "Abuja",
    country: "Nigeria",
    region: "West Africa",
    coordinates: { lat: 9.0765, lng: 7.3986 },
    users: 1234,
    programs: 4,
    events: 12,
    status: "Expanding",
    established: "2023-08-15",
    impact: "Medium"
  },
  {
    id: 6,
    city: "Kumasi",
    country: "Ghana",
    region: "West Africa",
    coordinates: { lat: 6.6885, lng: -1.6244 },
    users: 456,
    programs: 2,
    events: 5,
    status: "Planning",
    established: null,
    impact: "Low"
  },
];

const regionSummary = [
  { region: "West Africa", locations: 4, users: 6804, programs: 20, events: 58 },
  { region: "East Africa", locations: 1, users: 2134, programs: 7, events: 21 },
  { region: "Southern Africa", locations: 1, users: 1567, programs: 5, events: 15 },
];

const DashboardLocations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredLocations = locationsData.filter(location => {
    const matchesSearch = location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = regionFilter === "all" || location.region === regionFilter;
    const matchesStatus = statusFilter === "all" || location.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesRegion && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "expanding": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "planning": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "inactive": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case "high": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "medium": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "low": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const totalLocations = locationsData.length;
  const activeLocations = locationsData.filter(l => l.status === "Active").length;
  const totalUsers = locationsData.reduce((sum, l) => sum + l.users, 0);
  const totalPrograms = locationsData.reduce((sum, l) => sum + l.programs, 0);

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
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Locations</h1>
                <p className="text-muted-foreground">Manage global presence and regional impact</p>
              </div>
              
              <Button className="w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Add Location
              </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Locations</CardTitle>
                  <Globe className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{totalLocations}</div>
                  <p className="text-xs text-muted-foreground">Across 3 regions</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Locations</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{activeLocations}</div>
                  <p className="text-xs text-muted-foreground">{Math.round((activeLocations / totalLocations) * 100)}% operational</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Global Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">All locations</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Global Programs</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{totalPrograms}</div>
                  <p className="text-xs text-muted-foreground">Active programs</p>
                </CardContent>
              </Card>
            </div>

            {/* Regional Overview */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Regional Overview</CardTitle>
                <p className="text-sm text-muted-foreground">Summary by geographical region</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {regionSummary.map((region, index) => (
                    <div key={index} className="text-center p-4 rounded-lg border border-border/50">
                      <h3 className="font-semibold text-foreground mb-2">{region.region}</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-2xl font-bold text-primary">{region.locations}</div>
                          <div className="text-muted-foreground">Locations</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{region.users.toLocaleString()}</div>
                          <div className="text-muted-foreground">Users</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{region.programs}</div>
                          <div className="text-muted-foreground">Programs</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{region.events}</div>
                          <div className="text-muted-foreground">Events</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Locations Table */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">All Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search locations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={regionFilter} onValueChange={setRegionFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="West Africa">West Africa</SelectItem>
                      <SelectItem value="East Africa">East Africa</SelectItem>
                      <SelectItem value="Southern Africa">Southern Africa</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-[150px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="expanding">Expanding</SelectItem>
                      <SelectItem value="planning">Planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Location</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden sm:table-cell">Users</TableHead>
                        <TableHead className="hidden md:table-cell">Programs</TableHead>
                        <TableHead className="hidden lg:table-cell">Events</TableHead>
                        <TableHead className="hidden xl:table-cell">Impact</TableHead>
                        <TableHead className="hidden xl:table-cell">Established</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLocations.map((location) => (
                        <TableRow key={location.id}>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <div className="font-medium">{location.city}</div>
                                <div className="text-sm text-muted-foreground">{location.country}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm">{location.region}</span>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(location.status)}>
                              {location.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-1 text-muted-foreground" />
                              {location.users.toLocaleString()}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <div className="flex items-center">
                              <Heart className="h-3 w-3 mr-1 text-muted-foreground" />
                              {location.programs}
                            </div>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
                              {location.events}
                            </div>
                          </TableCell>
                          <TableCell className="hidden xl:table-cell">
                            <Badge className={getImpactColor(location.impact)}>
                              {location.impact}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden xl:table-cell">
                            {location.established ? new Date(location.established).toLocaleDateString() : "Pending"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Global Presence Map</CardTitle>
                <p className="text-sm text-muted-foreground">Interactive map showing all locations</p>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">Global presence visualization with location details</p>
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

export default DashboardLocations;