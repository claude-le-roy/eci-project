import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Loader2 } from "lucide-react";
import { format } from "date-fns";
import RegistrationSuccessModal from "./RegistrationSuccessModal";

const registrationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  participantType: z.enum(["student", "entrepreneur", "graduate", "school-dropout", "professional", "other"], {
    required_error: "Please select your participant type",
  }),
  currentStatus: z.string().min(5, "Please provide more details about your current status").max(200, "Current status must be less than 200 characters"),
  motivation: z.string().min(20, "Please provide at least 20 characters explaining your motivation").max(500, "Motivation must be less than 500 characters"),
  experience: z.string().max(300, "Experience description must be less than 300 characters").optional(),
  expectations: z.string().min(20, "Please provide at least 20 characters about your expectations").max(300, "Expectations must be less than 300 characters"),
  dietaryRestrictions: z.string().max(200, "Dietary restrictions must be less than 200 characters").optional(),
  emergencyContact: z.string().min(10, "Emergency contact must be at least 10 digits").max(15, "Emergency contact must be less than 15 digits"),
  emergencyContactName: z.string().min(2, "Emergency contact name must be at least 2 characters").max(50, "Emergency contact name must be less than 50 characters"),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface EventRegistrationFormProps {
  event: any;
  isOpen: boolean;
  onClose: () => void;
}

const EventRegistrationForm = ({ event, isOpen, onClose }: EventRegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [registrationData, setRegistrationData] = useState<RegistrationFormData | null>(null);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentStatus: "",
      motivation: "",
      experience: "",
      expectations: "",
      dietaryRestrictions: "",
      emergencyContact: "",
      emergencyContactName: "",
    },
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call to external backend
      const payload = {
        ...data,
        eventId: event.id,
        eventTitle: event.title,
        eventDate: event.date,
        registrationDate: new Date().toISOString(),
      };

      // Here you would send to your external backend
      console.log("Registration payload:", payload);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store registration data for success modal
      setRegistrationData(data);
      
      // Close registration form and show success modal
      onClose();
      setShowSuccess(true);
      
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error (you could show a toast notification here)
    } finally {
      setIsSubmitting(false);
    }
  };

  const participantTypeOptions = [
    { value: "student", label: "Current Student" },
    { value: "graduate", label: "Recent Graduate" },
    { value: "entrepreneur", label: "Aspiring Entrepreneur" },
    { value: "school-dropout", label: "School Dropout" },
    { value: "professional", label: "Working Professional" },
    { value: "other", label: "Other" },
  ];

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              Register for Event
            </DialogTitle>
            <DialogDescription className="space-y-2">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {format(event.date, "MMMM d, yyyy")}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                <Badge variant="secondary" className="mt-2">
                  {event.type}
                </Badge>
              </div>
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+233 XX XXX XXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="participantType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Participant Type *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your current status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {participantTypeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="currentStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Status Details *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., Final year Computer Science student, Unemployed graduate seeking opportunities, Running a small business" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Event-Specific Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                  Event Information
                </h3>

                <FormField
                  control={form.control}
                  name="motivation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why do you want to attend this event? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Explain your motivation for attending this event and what you hope to gain"
                          className="min-h-[80px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Relevant Experience (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe any relevant experience or skills you have in this area"
                          className="min-h-[60px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="expectations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What are your expectations from this event? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What specific outcomes or learning objectives do you hope to achieve?"
                          className="min-h-[60px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                  Additional Information
                </h3>

                <FormField
                  control={form.control}
                  name="dietaryRestrictions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dietary Restrictions or Allergies (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Please specify any dietary restrictions or allergies"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="emergencyContactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Emergency Contact Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="emergencyContact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Emergency Contact Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+233 XX XXX XXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting} className="flex-1">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Registering...
                    </>
                  ) : (
                    "Register for Event"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <RegistrationSuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        event={event}
        registrationData={registrationData}
      />
    </>
  );
};

export default EventRegistrationForm;