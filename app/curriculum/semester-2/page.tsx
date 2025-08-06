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
      name: "Macroeconomics",
      credits: 3,
      description:
        "Study of the economy as a whole, including inflation, unemployment, economic growth, and fiscal and monetary policies.",
      objectives: [
        "Understand key macroeconomic indicators",
        "Analyze economic cycles and growth factors",
        "Learn fiscal and monetary policy tools",
        "Evaluate government interventions in the economy",
      ],
      topics: [
        "National Income Accounting",
        "Inflation and Unemployment",
        "Economic Growth and Development",
        "Fiscal Policy",
        "Monetary Policy and Central Banking",
      ],
    },
    {
      code: "AM-202",
      name: "Business Management",
      credits: 3,
      description:
        "Overview of business management principles, including planning, organizing, leading, and controlling business operations.",
      objectives: [
        "Understand core management functions",
        "Explore organizational behavior and leadership",
        "Learn strategic planning and decision making",
        "Develop skills to manage resources effectively",
      ],
      topics: [
        "Introduction to Business Management",
        "Planning and Strategy",
        "Organizational Structure and Behavior",
        "Leadership and Motivation",
        "Control and Performance Management",
      ],
    },
    {
      code: "AM-203",
      name: "Corporate Communication",
      credits: 3,
      description:
        "Focus on communication strategies within corporate environments including media relations, crisis communication, and internal communication.",
      objectives: [
        "Learn principles of effective corporate communication",
        "Understand media and public relations",
        "Develop crisis communication skills",
        "Improve internal communication practices",
      ],
      topics: [
        "Corporate Communication Fundamentals",
        "Media Relations and Publicity",
        "Crisis Communication Management",
        "Internal Communication Strategies",
        "Communication Ethics and Corporate Social Responsibility",
      ],
    },
    {
      code: "AM-204",
      name: "Business Statistics",
      credits: 3,
      description:
        "Introduction to statistical methods and their applications in business decision making.",
      objectives: [
        "Understand descriptive and inferential statistics",
        "Learn probability concepts",
        "Apply statistical techniques to business problems",
        "Use statistical software for data analysis",
      ],
      topics: [
        "Descriptive Statistics",
        "Probability Theory",
        "Sampling and Sampling Distributions",
        "Hypothesis Testing",
        "Regression and Correlation Analysis",
      ],
    },
    {
      code: "AM-205",
      name: "Introduction to Aviation Industry",
      credits: 3,
      description:
        "Overview of the global aviation industry including its history, structure, regulations, and current challenges.",
      objectives: [
        "Understand the evolution of the aviation industry",
        "Identify key industry players and their roles",
        "Learn about aviation regulations and safety standards",
        "Analyze trends and challenges in aviation",
      ],
      topics: [
        "History and Evolution of Aviation",
        "Structure of the Aviation Industry",
        "Regulatory Framework and Safety",
        "Airlines, Airports, and Air Traffic Management",
        "Current Trends and Issues",
      ],
    },
    {
      code: "AM-206",
      name: "Airport Equipment and Facilities",
      credits: 3,
      description:
        "Study of airport infrastructure, equipment, and facilities management to support safe and efficient airport operations.",
      objectives: [
        "Understand types of airport equipment and their uses",
        "Learn about airport facilities and layout",
        "Explore maintenance and safety standards",
        "Develop knowledge of airport operations support",
      ],
      topics: [
        "Airport Infrastructure Overview",
        "Ground Support Equipment",
        "Runway and Taxiway Facilities",
        "Terminal Facilities and Passenger Services",
        "Maintenance and Safety Procedures",
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
