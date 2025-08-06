import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Semester4Page() {
  const courses = [
    {
      code: "AM-401",
      name: "Database Management",
      credits: 3,
      description:
        "Covers the design, implementation, and management of databases with an emphasis on applications in aviation and business systems.",
      objectives: [
        "Understand database concepts and architectures",
        "Design relational databases using ER models",
        "Write SQL queries for data manipulation",
        "Manage data integrity, security, and transactions",
      ],
      topics: [
        "Database Concepts and Architecture",
        "Entity-Relationship Modeling",
        "Relational Model and Normalization",
        "Structured Query Language (SQL)",
        "Database Security and Backup",
      ],
    },
    {
      code: "AM-402",
      name: "Research Methodology",
      credits: 3,
      description:
        "Introduces research methods used in academic and industry-based studies, focusing on problem formulation, data collection, and analysis.",
      objectives: [
        "Understand the research process and design",
        "Formulate research problems and hypotheses",
        "Select appropriate methods for data collection",
        "Analyze and interpret data effectively",
      ],
      topics: [
        "Introduction to Research and Its Types",
        "Research Design and Hypothesis Formulation",
        "Data Collection Techniques",
        "Sampling Methods and Data Analysis",
        "Report Writing and Presentation",
      ],
    },
    {
      code: "AM-403",
      name: "Business Strategy",
      credits: 3,
      description:
        "Explores how organizations develop, implement, and evaluate strategic plans to gain competitive advantage in dynamic markets.",
      objectives: [
        "Understand strategic management concepts",
        "Analyze internal and external environments",
        "Formulate business-level and corporate strategies",
        "Evaluate strategic options and performance",
      ],
      topics: [
        "Introduction to Business Strategy",
        "Environmental and SWOT Analysis",
        "Strategic Formulation and Planning",
        "Strategy Implementation and Control",
        "Case Studies in Strategic Management",
      ],
    },
    {
      code: "AM-404",
      name: "Aviation Safety and Security",
      credits: 3,
      description:
        "Examines safety management systems, risk assessment, and aviation security protocols to ensure safe operations in air transport.",
      objectives: [
        "Understand aviation safety regulations and practices",
        "Analyze safety risks and human factors",
        "Learn security measures in aviation environments",
        "Implement and manage Safety Management Systems (SMS)",
      ],
      topics: [
        "Aviation Safety Principles",
        "Risk Assessment and Hazard Management",
        "Human Factors and Safety Culture",
        "Airport and Aircraft Security Protocols",
        "Safety Management Systems (SMS)",
      ],
    },
    {
      code: "AM-405",
      name: "Operational Research Applied to Air Transportation",
      credits: 3,
      description:
        "Applies operations research techniques to solve practical problems in air transport including scheduling, routing, and resource optimization.",
      objectives: [
        "Understand operations research models in aviation",
        "Apply linear programming to aviation scenarios",
        "Optimize scheduling and resource allocation",
        "Use decision analysis in air transport operations",
      ],
      topics: [
        "Introduction to Operations Research",
        "Linear and Integer Programming",
        "Transportation and Assignment Problems",
        "Simulation and Queuing Theory",
        "Decision Models in Air Transport",
      ],
    },
    {
      code: "AM-406",
      name: "Meteorology Services for Aviation",
      credits: 3,
      description:
        "Provides knowledge of weather systems, forecasting, and meteorological services that support safe and efficient flight operations.",
      objectives: [
        "Understand basic atmospheric processes",
        "Interpret aviation weather charts and data",
        "Analyze the impact of weather on flight operations",
        "Use meteorological tools for aviation decision-making",
      ],
      topics: [
        "Atmosphere and Weather Fundamentals",
        "Weather Observation and Reporting (METAR, TAF)",
        "Hazardous Weather and Aviation Impacts",
        "Meteorological Equipment and Forecasting Tools",
        "International Meteorology Standards (ICAO)",
      ],
    },
  ];

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-[#e8f4ec]">
        <Navbar />

        <header className="bg-[#3e8558] text-white py-20 mt-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Semester IV</h1>
            <p className="text-lg opacity-90 mb-6">
              Semester 4 strengthens knowledge in behavior, innovation, aviation
              disaster preparedness, revenue strategy, and emerging
              technologies.
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
              <span className="text-white font-medium">Semester 4</span>
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

          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="rounded-xl bg-white border border-gray-200 shadow hover:shadow-md transition p-6 text-center">
              <BookOpen className="w-8 h-8 text-[#3e8558] mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900">
                {courses.length}
              </p>
              <p className="text-sm text-gray-500">Total Courses</p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 shadow hover:shadow-md transition p-6 text-center">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900">{totalCredits}</p>
              <p className="text-sm text-gray-500">Total Credits</p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 shadow hover:shadow-md transition p-6 text-center">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900">16</p>
              <p className="text-sm text-gray-500">Weeks Duration</p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 shadow hover:shadow-md transition p-6 text-center">
              <BookOpen className="w-8 h-8 text-[#3e8558] mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900">Core</p>
              <p className="text-sm text-gray-500">Course Type</p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Course Details
            </h2>
            <div className="space-y-10">
              {courses.map((course, idx) => (
                <Card
                  key={idx}
                  className="border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
                >
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
                  <CardContent className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        Course Description
                      </h4>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {course.description}
                      </p>
                      <h4 className="text-lg font-semibold mb-3">
                        Learning Objectives
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {course.objectives.map((obj, i) => (
                          <li key={i}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        Course Topics
                      </h4>
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

          <section>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Previous Semester</p>
                <Link
                  href="/curriculum/semester-3"
                  className="text-[#3e8558] font-semibold hover:underline"
                >
                  ← Semester III
                </Link>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Next Semester</p>
                <Link
                  href="/curriculum/semester-5"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Semester V →
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
