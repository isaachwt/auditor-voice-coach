import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChartBar, Target, Users, TrendingUp, Lightbulb, HandCoins, ShieldCheck, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const PitchDeck = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
            <span className="text-auditor-500">Auditor</span>
            <span className="text-gray-800">Coach</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-auditor-500">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-auditor-500">Auditor</span>Coach
            <span className="ml-2 text-2xl bg-auditor-500 text-white px-3 py-1 rounded-md">VC Pitch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Revolutionizing Auditor Interview Preparation with AI Coaching
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-auditor-500 hover:bg-auditor-600">
              <HandCoins className="mr-2 h-4 w-4" />
              Investment Opportunity
            </Button>
            <Button variant="outline">
              <Target className="mr-2 h-4 w-4" />
              Our Vision
            </Button>
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <Card className="shadow-lg border-0">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-red-100 rounded-full mr-3">
                  <Lightbulb className="h-6 w-6 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold">The Problem</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-500 rounded-full p-1 mr-2 mt-1">●</span>
                  <span>Candidates for Big 4 auditor positions face highly competitive interviews with technical accounting questions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-500 rounded-full p-1 mr-2 mt-1">●</span>
                  <span>Traditional interview prep lacks personalized feedback and realistic practice</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-500 rounded-full p-1 mr-2 mt-1">●</span>
                  <span>Professional coaching is expensive and inaccessible to many candidates</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-500 rounded-full p-1 mr-2 mt-1">●</span>
                  <span>70% of accounting graduates report feeling unprepared for technical interviews</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-full mr-3">
                  <Rocket className="h-6 w-6 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold">Our Solution</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-500 rounded-full p-1 mr-2 mt-1">●</span>
                  <span>AI-powered interview preparation platform specifically for auditor roles</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-500 rounded-full p-1 mr-2 mt-1">●</span>
                  <span>Realistic mock interviews using real Big 4 questions with immediate feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-500 rounded-full p-1 mr-2 mt-1">●</span>
                  <span>Personalized improvement roadmap based on performance analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-500 rounded-full p-1 mr-2 mt-1">●</span>
                  <span>Accessible 24/7 at a fraction of the cost of traditional coaching</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Market Size */}
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

        {/* Business Model */}
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

        {/* Competitive Advantage */}
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

        {/* Traction & Roadmap */}
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

        {/* Team & Investment */}
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

        {/* Contact & CTA */}
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
      </div>
    </div>
  );
};

export default PitchDeck;
