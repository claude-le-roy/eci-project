import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MessageSquare, Send, Archive, Trash2, Reply, Filter, Plus, Mail, AlertCircle } from "lucide-react";
import { useState } from "react";

const messagesData = [
  {
    id: 1,
    from: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    subject: "Program Registration Inquiry",
    message: "Hi, I'm interested in joining the Youth Empowerment program. Could you provide more details about the application process?",
    type: "Inquiry",
    priority: "Medium",
    status: "Unread",
    timestamp: "2024-03-15T09:30:00Z",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    from: "Michael Chen",
    email: "michael.chen@email.com",
    subject: "Partnership Proposal",
    message: "I represent a tech company interested in partnering with your organization for the Women in Tech program. Let's discuss collaboration opportunities.",
    type: "Partnership",
    priority: "High",
    status: "Read",
    timestamp: "2024-03-14T14:20:00Z",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    from: "Lisa Williams",
    email: "lisa.williams@email.com",
    subject: "Event Feedback",
    message: "Thank you for the amazing Digital Literacy workshop. The training was excellent and I learned so much. Looking forward to more events!",
    type: "Feedback",
    priority: "Low",
    status: "Replied",
    timestamp: "2024-03-13T16:45:00Z",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    from: "David Okonkwo",
    email: "david.okonkwo@email.com",
    subject: "Technical Support",
    message: "I'm having trouble accessing my dashboard account. Could you please help me reset my password?",
    type: "Support",
    priority: "Medium",
    status: "In Progress",
    timestamp: "2024-03-12T11:15:00Z",
    avatar: "/placeholder.svg"
  },
  {
    id: 5,
    from: "Grace Kimani",
    email: "grace.kimani@email.com",
    subject: "Volunteer Application",
    message: "I would like to volunteer for your community programs. I have experience in project management and would love to contribute to your mission.",
    type: "Volunteer",
    priority: "Medium",
    status: "Unread",
    timestamp: "2024-03-11T08:20:00Z",
    avatar: "/placeholder.svg"
  },
];

const DashboardMessages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [replyText, setReplyText] = useState("");

  const filteredMessages = messagesData.filter(message => {
    const matchesSearch = message.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || message.type.toLowerCase() === typeFilter;
    const matchesStatus = statusFilter === "all" || message.status.toLowerCase() === statusFilter;
    const matchesPriority = priorityFilter === "all" || message.priority.toLowerCase() === priorityFilter;
    return matchesSearch && matchesType && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "unread": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "read": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      case "replied": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "in progress": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "archived": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "medium": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "low": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const unreadCount = messagesData.filter(m => m.status === "Unread").length;
  const totalMessages = messagesData.length;
  const highPriorityCount = messagesData.filter(m => m.priority === "High").length;

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString() + " " + new Date(timestamp).toLocaleTimeString();
  };

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
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Messages</h1>
                <p className="text-muted-foreground">Manage all communications and inquiries</p>
              </div>
              
              <Dialog open={isComposeOpen} onOpenChange={setIsComposeOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full sm:w-auto">
                    <Plus className="h-4 w-4 mr-2" />
                    Compose Message
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Compose New Message</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <Input placeholder="To: recipient@email.com" />
                    <Input placeholder="Subject" />
                    <Textarea placeholder="Message content..." className="min-h-[120px]" />
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <Button variant="outline">Save Draft</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Messages</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{totalMessages}</div>
                  <p className="text-xs text-muted-foreground">All conversations</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Unread Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{unreadCount}</div>
                  <p className="text-xs text-muted-foreground">Require attention</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">High Priority</CardTitle>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{highPriorityCount}</div>
                  <p className="text-xs text-muted-foreground">Urgent messages</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Response Rate</CardTitle>
                  <Reply className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">94%</div>
                  <p className="text-xs text-muted-foreground">Within 24 hours</p>
                </CardContent>
              </Card>
            </div>

            {/* Messages Table */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">All Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search messages..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:flex lg:gap-2">
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-full lg:w-[140px]">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="inquiry">Inquiry</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full lg:w-[140px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="unread">Unread</SelectItem>
                        <SelectItem value="read">Read</SelectItem>
                        <SelectItem value="replied">Replied</SelectItem>
                        <SelectItem value="in progress">In Progress</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                      <SelectTrigger className="w-full lg:w-[140px]">
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Priority</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>From</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead className="hidden md:table-cell">Type</TableHead>
                        <TableHead className="hidden lg:table-cell">Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden xl:table-cell">Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredMessages.map((message) => (
                        <TableRow key={message.id} className={message.status === "Unread" ? "bg-blue-50/50 dark:bg-blue-950/20" : ""}>
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={message.avatar} alt={message.from} />
                                <AvatarFallback>{message.from.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{message.from}</div>
                                <div className="text-sm text-muted-foreground">{message.email}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="max-w-[200px]">
                              <div className="font-medium truncate">{message.subject}</div>
                              <div className="text-sm text-muted-foreground truncate md:hidden">
                                {message.message}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge variant="outline">{message.type}</Badge>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell">
                            <Badge className={getPriorityColor(message.priority)}>
                              {message.priority}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(message.status)}>
                              {message.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden xl:table-cell">
                            <span className="text-sm">{formatTime(message.timestamp)}</span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" onClick={() => setSelectedMessage(message)}>
                                <Reply className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Archive className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-destructive">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Message Details Modal */}
            {selectedMessage && (
              <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Message Details</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedMessage.avatar} alt={selectedMessage.from} />
                        <AvatarFallback>{selectedMessage.from.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{selectedMessage.from}</div>
                        <div className="text-sm text-muted-foreground">{selectedMessage.email}</div>
                      </div>
                      <div className="text-right">
                        <Badge className={getPriorityColor(selectedMessage.priority)}>
                          {selectedMessage.priority}
                        </Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">{selectedMessage.subject}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{formatTime(selectedMessage.timestamp)}</p>
                      <div className="bg-muted/20 p-4 rounded-lg">
                        <p className="text-foreground">{selectedMessage.message}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Reply</h4>
                      <Textarea 
                        placeholder="Type your reply..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Send className="h-4 w-4 mr-2" />
                        Send Reply
                      </Button>
                      <Button variant="outline">
                        <Archive className="h-4 w-4 mr-2" />
                        Archive
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardMessages;