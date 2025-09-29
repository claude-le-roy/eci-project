import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User, Mail, Phone, MapPin, Shield, Lock, Bell, Activity, Camera, Save, Eye } from "lucide-react";
import { useState } from "react";

const DashboardProfile = () => {
  const [profile, setProfile] = useState({
    firstName: "Admin",
    lastName: "User",
    email: "admin@eci.org",
    phone: "+1 (555) 123-4567",
    location: "Lagos, Nigeria",
    bio: "Platform administrator with 5+ years of experience in nonprofit management and community development.",
    timezone: "UTC+1",
    language: "English"
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    twoFactor: false
  });

  const loginHistory = [
    { id: 1, date: "2024-03-15", time: "09:30 AM", location: "Lagos, Nigeria", device: "Chrome on Windows", status: "Success" },
    { id: 2, date: "2024-03-14", time: "02:15 PM", location: "Lagos, Nigeria", device: "Mobile Safari", status: "Success" },
    { id: 3, date: "2024-03-13", time: "11:45 AM", location: "Lagos, Nigeria", device: "Chrome on Windows", status: "Success" },
    { id: 4, date: "2024-03-12", time: "08:20 AM", location: "Lagos, Nigeria", device: "Firefox on Mac", status: "Success" },
    { id: 5, date: "2024-03-11", time: "04:30 PM", location: "Unknown", device: "Chrome on Linux", status: "Failed" },
  ];

  const activityLog = [
    { id: 1, action: "Updated user permissions", timestamp: "2024-03-15 09:45", details: "Modified access for 3 users" },
    { id: 2, action: "Created new program", timestamp: "2024-03-14 14:20", details: "Digital Skills Workshop" },
    { id: 3, action: "Generated monthly report", timestamp: "2024-03-13 11:30", details: "Impact assessment report" },
    { id: 4, action: "Updated system settings", timestamp: "2024-03-12 16:10", details: "Modified notification preferences" },
    { id: 5, action: "Approved user registrations", timestamp: "2024-03-11 10:15", details: "Approved 12 new users" },
  ];

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
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Profile</h1>
                <p className="text-muted-foreground">Manage your account settings and preferences</p>
              </div>
              
              <Button className="w-full sm:w-auto">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>

            {/* Profile Overview */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback className="text-lg">AU</AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full p-2">
                      <Camera className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <h2 className="text-2xl font-bold text-foreground">
                        {profile.firstName} {profile.lastName}
                      </h2>
                      <Badge className="bg-gradient-brand text-primary-foreground w-fit">
                        <Shield className="h-3 w-3 mr-1" />
                        Administrator
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {profile.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {profile.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {profile.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right space-y-2">
                    <div className="text-sm text-muted-foreground">Last Login</div>
                    <div className="font-medium">March 15, 2024</div>
                    <div className="text-sm text-muted-foreground">09:30 AM</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Tabs */}
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="personal" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Personal</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span className="hidden sm:inline">Security</span>
                </TabsTrigger>
                <TabsTrigger value="preferences" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="hidden sm:inline">Preferences</span>
                </TabsTrigger>
                <TabsTrigger value="activity" className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  <span className="hidden sm:inline">Activity</span>
                </TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal" className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-foreground">Personal Information</CardTitle>
                    <p className="text-sm text-muted-foreground">Update your personal details</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          value={profile.firstName}
                          onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          value={profile.lastName}
                          onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          value={profile.phone}
                          onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input 
                        id="location" 
                        value={profile.location}
                        onChange={(e) => setProfile({...profile, location: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea 
                        id="bio" 
                        value={profile.bio}
                        onChange={(e) => setProfile({...profile, bio: e.target.value})}
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security" className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-foreground">Password & Authentication</CardTitle>
                    <p className="text-sm text-muted-foreground">Manage your account security</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" placeholder="Enter current password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" placeholder="Enter new password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
                      </div>
                      <Button>Update Password</Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Switch 
                        checked={preferences.twoFactor}
                        onCheckedChange={(checked) => setPreferences({...preferences, twoFactor: checked})}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-foreground">Login History</CardTitle>
                    <p className="text-sm text-muted-foreground">Recent account access activity</p>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date & Time</TableHead>
                            <TableHead className="hidden md:table-cell">Location</TableHead>
                            <TableHead className="hidden lg:table-cell">Device</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {loginHistory.map((login) => (
                            <TableRow key={login.id}>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{login.date}</div>
                                  <div className="text-sm text-muted-foreground">{login.time}</div>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">{login.location}</TableCell>
                              <TableCell className="hidden lg:table-cell">{login.device}</TableCell>
                              <TableCell>
                                <Badge className={login.status === "Success" ? 
                                  "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : 
                                  "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                }>
                                  {login.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences */}
              <TabsContent value="preferences" className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-foreground">Notification Preferences</CardTitle>
                    <p className="text-sm text-muted-foreground">Choose how you want to be notified</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive updates via email</p>
                      </div>
                      <Switch 
                        checked={preferences.emailNotifications}
                        onCheckedChange={(checked) => setPreferences({...preferences, emailNotifications: checked})}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium">Push Notifications</h4>
                        <p className="text-sm text-muted-foreground">Browser notifications for urgent updates</p>
                      </div>
                      <Switch 
                        checked={preferences.pushNotifications}
                        onCheckedChange={(checked) => setPreferences({...preferences, pushNotifications: checked})}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium">Weekly Reports</h4>
                        <p className="text-sm text-muted-foreground">Automated weekly summary reports</p>
                      </div>
                      <Switch 
                        checked={preferences.weeklyReports}
                        onCheckedChange={(checked) => setPreferences({...preferences, weeklyReports: checked})}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Activity Log */}
              <TabsContent value="activity" className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-foreground">Recent Activity</CardTitle>
                    <p className="text-sm text-muted-foreground">Your recent actions and changes</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activityLog.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border/50">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-foreground">{activity.action}</div>
                            <div className="text-sm text-muted-foreground">{activity.details}</div>
                            <div className="text-xs text-muted-foreground mt-1">{activity.timestamp}</div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardProfile;