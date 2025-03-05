
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-auditor-200/30 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-auditor-300/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
        <span className="inline-block px-3 py-1 rounded-full bg-auditor-100 text-auditor-700 text-xs font-medium tracking-wide dark:bg-auditor-900 dark:text-auditor-300">
          BIG 4 INTERVIEW PREPARATION
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Master Your <span className="text-auditor-500">Auditor</span> Interview with AI Coaching
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Practice with realistic interview questions tailored for Big 4 auditor roles, receive detailed feedback, and improve your interview skills with AI-powered analysis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            to="/interview" 
            className={cn(
              "px-8 py-3 rounded-full font-medium transition-all",
              "bg-auditor-500 text-white hover:bg-auditor-600",
              "shadow-md hover:shadow-lg"
            )}
          >
            Start Mock Interview
          </Link>
          
          <button 
            className={cn(
              "px-8 py-3 rounded-full font-medium transition-all",
              "bg-white text-auditor-700 hover:bg-gray-100",
              "dark:bg-gray-800 dark:text-auditor-300 dark:hover:bg-gray-700",
              "shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
            )}
            onClick={() => {
              const featuresSection = document.getElementById('features');
              featuresSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
