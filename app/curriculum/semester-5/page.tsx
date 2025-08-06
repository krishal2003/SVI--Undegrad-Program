// The full Semester V implementation will go here with core and specialization paths clearly segmented.
// For clarity, sections will be visually separated and styled uniformly.

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Semester5Page() {
  const coreCourses = [
    {
      code: "AM-501",
      name: "Aircraft Certification & Airworthiness",
      credits: 3,
      description:
        "Focuses on regulatory processes and standards involved in certifying aircraft and maintaining airworthiness throughout their operational life.",
      objectives: [
        "Understand aircraft certification procedures and compliance",
        "Learn about international airworthiness standards (EASA, FAA, ICAO)",
        "Analyze continued airworthiness and maintenance requirements",
        "Apply certification knowledge to aviation safety oversight",
      ],
      topics: [
        "Aircraft Type Certification Process",
        "Airworthiness Directives and Regulations",
        "Continuing Airworthiness Management",
        "Modifications and Repairs",
        "Global Regulatory Bodies and Harmonization",
      ],
    },
    {
      code: "AM-502",
      name: "Aviation Law and Regulation",
      credits: 3,
      description:
        "Covers legal frameworks governing national and international aviation operations including airspace rights, liability, and safety regulation.",
      objectives: [
        "Understand international aviation conventions (e.g. Chicago, Warsaw)",
        "Explore legal issues in air transport operations",
        "Analyze airline and airport liability cases",
        "Study regulatory bodies and enforcement mechanisms",
      ],
      topics: [
        "Introduction to Aviation Law",
        "International Conventions (Chicago, Warsaw, Montreal)",
        "Airspace Sovereignty and Traffic Rights",
        "Carrier Liability and Insurance",
        "Regulatory Compliance and Safety Oversight",
      ],
    },
  ];

  const specializations = {
    "Aviation Financial Management": [
      {
        code: "AM-504A",
        name: "Investment Analysis and Portfolio Management",
        credits: 3,
        description:
          "Introduces investment strategies, risk assessment, and portfolio optimization relevant to aviation businesses and personal finance.",
        objectives: [
          "Understand financial instruments and markets",
          "Evaluate risk-return tradeoffs",
          "Apply portfolio theory and asset allocation",
          "Analyze investments in aviation projects",
        ],
        topics: [
          "Securities and Financial Markets",
          "Risk and Return Analysis",
          "Modern Portfolio Theory",
          "Valuation of Stocks and Bonds",
          "Aviation Investment Case Studies",
        ],
      },
      {
        code: "AM-505A",
        name: "Taxation and Auditing",
        credits: 3,
        description:
          "Covers principles of corporate taxation and internal/external auditing with applications in aviation financial management.",
        objectives: [
          "Understand corporate and indirect taxation",
          "Learn tax compliance in aviation operations",
          "Understand internal controls and audit procedures",
          "Analyze financial accuracy and fraud risk",
        ],
        topics: [
          "Direct and Indirect Tax Systems",
          "Corporate Tax Planning",
          "Audit Process and Standards",
          "Internal Controls and Risk Assessment",
          "Audit Reporting and Ethics",
        ],
      },
      {
        code: "AM-506A",
        name: "Financial Management and Insurance in Aviation",
        credits: 3,
        description:
          "Focuses on financial planning, risk mitigation, and aviation-specific insurance policies and claims processes.",
        objectives: [
          "Understand aviation cost structures and budgeting",
          "Explore insurance needs and coverage types",
          "Analyze risk management strategies",
          "Manage aviation asset financing",
        ],
        topics: [
          "Aviation Financial Planning",
          "Insurance Types and Requirements",
          "Risk Analysis and Mitigation",
          "Claims and Liability Management",
          "Leasing and Asset Valuation",
        ],
      },
    ],
    "Aviation Operations Management": [
      {
        code: "AM-504B",
        name: "Cargo & Supply Chain Management for Aviation",
        credits: 3,
        description:
          "Covers air cargo operations, logistics planning, and end-to-end supply chain management in aviation.",
        objectives: [
          "Understand global air cargo operations",
          "Plan and optimize aviation logistics",
          "Manage supply chain risks and costs",
          "Comply with cargo safety regulations",
        ],
        topics: [
          "Air Cargo Industry Overview",
          "Supply Chain Design and Management",
          "Cargo Handling and Documentation",
          "Cold Chain and Special Cargo",
          "Logistics Technology and Innovations",
        ],
      },
      {
        code: "AM-505B",
        name: "Airport Operation, Planning and Design",
        credits: 3,
        description:
          "Focuses on airport infrastructure design and operational planning to meet growing passenger and cargo demands.",
        objectives: [
          "Understand airport planning processes",
          "Design functional terminal and airside layouts",
          "Plan capacity expansion and modernization",
          "Address operational and environmental challenges",
        ],
        topics: [
          "Airport Master Planning",
          "Terminal Design Principles",
          "Runway and Taxiway Layouts",
          "Passenger Flow and Capacity Planning",
          "Environmental Impact and Mitigation",
        ],
      },
      {
        code: "AM-506B",
        name: "Ground Handling and Ramp Management",
        credits: 3,
        description:
          "Explores services involved in aircraft turnaround, ground support operations, and ramp safety management.",
        objectives: [
          "Learn ground handling procedures",
          "Understand ramp operations and safety protocols",
          "Manage turnaround time efficiently",
          "Ensure compliance with international handling standards",
        ],
        topics: [
          "Aircraft Ground Handling Services",
          "Ramp Safety and Hazards",
          "Turnaround Coordination",
          "Baggage and Cargo Services",
          "Ground Handling Agreements (SGHA)",
        ],
      },
    ],
    "Sales and Marketing": [
      {
        code: "AM-504C",
        name: "Airline Customer Service",
        credits: 3,
        description:
          "Focuses on delivering high-quality customer service in airline operations and handling customer needs and complaints professionally.",
        objectives: [
          "Understand customer expectations in aviation",
          "Improve interpersonal and communication skills",
          "Handle complaints and service recovery",
          "Promote passenger satisfaction and loyalty",
        ],
        topics: [
          "Service Quality in Airlines",
          "Passenger Behavior and Expectations",
          "Customer Handling and Conflict Resolution",
          "Service Recovery and Feedback",
          "Airline Loyalty Programs",
        ],
      },
      {
        code: "AM-505C",
        name: "Sales Management",
        credits: 3,
        description:
          "Covers planning, organizing, and controlling the sales function with emphasis on the aviation and travel industry.",
        objectives: [
          "Understand sales planning and forecasting",
          "Manage sales teams and targets",
          "Develop pricing and promotion strategies",
          "Apply sales techniques to B2B and B2C contexts",
        ],
        topics: [
          "Sales Planning and Budgeting",
          "Sales Forecasting Techniques",
          "Sales Team Leadership",
          "Negotiation and Closing Deals",
          "Sales Analytics and CRM Tools",
        ],
      },
      {
        code: "AM-506C",
        name: "Services Marketing",
        credits: 3,
        description:
          "Introduces marketing concepts for service-based industries, with a focus on aviation, hospitality, and travel sectors.",
        objectives: [
          "Understand differences between product and service marketing",
          "Develop the 7Ps service marketing mix",
          "Enhance customer experience and value",
          "Market aviation and travel-related services effectively",
        ],
        topics: [
          "Services Marketing Fundamentals",
          "7Ps of Services Marketing",
          "Managing Service Quality and Delivery",
          "Customer Relationship Management",
          "Marketing in the Airline and Tourism Industry",
        ],
      },
    ],
  };

  const totalCredits = coreCourses.reduce(
    (sum, course) => sum + course.credits,
    0
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-[#e8f4ec]">
        <Navbar />

        <header className="bg-[#3e8558] text-white py-20 mt-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Semester V</h1>
            <p className="text-lg opacity-90 mb-6">
              Core training in air traffic and maintenance management plus
              specialization in finance, operations, or marketing.
            </p>
            <div className="flex justify-center space-x-2 text-green-200 text-sm">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link href="/curriculum" className="hover:text-white">
                Curriculum
              </Link>
              <span>/</span>
              <span className="text-white font-medium">Semester 5</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <div className="mb-10">
            <Link href="/curriculum">
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-white shadow-md"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Curriculum
              </Button>
            </Link>
          </div>

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
              Core Courses
            </h2>
            <div className="grid gap-10">
              {coreCourses.map((course, idx) => (
                <Card key={idx} className="border border-gray-200 shadow-md">
                  <CardHeader className="bg-[#3e8558] text-white">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-2xl">
                        {course.code}: {course.name}
                      </CardTitle>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {course.credits} Credits
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Description
                      </h4>
                      <p className="text-gray-700 mb-4">{course.description}</p>
                      <h4 className="text-lg font-semibold mb-2">Objectives</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {course.objectives.map((obj, i) => (
                          <li key={i}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Topics</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {course.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {Object.entries(specializations).map(([track, courses], i) => (
            <section key={i} className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                Specialization: {track}
              </h2>
              <div className="grid gap-10">
                {courses.map((course, idx) => (
                  <Card key={idx} className="border border-gray-200 shadow-md">
                    <CardHeader className="bg-[#3e8558] text-white">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-2xl">
                          {course.code}: {course.name}
                        </CardTitle>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                          {course.credits} Credits
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <h4 className="text-lg font-semibold mb-2">
                        Description
                      </h4>
                      <p className="text-gray-700 mb-4">{course.description}</p>
                      <h4 className="text-lg font-semibold mb-2">Topics</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {course.topics.map((topic, j) => (
                          <li key={j}>{topic}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}

          <section>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Previous Semester</p>
                <Link
                  href="/curriculum/semester-4"
                  className="text-[#3e8558] font-semibold hover:underline"
                >
                  ← Semester IV
                </Link>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Next Semester</p>
                <Link
                  href="/curriculum/semester-6"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Semester VI →
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
