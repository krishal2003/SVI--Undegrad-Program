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
      name: "Advanced English 1",
      credits: 3,
      description:
        "Focuses on improving advanced English language skills including reading, writing, listening, and speaking for academic and professional settings.",
      objectives: [
        "Enhance vocabulary and grammar skills",
        "Develop advanced reading comprehension",
        "Improve academic and business writing",
        "Practice effective listening and speaking",
      ],
      topics: [
        "Advanced Grammar and Syntax",
        "Academic Reading Strategies",
        "Essay and Report Writing",
        "Listening Comprehension and Note-taking",
        "Oral Presentations and Discussions",
      ],
    },
    {
      code: "AM-102",
      name: "Mathematics",
      credits: 3,
      description:
        "Covers fundamental mathematical concepts and techniques needed for business and management, including algebra, calculus, and statistics.",
      objectives: [
        "Understand basic algebraic concepts",
        "Apply calculus principles to real problems",
        "Learn descriptive and inferential statistics",
        "Develop problem-solving and analytical skills",
      ],
      topics: [
        "Algebra and Functions",
        "Differential and Integral Calculus",
        "Probability and Statistics",
        "Matrices and Linear Equations",
        "Mathematical Modeling in Business",
      ],
    },
    {
      code: "AM-103",
      name: "Principles of Microeconomics",
      credits: 3,
      description:
        "Introduces the basics of microeconomic theory, focusing on consumer behavior, production, market structures, and pricing mechanisms.",
      objectives: [
        "Understand supply and demand dynamics",
        "Analyze consumer choice and utility",
        "Explore production costs and firm behavior",
        "Differentiate market structures and competition",
      ],
      topics: [
        "Introduction to Microeconomics",
        "Demand and Supply Analysis",
        "Consumer Behavior and Utility Theory",
        "Production and Cost Analysis",
        "Market Structures: Perfect Competition, Monopoly, Oligopoly",
      ],
    },
    {
      code: "AM-104",
      name: "Society and Culture",
      credits: 3,
      description:
        "Examines social and cultural factors shaping human behavior, communities, and organizations in a global context.",
      objectives: [
        "Understand key sociological and cultural concepts",
        "Explore the impact of culture on society",
        "Analyze social institutions and group dynamics",
        "Recognize diversity and intercultural relations",
      ],
      topics: [
        "Introduction to Sociology and Culture",
        "Socialization and Social Structure",
        "Cultural Diversity and Ethnocentrism",
        "Social Institutions: Family, Education, Religion",
        "Social Change and Globalization",
      ],
    },
    {
      code: "AM-105",
      name: "Financial Accounting",
      credits: 3,
      description:
        "Foundational course covering key accounting principles, financial statement preparation, and recording business transactions.",
      objectives: [
        "Understand basic accounting concepts and principles",
        "Learn how to prepare financial statements",
        "Record and classify business transactions accurately",
        "Analyze financial information for business decisions",
      ],
      topics: [
        "Introduction to Financial Accounting",
        "Recording Transactions and Journals",
        "Ledger Accounts and Trial Balance",
        "Preparation of Income Statement and Balance Sheet",
        "Accounting for Assets, Liabilities, and Equity",
      ],
    },
    {
      code: "AM-106",
      name: "Introduction to Psychology",
      credits: 3,
      description:
        "An overview of psychology focusing on human behavior, mental processes, and development across the lifespan.",
      objectives: [
        "Learn fundamental psychological theories and approaches",
        "Understand biological bases of behavior",
        "Explore cognition, learning, and memory",
        "Study human development and personality",
        "Examine motivation and emotions",
      ],
      topics: [
        "History and Approaches to Psychology",
        "Biological Bases of Behavior",
        "Learning, Memory, and Cognition",
        "Developmental Psychology",
        "Motivation, Emotion, and Personality",
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
