
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RecruitmentCallCTA = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setPhoneNumber("");
      toast({
        title: "Success!",
        description: "A mock recruiter will call you shortly. Be prepared!",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <Card className="overflow-hidden border-auditor-200 shadow-lg">
      <CardContent className="p-6 md:p-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-auditor-100 flex items-center justify-center text-auditor-700">
              <Phone size={20} />
            </div>
            <h3 className="text-xl font-semibold">Get a Real Mock Interview Call</h3>
          </div>
          
          <p className="text-muted-foreground">
            Enter your phone number below to receive a call from one of our mock recruiters. 
            Experience a real interview scenario and test your preparation.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="tel"
                placeholder="Your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Format: 10-digit number without spaces or dashes
              </p>
            </div>
            
            <Button 
              type="submit" 
              className={cn(
                "w-full gap-2",
                "bg-auditor-500 hover:bg-auditor-600 text-white"
              )}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Scheduling..." : "Schedule Mock Interview Call"}
              <Phone size={16} />
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground">
            By submitting your number, you agree to receive a phone call from our mock recruitment service. 
            Your information will not be used for any other purpose.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecruitmentCallCTA;
