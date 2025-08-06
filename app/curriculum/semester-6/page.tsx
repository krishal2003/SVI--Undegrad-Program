// Semester VI implementation with core and specialization options
// Structured UI using consistent brand theme and layout

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Semester6Page() {
  const coreCourses = [
    {
      code: "AM-601",
      name: "Project Management",
      credits: 3,
      description:
        "Introduces principles of managing aviation-related projects including planning, execution, monitoring, and closure with a focus on industry tools and practices.",
      objectives: [
        "Understand the project lifecycle and phases",
        "Develop scheduling and budgeting skills",
        "Identify and manage project risks",
        "Apply project management tools like Gantt charts and CPM",
      ],
      topics: [
        "Project Planning and Scoping",
        "Time and Cost Estimation",
        "Risk Management in Projects",
        "Project Execution and Control",
        "Project Closure and Evaluation",
      ],
    },
    {
      code: "AM-602",
      name: "Disaster Management in Aviation",
      credits: 3,
      description:
        "Explores emergency preparedness and disaster response strategies in the aviation sector, including crisis communication and recovery planning.",
      objectives: [
        "Understand aviation-specific disaster risks",
        "Learn incident command and emergency response planning",
        "Analyze case studies of aviation disasters",
        "Coordinate stakeholder and government responses",
      ],
      topics: [
        "Types of Disasters in Aviation",
        "Emergency Planning and Preparedness",
        "Crisis Communication",
        "Disaster Response Coordination",
        "Recovery and Business Continuity",
      ],
    },
    {
      code: "AM-603",
      name: "Avionics System",
      credits: 3,
      description:
        "Focuses on electronic systems used in aircraft, including navigation, communication, flight instrumentation, and automation technologies.",
      objectives: [
        "Understand key avionics systems and components",
        "Learn integration of navigation and communication systems",
        "Analyze failures and maintenance of avionics systems",
        "Explore automation and next-gen avionics technology",
      ],
      topics: [
        "Introduction to Avionics",
        "Navigation Systems (GPS, INS, VOR)",
        "Communication Systems",
        "Flight Control and Display Systems",
        "Aircraft Monitoring and Automation",
      ],
    },
  ];

  const specializations = {
    "Aviation Financial Management": [
      {
        code: "AM-604A",
        name: "Accounting for Managers",
        credits: 3,
        description:
          "Covers financial and managerial accounting concepts with applications in planning, control, and decision-making in aviation organizations.",
        objectives: [
          "Understand basic financial statements",
          "Use cost data for decision-making",
          "Apply budgeting and variance analysis",
          "Interpret financial ratios and reports",
        ],
        topics: [
          "Income Statement and Balance Sheet",
          "Cost Classification and Allocation",
          "Budgeting and Forecasting",
          "Variance and Performance Analysis",
          "Cash Flow and Ratio Analysis",
        ],
      },
      {
        code: "AM-605A",
        name: "Air Transport Economics",
        credits: 3,
        description:
          "Analyzes the economic principles governing air transport including demand, cost structures, pricing, and market competition.",
        objectives: [
          "Understand cost behavior in airlines",
          "Evaluate demand forecasting models",
          "Study pricing strategies in competitive markets",
          "Examine economic regulation in aviation",
        ],
        topics: [
          "Airline Cost and Revenue Structures",
          "Passenger and Cargo Demand Analysis",
          "Pricing and Yield Management",
          "Market Structures and Competition",
          "Subsidies, Taxes, and Economic Regulation",
        ],
      },
      {
        code: "AM-606A",
        name: "Aircraft Leasing and Financing",
        credits: 3,
        description:
          "Explores aircraft leasing models, financial structures, and legal considerations in acquiring and managing aviation assets.",
        objectives: [
          "Understand aircraft lease types and terms",
          "Evaluate financing options for aviation assets",
          "Analyze financial risks and return on investment",
          "Interpret regulatory and tax implications",
        ],
        topics: [
          "Dry vs Wet Leasing",
          "Operating vs Finance Leases",
          "Aircraft Acquisition Process",
          "Lessor-Lessee Agreements",
          "Tax, Insurance, and Risk Management",
        ],
      },
    ],
    "Aviation Operations Management": [
      {
        code: "AM-604B",
        name: "Flight Mechanics",
        credits: 3,
        description:
          "Introduces principles governing flight performance and stability, including lift, drag, propulsion, and aircraft dynamics.",
        objectives: [
          "Understand flight forces and motion equations",
          "Study aircraft performance parameters",
          "Analyze flight stability and control",
          "Apply aerodynamic principles in operations",
        ],
        topics: [
          "Lift and Drag Forces",
          "Aircraft Performance and Maneuvering",
          "Stability and Control",
          "Propulsion Basics",
          "Flight Envelope and Load Factors",
        ],
      },
      {
        code: "AM-605B",
        name: "Airline Scheduling and Onboard Crew Management",
        credits: 3,
        description:
          "Covers methods for developing flight schedules and managing crew deployment in airline operations efficiently and legally.",
        objectives: [
          "Create effective flight schedules",
          "Manage crew duty limits and assignments",
          "Use tools and systems for crew planning",
          "Ensure compliance with legal requirements",
        ],
        topics: [
          "Flight Scheduling and Fleet Assignment",
          "Hub-and-Spoke Operations",
          "Crew Pairing and Rostering",
          "Fatigue Management and Legal Constraints",
          "Scheduling Software Tools",
        ],
      },
      {
        code: "AM-606B",
        name: "Flight Operations",
        credits: 3,
        description:
          "Focuses on planning, coordination, and monitoring of flight operations, including dispatch, flight planning, and safety oversight.",
        objectives: [
          "Understand flight dispatch responsibilities",
          "Plan efficient and safe flight routes",
          "Monitor in-flight progress and deviations",
          "Comply with operational regulations and documentation",
        ],
        topics: [
          "Flight Dispatch and Support Functions",
          "Flight Plan Preparation",
          "Weather and NOTAM Interpretation",
          "Flight Tracking and Communication",
          "Operational Documentation and Records",
        ],
      },
    ],
    "Aviation Sales and Marketing": [
      {
        code: "AM-604C",
        name: "Air Ticketing and Fare Construction",
        credits: 3,
        description:
          "Explains fare systems, global distribution systems (GDS), and IATA rules used to construct and price airline tickets.",
        objectives: [
          "Understand fare types and booking classes",
          "Use GDS systems for ticketing",
          "Apply IATA fare construction principles",
          "Issue and refund tickets as per rules",
        ],
        topics: [
          "Global Distribution Systems (GDS)",
          "Fare Codes and Classes",
          "IATA Fare Construction Rules",
          "Passenger Name Records (PNR)",
          "Ticketing, Refunds, and Penalties",
        ],
      },
      {
        code: "AM-605C",
        name: "Branding",
        credits: 3,
        description:
          "Covers brand building, positioning, and identity strategies with application in airline and airport services.",
        objectives: [
          "Build strong aviation service brands",
          "Create consistent brand messaging",
          "Position airlines in competitive markets",
          "Measure brand equity and perception",
        ],
        topics: [
          "Brand Identity and Positioning",
          "Brand Strategy Development",
          "Emotional Branding and Storytelling",
          "Brand Equity Measurement",
          "Aviation Branding Case Studies",
        ],
      },
      {
        code: "AM-606C",
        name: "Digital Marketing",
        credits: 3,
        description:
          "Focuses on using digital channels to market aviation services, including SEO, social media, content, and paid campaigns.",
        objectives: [
          "Plan digital marketing strategies",
          "Use SEO and content for airline visibility",
          "Leverage social media for engagement",
          "Analyze campaign performance with tools",
        ],
        topics: [
          "Digital Marketing Channels",
          "Search Engine Optimization (SEO)",
          "Content and Email Marketing",
          "Social Media and Influencer Engagement",
          "Campaign Analytics and Reporting",
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
            <h1 className="text-5xl font-extrabold mb-4">Semester VI</h1>
            <p className="text-lg opacity-90 mb-6">
              Advanced core courses with financial, operations, and marketing
              specialization options in aviation.
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
              <span className="text-white font-medium">Semester 6</span>
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
                  href="/curriculum/semester-5"
                  className="text-[#3e8558] font-semibold hover:underline"
                >
                  ← Semester V
                </Link>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Next Semester</p>
                <Link
                  href="/curriculum/semester-7"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Semester VII →
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
