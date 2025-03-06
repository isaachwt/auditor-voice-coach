
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, ChartBar, TrendingUp } from "lucide-react";

const MarketOpportunity = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Market Opportunity</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          AuditorCoach addresses a large and growing market with significant revenue potential
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-auditor-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-auditor-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Target Audience</h3>
            <p className="text-gray-600 mb-3">150,000+ accounting graduates annually in the US alone</p>
            <p className="text-2xl font-bold text-auditor-500">1.2M+</p>
            <p className="text-sm text-gray-500">Global accounting students</p>
          </CardContent>
        </Card>

        <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-auditor-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChartBar className="h-8 w-8 text-auditor-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Market Size</h3>
            <p className="text-gray-600 mb-3">Career prep and coaching market for accounting professionals</p>
            <p className="text-2xl font-bold text-auditor-500">$2.8B</p>
            <p className="text-sm text-gray-500">Annual market size</p>
          </CardContent>
        </Card>

        <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-auditor-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-auditor-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Growth Projections</h3>
            <p className="text-gray-600 mb-3">Online education market CAGR expected to continue rising</p>
            <p className="text-2xl font-bold text-auditor-500">18.4%</p>
            <p className="text-sm text-gray-500">Projected annual growth</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketOpportunity;
