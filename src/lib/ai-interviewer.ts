
import { toast } from "@/hooks/use-toast";

// Types for our API responses
interface AIInterviewerResponse {
  question: string;
  feedback?: string;
}

interface AIFeedbackResponse {
  overallScore: number;
  scores: {
    relevance: number;
    clarity: number;
    confidence: number;
    structure: number;
    terminology: number;
  };
  strengths: string[];
  improvements: string[];
  summary: string;
}

// Function to get the first question from the AI
export const startInterview = async (level: string, categories: string[]): Promise<string> => {
  try {
    // In a real implementation, we would make an API call to start the interview
    // For now, we'll return a hardcoded first question
    return "Can you introduce yourself and tell me about your background in accounting or auditing?";
  } catch (error) {
    console.error("Error starting interview:", error);
    toast({
      title: "Error",
      description: "Failed to start the interview. Please try again.",
      variant: "destructive",
    });
    throw new Error("Failed to start interview");
  }
};

// Function to get next question based on the previous answer
export const getNextQuestion = async (
  previousAnswer: string, 
  questionNumber: number,
  totalQuestions: number
): Promise<AIInterviewerResponse> => {
  try {
    // In a real implementation, this would send the candidate's response to GPT-4o mini
    // and get the next question
    
    // For demo purposes, return predefined questions
    const questions = [
      "Tell me about a challenging audit situation you've faced and how you resolved it.",
      "How do you ensure compliance with relevant accounting standards in your work?",
      "What experience do you have with risk assessment in audit planning?",
      "How do you handle disagreements with clients over audit findings?",
      "Where do you see yourself in the auditing profession in five years?"
    ];
    
    if (questionNumber >= totalQuestions) {
      return {
        question: "Thank you for completing the interview. Let's now analyze your performance.",
        feedback: "Interview complete"
      };
    }
    
    return {
      question: questions[questionNumber - 1] || "That concludes our interview questions. Thank you for your time."
    };
  } catch (error) {
    console.error("Error getting next question:", error);
    toast({
      title: "Error",
      description: "Failed to get the next question. Please try again.",
      variant: "destructive",
    });
    throw new Error("Failed to get next question");
  }
};

// Function to generate final feedback
export const generateFeedback = async (responses: Blob[]): Promise<AIFeedbackResponse> => {
  try {
    // In a real implementation, this would analyze all responses using GPT-4o mini
    // For demo purposes, generate mock feedback
    
    // Random score between 70-90
    const baseScore = 70 + Math.floor(Math.random() * 20);
    
    // Variation of +/- 10 points from base score
    const getVariedScore = () => {
      const variation = Math.floor(Math.random() * 20) - 10;
      return Math.min(Math.max(baseScore + variation, 60), 95);
    };
    
    return {
      overallScore: baseScore,
      scores: {
        relevance: getVariedScore(),
        clarity: getVariedScore(),
        confidence: getVariedScore(),
        structure: getVariedScore(),
        terminology: getVariedScore(),
      },
      strengths: [
        "Clear articulation of audit methodology",
        "Strong understanding of accounting principles",
        "Effective communication of technical concepts",
        "Good examples from past experience",
        "Logical problem-solving approach"
      ],
      improvements: [
        "Consider providing more specific examples",
        "Deepen technical explanations of audit procedures",
        "Further develop responses on risk assessment",
        "Expand on client communication strategies",
        "Add more context to industry-specific knowledge"
      ],
      summary: "Your interview demonstrated strong technical knowledge and good communication skills. You articulated audit concepts clearly and showed a solid understanding of accounting principles. To elevate your performance further, consider providing more specific examples and deepening your explanations of technical audit procedures. Your responses were structured well, though you could elaborate more on risk assessment methodologies and client communication strategies to showcase your full expertise."
    };
  } catch (error) {
    console.error("Error generating feedback:", error);
    toast({
      title: "Error",
      description: "Failed to generate interview feedback. Please try again.",
      variant: "destructive",
    });
    throw new Error("Failed to generate feedback");
  }
};

// Function to convert text to speech (mock implementation)
export const textToSpeech = async (text: string): Promise<AudioBuffer | null> => {
  try {
    // In a real implementation, this would call a TTS API
    // For demo purposes, we'll just log the text
    console.log("TTS would say:", text);
    return null;
  } catch (error) {
    console.error("Text to speech error:", error);
    return null;
  }
};
