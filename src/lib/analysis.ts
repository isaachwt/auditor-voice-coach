
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
      title: "Master the Technical Vocabulary",
      content: "Use precise auditing and accounting terminology. Be specific about standards (IFRS, GAAP), audit procedures, and control frameworks (COSO).",
      category: "technical" as const
    },
    {
      title: "Structure Your Responses",
      content: "Use the STAR method (Situation, Task, Action, Result) for behavioral questions to keep responses organized and relevant.",
      category: "behavioral" as const
    },
    {
      title: "Show Your Analytical Thinking",
      content: "When discussing audit cases, walk through your thought process systematically: risk assessment, evidence gathering, evaluation, and conclusion.",
      category: "technical" as const
    },
    {
      title: "Demonstrate Professional Skepticism",
      content: "Show how you maintain an questioning mindset while remaining objective and unbiased in your work.",
      category: "general" as const
    },
    {
      title: "Highlight Adaptability",
      content: "Big 4 firms value adaptability. Share examples of how you've navigated change, learned new skills, or adjusted to different client environments.",
      category: "behavioral" as const
    },
    {
      title: "Speak Confidently",
      content: "Maintain good posture, speak at a measured pace, and use a confident tone. Avoid filler words and tentative language.",
      category: "presentation" as const
    },
    {
      title: "Show Client Management Skills",
      content: "Emphasize your ability to build relationships, communicate effectively with clients, and handle difficult conversations professionally.",
      category: "behavioral" as const
    },
    {
      title: "Prepare Industry Knowledge",
      content: "Research current audit trends, regulatory changes, and technological innovations affecting the profession to demonstrate your commitment.",
      category: "general" as const
    }
  ];
};
