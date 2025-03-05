
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlarmClock, Mail, UserPlus, ListChecks } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("You've been added to our waitlist!");
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-b from-background to-auditor-50/30 dark:to-auditor-950/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Join Our Exclusive Waitlist</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Due to high demand, we're currently accepting a limited number of new users. 
            Reserve your spot now to get early access.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <Card className="glass-panel col-span-1 lg:col-span-3">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Be First in Line</h2>
              <p className="text-muted-foreground mb-8">
                Leave your email address to secure your spot and get notified as soon as you're granted access.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="h-12 bg-auditor-500 hover:bg-auditor-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Adding..." : "Join Waitlist"}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  We respect your privacy and will never share your information.
                </p>
              </form>
              
              <div className="mt-12">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-auditor-500">
                    <AlarmClock size={18} />
                  </span>
                  <span className="text-sm font-medium">
                    Average wait time: 3-5 business days
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-auditor-500">
                    <UserPlus size={18} />
                  </span>
                  <span className="text-sm font-medium">
                    Over 2,400 auditors already on the waitlist
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-panel col-span-1 lg:col-span-2 bg-gradient-to-br from-auditor-500 to-auditor-700 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Why Join Early?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-3">
                  <span className="mt-1 text-auditor-200">
                    <ListChecks size={18} />
                  </span>
                  <div>
                    <h3 className="font-medium mb-1">Priority Access</h3>
                    <p className="text-auditor-100">Get early access to our interview training platform before it's available to the general public.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="mt-1 text-auditor-200">
                    <Mail size={18} />
                  </span>
                  <div>
                    <h3 className="font-medium mb-1">Exclusive Tips</h3>
                    <p className="text-auditor-100">Receive exclusive interview tips and insights directly to your inbox while you wait.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="mt-1 text-auditor-200">
                    <UserPlus size={18} />
                  </span>
                  <div>
                    <h3 className="font-medium mb-1">Founding Member Status</h3>
                    <p className="text-auditor-100">Join as a founding member and get special benefits that will only be available to early adopters.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Link
            to="/"
            className="text-auditor-500 hover:text-auditor-600 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
