
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
  isActive: boolean;
  category: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  isActive,
  category
}) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [isActive]);
  
  return (
    <div 
      className={cn(
        "transition-all duration-500 ease-in-out",
        isActive ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
      )}
    >
      <Card className={cn(
        "overflow-hidden glass-panel",
        "border-t-4",
        category === "technical" ? "border-t-auditor-500" : 
        category === "behavioral" ? "border-t-green-500" :
        category === "case" ? "border-t-orange-500" : "border-t-purple-500"
      )}>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-muted-foreground">
                Question {questionNumber} of {totalQuestions}
              </span>
              <span className={cn(
                "text-xs font-semibold px-2 py-1 rounded-full",
                category === "technical" ? "bg-auditor-100 text-auditor-700 dark:bg-auditor-900 dark:text-auditor-300" : 
                category === "behavioral" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" :
                category === "case" ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300" : 
                "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
              )}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </div>
            
            <h3 className={cn(
              "text-xl md:text-2xl font-semibold transition-all duration-700",
              visible ? "opacity-100" : "opacity-0"
            )}>
              {question}
            </h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionCard;
