import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Semester1Page() {
  const courses = [
    {
      code: "AM-101",
      name: "Principles of Management",
      credits: 3,
      description:
        "Introduction to fundamental management concepts, theories, and practices. Covers planning, organizing, leading, and controlling functions of management.",
      objectives: [
        "Understand basic management principles and functions",
        "Learn about different management theories and their applications",
        "Develop foundational management skills",
        "Understand organizational structures and processes",
      ],
      topics: [
        "Evolution of Management Thought",
        "Planning and Decision Making",
        "Organizing and Organizational Structure",
        "Leadership and Motivation",
        "Control and Performance Management",
      ],
    },
    {
      code: "AM-102",
      name: "Introduction to Aviation Industry",
      credits: 3,
      description:
        "Comprehensive overview of the global aviation industry, its history, structure, key players, and current trends affecting the sector.",
      objectives: [
        "Understand the structure and components of aviation industry",
        "Learn about key stakeholders in aviation",
        "Analyze current trends and challenges in aviation",
        "Explore career opportunities in aviation management",
      ],
      topics: [
        "History and Evolution of Aviation",
        "Aviation Industry Structure",
        "Airlines, Airports, and Aircraft Manufacturers",
        "Regulatory Bodies and International Organizations",
        "Current Trends and Future Outlook",
      ],
    },
    {
      code: "AM-103",
      name: "Computer Applications",
      credits: 3,
      description:
        "Essential computer skills and software applications relevant to aviation management, including office productivity tools and industry-specific software.",
      objectives: [
        "Develop proficiency in computer applications",
        "Learn aviation-specific software systems",
        "Understand data management and analysis",
        "Master presentation and communication tools",
      ],
      topics: [
        "Microsoft Office Suite",
        "Aviation Management Software",
        "Database Management Systems",
        "Internet and Communication Tools",
        "Data Analysis and Visualization",
      ],
    },
    {
      code: "AM-104",
      name: "Business Mathematics",
      credits: 3,
      description:
        "Mathematical concepts and techniques essential for business and aviation management, including statistics, financial mathematics, and quantitative analysis.",
      objectives: [
        "Master mathematical concepts for business applications",
        "Understand statistical analysis techniques",
        "Learn financial mathematics and calculations",
        "Develop quantitative problem-solving skills",
      ],
      topics: [
        "Business Statistics and Probability",
        "Financial Mathematics",
        "Linear Programming",
        "Time Series Analysis",
        "Quantitative Decision Making",
      ],
    },
    {
      code: "AM-105",
      name: "Corporate Communication",
      credits: 3,
      description:
        "Development of effective communication skills for professional environments, including written, oral, and digital communication in aviation context.",
      objectives: [
        "Develop effective communication skills",
        "Learn professional writing techniques",
        "Master presentation and public speaking",
        "Understand cross-cultural communication",
      ],
      topics: [
        "Business Writing and Documentation",
        "Oral Communication and Presentations",
        "Digital Communication Tools",
        "Cross-cultural Communication",
        "Crisis Communication in Aviation",
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
            <h1 className="text-5xl font-extrabold mb-4">Semester I</h1>
            <p className="text-lg opacity-90 mb-6">
              Foundation courses for aviation management with a focus on core
              skills and industry orientation.
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
              <span className="text-white font-medium">Semester 1</span>
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
                  <CardHeader className="bg-gradient-to-r from-green-700 to-emerald-600 text-white">
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
                <p className="text-gray-400">Not Available</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Next Semester</p>
                <Link
                  href="/curriculum/semester-2"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Semester II →
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
