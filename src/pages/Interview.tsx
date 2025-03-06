import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import InterviewSetup, { InterviewConfig } from "@/components/InterviewSetup";
import VoiceRecorder from "@/components/VoiceRecorder";
import QuestionCard from "@/components/QuestionCard";
import ElevenLabsApiKey from "@/components/ElevenLabsApiKey";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { getQuestions, Question } from "@/lib/questions";
import { useToast } from "@/hooks/use-toast";
import { startInterview, getNextQuestion, generateFeedback, textToSpeech } from "@/lib/ai-interviewer";

// Define the number of questions for the interview
const TOTAL_QUESTIONS = 5;

const Interview = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // State for setup and questions
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [config, setConfig] = useState<InterviewConfig | null>(null);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [elevenLabsApiKey, setElevenLabsApiKey] = useState<string>("");
  
  // No need for apiKeyProvided state since we're providing it automatically
  const apiKeyProvided = true;

  // Audio context for TTS
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
  
  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioSourceRef.current) {
        audioSourceRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);
  
  // Handle API key submission
  const handleApiKeySubmit = (key: string) => {
    setElevenLabsApiKey(key);
  };
  
  // Play TTS audio
  const playAudio = async (audioBuffer: AudioBuffer | null) => {
    if (!audioBuffer) {
      setIsAiSpeaking(false);
      return;
    }
    
    try {
      // Create audio context if it doesn't exist
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();
      }
      
      // Stop any currently playing audio
      if (audioSourceRef.current) {
        audioSourceRef.current.stop();
      }
      
      // Create a new source
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      
      // Set up ended callback
      source.onended = () => {
        setIsAiSpeaking(false);
        audioSourceRef.current = null;
      };
      
      // Store the source for later cleanup
      audioSourceRef.current = source;
      
      // Play the audio
      source.start();
      setIsAiSpeaking(true);
    } catch (error) {
      console.error("Error playing audio:", error);
      setIsAiSpeaking(false);
    }
  };
  
  // Handle starting the interview with the selected configuration
  const handleStartInterview = async (interviewConfig: InterviewConfig) => {
    setIsProcessing(true);
    
    try {
      // Save the configuration
      setConfig(interviewConfig);
      
      // Get first question from AI
      const firstQuestion = await startInterview(
        interviewConfig.level,
        interviewConfig.focusAreas
      );
      
      // Prepare the interview state
      setCurrentQuestion(firstQuestion);
      setCurrentQuestionIndex(1); // Starting with first question
      setResponses(new Array(TOTAL_QUESTIONS).fill(null));
      
      // Get mock questions for display purposes
      const mockQuestions = getQuestions(
        interviewConfig.level,
        interviewConfig.focusAreas,
        TOTAL_QUESTIONS
      );
      setQuestions(mockQuestions);
      
      // Play the first question using TTS
      setIsAiSpeaking(true);
      const audioBuffer = await textToSpeech(firstQuestion, elevenLabsApiKey);
      await playAudio(audioBuffer);
      
      // Start the interview
      setInterviewStarted(true);
      setIsProcessing(false);
      
      // Scroll to top for mobile devices
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error starting interview:", error);
      toast({
        title: "Interview Error",
        description: "There was an error starting the interview. Please try again.",
        variant: "destructive"
      });
      setIsProcessing(false);
    }
  };
  
  // Handle when recording starts
  const handleRecordingStart = () => {
    setIsRecording(true);
    setIsListening(true);
  };
  
  // Handle when a recording is completed
  const handleRecordingComplete = (audioBlob: Blob) => {
    setIsRecording(false);
    setIsListening(false);
    
    // Save the response
    const newResponses = [...responses];
    newResponses[currentQuestionIndex - 1] = audioBlob;
    setResponses(newResponses);
  };
  
  // Move to the next question
  const handleNextQuestion = async () => {
    setIsProcessing(true);
    
    try {
      // Get the next question from AI
      const response = await getNextQuestion(
        "Audio response provided", // In a real implementation, we'd process the audio
        currentQuestionIndex + 1,
        TOTAL_QUESTIONS
      );
      
      if (response.feedback === "Interview complete") {
        // This was the last question, proceed to analysis
        handleCompleteInterview();
        return;
      }
      
      // Update the current question
      setCurrentQuestion(response.question);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      
      // Play the next question using TTS
      setIsAiSpeaking(true);
      const audioBuffer = await textToSpeech(response.question, elevenLabsApiKey);
      await playAudio(audioBuffer);
      
      setIsProcessing(false);
    } catch (error) {
      console.error("Error getting next question:", error);
      toast({
        title: "Error",
        description: "Failed to get the next question. Please try again.",
        variant: "destructive"
      });
      setIsProcessing(false);
    }
  };
  
  // Complete the interview and analyze the responses
  const handleCompleteInterview = async () => {
    setIsProcessing(true);
    
    try {
      // Generate feedback from AI
      const analysis = await generateFeedback(responses);
      
      // Save the analysis results to sessionStorage
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
      setIsProcessing(false);
    }
  };
  
  // Reset the interview
  const handleResetInterview = () => {
    setInterviewStarted(false);
    setCurrentQuestion("");
    setCurrentQuestionIndex(0);
    setResponses([]);
    setConfig(null);
    setIsProcessing(false);
    setIsAiSpeaking(false);
    setIsListening(false);
    
    // Stop any playing audio
    if (audioSourceRef.current) {
      audioSourceRef.current.stop();
      audioSourceRef.current = null;
    }
  };
  
  // Calculate progress percentage
  const progressPercentage = (currentQuestionIndex) / TOTAL_QUESTIONS * 100;
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-auditor-50/30 dark:to-auditor-950/30">
      <Header />
      
      <main className="flex-1 container mx-auto pt-24 pb-16 px-4">
        {!interviewStarted ? (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              AI Mock Interview
            </h1>
            <p className="text-center text-lg mb-8 text-muted-foreground">
              Practice your auditing interview skills with our AI interviewer powered by GPT-4o mini.
              The AI will ask you 5 questions, listen to your responses, and provide detailed feedback.
            </p>
            
            {/* ElevenLabs API Key Component - now just shows info */}
            <div className="mb-8">
              <ElevenLabsApiKey onKeySubmit={handleApiKeySubmit} />
            </div>
            
            {/* Show interview setup immediately since API key is provided */}
            <InterviewSetup onStart={handleStartInterview} isProcessing={isProcessing} />
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Progress indicator */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  Question {currentQuestionIndex} of {TOTAL_QUESTIONS}
                </span>
                <span className="text-sm font-medium">
                  {Math.round(progressPercentage)}% Complete
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
            
            {/* AI status indicator */}
            {isAiSpeaking && (
              <div className="text-center py-2 px-4 bg-auditor-100 dark:bg-auditor-900 text-auditor-800 dark:text-auditor-200 rounded-md animate-pulse">
                AI Interviewer is speaking...
              </div>
            )}
            
            {/* Current question */}
            <QuestionCard
              question={currentQuestion}
              questionNumber={currentQuestionIndex}
              totalQuestions={TOTAL_QUESTIONS}
              isActive={true}
              category={questions[currentQuestionIndex - 1]?.category || "technical"}
            />
            
            {/* Voice recorder */}
            <Card className="glass-panel">
              <CardContent className="p-6">
                <VoiceRecorder
                  onRecordingComplete={handleRecordingComplete}
                  onRecordingStart={handleRecordingStart}
                  isActive={!isProcessing && !isAiSpeaking}
                  maxDuration={120} // 2 minutes max per question
                />
              </CardContent>
            </Card>
            
            {/* Navigation controls */}
            <div className="flex justify-between items-center pt-4">
              <Button
                onClick={handleResetInterview}
                variant="outline"
                disabled={isProcessing || isRecording || isAiSpeaking}
              >
                Reset Interview
              </Button>
              
              <Button
                onClick={handleNextQuestion}
                disabled={!responses[currentQuestionIndex - 1] || isProcessing || isRecording || isAiSpeaking}
                className="bg-auditor-500 hover:bg-auditor-600 text-white flex items-center gap-2"
              >
                {isProcessing ? 'Processing...' : 
                  currentQuestionIndex === TOTAL_QUESTIONS ? 'Complete Interview' : 'Next Question'}
                {!isProcessing && <ArrowRightIcon />}
              </Button>
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

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Interview;
