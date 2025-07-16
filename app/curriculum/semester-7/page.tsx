// Semester VII layout with Elective, Core, and Project sections

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Semester7Page() {
  const electives = [
    {
      code: "AM-704",
      name: "Meteorology Services for Aviation",
      credits: 3,
      description:
        "Covers atmospheric science and weather forecasting techniques relevant to aviation operations.",
      topics: [
        "Weather Systems",
        "Aviation Weather Reports",
        "Meteorological Hazards",
        "Forecasting Models",
        "METAR & TAF Interpretation",
      ],
    },
    {
      code: "AM-706",
      name: "Airlines Schedule Planning",
      credits: 3,
      description:
        "Introduces the process of airline scheduling, route planning, and fleet assignment.",
      topics: [
        "Flight Scheduling",
        "Fleet Assignment",
        "Hub-and-Spoke Networks",
        "Slot Management",
        "Operational Constraints",
      ],
    },
    {
      code: "AM-707",
      name: "Transportation of Dangerous Goods",
      credits: 3,
      description:
        "Explores regulatory requirements and best practices in transporting hazardous materials by air.",
      topics: [
        "ICAO & IATA Regulations",
        "Packaging and Labeling",
        "Handling Procedures",
        "Training & Documentation",
        "Emergency Response",
      ],
    },
  ];

  const coreCourses = [
    {
      code: "AM-701",
      name: "Project Management",
      credits: 3,
      description:
        "Covers tools and techniques used to plan, execute, and control aviation-related projects.",
      objectives: [
        "Learn project lifecycle and frameworks",
        "Understand resource and risk management",
        "Apply scheduling and budgeting tools",
        "Evaluate project outcomes",
      ],
      topics: [
        "Project Planning & Initiation",
        "WBS and Scheduling",
        "Risk and Resource Management",
        "Monitoring and Evaluation",
        "Agile & Waterfall Methodologies",
      ],
    },
    {
      code: "AM-702",
      name: "Civil Aviation and Tourism Industry of Nepal",
      credits: 3,
      description:
        "Examines the interconnection between Nepal’s civil aviation sector and tourism development.",
      objectives: [
        "Understand aviation’s role in Nepalese tourism",
        "Explore CAAN and MoCTCA policies",
        "Analyze tourism trends and infrastructure",
        "Study regional connectivity initiatives",
      ],
      topics: [
        "Nepal's Aviation History",
        "Tourism Trends in Nepal",
        "Air Transport Policies",
        "Airport Infrastructure",
        "Government and Stakeholders",
      ],
    },
    {
      code: "AM-705",
      name: "Open Sky Policy in Nepal",
      credits: 3,
      description:
        "Explores liberalization of airspace, its impact on competition, and Nepal’s aviation growth.",
      objectives: [
        "Study bilateral air service agreements",
        "Understand implications of open sky policy",
        "Analyze airspace liberalization",
        "Evaluate economic impacts on Nepal",
      ],
      topics: [
        "Concept of Open Skies",
        "Policy Framework in Nepal",
        "Market Access and Competition",
        "Regional Examples",
        "Challenges and Opportunities",
      ],
    },
  ];

  const project = {
    code: "AM-703",
    name: "Industrial Experience Project",
    credits: 3,
    description:
      "A supervised industrial placement project designed to apply academic knowledge in a real aviation workplace.",
    objectives: [
      "Gain hands-on experience in aviation industry",
      "Apply classroom knowledge to real tasks",
      "Understand workplace culture and processes",
      "Develop practical skills and reporting",
    ],
    topics: [
      "Field Work Planning",
      "Workplace Integration",
      "Project Log and Documentation",
      "Industry Report Writing",
      "Presentation and Evaluation",
    ],
  };

  const totalCredits =
    coreCourses.reduce((sum, c) => sum + c.credits, 0) + project.credits;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-[#e8f4ec]">
        <Navbar />

        <header className="bg-[#3e8558] text-white py-20 mt-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Semester VII</h1>
            <p className="text-lg opacity-90 mb-6">
              Explore electives in aviation operations, national policy, and
              apply skills in an industry project.
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
              <span className="text-white font-medium">Semester 7</span>
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
              Elective Courses
            </h2>
            <div className="grid gap-10">
              {electives.map((course, idx) => (
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
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p className="text-gray-700 mb-4">{course.description}</p>
                    <h4 className="text-lg font-semibold mb-2">Topics</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {course.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

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

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
              Project
            </h2>
            <Card className="border border-gray-200 shadow-md">
              <CardHeader className="bg-[#3e8558] text-white">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">
                    {project.code}: {project.name}
                  </CardTitle>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {project.credits} Credits
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <h4 className="text-lg font-semibold mb-2">Objectives</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {project.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Topics</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {project.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Previous Semester</p>
                <Link
                  href="/curriculum/semester-6"
                  className="text-[#3e8558] font-semibold hover:underline"
                >
                  ← Semester VI
                </Link>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Next Semester</p>
                <Link
                  href="/curriculum/semester-7"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Semester VIII →
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
