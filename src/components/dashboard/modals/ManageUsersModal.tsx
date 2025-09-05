import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Mail, 
  Shield, 
  UserCheck,
  UserX,
  MoreHorizontal 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ManageUsersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  lastActive: string;
  programs: string[];
}

export function ManageUsersModal({ isOpen, onClose }: ManageUsersModalProps) {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("users");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  
  // Mock user data
  const [users] = useState<User[]>([
    {
      id: "1",
      name: "Sarah Kimani",
      email: "sarah@eci.org",
      role: "admin",
      status: "active",
      lastActive: "2 hours ago",
      programs: ["Education Support", "Healthcare Access"]
    },
    {
      id: "2", 
      name: "John Mwangi",
      email: "john@eci.org",
      role: "program-manager",
      status: "active",
      lastActive: "1 day ago",
      programs: ["Community Development"]
    },
    {
      id: "3",
      name: "Grace Wanjiku", 
      email: "grace@eci.org",
      role: "volunteer",
      status: "active",
      lastActive: "3 hours ago",
      programs: ["Emergency Relief"]
    },
    {
      id: "4",
      name: "David Ochieng",
      email: "david@eci.org", 
      role: "volunteer",
      status: "pending",
      lastActive: "Never",
      programs: []
    }
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    programs: [] as string[]
  });

  const roles = [
    { value: "admin", label: "Administrator", color: "destructive" },
    { value: "program-manager", label: "Program Manager", color: "default" },
    { value: "volunteer", label: "Volunteer", color: "secondary" },
    { value: "donor", label: "Donor", color: "outline" }
  ];

  const availablePrograms = [
    "Education Support",
    "Healthcare Access", 
    "Community Development",
    "Emergency Relief",
    "Economic Empowerment"
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !selectedRole || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newUser.name || !newUser.email || !newUser.role) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "User Added",
      description: `${newUser.name} has been added successfully.`,
    });

    setNewUser({ name: "", email: "", role: "", programs: [] });
  };

  const handleUserAction = (action: string, user: User) => {
    toast({
      title: "Action Completed",
      description: `${action} performed for ${user.name}.`,
    });
  };

  const getRoleColor = (role: string) => {
    return roles.find(r => r.value === role)?.color || "outline";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "default";
      case "inactive": return "secondary"; 
      case "pending": return "outline";
      default: return "outline";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Manage Users
          </DialogTitle>
          <DialogDescription>
            Manage user accounts, roles, and permissions for the ECI platform.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="users">All Users</TabsTrigger>
            <TabsTrigger value="add">Add User</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            {/* Filters */}
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Roles</SelectItem>
                  {roles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Users List */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{user.name}</h4>
                          <Badge variant={getRoleColor(user.role) as any}>
                            {roles.find(r => r.value === user.role)?.label}
                          </Badge>
                          <Badge variant={getStatusColor(user.status) as any}>
                            {user.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {user.email} • Last active: {user.lastActive}
                        </div>
                        {user.programs.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {user.programs.slice(0, 2).map((program) => (
                              <Badge key={program} variant="outline" className="text-xs">
                                {program}
                              </Badge>
                            ))}
                            {user.programs.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{user.programs.length - 2} more
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleUserAction("Edit", user)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleUserAction("Send Email", user)}>
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email
                        </DropdownMenuItem>
                        {user.status === "active" ? (
                          <DropdownMenuItem onClick={() => handleUserAction("Deactivate", user)}>
                            <UserX className="h-4 w-4 mr-2" />
                            Deactivate
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleUserAction("Activate", user)}>
                            <UserCheck className="h-4 w-4 mr-2" />
                            Activate
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem 
                          onClick={() => handleUserAction("Delete", user)}
                          className="text-destructive"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}

              {filteredUsers.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No users found matching your criteria.
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="add" className="space-y-4">
            <form onSubmit={handleAddUser} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    placeholder="e.g., Sarah Kimani"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    placeholder="e.g., sarah@eci.org"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role *</Label>
                <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select user role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Program Access</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {availablePrograms.map((program) => (
                    <div key={program} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={program}
                        checked={newUser.programs.includes(program)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewUser({ 
                              ...newUser, 
                              programs: [...newUser.programs, program] 
                            });
                          } else {
                            setNewUser({ 
                              ...newUser, 
                              programs: newUser.programs.filter(p => p !== program) 
                            });
                          }
                        }}
                        className="rounded border-border"
                      />
                      <Label htmlFor={program} className="text-sm">{program}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-brand text-primary-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}