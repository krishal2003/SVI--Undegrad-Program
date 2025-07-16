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
      name: "Organizational Behavior",
      credits: 3,
      description:
        "Examines individual and group dynamics within organizations, focusing on motivation, leadership, communication, and organizational change.",
      objectives: [
        "Understand behavioral principles within organizations",
        "Explore theories of leadership and motivation",
        "Analyze group behavior and team effectiveness",
        "Understand communication processes and change management",
      ],
      topics: [
        "Introduction to Organizational Behavior",
        "Motivation Theories",
        "Leadership Styles",
        "Teamwork and Group Dynamics",
        "Organizational Change and Culture",
      ],
    },
    {
      code: "AM-402",
      name: "Entrepreneurship",
      credits: 3,
      description:
        "Focuses on the process of creating and managing new business ventures. Covers ideation, business planning, and funding strategies.",
      objectives: [
        "Learn entrepreneurial mindset and opportunity recognition",
        "Understand business model development",
        "Develop business plans and funding strategies",
        "Analyze risks and innovation management",
      ],
      topics: [
        "Entrepreneurial Process",
        "Business Model Canvas",
        "Feasibility Analysis",
        "Financing Ventures",
        "Innovation and Startup Growth",
      ],
    },
    {
      code: "AM-403",
      name: "Disaster Management in Aviation",
      credits: 3,
      description:
        "Examines the principles of disaster preparedness, response, and recovery in aviation. Includes crisis management and emergency planning.",
      objectives: [
        "Understand types of aviation disasters and responses",
        "Learn about emergency preparedness and contingency planning",
        "Analyze case studies of aviation disasters",
        "Develop crisis communication and leadership skills",
      ],
      topics: [
        "Disaster Management Cycle",
        "Airport and Airline Emergency Plans",
        "ICAO and National Guidelines",
        "Incident Command Systems",
        "Crisis Communication Strategies",
      ],
    },
    {
      code: "AM-404",
      name: "Revenue Generation in Aviation Sector",
      credits: 3,
      description:
        "Explores sources of revenue in the aviation industry including aeronautical and non-aeronautical streams. Emphasis on pricing and revenue management.",
      objectives: [
        "Identify key revenue streams in aviation",
        "Understand pricing strategies and yield management",
        "Explore non-aeronautical revenue sources",
        "Analyze airport commercial development",
      ],
      topics: [
        "Aeronautical vs Non-Aeronautical Revenue",
        "Airline Pricing and Yield Management",
        "Retail and Concessions at Airports",
        "Airport City Concept",
        "Revenue Optimization Techniques",
      ],
    },
    {
      code: "AM-405",
      name: "Technological Trends in Aviation",
      credits: 3,
      description:
        "Covers current and emerging technologies impacting the aviation sector, including digital transformation, AI, biometrics, and automation.",
      objectives: [
        "Understand digital transformation in aviation",
        "Explore new and emerging technologies",
        "Evaluate the impact of technology on operations",
        "Learn about cybersecurity and data protection",
      ],
      topics: [
        "Digital Aviation Ecosystem",
        "Biometric Technologies",
        "Artificial Intelligence in Aviation",
        "Automation and Robotics",
        "Cybersecurity and Data Privacy",
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
