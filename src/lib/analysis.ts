
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
      title: "Use Specific Audit Terms",
      content: "Mention specific accounting standards and audit procedures you've used. Say 'I performed substantive testing' instead of 'I checked the numbers.'",
      category: "technical" as const
    },
    {
      title: "Keep It Simple and Clear",
      content: "Use a clear format: state the situation, what you did, and what the outcome was. Avoid rambling or going off-topic.",
      category: "behavioral" as const
    },
    {
      title: "Show Problem-Solving Steps",
      content: "Describe how you identify issues, gather information, and reach conclusions. Be specific about your approach to audit problems.",
      category: "technical" as const
    },
    {
      title: "Be Honest About Limitations",
      content: "If you don't know something, say so directly. Explain how you'd find the answer rather than guessing or being vague.",
      category: "general" as const
    },
    {
      title: "Give Real Examples Briefly",
      content: "When asked about experience, give one clear example instead of listing many. Focus on your specific contribution and the result.",
      category: "behavioral" as const
    },
    {
      title: "Speak Clearly and Confidently",
      content: "Maintain eye contact, speak at a steady pace, and avoid filler words like 'um' and 'like'. Practice your key talking points.",
      category: "presentation" as const
    },
    {
      title: "Explain How You Handle Clients",
      content: "Describe a time you handled a difficult client situation. Focus on how you communicated and resolved the issue professionally.",
      category: "behavioral" as const
    },
    {
      title: "Stay Current on Industry News",
      content: "Mention recent regulatory changes or industry developments to show you're engaged with the profession beyond just your job.",
      category: "general" as const
    }
  ];
};
