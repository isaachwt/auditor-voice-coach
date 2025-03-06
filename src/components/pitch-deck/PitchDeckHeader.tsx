
import React from "react";
import { Button } from "@/components/ui/button";
import { HandCoins, Target } from "lucide-react";
import { Link } from "react-router-dom";

const PitchDeckHeader = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
            <span className="text-auditor-500">Auditor</span>
            <span className="text-gray-800">Coach</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-auditor-500">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-auditor-500">Auditor</span>Coach
          <span className="ml-2 text-2xl bg-auditor-500 text-white px-3 py-1 rounded-md">VC Pitch</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Revolutionizing Auditor Interview Preparation with AI Coaching
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-auditor-500 hover:bg-auditor-600">
            <HandCoins className="mr-2 h-4 w-4" />
            Investment Opportunity
          </Button>
          <Button variant="outline">
            <Target className="mr-2 h-4 w-4" />
            Our Vision
          </Button>
        </div>
      </div>
    </>
  );
};

export default PitchDeckHeader;
