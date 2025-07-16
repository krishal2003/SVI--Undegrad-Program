import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Semester3Page() {
  const courses = [
    {
      code: "AM-301",
      name: "Human Factor in Aviation",
      credits: 3,
      description:
        "Focuses on psychological, physiological, and ergonomic factors that impact human performance in aviation settings.",
      objectives: [
        "Understand the importance of human factors in aviation safety",
        "Analyze causes of human error in aviation operations",
        "Explore ergonomic design and workload management",
        "Examine crew resource management (CRM) principles",
      ],
      topics: [
        "Introduction to Human Factors",
        "Human Error and Safety Culture",
        "Ergonomics and Cockpit Design",
        "Situational Awareness and Decision Making",
        "Crew Resource Management (CRM)",
      ],
    },
    {
      code: "AM-302",
      name: "International Law",
      credits: 3,
      description:
        "Introduction to principles of international law with a focus on aviation treaties, sovereignty, and global regulatory bodies.",
      objectives: [
        "Understand the foundations of international law",
        "Study major international aviation treaties",
        "Analyze the roles of ICAO and other bodies",
        "Explore sovereignty, airspace, and dispute resolution",
      ],
      topics: [
        "Principles of International Law",
        "Chicago Convention and ICAO",
        "Bilateral and Multilateral Agreements",
        "Airspace Sovereignty and Liability",
        "International Dispute Resolution",
      ],
    },
    {
      code: "AM-303",
      name: "Macroeconomics",
      credits: 3,
      description:
        "Explores the behavior of the economy as a whole, focusing on GDP, inflation, unemployment, and national fiscal/monetary policy.",
      objectives: [
        "Understand macroeconomic indicators and models",
        "Analyze the effects of fiscal and monetary policy",
        "Examine causes of inflation and unemployment",
        "Study international trade and exchange rates",
      ],
      topics: [
        "National Income Accounting",
        "Monetary and Fiscal Policies",
        "Inflation and Unemployment",
        "Economic Growth and Development",
        "Global Trade and Exchange Rate Systems",
      ],
    },
    {
      code: "AM-304",
      name: "Business Research Methods",
      credits: 3,
      description:
        "Explains the process of conducting business research with qualitative and quantitative methods, data analysis, and report writing.",
      objectives: [
        "Understand the steps in the research process",
        "Develop skills in writing research proposals",
        "Use various data collection methods",
        "Apply statistical tools for analysis and reporting",
      ],
      topics: [
        "Types of Business Research",
        "Research Design and Sampling",
        "Data Collection Techniques",
        "Qualitative vs Quantitative Research",
        "Interpretation and Presentation of Data",
      ],
    },
    {
      code: "AM-305",
      name: "Business Statistics",
      credits: 3,
      description:
        "Provides statistical tools and concepts used for business analysis, including probability, hypothesis testing, and regression.",
      objectives: [
        "Understand descriptive and inferential statistics",
        "Apply statistical methods in business contexts",
        "Interpret data and draw conclusions",
        "Use regression and correlation for forecasting",
      ],
      topics: [
        "Descriptive Statistics",
        "Probability Theory",
        "Sampling and Sampling Distributions",
        "Hypothesis Testing",
        "Regression and Correlation Analysis",
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
            <h1 className="text-5xl font-extrabold mb-4">Semester III</h1>
            <p className="text-lg opacity-90 mb-6">
              Semester 3 covers essential domains such as aviation human
              factors, international law, economics, research, and statistics.
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
              <span className="text-white font-medium">Semester 3</span>
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
                  href="/curriculum/semester-2"
                  className="text-[#3e8558] font-semibold hover:underline"
                >
                  ← Semester II
                </Link>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Next Semester</p>
                <Link
                  href="/curriculum/semester-4"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Semester IV →
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
