
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import FeedbackSummary, { FeedbackData } from "@/components/FeedbackSummary";
import TipCard from "@/components/TipCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getTips } from "@/lib/analysis";
import { Question } from "@/lib/questions";

const Results = () => {
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState<FeedbackData | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Try to get the analysis from sessionStorage
    const savedAnalysis = sessionStorage.getItem('interviewAnalysis');
    const savedQuestions = sessionStorage.getItem('interviewQuestions');
    
    if (savedAnalysis && savedQuestions) {
      setAnalysis(JSON.parse(savedAnalysis));
      setQuestions(JSON.parse(savedQuestions));
      setLoading(false);
    } else {
      // If no analysis is found, redirect to the interview page
      setLoading(false);
      // Uncomment to enforce redirect - temporarily disabled for demo
      // navigate('/interview');
      
      // For demo purposes, create mock data
      setAnalysis({
        overallScore: 78,
        scores: {
          relevance: 85,
          clarity: 75,
          confidence: 80,
          structure: 70,
          terminology: 82,
        },
        strengths: [
          "Demonstrated good understanding of auditing principles",
          "Used appropriate technical terminology",
          "Provided concrete examples from past experiences",
          "Maintained good response structure with clear points"
        ],
        improvements: [
          "Could provide more specific examples related to audit testing",
          "Consider expanding on risk assessment methodologies",
          "Elaborate more on experience with specific accounting standards",
          "Work on confidence when discussing technical concepts"
        ],
        summary: "Your responses showed good technical knowledge and communication skills. You articulated key audit concepts clearly and demonstrated understanding of the auditor's role. To improve, consider providing more specific examples from your experience and diving deeper into technical aspects of audit procedures. Your presentation was professional, though you could benefit from more confident delivery when discussing complex topics."
      });
    }
  }, [navigate]);
  
  // Get expert tips
  const tips = getTips();
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-2xl font-semibold">Loading analysis...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-auditor-50/30 dark:to-auditor-950/30">
      <Header />
      
      <main className="flex-1 container mx-auto pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Your Interview Analysis</h1>
            <p className="text-xl text-muted-foreground">
              Review your performance and discover how to improve
            </p>
          </div>
          
          {analysis ? (
            <>
              {/* Performance Summary */}
              <section>
                <FeedbackSummary feedback={analysis} />
              </section>
              
              {/* Covered Topics */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold">Questions Covered</h2>
                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-medium text-base">{question.text}</h3>
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-muted capitalize">
                          {question.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              <Separator />
              
              {/* Expert Tips */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold">Expert Tips for Improvement</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tips.map((tip, i) => (
                    <TipCard key={i} tip={tip} />
                  ))}
                </div>
              </section>
              
              {/* Next Steps */}
              <section className="space-y-6">
                <h2 className="text-2xl font-semibold">Next Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-all">
                    <h3 className="text-lg font-semibold mb-3">Practice Again</h3>
                    <p className="text-muted-foreground mb-6">
                      Try another mock interview with different questions to build your skills.
                    </p>
                    <Button
                      onClick={() => navigate("/interview")}
                      className="bg-auditor-500 hover:bg-auditor-600 text-white"
                    >
                      Start New Interview
                    </Button>
                  </div>
                  
                  <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-all">
                    <h3 className="text-lg font-semibold mb-3">Share Your Progress</h3>
                    <p className="text-muted-foreground mb-6">
                      Download your results or share your progress with mentors.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        // In a real implementation, this would generate a PDF or allow sharing
                        alert("This feature would allow sharing or downloading results in a real implementation.");
                      }}
                    >
                      Download Results
                    </Button>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">No Interview Data Found</h2>
              <p className="text-muted-foreground mb-8">
                You haven't completed an interview yet or your results have expired.
              </p>
              <Link 
                to="/interview" 
                className="px-6 py-3 rounded-full bg-auditor-500 hover:bg-auditor-600 text-white font-medium"
              >
                Start an Interview
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Results;
