import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Mail, 
  Phone,
  User,
  Download,
  Share2
} from "lucide-react";
import { format } from "date-fns";

interface RegistrationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: any;
  registrationData: any;
}

const RegistrationSuccessModal = ({ 
  isOpen, 
  onClose, 
  event, 
  registrationData 
}: RegistrationSuccessModalProps) => {
  const [showCheckAnimation, setShowCheckAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Trigger check animation after modal opens
      const timer = setTimeout(() => {
        setShowCheckAnimation(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowCheckAnimation(false);
    }
  }, [isOpen]);

  const generateConfirmationNumber = () => {
    const eventCode = event.title.substring(0, 3).toUpperCase();
    const randomNum = Math.floor(Math.random() * 90000) + 10000;
    return `${eventCode}${randomNum}`;
  };

  const confirmationNumber = generateConfirmationNumber();

  const downloadConfirmation = () => {
    const confirmationText = `
Event Registration Confirmation
==============================

Confirmation Number: ${confirmationNumber}
Event: ${event.title}
Date: ${format(event.date, "MMMM d, yyyy")}
Time: ${event.time}
Location: ${event.location}

Registrant Information:
Name: ${registrationData?.firstName} ${registrationData?.lastName}
Email: ${registrationData?.email}
Phone: ${registrationData?.phone}
Type: ${registrationData?.participantType}

Thank you for registering with Elite Career Initiative!
For questions, contact us at info@elitecareerinitiative.org
    `;

    const blob = new Blob([confirmationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ECI-Event-Confirmation-${confirmationNumber}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareEvent = () => {
    if (navigator.share) {
      navigator.share({
        title: `Registered for ${event.title}`,
        text: `I just registered for ${event.title} with Elite Career Initiative!`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const text = `I just registered for ${event.title} with Elite Career Initiative! Join me: ${window.location.href}`;
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md text-center">
        <DialogHeader className="text-center">
          {/* Animated Check Circle */}
          <div className="flex justify-center mb-4">
            <div className={`relative ${showCheckAnimation ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-brand">
                <CheckCircle className="w-12 h-12 text-primary-foreground animate-bounce" />
              </div>
              {/* Success rings animation */}
              <div className={`absolute inset-0 rounded-full border-4 border-primary/30 ${showCheckAnimation ? 'animate-ping' : ''}`} />
              <div className={`absolute inset-0 rounded-full border-4 border-primary/20 ${showCheckAnimation ? 'animate-ping' : ''} animation-delay-75`} />
            </div>
          </div>

          <DialogTitle className="text-2xl font-bold text-foreground">
            Registration Successful!
          </DialogTitle>
          <DialogDescription className="text-base">
            You've successfully registered for the event. Check your email for confirmation details.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Confirmation Number */}
          <div className="bg-gradient-subtle p-4 rounded-lg border">
            <p className="text-sm text-muted-foreground mb-1">Confirmation Number</p>
            <p className="text-xl font-bold text-foreground font-mono tracking-wider">
              {confirmationNumber}
            </p>
          </div>

          {/* Event Details */}
          <div className="bg-muted p-4 rounded-lg text-left">
            <h3 className="font-semibold text-foreground mb-3 flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              Event Details
            </h3>
            
            <div className="space-y-2 text-sm">
              <div>
                <strong className="text-foreground">{event.title}</strong>
                <Badge variant="secondary" className="ml-2 text-xs">
                  {event.type}
                </Badge>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                {format(event.date, "EEEE, MMMM d, yyyy")}
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
          </div>

          {/* Registrant Details */}
          {registrationData && (
            <div className="bg-muted p-4 rounded-lg text-left">
              <h3 className="font-semibold text-foreground mb-3 flex items-center">
                <User className="w-4 h-4 mr-2 text-primary" />
                Your Information
              </h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <User className="w-4 h-4 mr-2" />
                  {registrationData.firstName} {registrationData.lastName}
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  {registrationData.email}
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  {registrationData.phone}
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg text-left">
            <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Check your email for detailed event information</li>
              <li>• Add the event to your calendar</li>
              <li>• Prepare any required materials mentioned in the email</li>
              <li>• Arrive 15 minutes early on the event day</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <Button 
            variant="outline" 
            onClick={downloadConfirmation}
            className="flex-1"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          
          <Button 
            variant="outline" 
            onClick={shareEvent}
            className="flex-1"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          
          <Button 
            onClick={onClose}
            className="flex-1"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationSuccessModal;