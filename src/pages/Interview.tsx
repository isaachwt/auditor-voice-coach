
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import InterviewSetup, { InterviewConfig } from "@/components/InterviewSetup";
import VoiceRecorder from "@/components/VoiceRecorder";
import QuestionCard from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { getQuestions, Question } from "@/lib/questions";
import { analyzeResponse } from "@/lib/analysis";
import { useToast } from "@/hooks/use-toast";

// Define the number of questions based on the duration
const questionCounts = {
  short: 3,
  medium: 5,
  comprehensive: 8
};

const Interview = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // State for setup and questions
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [config, setConfig] = useState<InterviewConfig | null>(null);
  
  // Handle starting the interview with the selected configuration
  const handleStartInterview = (interviewConfig: InterviewConfig) => {
    // Determine how many questions to use based on the duration
    const count = questionCounts[interviewConfig.duration];
    
    // Get the questions based on the selected level and focus areas
    const selectedQuestions = getQuestions(
      interviewConfig.level,
      interviewConfig.focusAreas,
      count
    );
    
    if (selectedQuestions.length === 0) {
      toast({
        title: "No Questions Available",
        description: "Please select different criteria or focus areas.",
        variant: "destructive"
      });
      return;
    }
    
    // Save the configuration
    setConfig(interviewConfig);
    
    // Set up the interview
    setQuestions(selectedQuestions);
    setResponses(new Array(selectedQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setInterviewStarted(true);
    
    // Scroll to top for mobile devices
    window.scrollTo(0, 0);
  };
  
  // Handle when recording starts
  const handleRecordingStart = () => {
    setIsRecording(true);
  };
  
  // Handle when a recording is completed
  const handleRecordingComplete = (audioBlob: Blob) => {
    setIsRecording(false);
    
    // Save the response
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = audioBlob;
    setResponses(newResponses);
  };
  
  // Move to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleCompleteInterview();
    }
  };
  
  // Move to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  // Complete the interview and analyze the responses
  const handleCompleteInterview = async () => {
    setIsAnalyzing(true);
    
    try {
      // In a real implementation, this would send the audio responses to the backend
      // for processing and analysis. For now, we'll use a mock implementation.
      const analysis = await analyzeResponse(responses[0]);
      
      // Save the analysis results to sessionStorage so we can access it on the results page
      sessionStorage.setItem('interviewAnalysis', JSON.stringify(analysis));
      sessionStorage.setItem('interviewQuestions', JSON.stringify(questions));
      
      // Navigate to the results page
      navigate('/results');
    } catch (error) {
      console.error('Error analyzing responses:', error);
      toast({
        title: "Analysis Error",
        description: "There was an error analyzing your responses. Please try again.",
        variant: "destructive"
      });
      setIsAnalyzing(false);
    }
  };
  
  // Reset the interview
  const handleResetInterview = () => {
    setInterviewStarted(false);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setResponses([]);
    setConfig(null);
  };
  
  // Calculate progress percentage
  const progressPercentage = (currentQuestionIndex + 1) / questions.length * 100;
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-auditor-50/30 dark:to-auditor-950/30">
      <Header />
      
      <main className="flex-1 container mx-auto pt-24 pb-16 px-4">
        {!interviewStarted ? (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Customize Your Mock Interview
            </h1>
            <InterviewSetup onStart={handleStartInterview} />
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Progress indicator */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium">
                  {Math.round(progressPercentage)}% Complete
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
            
            {/* Current question */}
            <QuestionCard
              question={questions[currentQuestionIndex].text}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              isActive={true}
              category={questions[currentQuestionIndex].category}
            />
            
            {/* Voice recorder */}
            <Card className="glass-panel">
              <CardContent className="p-6">
                <VoiceRecorder
                  onRecordingComplete={handleRecordingComplete}
                  onRecordingStart={handleRecordingStart}
                  isActive={!isAnalyzing}
                  maxDuration={120} // 2 minutes max per question
                />
              </CardContent>
            </Card>
            
            {/* Navigation controls */}
            <div className="flex justify-between items-center pt-4">
              <Button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0 || isRecording || isAnalyzing}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeftIcon />
                Previous
              </Button>
              
              <div className="flex items-center gap-4">
                <Button
                  onClick={handleResetInterview}
                  variant="ghost"
                  disabled={isRecording || isAnalyzing}
                >
                  Reset
                </Button>
                
                {currentQuestionIndex === questions.length - 1 ? (
                  <Button
                    onClick={handleCompleteInterview}
                    disabled={!responses[currentQuestionIndex] || isRecording || isAnalyzing}
                    className="bg-auditor-500 hover:bg-auditor-600 text-white flex items-center gap-2"
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Finish Interview'}
                    {!isAnalyzing && <CheckIcon />}
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuestion}
                    disabled={!responses[currentQuestionIndex] || isRecording || isAnalyzing}
                    className="bg-auditor-500 hover:bg-auditor-600 text-white flex items-center gap-2"
                  >
                    Next
                    <ArrowRightIcon />
                  </Button>
                )}
              </div>
            </div>
            
            {/* Interview tips */}
            <div className="mt-12 p-6 border border-dashed rounded-lg border-muted-foreground/30">
              <h3 className="text-lg font-semibold mb-2">Interview Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-auditor-500">•</span>
                  <span>Speak clearly and at a measured pace</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-auditor-500">•</span>
                  <span>Structure your answers with a clear beginning, middle, and end</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-auditor-500">•</span>
                  <span>Use specific examples from your experience when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-auditor-500">•</span>
                  <span>Keep professional terminology consistent with Big 4 standards</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Interview;
