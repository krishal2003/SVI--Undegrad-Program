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
      name: "Strategic Management",
      credits: 3,
      description:
        "Focuses on formulation and implementation of strategic plans to gain competitive advantage in aviation.",
      objectives: [
        "Understand strategic planning processes",
        "Analyze internal and external environments",
        "Apply strategic models",
        "Evaluate corporate-level strategies",
      ],
      topics: [
        "Strategic Planning Frameworks",
        "SWOT and PESTEL Analysis",
        "Competitive Strategies",
        "Strategy Implementation",
        "Performance Evaluation",
      ],
    },
    {
      code: "AM-602",
      name: "Managerial Finance",
      credits: 3,
      description:
        "Covers advanced concepts in corporate finance including capital budgeting, cost of capital, and financial decision making.",
      objectives: [
        "Learn about capital structure and budgeting",
        "Understand working capital management",
        "Analyze financial performance",
        "Make informed managerial finance decisions",
      ],
      topics: [
        "Capital Budgeting Techniques",
        "Cost of Capital",
        "Working Capital Management",
        "Dividend Policy",
        "Financial Planning and Forecasting",
      ],
    },
  ];

  const specializations = {
    "Aviation Financial Management": [
      {
        code: "AM-604",
        name: "Aviation Insurance",
        credits: 3,
        description:
          "Examines risk assessment, types of insurance, and legal aspects in aviation.",
        topics: [
          "Aviation Risk Types",
          "Hull and Liability Insurance",
          "Claims and Loss Adjustments",
          "Insurance Law",
          "Underwriting Process",
        ],
      },
      {
        code: "AM-608",
        name: "Aviation Economics and Forecasting",
        credits: 3,
        description:
          "Focuses on economic analysis, forecasting techniques, and demand modeling in aviation.",
        topics: [
          "Airline Economics",
          "Forecasting Models",
          "Demand and Capacity",
          "Market Structure",
          "Economic Impact Studies",
        ],
      },
      {
        code: "AM-609",
        name: "Investment Analysis and Portfolio Management",
        credits: 3,
        description:
          "Analyzes investment alternatives, portfolio theory, and risk-return analysis.",
        topics: [
          "Security Markets",
          "Portfolio Construction",
          "Investment Appraisal",
          "Risk Management",
          "Performance Evaluation",
        ],
      },
    ],
    "Aviation Operations Management": [
      {
        code: "AM-605",
        name: "Information Management",
        credits: 3,
        description:
          "Explores information systems and digital technologies used in aviation operations.",
        topics: [
          "MIS in Aviation",
          "Database Management",
          "Decision Support Systems",
          "Cloud Technologies",
          "Data Security",
        ],
      },
      {
        code: "AM-606",
        name: "Operations Research",
        credits: 3,
        description:
          "Applies mathematical modeling and optimization to decision-making in aviation.",
        topics: [
          "Linear Programming",
          "Queuing Theory",
          "Simulation",
          "Inventory Models",
          "Network Models",
        ],
      },
      {
        code: "AM-607",
        name: "Airport Equipment and Facility",
        credits: 3,
        description:
          "Covers design, maintenance, and operation of airport equipment and infrastructure.",
        topics: [
          "Terminal Design",
          "Ground Handling Equipment",
          "Runway and Taxiway Systems",
          "Safety Devices",
          "Facility Planning",
        ],
      },
    ],
    "Sales and Marketing": [
      {
        code: "AM-603",
        name: "Cabin Crew Management",
        credits: 3,
        description:
          "Examines recruitment, training, and performance of cabin crew with emphasis on passenger service and safety.",
        topics: [
          "Cabin Crew Roles",
          "Training Standards",
          "Safety Procedures",
          "Service Excellence",
          "Crisis Handling",
        ],
      },
      {
        code: "AM-610",
        name: "Branding and Advertising",
        credits: 3,
        description:
          "Focuses on brand development and advertising strategies for airlines.",
        topics: [
          "Brand Identity",
          "Campaign Strategy",
          "Media Planning",
          "Airline Positioning",
          "Integrated Marketing",
        ],
      },
      {
        code: "AM-611",
        name: "Digital Marketing",
        credits: 3,
        description:
          "Covers digital tools and platforms used for airline marketing and engagement.",
        topics: [
          "SEO and SEM",
          "Social Media Marketing",
          "Email and Content Strategy",
          "Analytics Tools",
          "Mobile Marketing",
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
