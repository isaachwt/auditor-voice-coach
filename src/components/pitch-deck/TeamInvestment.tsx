
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { HandCoins } from "lucide-react";

const TeamInvestment = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mb-20">
      <div>
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <h3 className="font-bold">Jane Smith, CPA</h3>
            <p className="text-sm text-gray-600">CEO & Founder</p>
            <p className="text-xs text-gray-500 mt-2">Ex-Deloitte Senior Manager</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <h3 className="font-bold">John Davis</h3>
            <p className="text-sm text-gray-600">CTO</p>
            <p className="text-xs text-gray-500 mt-2">Former AI Lead at EdTech</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <h3 className="font-bold">Sarah Chen, CPA</h3>
            <p className="text-sm text-gray-600">Content Director</p>
            <p className="text-xs text-gray-500 mt-2">Ex-PwC Audit Manager</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <h3 className="font-bold">Michael Brown</h3>
            <p className="text-sm text-gray-600">Head of Growth</p>
            <p className="text-xs text-gray-500 mt-2">Previously at LinkedIn</p>
          </div>
        </div>
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Advisors</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-medium text-sm">Dr. Robert Lee</p>
                <p className="text-xs text-gray-600">Accounting Department Chair, State University</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-medium text-sm">Lisa Wong</p>
                <p className="text-xs text-gray-600">Partner, KPMG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-6">Investment Opportunity</h2>
        <Card className="shadow-lg border-0 mb-6">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Funding Round</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Round Type:</span>
                <span className="font-bold text-auditor-500">Seed</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="font-medium">Target Raise:</span>
                <span className="font-bold text-auditor-500">$2.5M</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="font-medium">Pre-money Valuation:</span>
                <span className="font-bold text-auditor-500">$10M</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="font-medium">Minimum Investment:</span>
                <span className="font-bold text-auditor-500">$250K</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold mb-4">Use of Funds</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Product Development</span>
                <span className="font-medium">40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-auditor-500 h-2 rounded-full" style={{ width: "40%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Marketing & User Acquisition</span>
                <span className="font-medium">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-auditor-500 h-2 rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Team Expansion</span>
                <span className="font-medium">20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-auditor-500 h-2 rounded-full" style={{ width: "20%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Operations</span>
                <span className="font-medium">10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-auditor-500 h-2 rounded-full" style={{ width: "10%" }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-auditor-500 hover:bg-auditor-600 px-8">
            <HandCoins className="mr-2 h-4 w-4" />
            Request Investor Deck
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamInvestment;
