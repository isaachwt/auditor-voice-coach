
import React from "react";

const TractionRoadmap = () => {
  return (
    <div className="mb-20 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl font-bold mb-6">Current Traction</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">User Growth</h3>
            <div className="flex items-end gap-4 mb-2">
              <div className="text-4xl font-bold text-auditor-500">2,500+</div>
              <div className="text-green-500 font-medium">↑28% MoM</div>
            </div>
            <p className="text-gray-600">Active users on the platform</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Partnerships</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-auditor-500"></div>
                <p>5 university accounting departments</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-auditor-500"></div>
                <p>2 professional accounting associations</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-auditor-500"></div>
                <p>1 Big 4 firm pilot program</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Revenue</h3>
            <div className="flex items-end gap-4 mb-2">
              <div className="text-4xl font-bold text-auditor-500">$45K</div>
              <div className="text-green-500 font-medium">↑34% MoM</div>
            </div>
            <p className="text-gray-600">Monthly recurring revenue</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-6">Product Roadmap</h2>
        <div className="relative border-l-2 border-auditor-300 pl-6 pb-2 space-y-6">
          <div className="relative">
            <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-auditor-500"></div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold mb-1">Q2 2023</h3>
              <p className="text-gray-600">Launch of core interview platform with technical question bank</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-auditor-500"></div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold mb-1">Q3 2023</h3>
              <p className="text-gray-600">Advanced analytics and personalized improvement roadmaps</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-auditor-300"></div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold mb-1">Q4 2023</h3>
              <p className="text-gray-600">Enterprise platform for universities and accounting firms</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-auditor-200"></div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold mb-1">Q1 2024</h3>
              <p className="text-gray-600">International expansion and localized content</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-auditor-200"></div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold mb-1">Q2 2024</h3>
              <p className="text-gray-600">AI-powered resume and application review tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionRoadmap;
