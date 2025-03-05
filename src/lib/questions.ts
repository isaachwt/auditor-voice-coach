
export interface Question {
  id: number;
  text: string;
  category: "technical" | "behavioral" | "case" | "industry";
  level: "entry" | "experienced" | "senior";
}

export const auditQuestions: Question[] = [
  // Entry Level Technical Questions
  {
    id: 1,
    text: "Can you explain the difference between a financial audit and a compliance audit?",
    category: "technical",
    level: "entry"
  },
  {
    id: 2,
    text: "What do you understand by the term 'materiality' in auditing?",
    category: "technical",
    level: "entry"
  },
  {
    id: 3,
    text: "How would you verify accounts receivable during an audit?",
    category: "technical",
    level: "entry"
  },
  {
    id: 4,
    text: "What is the purpose of audit sampling?",
    category: "technical",
    level: "entry"
  },
  
  // Entry Level Behavioral Questions
  {
    id: 5,
    text: "Tell me about a time when you had to meet a tight deadline. How did you handle it?",
    category: "behavioral",
    level: "entry"
  },
  {
    id: 6,
    text: "How do you stay organized when working on multiple projects or tasks?",
    category: "behavioral",
    level: "entry"
  },
  {
    id: 7,
    text: "Describe a situation where you had to learn something new in a short period of time.",
    category: "behavioral",
    level: "entry"
  },
  
  // Entry Level Case Questions
  {
    id: 8,
    text: "If you noticed a discrepancy between inventory records and physical inventory during an audit, what steps would you take?",
    category: "case",
    level: "entry"
  },
  {
    id: 9,
    text: "How would you approach auditing a company's revenue recognition policy?",
    category: "case",
    level: "entry"
  },
  
  // Entry Level Industry Questions
  {
    id: 10,
    text: "What recent changes to accounting standards do you think will most impact the auditing profession?",
    category: "industry",
    level: "entry"
  },
  {
    id: 11,
    text: "How do you stay updated with changes in audit regulations and accounting standards?",
    category: "industry",
    level: "entry"
  },
  
  // Experienced Level Technical Questions
  {
    id: 12,
    text: "How would you handle a situation where management disagrees with your audit findings?",
    category: "technical",
    level: "experienced"
  },
  {
    id: 13,
    text: "Explain your understanding of internal controls and how you would test their effectiveness.",
    category: "technical",
    level: "experienced"
  },
  {
    id: 14,
    text: "What are the key considerations when auditing fair value measurements?",
    category: "technical",
    level: "experienced"
  },
  {
    id: 15,
    text: "How do you approach auditing accounting estimates?",
    category: "technical",
    level: "experienced"
  },
  
  // Experienced Level Behavioral Questions
  {
    id: 16,
    text: "Tell me about a challenging interaction you had with a client and how you handled it.",
    category: "behavioral",
    level: "experienced"
  },
  {
    id: 17,
    text: "Describe a time when you had to deliver difficult news to a client or team member.",
    category: "behavioral",
    level: "experienced"
  },
  {
    id: 18,
    text: "How have you mentored or helped develop junior team members?",
    category: "behavioral",
    level: "experienced"
  },
  
  // Experienced Level Case Questions
  {
    id: 19,
    text: "You discover that a client has been capitalizing expenses that should have been expensed. How would you address this issue?",
    category: "case",
    level: "experienced"
  },
  {
    id: 20,
    text: "How would you handle a situation where you suspect fraud during an audit?",
    category: "case",
    level: "experienced"
  },
  
  // Experienced Level Industry Questions
  {
    id: 21,
    text: "How do you see technology changing the audit profession in the next 5 years?",
    category: "industry",
    level: "experienced"
  },
  {
    id: 22,
    text: "What are the main challenges facing the auditing profession today?",
    category: "industry",
    level: "experienced"
  },
  
  // Senior Level Technical Questions
  {
    id: 23,
    text: "How do you ensure audit quality across multiple engagements or teams?",
    category: "technical",
    level: "senior"
  },
  {
    id: 24,
    text: "Explain your approach to evaluating a company's going concern assessment.",
    category: "technical",
    level: "senior"
  },
  {
    id: 25,
    text: "How do you stay current with complex accounting issues and ensure your team is applying standards correctly?",
    category: "technical",
    level: "senior"
  },
  {
    id: 26,
    text: "What is your approach to auditing areas that involve significant judgment?",
    category: "technical",
    level: "senior"
  },
  
  // Senior Level Behavioral Questions
  {
    id: 27,
    text: "Describe a situation where you had to make a difficult decision that affected your team or client.",
    category: "behavioral",
    level: "senior"
  },
  {
    id: 28,
    text: "How do you manage conflicting priorities between multiple clients or projects?",
    category: "behavioral",
    level: "senior"
  },
  {
    id: 29,
    text: "Tell me about a time you identified a significant business opportunity for a client during an audit.",
    category: "behavioral",
    level: "senior"
  },
  
  // Senior Level Case Questions
  {
    id: 30,
    text: "A client wants to significantly change their accounting policies before year-end. How would you approach this situation?",
    category: "case",
    level: "senior"
  },
  {
    id: 31,
    text: "How would you handle a disagreement between engagement team members about a significant audit matter?",
    category: "case",
    level: "senior"
  },
  
  // Senior Level Industry Questions
  {
    id: 32,
    text: "How do ESG considerations impact audit procedures and reporting?",
    category: "industry",
    level: "senior"
  },
  {
    id: 33,
    text: "What emerging risks should audit committees be focused on in the current business environment?",
    category: "industry",
    level: "senior"
  }
];

export const getQuestions = (
  level: "entry" | "experienced" | "senior",
  categories: string[],
  count: number
): Question[] => {
  // Filter questions by level and categories
  const filteredQuestions = auditQuestions.filter(
    (q) => q.level === level && categories.includes(q.category)
  );
  
  // Shuffle the filtered questions
  const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
  
  // Return the requested number of questions, or all if fewer available
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
