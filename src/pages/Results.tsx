
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import FeedbackSummary from "@/components/FeedbackSummary";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Results = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve analysis results and questions from sessionStorage
    const storedAnalysis = sessionStorage.getItem('interviewAnalysis');
    const storedQuestions = sessionStorage.getItem('interviewQuestions');
    
    if (storedAnalysis && storedQuestions) {
      try {
        setFeedback(JSON.parse(storedAnalysis));
        setQuestions(JSON.parse(storedQuestions));
      } catch (error) {
        console.error('Error parsing stored data:', error);
        toast({
          title: "Error Loading Results",
          description: "There was an error loading your interview results.",
          variant: "destructive"
        });
      }
    } else {
      // If data is not available, redirect to the interview page
      toast({
        title: "No Results Available",
        description: "Please complete an interview to view results.",
        variant: "destructive"
      });
      navigate('/interview');
    }
    
    setLoading(false);
  }, [navigate]);

  const handleStartNewInterview = () => {
    // Clear the session storage and navigate to the interview page
    sessionStorage.removeItem('interviewAnalysis');
    sessionStorage.removeItem('interviewQuestions');
    navigate('/interview');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-auditor-50/30 dark:to-auditor-950/30">
        <Header />
        <main className="flex-1 container mx-auto pt-24 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Loading your results...</h2>
            <div className="w-16 h-16 border-4 border-auditor-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </main>
      </div>
    );
  }

  if (!feedback) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-auditor-50/30 dark:to-auditor-950/30">
        <Header />
        <main className="flex-1 container mx-auto pt-24 pb-16 px-4 flex items-center justify-center">
          <Card className="max-w-md mx-auto glass-panel">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">No Results Available</h2>
                <p className="text-muted-foreground">
                  Please complete an interview to view your performance results.
                </p>
                <Button 
                  onClick={() => navigate('/interview')}
                  className="mt-4 bg-auditor-500 hover:bg-auditor-600 text-white"
                >
                  Start Interview
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-auditor-50/30 dark:to-auditor-950/30">
      <Header />
      
      <main className="flex-1 container mx-auto pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Your Interview Results
          </h1>
          
          <div className="space-y-10">
            {/* Feedback Summary */}
            <FeedbackSummary feedback={feedback} />
            
            {/* Questions Review */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Questions Reviewed</h2>
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <Card key={index} className="glass-panel overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">
                        Question {index + 1}: {question.text}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Category: {question.category.charAt(0).toUpperCase() + question.category.slice(1)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Button 
                onClick={handleStartNewInterview}
                className="bg-auditor-500 hover:bg-auditor-600 text-white"
              >
                Start New Interview
              </Button>
              
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
