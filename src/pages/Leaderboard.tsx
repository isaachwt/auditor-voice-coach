
import React, { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Trophy, Star, Clock, User, Mail, Phone, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// User data type for leaderboard
interface LeaderboardUser {
  id: number;
  name: string;
  avatarUrl: string;
  hoursSpent: number;
  interviewsCompleted: number;
  averageScore: number;
  rank: number;
  email?: string;
  phone?: string;
}

const Leaderboard = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState<"score" | "hours">("score");
  const [contactForm, setContactForm] = useState<{show: boolean, userId: number | null}>({
    show: false,
    userId: null
  });
  const [contactInfo, setContactInfo] = useState({
    recruiterName: "",
    recruiterEmail: "",
    recruiterCompany: "",
    message: ""
  });

  // Mock data for the leaderboard - in a real app this would come from an API
  const leaderboardData: LeaderboardUser[] = [
    { id: 1, name: "Sarah Johnson", avatarUrl: "https://i.pravatar.cc/150?img=1", hoursSpent: 25.5, interviewsCompleted: 15, averageScore: 92, rank: 1 },
    { id: 2, name: "Michael Chen", avatarUrl: "https://i.pravatar.cc/150?img=2", hoursSpent: 22.3, interviewsCompleted: 12, averageScore: 90, rank: 2 },
    { id: 3, name: "Emily Rodriguez", avatarUrl: "https://i.pravatar.cc/150?img=3", hoursSpent: 20.1, interviewsCompleted: 14, averageScore: 88, rank: 3 },
    { id: 4, name: "David Kim", avatarUrl: "https://i.pravatar.cc/150?img=4", hoursSpent: 18.7, interviewsCompleted: 10, averageScore: 87, rank: 4 },
    { id: 5, name: "Jessica Williams", avatarUrl: "https://i.pravatar.cc/150?img=5", hoursSpent: 17.9, interviewsCompleted: 11, averageScore: 86, rank: 5 },
    { id: 6, name: "Robert Taylor", avatarUrl: "https://i.pravatar.cc/150?img=6", hoursSpent: 16.5, interviewsCompleted: 9, averageScore: 85, rank: 6 },
    { id: 7, name: "Amanda Brown", avatarUrl: "https://i.pravatar.cc/150?img=7", hoursSpent: 15.8, interviewsCompleted: 8, averageScore: 84, rank: 7 },
    { id: 8, name: "James Davis", avatarUrl: "https://i.pravatar.cc/150?img=8", hoursSpent: 15.2, interviewsCompleted: 10, averageScore: 83, rank: 8 },
    { id: 9, name: "Sophia Martinez", avatarUrl: "https://i.pravatar.cc/150?img=9", hoursSpent: 14.6, interviewsCompleted: 7, averageScore: 82, rank: 9 },
    { id: 10, name: "Thomas Wilson", avatarUrl: "https://i.pravatar.cc/150?img=10", hoursSpent: 14.1, interviewsCompleted: 8, averageScore: 81, rank: 10 },
    { id: 11, name: "Olivia Anderson", avatarUrl: "https://i.pravatar.cc/150?img=11", hoursSpent: 13.5, interviewsCompleted: 6, averageScore: 80, rank: 11 },
    { id: 12, name: "Daniel Thompson", avatarUrl: "https://i.pravatar.cc/150?img=12", hoursSpent: 13.0, interviewsCompleted: 7, averageScore: 79, rank: 12 },
    { id: 13, name: "Lauren Garcia", avatarUrl: "https://i.pravatar.cc/150?img=13", hoursSpent: 12.4, interviewsCompleted: 5, averageScore: 78, rank: 13 },
    { id: 14, name: "William Moore", avatarUrl: "https://i.pravatar.cc/150?img=14", hoursSpent: 11.9, interviewsCompleted: 6, averageScore: 77, rank: 14 },
    { id: 15, name: "Ava Jackson", avatarUrl: "https://i.pravatar.cc/150?img=15", hoursSpent: 11.3, interviewsCompleted: 4, averageScore: 76, rank: 15 },
    { id: 16, name: "Christopher Lee", avatarUrl: "https://i.pravatar.cc/150?img=16", hoursSpent: 10.8, interviewsCompleted: 5, averageScore: 75, rank: 16 },
    { id: 17, name: "Natalie White", avatarUrl: "https://i.pravatar.cc/150?img=17", hoursSpent: 10.2, interviewsCompleted: 3, averageScore: 74, rank: 17 },
    { id: 18, name: "Matthew Harris", avatarUrl: "https://i.pravatar.cc/150?img=18", hoursSpent: 9.7, interviewsCompleted: 4, averageScore: 73, rank: 18 },
    { id: 19, name: "Emma Martin", avatarUrl: "https://i.pravatar.cc/150?img=19", hoursSpent: 9.1, interviewsCompleted: 2, averageScore: 72, rank: 19 },
    { id: 20, name: "Andrew Robinson", avatarUrl: "https://i.pravatar.cc/150?img=20", hoursSpent: 8.6, interviewsCompleted: 3, averageScore: 71, rank: 20 }
  ];

  // Sort data based on filter
  const sortedData = [...leaderboardData].sort((a, b) => {
    if (filter === "score") {
      return b.averageScore - a.averageScore;
    } else {
      return b.hoursSpent - a.hoursSpent;
    }
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the contact request to the backend
    console.log("Contact request submitted:", {
      userId: contactForm.userId,
      ...contactInfo
    });
    
    // Show success message
    toast({
      title: "Contact Request Sent!",
      description: "Your request has been sent to the candidate.",
      duration: 5000,
    });
    
    // Reset form
    setContactForm({ show: false, userId: null });
    setContactInfo({
      recruiterName: "",
      recruiterEmail: "",
      recruiterCompany: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-auditor-50/30 dark:to-auditor-950/30">
      <Header />
      
      <main className="flex-1 container mx-auto pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Top Auditor Candidates
          </h1>
          
          <p className="text-center text-muted-foreground mb-8">
            Discover top talent based on interview performance and practice hours
          </p>
          
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-2">
              <Trophy className="text-auditor-500" size={18} />
              <h2 className="font-semibold text-xl">Leaderboard</h2>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={filter === "score" ? "default" : "outline"}
                onClick={() => setFilter("score")}
                className={filter === "score" ? "bg-auditor-500 hover:bg-auditor-600" : ""}
                size="sm"
              >
                <Star size={16} className="mr-1" /> Score
              </Button>
              <Button
                variant={filter === "hours" ? "default" : "outline"}
                onClick={() => setFilter("hours")}
                className={filter === "hours" ? "bg-auditor-500 hover:bg-auditor-600" : ""}
                size="sm"
              >
                <Clock size={16} className="mr-1" /> Practice Hours
              </Button>
            </div>
          </div>
          
          {/* Leaderboard Table */}
          <Card className="mb-8 glass-panel overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-auditor-100/50 dark:bg-auditor-900/50">
                      <th className="py-3 px-4 text-left font-medium">Rank</th>
                      <th className="py-3 px-4 text-left font-medium">Candidate</th>
                      <th className="py-3 px-4 text-left font-medium">Hours Practiced</th>
                      <th className="py-3 px-4 text-left font-medium">Interviews</th>
                      <th className="py-3 px-4 text-left font-medium">Avg. Score</th>
                      <th className="py-3 px-4 text-left font-medium">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedData.map((user, index) => (
                      <tr 
                        key={user.id} 
                        className={cn(
                          "border-t border-border hover:bg-muted/50 transition-colors",
                          index < 3 ? "bg-auditor-50/30 dark:bg-auditor-900/20" : ""
                        )}
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            {index < 3 ? (
                              <div className={cn(
                                "w-7 h-7 rounded-full flex items-center justify-center text-white font-medium text-sm mr-2",
                                index === 0 ? "bg-yellow-500" : 
                                index === 1 ? "bg-gray-400" : "bg-amber-700"
                              )}>
                                {index + 1}
                              </div>
                            ) : (
                              <span className="text-muted-foreground font-medium ml-2">{index + 1}</span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-muted overflow-hidden">
                              <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="font-medium">{user.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1">
                            <Clock size={14} className="text-muted-foreground" />
                            <span>{user.hoursSpent.toFixed(1)}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{user.interviewsCompleted}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="font-medium">{user.averageScore}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setContactForm({ show: true, userId: user.id })}
                            className="text-xs hover:bg-auditor-100 dark:hover:bg-auditor-900"
                          >
                            Contact
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          {/* Recruiter Info */}
          <Card className="glass-panel overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">For Recruiters</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with top auditing talent showcased on our leaderboard. These candidates have demonstrated their skills through our AI-powered interview platform.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Star className="text-auditor-500 mt-1" size={16} />
                      <span>Access candidates with verified scores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <User className="text-auditor-500 mt-1" size={16} />
                      <span>Contact candidates directly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="text-auditor-500 mt-1" size={16} />
                      <span>See practice dedication and commitment</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">For Candidates</h3>
                  <p className="text-muted-foreground mb-4">
                    Showcase your interview skills and catch the attention of top accounting and auditing firms. The more you practice, the higher you'll rank.
                  </p>
                  <Button 
                    className="bg-auditor-500 hover:bg-auditor-600 text-white"
                    onClick={() => window.location.href = '/interview'}
                  >
                    Start Practicing
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      {/* Contact Modal */}
      {contactForm.show && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full glass-panel">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Candidate</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your contact request will be sent to the candidate. They will decide whether to share their contact information with you.
              </p>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="recruiterName" className="text-sm font-medium mb-1 block">
                    Your Name
                  </label>
                  <Input
                    id="recruiterName"
                    value={contactInfo.recruiterName}
                    onChange={(e) => setContactInfo({...contactInfo, recruiterName: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="recruiterEmail" className="text-sm font-medium mb-1 block">
                    Your Email
                  </label>
                  <Input
                    id="recruiterEmail"
                    type="email"
                    value={contactInfo.recruiterEmail}
                    onChange={(e) => setContactInfo({...contactInfo, recruiterEmail: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="recruiterCompany" className="text-sm font-medium mb-1 block">
                    Company
                  </label>
                  <Input
                    id="recruiterCompany"
                    value={contactInfo.recruiterCompany}
                    onChange={(e) => setContactInfo({...contactInfo, recruiterCompany: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-1 block">
                    Message to Candidate
                  </label>
                  <textarea
                    id="message"
                    className="w-full min-h-[100px] px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-auditor-500"
                    value={contactInfo.message}
                    onChange={(e) => setContactInfo({...contactInfo, message: e.target.value})}
                    required
                  />
                </div>
                
                <div className="flex gap-3 justify-end pt-2">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setContactForm({ show: false, userId: null })}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-auditor-500 hover:bg-auditor-600 text-white"
                  >
                    Send Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
