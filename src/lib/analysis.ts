
import { FeedbackData } from "@/components/FeedbackSummary";

// This is a mock implementation that would be replaced by actual AI analysis in production
export const analyzeResponse = (audioBlob: Blob): Promise<FeedbackData> => {
  return new Promise((resolve) => {
    // Simulate processing delay
    setTimeout(() => {
      // Mock feedback data - in a real app, this would come from AI analysis
      const mockFeedback: FeedbackData = {
        overallScore: Math.floor(Math.random() * 30) + 60, // Random score between 60-90
        scores: {
          relevance: Math.floor(Math.random() * 20) + 70,
          clarity: Math.floor(Math.random() * 25) + 65,
          confidence: Math.floor(Math.random() * 20) + 70,
          structure: Math.floor(Math.random() * 25) + 65,
          terminology: Math.floor(Math.random() * 20) + 70,
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
        summary: "Your response showed good technical knowledge and communication skills. You articulated key audit concepts clearly and demonstrated understanding of the auditor's role. To improve, consider providing more specific examples from your experience and diving deeper into technical aspects of audit procedures. Your presentation was professional, though you could benefit from more confident delivery when discussing complex topics."
      };
      
      resolve(mockFeedback);
    }, 2000);
  });
};

export const getTips = () => {
  return [
    {
      title: "AI Detects Your Technical Language",
      content: "Our AI analyzes your use of audit terminology and suggests improvements. It identifies when you use vague terms instead of specific audit procedures or standards.",
      category: "technical" as const
    },
    {
      title: "AI Improves Your Response Structure",
      content: "The AI coach identifies when your answers lack organization and helps you structure responses with clear beginnings, middles, and conclusions.",
      category: "behavioral" as const
    },
    {
      title: "AI Analyzes Your Problem-Solving Logic",
      content: "Our AI evaluates how you approach audit scenarios, identifying gaps in your reasoning and suggesting more thorough analytical approaches.",
      category: "technical" as const
    },
    {
      title: "AI Finds Knowledge Gaps",
      content: "The AI identifies areas where your knowledge seems uncertain and provides targeted resources to strengthen your understanding before the real interview.",
      category: "general" as const
    },
    {
      title: "AI Measures Your Concrete Examples",
      content: "Our AI evaluates whether your examples are specific and relevant, helping you replace vague statements with compelling stories from your experience.",
      category: "behavioral" as const
    },
    {
      title: "AI Evaluates Your Speaking Confidence",
      content: "The AI analyzes your speech patterns, pace, and filler words, providing personalized feedback to improve your verbal delivery.",
      category: "presentation" as const
    },
    {
      title: "AI Assesses Client Interaction Skills",
      content: "Our AI evaluates how you describe client interactions, suggesting improvements to demonstrate stronger relationship management abilities.",
      category: "behavioral" as const
    },
    {
      title: "AI Checks Industry Knowledge Currency",
      content: "The AI identifies when you mention outdated regulations or miss recent developments, helping you stay current on audit industry trends.",
      category: "general" as const
    }
  ];
};
