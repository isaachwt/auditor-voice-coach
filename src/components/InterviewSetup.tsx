
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export interface InterviewConfig {
  level: "entry" | "experienced" | "senior";
  duration: "short" | "medium" | "comprehensive";
  focusAreas: string[];
}

interface InterviewSetupProps {
  onStart: (config: InterviewConfig) => void;
  isProcessing?: boolean;
}

const InterviewSetup: React.FC<InterviewSetupProps> = ({ 
  onStart,
  isProcessing = false
}) => {
  const [level, setLevel] = useState<"entry" | "experienced" | "senior">("entry");
  const [duration, setDuration] = useState<"short" | "medium" | "comprehensive">("medium");
  const [focusAreas, setFocusAreas] = useState<string[]>(["technical", "behavioral"]);
  
  const handleFocusAreaChange = (area: string) => {
    if (focusAreas.includes(area)) {
      setFocusAreas(focusAreas.filter(item => item !== area));
    } else {
      setFocusAreas([...focusAreas, area]);
    }
  };
  
  const handleStartInterview = () => {
    // Ensure at least one focus area is selected
    if (focusAreas.length === 0) {
      alert("Please select at least one focus area.");
      return;
    }
    
    onStart({ level, duration, focusAreas });
  };
  
  return (
    <Card className="glass-panel">
      <CardContent className="p-6 sm:p-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center sm:text-left">Customize Your Interview</h2>
          
          <Tabs defaultValue="level" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="level">Experience Level</TabsTrigger>
              <TabsTrigger value="duration">Duration</TabsTrigger>
              <TabsTrigger value="focus">Focus Areas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="level" className="p-4 border rounded-md">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Select Your Experience Level</h3>
                <p className="text-sm text-muted-foreground">
                  We'll tailor the interview questions to match your experience level.
                </p>
                
                <RadioGroup 
                  value={level} 
                  onValueChange={(value) => setLevel(value as "entry" | "experienced" | "senior")}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
                >
                  <div className="rounded-lg border p-4 cursor-pointer hover:border-auditor-200 dark:hover:border-auditor-800">
                    <RadioGroupItem value="entry" id="entry" className="sr-only" />
                    <Label htmlFor="entry" className="cursor-pointer w-full">
                      <div className="font-medium mb-1">Entry Level</div>
                      <div className="text-sm text-muted-foreground">0-2 years experience</div>
                    </Label>
                  </div>
                  
                  <div className="rounded-lg border p-4 cursor-pointer hover:border-auditor-200 dark:hover:border-auditor-800">
                    <RadioGroupItem value="experienced" id="experienced" className="sr-only" />
                    <Label htmlFor="experienced" className="cursor-pointer w-full">
                      <div className="font-medium mb-1">Experienced</div>
                      <div className="text-sm text-muted-foreground">3-5 years experience</div>
                    </Label>
                  </div>
                  
                  <div className="rounded-lg border p-4 cursor-pointer hover:border-auditor-200 dark:hover:border-auditor-800">
                    <RadioGroupItem value="senior" id="senior" className="sr-only" />
                    <Label htmlFor="senior" className="cursor-pointer w-full">
                      <div className="font-medium mb-1">Senior</div>
                      <div className="text-sm text-muted-foreground">6+ years experience</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>
            
            <TabsContent value="duration" className="p-4 border rounded-md">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Interview Duration</h3>
                <p className="text-sm text-muted-foreground">
                  Choose how long you want your practice interview to be.
                </p>
                
                <RadioGroup 
                  value={duration} 
                  onValueChange={(value) => setDuration(value as "short" | "medium" | "comprehensive")}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
                >
                  <div className="rounded-lg border p-4 cursor-pointer hover:border-auditor-200 dark:hover:border-auditor-800">
                    <RadioGroupItem value="short" id="short" className="sr-only" />
                    <Label htmlFor="short" className="cursor-pointer w-full">
                      <div className="font-medium mb-1">Short</div>
                      <div className="text-sm text-muted-foreground">3 questions (~10 min)</div>
                    </Label>
                  </div>
                  
                  <div className="rounded-lg border p-4 cursor-pointer hover:border-auditor-200 dark:hover:border-auditor-800">
                    <RadioGroupItem value="medium" id="medium" className="sr-only" />
                    <Label htmlFor="medium" className="cursor-pointer w-full">
                      <div className="font-medium mb-1">Medium</div>
                      <div className="text-sm text-muted-foreground">5 questions (~15 min)</div>
                    </Label>
                  </div>
                  
                  <div className="rounded-lg border p-4 cursor-pointer hover:border-auditor-200 dark:hover:border-auditor-800">
                    <RadioGroupItem value="comprehensive" id="comprehensive" className="sr-only" />
                    <Label htmlFor="comprehensive" className="cursor-pointer w-full">
                      <div className="font-medium mb-1">Comprehensive</div>
                      <div className="text-sm text-muted-foreground">8 questions (~25 min)</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>
            
            <TabsContent value="focus" className="p-4 border rounded-md">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Focus Areas</h3>
                <p className="text-sm text-muted-foreground">
                  Select the types of questions you want to practice. Choose at least one.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="technical" 
                      checked={focusAreas.includes("technical")}
                      onCheckedChange={() => handleFocusAreaChange("technical")}
                    />
                    <div className="grid gap-1.5">
                      <Label htmlFor="technical" className="font-medium">Technical</Label>
                      <p className="text-sm text-muted-foreground">
                        Auditing procedures, accounting standards, and technical knowledge
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="behavioral" 
                      checked={focusAreas.includes("behavioral")}
                      onCheckedChange={() => handleFocusAreaChange("behavioral")}
                    />
                    <div className="grid gap-1.5">
                      <Label htmlFor="behavioral" className="font-medium">Behavioral</Label>
                      <p className="text-sm text-muted-foreground">
                        Teamwork, client interaction, and professional conduct
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="case" 
                      checked={focusAreas.includes("case")}
                      onCheckedChange={() => handleFocusAreaChange("case")}
                    />
                    <div className="grid gap-1.5">
                      <Label htmlFor="case" className="font-medium">Case Studies</Label>
                      <p className="text-sm text-muted-foreground">
                        Problem-solving scenarios and audit case discussions
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="industry" 
                      checked={focusAreas.includes("industry")}
                      onCheckedChange={() => handleFocusAreaChange("industry")}
                    />
                    <div className="grid gap-1.5">
                      <Label htmlFor="industry" className="font-medium">Industry Knowledge</Label>
                      <p className="text-sm text-muted-foreground">
                        Industry-specific regulations and current trends
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="pt-4 flex justify-center">
            <Button 
              onClick={handleStartInterview}
              disabled={focusAreas.length === 0 || isProcessing}
              className="w-full sm:w-auto bg-auditor-500 hover:bg-auditor-600 text-white"
            >
              {isProcessing ? (
                <>
                  <span className="mr-2">Initializing Interview</span>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                </>
              ) : (
                'Start Interview'
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InterviewSetup;
