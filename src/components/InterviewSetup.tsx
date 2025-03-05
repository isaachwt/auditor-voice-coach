
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface InterviewSetupProps {
  onStart: (config: InterviewConfig) => void;
}

export interface InterviewConfig {
  level: "entry" | "experienced" | "senior";
  duration: "short" | "medium" | "comprehensive";
  focusAreas: string[];
}

const InterviewSetup: React.FC<InterviewSetupProps> = ({ onStart }) => {
  const [level, setLevel] = useState<"entry" | "experienced" | "senior">("entry");
  const [duration, setDuration] = useState<"short" | "medium" | "comprehensive">("medium");
  const [focusAreas, setFocusAreas] = useState<string[]>(["technical"]);
  
  const toggleFocusArea = (area: string) => {
    if (focusAreas.includes(area)) {
      setFocusAreas(focusAreas.filter(a => a !== area));
    } else {
      setFocusAreas([...focusAreas, area]);
    }
  };
  
  const handleStart = () => {
    if (focusAreas.length === 0) {
      setFocusAreas(["technical"]);
      return;
    }
    
    onStart({
      level,
      duration,
      focusAreas
    });
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto p-6 animate-fade-in">
      <Card className="glass-panel">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Customize Your Interview</CardTitle>
          <CardDescription>
            Configure your mock interview experience to match your preparation needs
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {/* Experience Level */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Experience Level</Label>
            <RadioGroup
              value={level}
              onValueChange={(value) => setLevel(value as "entry" | "experienced" | "senior")}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <LevelOption 
                value="entry" 
                title="Entry Level"
                description="0-2 years of experience"
                currentValue={level}
              />
              <LevelOption 
                value="experienced" 
                title="Experienced"
                description="3-5 years of experience"
                currentValue={level}
              />
              <LevelOption 
                value="senior" 
                title="Senior"
                description="6+ years of experience"
                currentValue={level}
              />
            </RadioGroup>
          </div>
          
          <Separator />
          
          {/* Interview Duration */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Interview Duration</Label>
            <RadioGroup
              value={duration}
              onValueChange={(value) => setDuration(value as "short" | "medium" | "comprehensive")}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <DurationOption 
                value="short" 
                title="Short"
                description="3-5 questions (15 min)"
                currentValue={duration}
              />
              <DurationOption 
                value="medium" 
                title="Medium"
                description="5-8 questions (25 min)"
                currentValue={duration}
              />
              <DurationOption 
                value="comprehensive" 
                title="Comprehensive"
                description="10+ questions (40 min)"
                currentValue={duration}
              />
            </RadioGroup>
          </div>
          
          <Separator />
          
          {/* Focus Areas */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Focus Areas (Select at least one)</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <FocusAreaChip
                title="Technical" 
                selected={focusAreas.includes("technical")}
                onClick={() => toggleFocusArea("technical")}
              />
              <FocusAreaChip
                title="Behavioral" 
                selected={focusAreas.includes("behavioral")}
                onClick={() => toggleFocusArea("behavioral")}
              />
              <FocusAreaChip
                title="Case Studies" 
                selected={focusAreas.includes("case")}
                onClick={() => toggleFocusArea("case")}
              />
              <FocusAreaChip
                title="Industry Knowledge" 
                selected={focusAreas.includes("industry")}
                onClick={() => toggleFocusArea("industry")}
              />
            </div>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button 
            onClick={handleStart}
            className="w-full bg-auditor-500 hover:bg-auditor-600 text-white"
          >
            Start Mock Interview
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

interface LevelOptionProps {
  value: string;
  title: string;
  description: string;
  currentValue: string;
}

const LevelOption: React.FC<LevelOptionProps> = ({ 
  value, title, description, currentValue 
}) => {
  const isSelected = value === currentValue;
  
  return (
    <Label
      htmlFor={`level-${value}`}
      className={cn(
        "relative flex flex-col p-4 cursor-pointer rounded-lg transition-all",
        isSelected 
          ? "bg-auditor-50 dark:bg-auditor-950/50 border-auditor-300 dark:border-auditor-800" 
          : "border hover:border-auditor-200 dark:hover:border-auditor-800"
      )}
    >
      <RadioGroupItem
        value={value}
        id={`level-${value}`}
        className="absolute right-4 top-4 h-5 w-5"
      />
      <div className="font-medium mb-1">{title}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </Label>
  );
};

interface DurationOptionProps {
  value: string;
  title: string;
  description: string;
  currentValue: string;
}

const DurationOption: React.FC<DurationOptionProps> = ({ 
  value, title, description, currentValue 
}) => {
  const isSelected = value === currentValue;
  
  return (
    <Label
      htmlFor={`duration-${value}`}
      className={cn(
        "relative flex flex-col p-4 cursor-pointer rounded-lg transition-all",
        isSelected 
          ? "bg-auditor-50 dark:bg-auditor-950/50 border-auditor-300 dark:border-auditor-800" 
          : "border hover:border-auditor-200 dark:hover:border-auditor-800"
      )}
    >
      <RadioGroupItem
        value={value}
        id={`duration-${value}`}
        className="absolute right-4 top-4 h-5 w-5"
      />
      <div className="font-medium mb-1">{title}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </Label>
  );
};

interface FocusAreaChipProps {
  title: string;
  selected: boolean;
  onClick: () => void;
}

const FocusAreaChip: React.FC<FocusAreaChipProps> = ({ 
  title, selected, onClick 
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "py-2 px-4 rounded-full text-sm font-medium transition-all",
        selected 
          ? "bg-auditor-100 text-auditor-700 dark:bg-auditor-900 dark:text-auditor-300" 
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
      )}
    >
      {title}
    </button>
  );
};

export default InterviewSetup;
