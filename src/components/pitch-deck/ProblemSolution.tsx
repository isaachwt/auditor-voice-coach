
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Rocket } from "lucide-react";

const ProblemSolution = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mb-20">
      <Card className="shadow-lg border-0">
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-red-100 rounded-full mr-3">
              <Lightbulb className="h-6 w-6 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold">The Problem</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="bg-red-100 text-red-500 rounded-full p-1 mr-2 mt-1">●</span>
              <span>Candidates for Big 4 auditor positions face highly competitive interviews with technical accounting questions</span>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 text-red-500 rounded-full p-1 mr-2 mt-1">●</span>
              <span>Traditional interview prep lacks personalized feedback and realistic practice</span>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 text-red-500 rounded-full p-1 mr-2 mt-1">●</span>
              <span>Professional coaching is expensive and inaccessible to many candidates</span>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 text-red-500 rounded-full p-1 mr-2 mt-1">●</span>
              <span>70% of accounting graduates report feeling unprepared for technical interviews</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0">
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 rounded-full mr-3">
              <Rocket className="h-6 w-6 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold">Our Solution</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-500 rounded-full p-1 mr-2 mt-1">●</span>
              <span>AI-powered interview preparation platform specifically for auditor roles</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-500 rounded-full p-1 mr-2 mt-1">●</span>
              <span>Realistic mock interviews using real Big 4 questions with immediate feedback</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-500 rounded-full p-1 mr-2 mt-1">●</span>
              <span>Personalized improvement roadmap based on performance analysis</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-500 rounded-full p-1 mr-2 mt-1">●</span>
              <span>Accessible 24/7 at a fraction of the cost of traditional coaching</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProblemSolution;
