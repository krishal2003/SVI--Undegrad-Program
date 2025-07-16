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
      name: "Air Traffic Controller",
      credits: 3,
      description:
        "Introduction to the role, responsibilities, and operations of Air Traffic Controllers including navigation, communication, and coordination.",
      objectives: [
        "Understand functions and duties of ATCs",
        "Learn communication protocols",
        "Explore airspace structure and navigation",
        "Understand stress management and emergency handling",
      ],
      topics: [
        "Airspace and Navigation Systems",
        "ATC Communication Procedures",
        "Flight Rules and Coordination",
        "Emergency Handling",
        "Human Factors in ATC",
      ],
    },
    {
      code: "AM-502",
      name: "Aircraft Maintenance Management",
      credits: 3,
      description:
        "Covers aircraft maintenance strategies, regulatory requirements, and reliability engineering.",
      objectives: [
        "Understand maintenance systems and documentation",
        "Study regulatory frameworks (ICAO, CAAN, etc.)",
        "Learn maintenance planning and reliability management",
        "Explore MRO organizations and operations",
      ],
      topics: [
        "Maintenance Types and Programs",
        "Airworthiness and Regulations",
        "Maintenance Planning",
        "Reliability Engineering",
        "MRO Industry Overview",
      ],
    },
  ];

  const specializations = {
    "Aviation Financial Management": [
      {
        code: "AM-507",
        name: "International Financial Reporting Standards",
        credits: 3,
        description:
          "Provides knowledge of IFRS applicable in the aviation sector and financial transparency standards.",
        topics: [
          "IFRS Framework",
          "Revenue Recognition",
          "Leases",
          "Financial Instruments",
          "IFRS Compliance",
        ],
      },
      {
        code: "AM-508",
        name: "Taxation in Nepal",
        credits: 3,
        description:
          "Detailed understanding of Nepalese tax structure relevant for aviation businesses.",
        topics: [
          "Direct and Indirect Taxes",
          "Corporate Taxation",
          "VAT System",
          "Aviation-Specific Taxation",
          "Tax Filing",
        ],
      },
      {
        code: "AM-512",
        name: "Aircraft Finance",
        credits: 3,
        description:
          "Explores financial models and strategies for aircraft acquisition, leasing, and funding.",
        topics: [
          "Aircraft Leasing Models",
          "Funding Options",
          "Valuation and Costing",
          "Risk Management",
          "International Finance",
        ],
      },
    ],
    "Aviation Operations Management": [
      {
        code: "AM-509",
        name: "Logistics Management for Aviation",
        credits: 3,
        description:
          "Focuses on aviation supply chains, inventory control, and logistic systems integration.",
        topics: [
          "Supply Chain in Aviation",
          "Inventory Systems",
          "Logistics Infrastructure",
          "IT in Logistics",
          "Performance Metrics",
        ],
      },
      {
        code: "AM-510",
        name: "Production and Operations Management",
        credits: 3,
        description:
          "Covers planning, organizing, and controlling production and operational activities in aviation.",
        topics: [
          "Operations Strategy",
          "Capacity Planning",
          "Lean Systems",
          "Quality Control",
          "Aviation-Specific Applications",
        ],
      },
      {
        code: "AM-511",
        name: "Cargo Management",
        credits: 3,
        description:
          "Covers air cargo operations, regulatory frameworks, and international cargo logistics.",
        topics: [
          "Air Cargo Procedures",
          "Documentation",
          "Cargo Security",
          "ULDs and Handling",
          "Regulations",
        ],
      },
    ],
    "Sales and Marketing": [
      {
        code: "AM-503",
        name: "Airline Customer Service",
        credits: 3,
        description:
          "Focuses on delivering exceptional customer experience and service quality in airlines.",
        topics: [
          "Customer Experience",
          "Service Recovery",
          "Handling Complaints",
          "CRM Systems",
          "Service Standards",
        ],
      },
      {
        code: "AM-504",
        name: "Air Ticketing and Fare Construction",
        credits: 3,
        description:
          "Deals with ticketing systems, fare rules, and pricing mechanisms in the aviation industry.",
        topics: [
          "GDS Systems",
          "Fare Types and Rules",
          "Tax and Surcharges",
          "Ticketing Procedures",
          "Itinerary Pricing",
        ],
      },
      {
        code: "AM-505",
        name: "Airlines Advertising and Sales Promotion",
        credits: 3,
        description:
          "Explores marketing communications, branding, and promotions in the airline industry.",
        topics: [
          "Advertising Channels",
          "Branding",
          "Sales Strategy",
          "Campaign Design",
          "ROI Measurement",
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
