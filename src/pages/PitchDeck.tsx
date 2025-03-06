
import React from "react";
import PitchDeckHeader from "@/components/pitch-deck/PitchDeckHeader";
import ProblemSolution from "@/components/pitch-deck/ProblemSolution";
import MarketOpportunity from "@/components/pitch-deck/MarketOpportunity";
import BusinessModel from "@/components/pitch-deck/BusinessModel";
import CompetitiveEdge from "@/components/pitch-deck/CompetitiveEdge";
import TractionRoadmap from "@/components/pitch-deck/TractionRoadmap";
import TeamInvestment from "@/components/pitch-deck/TeamInvestment";
import ContactCTA from "@/components/pitch-deck/ContactCTA";

const PitchDeck = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PitchDeckHeader />

      <div className="container mx-auto px-4 pt-28 pb-20">
        <ProblemSolution />
        <MarketOpportunity />
        <BusinessModel />
        <CompetitiveEdge />
        <TractionRoadmap />
        <TeamInvestment />
        <ContactCTA />
      </div>
    </div>
  );
};

export default PitchDeck;
