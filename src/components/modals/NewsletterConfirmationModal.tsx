import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Edit3, AlertCircle } from "lucide-react";

interface NewsletterConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (email: string) => void;
  email: string;
  interests: string[];
  interestOptions: { id: string; label: string }[];
}

const NewsletterConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  email: initialEmail, 
  interests,
  interestOptions 
}: NewsletterConfirmationModalProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [emailError, setEmailError] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Sync email state with prop when modal opens
  useEffect(() => {
    if (isOpen) {
      setEmail(initialEmail);
      setEmailError("");
      setIsEditing(false);
    }
  }, [isOpen, initialEmail]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    if (email.length > 254) {
      setEmailError("Email address is too long");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value.slice(0, 254);
    setEmail(newEmail);
    if (newEmail && emailError) {
      validateEmail(newEmail);
    }
  };

  const handleConfirm = () => {
    if (validateEmail(email)) {
      onConfirm(email);
    }
  };

  const getSelectedInterestLabels = () => {
    return interests.map(id => 
      interestOptions.find(option => option.id === id)?.label
    ).filter(Boolean);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Confirm Your Subscription
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Email Section */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Email Address</Label>
            {isEditing ? (
              <div className="space-y-2">
                <Input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your.email@example.com"
                  className={emailError ? 'border-destructive' : ''}
                  maxLength={254}
                />
                {emailError && (
                  <div className="flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="w-4 h-4" />
                    {emailError}
                  </div>
                )}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    onClick={() => {
                      if (validateEmail(email)) {
                        setIsEditing(false);
                      }
                    }}
                  >
                    Save
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => {
                      setEmail(initialEmail);
                      setEmailError("");
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <span className="text-sm">{email}</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsEditing(true)}
                  className="h-8 w-8 p-0"
                >
                  <Edit3 className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Interests Section */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Selected Interests</Label>
            {interests.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {getSelectedInterestLabels().map((label, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {label}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No specific interests selected - you'll receive general updates
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleConfirm}
              disabled={!email || !!emailError}
              className="flex-1"
            >
              Confirm Subscription
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterConfirmationModal;