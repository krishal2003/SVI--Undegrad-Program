import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Semester2Page() {
  const courses = [
    {
      code: "AM-201",
      name: "Microeconomics",
      credits: 3,
      description:
        "Study of individual economic units such as consumers and firms. Covers demand and supply, elasticity, market structures, and resource allocation.",
      objectives: [
        "Understand the fundamentals of microeconomic theory",
        "Analyze consumer and producer behavior",
        "Study market structures and pricing strategies",
        "Explore resource allocation and efficiency",
      ],
      topics: [
        "Demand and Supply Analysis",
        "Elasticity and Applications",
        "Consumer Choice and Utility",
        "Production and Costs",
        "Market Structures: Perfect and Imperfect Competition",
      ],
    },
    {
      code: "AM-202",
      name: "Organizational Behavior",
      credits: 3,
      description:
        "Examination of individual and group behavior within organizations. Focuses on motivation, leadership, team dynamics, and organizational culture.",
      objectives: [
        "Understand human behavior in organizational settings",
        "Study motivation and leadership theories",
        "Analyze group dynamics and teamwork",
        "Explore organizational culture and change",
      ],
      topics: [
        "Foundations of Organizational Behavior",
        "Individual Behavior and Learning",
        "Motivation and Job Satisfaction",
        "Leadership and Power",
        "Organizational Culture and Change",
      ],
    },
    {
      code: "AM-203",
      name: "Business Accounting",
      credits: 3,
      description:
        "Introduction to accounting principles and practices used in business. Covers financial statements, journal entries, and financial analysis.",
      objectives: [
        "Learn basic accounting principles",
        "Understand preparation of financial statements",
        "Apply accounting techniques to business scenarios",
        "Interpret and analyze financial reports",
      ],
      topics: [
        "Principles of Accounting",
        "Journal Entries and Ledgers",
        "Trial Balance and Adjustments",
        "Preparation of Financial Statements",
        "Financial Statement Analysis",
      ],
    },
    {
      code: "AM-204",
      name: "Aviation Geography",
      credits: 3,
      description:
        "Study of global geography relevant to aviation. Covers major airports, international routes, time zones, and air navigation principles.",
      objectives: [
        "Gain geographical knowledge for aviation operations",
        "Identify global air routes and airport hubs",
        "Understand the role of time zones and navigation",
        "Apply geography in airline planning",
      ],
      topics: [
        "World Geography and Continents",
        "International Airports and Routes",
        "Air Navigation and Coordinates",
        "Time Zones and UTC",
        "Geographical Factors Affecting Aviation",
      ],
    },
    {
      code: "AM-205",
      name: "Statistics for Business",
      credits: 3,
      description:
        "Introduction to statistical methods used in business. Topics include data analysis, probability, hypothesis testing, and regression.",
      objectives: [
        "Learn descriptive and inferential statistics",
        "Analyze business data effectively",
        "Understand hypothesis testing and confidence intervals",
        "Apply regression and correlation techniques",
      ],
      topics: [
        "Data Collection and Presentation",
        "Measures of Central Tendency and Dispersion",
        "Probability Concepts",
        "Hypothesis Testing",
        "Correlation and Regression Analysis",
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
            <h1 className="text-5xl font-extrabold mb-4">Semester II</h1>
            <p className="text-lg opacity-90 mb-6">
              Continuation of the aviation foundation with a focus on behavioral
              science, geography, economics, and statistics.
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
              <span className="text-white font-medium">Semester 2</span>
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
                  href="/curriculum/semester-1"
                  className="text-[#3e8558] font-semibold hover:underline"
                >
                  ← Semester I
                </Link>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Next Semester</p>
                <Link
                  href="/curriculum/semester-3"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Semester III →
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
