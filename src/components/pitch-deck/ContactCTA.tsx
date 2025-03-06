
import React from "react";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <div className="bg-gradient-to-r from-auditor-500/10 to-auditor-600/10 p-8 rounded-2xl text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Discuss Further?</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
        We're excited to share more details about our vision, traction, and growth plans. Let's schedule a meeting to discuss how AuditorCoach is revolutionizing the auditor interview preparation market.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="bg-auditor-500 hover:bg-auditor-600 px-8 py-6 text-lg">
          Schedule Investor Meeting
        </Button>
        <Button variant="outline" className="px-8 py-6 text-lg border-auditor-300 text-auditor-600">
          Download Full Pitch Deck
        </Button>
      </div>
    </div>
  );
};

export default ContactCTA;
