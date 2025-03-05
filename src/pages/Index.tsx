
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { getTips } from "@/lib/analysis";
import TipCard from "@/components/TipCard";
import RecruitmentCallCTA from "@/components/RecruitmentCallCTA";

const Index = () => {
  const tips = getTips();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <Hero />
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-gradient-to-b from-background to-auditor-50/30 dark:to-auditor-950/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 space-y-4 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold">Prepare Like a Pro</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our AI-powered interview coach gives you the real-world practice you need to ace your Big 4 auditor interview.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<TargetIcon />}
                title="Role-Specific Questions"
                description="Practice with questions tailored specifically for Big 4 auditor roles at every experience level."
              />
              <FeatureCard
                icon={<MicIcon />}
                title="Voice-Based Answers"
                description="Respond verbally as you would in a real interview to develop your speaking confidence."
              />
              <FeatureCard
                icon={<ChartIcon />}
                title="Detailed Analysis"
                description="Receive comprehensive feedback on your responses including content, delivery, and terminology."
              />
            </div>
          </div>
        </section>
        
        {/* Interview Tips Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Expert Interview Tips</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Elevate your interview performance with these professional insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tips.slice(0, 4).map((tip, i) => (
                <TipCard key={i} tip={tip} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="/interview" 
                className={cn(
                  "px-8 py-3 rounded-full font-medium transition-all inline-flex items-center gap-2",
                  "bg-auditor-500 text-white hover:bg-auditor-600",
                  "shadow-md hover:shadow-lg"
                )}
              >
                Start Practicing Now
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-background to-auditor-50/30 dark:to-auditor-950/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A simple process designed to maximize your interview preparation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-auditor-200 dark:bg-auditor-800" />
              
              <StepCard
                number={1}
                title="Customize Your Interview"
                description="Select your experience level, interview duration, and focus areas to tailor your practice session."
              />
              <StepCard
                number={2}
                title="Answer Interview Questions"
                description="Respond verbally to realistic interview questions exactly as you would in a real interview."
              />
              <StepCard
                number={3}
                title="Review Your Feedback"
                description="Get detailed analysis and actionable tips to improve your interview performance."
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <Card className="glass-panel overflow-hidden mb-12">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Interview?</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      Start practicing now and gain the confidence you need to succeed in your Big 4 auditor interview.
                    </p>
                    <div>
                      <Link 
                        to="/interview" 
                        className={cn(
                          "px-8 py-3 rounded-full font-medium transition-all inline-flex items-center gap-2",
                          "bg-auditor-500 text-white hover:bg-auditor-600",
                          "shadow-md hover:shadow-lg"
                        )}
                      >
                        Begin Your Practice
                        <ArrowRightIcon />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-auditor-500 to-auditor-700 p-8 md:p-12 text-white">
                    <h3 className="text-2xl font-bold mb-6">Why Big 4 Interviews Matter</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 text-auditor-200">
                          <CheckIcon />
                        </span>
                        <p>Big 4 firms use structured interviews to assess technical knowledge and cultural fit</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 text-auditor-200">
                          <CheckIcon />
                        </span>
                        <p>Practice helps you articulate your experience clearly and confidently</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 text-auditor-200">
                          <CheckIcon />
                        </span>
                        <p>Being prepared reduces anxiety and helps you showcase your true potential</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 text-auditor-200">
                          <CheckIcon />
                        </span>
                        <p>The skills you develop will help you throughout your auditing career</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* New Mock Recruiter Call CTA */}
            <div className="mt-12 text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Get a Free Interview Analysis</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Schedule a 30-minute call with our AI recruiters trained to mimic real interviews. 
                Receive personalized feedback completely free of charge.
              </p>
            </div>
            
            <div className="max-w-xl mx-auto">
              <RecruitmentCallCTA />
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">
                <span className="text-auditor-500">Auditor</span>
                <span className="text-gray-800 dark:text-gray-200">Coach</span>
              </span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AuditorCoach. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="glass-panel h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-auditor-100 text-auditor-700 dark:bg-auditor-900 dark:text-auditor-300 mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-auditor-500 text-white flex items-center justify-center text-xl font-bold mb-6 shadow-md relative z-10">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Icons
const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const MicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 10V12C19 16.4183 15.4183 20 11 20M11 20C6.58172 20 3 16.4183 3 12V10M11 20V23M8 23H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 13V17M12 9V17M16 5V17M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Index;
