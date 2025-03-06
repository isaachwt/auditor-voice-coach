
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const BusinessModel = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Business Model</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Multi-tiered subscription model with proven revenue streams
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-t-4 border-t-auditor-300 shadow-md">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2">Freemium</h3>
            <p className="text-gray-600 mb-4">Limited access to basic features</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Basic interview questions</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Limited feedback</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Community forum access</span>
              </li>
            </ul>
            <p className="mt-4 text-2xl font-bold">Free</p>
            <p className="text-sm text-gray-500">Conversion to paid: 15%</p>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-auditor-500 shadow-md relative">
          <div className="absolute -top-3 right-3 bg-auditor-500 text-white text-xs px-2 py-1 rounded-full">
            POPULAR
          </div>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <p className="text-gray-600 mb-4">Full interview preparation</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Unlimited mock interviews</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Detailed performance analytics</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Technical question library</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Personalized improvement plan</span>
              </li>
            </ul>
            <p className="mt-4 text-2xl font-bold">$29/month</p>
            <p className="text-sm text-gray-500">or $249 annually</p>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-auditor-700 shadow-md">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-4">For universities & firms</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Bulk licenses</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Custom question banks</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Performance analytics dashboard</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>White-label options</span>
              </li>
            </ul>
            <p className="mt-4 text-2xl font-bold">Custom Pricing</p>
            <p className="text-sm text-gray-500">Starting at $999/month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessModel;
