import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface NewsletterSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  interests: string[];
  interestOptions: { id: string; label: string }[];
}

const NewsletterSuccessModal = ({ 
  isOpen, 
  onClose, 
  email, 
  interests,
  interestOptions 
}: NewsletterSuccessModalProps) => {
  const getSelectedInterestLabels = () => {
    return interests.map(id => 
      interestOptions.find(option => option.id === id)?.label
    ).filter(Boolean);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md text-center">
        <div className="space-y-6 py-4">
          {/* Animated Check Icon */}
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
            <CheckCircle className="w-8 h-8 text-primary animate-fade-in" />
          </div>

          {/* Success Message */}
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-foreground">
              Successfully Subscribed!
            </h2>
            <p className="text-muted-foreground">
              Welcome to the ECI community! You're now subscribed to:
            </p>
          </div>

          {/* Newsletter Details */}
          <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
            {/* Email */}
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Email:</p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>

            {/* Newsletter Interests */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Newsletter Topics:</p>
              {interests.length > 0 ? (
                <div className="flex flex-wrap gap-2 justify-center">
                  {getSelectedInterestLabels().map((label, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {label}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">
                  General ECI updates and announcements
                </p>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Check your email for a welcome message!</p>
            <p>You can update your preferences or unsubscribe at any time.</p>
          </div>

          {/* Close Button */}
          <Button onClick={onClose} className="w-full">
            Continue Exploring ECI
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterSuccessModal;