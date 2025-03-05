
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface FeedbackData {
  overallScore: number;
  scores: {
    relevance: number;
    clarity: number;
    confidence: number;
    structure: number;
    terminology: number;
  };
  strengths: string[];
  improvements: string[];
  summary: string;
}

interface FeedbackSummaryProps {
  feedback: FeedbackData;
}

const FeedbackSummary: React.FC<FeedbackSummaryProps> = ({ feedback }) => {
  const { overallScore, scores, strengths, improvements, summary } = feedback;
  
  return (
    <div className="space-y-8 animate-fade-in">
      <Card className="glass-panel overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-auditor-500/10 to-auditor-600/5 pb-8">
          <CardTitle className="text-2xl font-bold">Interview Performance</CardTitle>
          
          <div className="mt-6 flex justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Score background */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="10"
                  strokeLinecap="round"
                  className="text-muted/20"
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="10"
                  strokeDasharray={`${2 * Math.PI * 45 * overallScore / 100} ${2 * Math.PI * 45 * (1 - overallScore / 100)}`}
                  strokeDashoffset={2 * Math.PI * 45 * 0.25}
                  strokeLinecap="round"
                  className={cn(
                    overallScore >= 80 ? "text-green-500" :
                    overallScore >= 60 ? "text-auditor-500" :
                    "text-orange-500"
                  )}
                />
              </svg>
              
              {/* Score display */}
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-4xl font-bold">{overallScore}</span>
                <span className="text-xs font-medium text-muted-foreground">out of 100</span>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Performance Breakdown</h3>
            
            <div className="space-y-4">
              {Object.entries(scores).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium capitalize">{key}</span>
                    <span className="text-sm">{value}/100</span>
                  </div>
                  <Progress 
                    value={value} 
                    className="h-2"
                    indicatorClassName={cn(
                      value >= 80 ? "bg-green-500" :
                      value >= 60 ? "bg-auditor-500" :
                      "bg-orange-500"
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Performance Summary</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {summary}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-md font-semibold text-green-600 dark:text-green-400">
                Strengths
              </h3>
              <ul className="space-y-2">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-1">
                      <CheckIcon />
                    </span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-md font-semibold text-orange-600 dark:text-orange-400">
                Areas for Improvement
              </h3>
              <ul className="space-y-2">
                {improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-orange-500 mt-1">
                      <ArrowUpRightIcon />
                    </span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default FeedbackSummary;
