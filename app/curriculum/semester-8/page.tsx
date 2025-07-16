// Semester VIII layout with Elective II, Core, and Internship sections

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Semester8Page() {
  const electives = [
    {
      code: "AM-801",
      name: "Advanced Aviation Law and Regulation",
      credits: 3,
      description:
        "In-depth study of global aviation legal frameworks, compliance, and regulatory developments.",
      topics: [
        "International Treaties",
        "Regulatory Frameworks",
        "Aviation Safety Compliance",
        "Legal Case Studies",
        "Data Protection",
      ],
    },
    {
      code: "AM-802",
      name: "Business Ethics and Values",
      credits: 3,
      description:
        "Explores ethical decision-making in aviation businesses, corporate governance, and sustainability.",
      topics: [
        "Ethical Theories",
        "CSR in Aviation",
        "Ethical Dilemmas",
        "Sustainability & Governance",
        "Code of Conduct",
      ],
    },
    {
      code: "AM-803",
      name: "Global Business Environment",
      credits: 3,
      description:
        "Examines globalization, international trade, and cross-border regulatory environments.",
      topics: [
        "Globalization Trends",
        "Trade Agreements",
        "Cross-Cultural Management",
        "Emerging Markets",
        "Global Risk Factors",
      ],
    },
  ];

  const coreCourses = [
    {
      code: "AM-804",
      name: "Quantitative Techniques",
      credits: 3,
      description:
        "Introduces decision-making tools and statistical techniques for aviation management.",
      objectives: [
        "Understand quantitative modeling in decision making",
        "Apply forecasting and optimization tools",
        "Interpret data through various techniques",
        "Evaluate aviation scenarios using models",
      ],
      topics: [
        "Linear Programming",
        "Decision Trees",
        "Forecasting Techniques",
        "Simulation Models",
        "Time Series Analysis",
      ],
    },
    {
      code: "AM-805",
      name: "The Airlines Business",
      credits: 3,
      description:
        "Covers the commercial, operational, and regulatory structure of the airline industry.",
      objectives: [
        "Understand airline business models",
        "Analyze cost and revenue structure",
        "Explore route planning and alliances",
        "Learn about regulatory and market issues",
      ],
      topics: [
        "Business Models in Aviation",
        "Airline Alliances",
        "Cost Control and Pricing",
        "Revenue Management",
        "Industry Challenges",
      ],
    },
  ];

  const internship = {
    code: "AM-806",
    name: "Internship",
    credits: 6,
    description:
      "Full-time supervised internship in an aviation organization to apply academic knowledge in a real-world context.",
    objectives: [
      "Gain hands-on industry experience",
      "Understand real-world operations and culture",
      "Develop technical and interpersonal skills",
      "Produce professional reports and reflections",
    ],
    topics: [
      "Orientation and Planning",
      "Field Assignment Tasks",
      "Midterm Evaluation",
      "Final Reporting",
      "Presentation and Feedback",
    ],
  };

  const totalCredits =
    coreCourses.reduce((sum, c) => sum + c.credits, 0) + internship.credits;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-[#e8f4ec]">
        <Navbar />

        <header className="bg-[#3e8558] text-white py-20 mt-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Semester VIII</h1>
            <p className="text-lg opacity-90 mb-6">
              Final semester integrating electives, advanced core subjects, and
              a comprehensive internship program.
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
              <span className="text-white font-medium">Semester 8</span>
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
              Internship
            </h2>
            <Card className="border border-gray-200 shadow-md">
              <CardHeader className="bg-[#3e8558] text-white">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">
                    {internship.code}: {internship.name}
                  </CardTitle>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {internship.credits} Credits
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-gray-700 mb-4">{internship.description}</p>
                  <h4 className="text-lg font-semibold mb-2">Objectives</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {internship.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Topics</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {internship.topics.map((topic, i) => (
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
                  href="/curriculum/semester-7"
                  className="text-[#3e8558] font-semibold hover:underline"
                >
                  ← Semester VII
                </Link>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">End of Program</p>
                <p className="text-gray-400">Congratulations!</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
