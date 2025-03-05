
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TipCardProps {
  tip: {
    title: string;
    content: string;
    category: "technical" | "behavioral" | "presentation" | "general";
  };
}

const TipCard: React.FC<TipCardProps> = ({ tip }) => {
  const { title, content, category } = tip;
  
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-md",
      "border-l-4",
      category === "technical" ? "border-l-auditor-500" : 
      category === "behavioral" ? "border-l-green-500" :
      category === "presentation" ? "border-l-purple-500" : 
      "border-l-blue-500"
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <span className={cn(
            "text-xs font-medium px-2 py-1 rounded-full",
            category === "technical" ? "bg-auditor-100 text-auditor-700 dark:bg-auditor-900 dark:text-auditor-300" : 
            category === "behavioral" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" :
            category === "presentation" ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300" : 
            "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
          )}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
};

export default TipCard;
