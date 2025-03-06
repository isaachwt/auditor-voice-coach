
import React from "react";
import { ShieldCheck, Target, Lightbulb, Rocket } from "lucide-react";

const CompetitiveEdge = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Our Competitive Edge</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          What makes AuditorCoach uniquely positioned to succeed
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-auditor-100 rounded-full flex items-center justify-center">
            <ShieldCheck className="h-6 w-6 text-auditor-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Industry-Specific AI</h3>
            <p className="text-gray-600">
              Our AI is specially trained on accounting and auditing principles, technical knowledge, and industry-specific interview questions.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-auditor-100 rounded-full flex items-center justify-center">
            <Target className="h-6 w-6 text-auditor-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Big 4 Focus</h3>
            <p className="text-gray-600">
              Specifically targeting Big 4 accounting firm interviews with detailed knowledge of their hiring processes and question patterns.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-auditor-100 rounded-full flex items-center justify-center">
            <Lightbulb className="h-6 w-6 text-auditor-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Realistic Simulation</h3>
            <p className="text-gray-600">
              Our platform recreates the pressure and experience of actual interviews, preparing candidates for the real thing.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-auditor-100 rounded-full flex items-center justify-center">
            <Rocket className="h-6 w-6 text-auditor-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Scalable Technology</h3>
            <p className="text-gray-600">
              Our platform can scale to serve thousands of users simultaneously with consistent quality and personalized feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveEdge;
