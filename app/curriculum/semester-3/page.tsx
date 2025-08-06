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
      name: "Principles of Marketing",
      credits: 3,
      description:
        "Introduction to fundamental marketing concepts, strategies, and practices to meet customer needs and create value.",
      objectives: [
        "Understand core marketing principles and processes",
        "Analyze market environments and consumer behavior",
        "Develop marketing strategies and plans",
        "Learn product, pricing, promotion, and distribution tactics",
      ],
      topics: [
        "Marketing Fundamentals",
        "Market Research and Consumer Behavior",
        "Segmentation, Targeting, and Positioning",
        "Marketing Mix: Product, Price, Place, Promotion",
        "Digital Marketing Basics",
      ],
    },
    {
      code: "AM-302",
      name: "Ethics and Social Responsibility",
      credits: 3,
      description:
        "Explores ethical theories and corporate social responsibility practices in business and aviation industries.",
      objectives: [
        "Understand ethical frameworks and decision-making",
        "Analyze ethical dilemmas in business",
        "Learn corporate social responsibility concepts",
        "Promote ethical behavior and sustainability",
      ],
      topics: [
        "Introduction to Ethics",
        "Ethical Theories and Principles",
        "Business Ethics and Corporate Governance",
        "Corporate Social Responsibility",
        "Sustainability and Ethical Challenges in Aviation",
      ],
    },
    {
      code: "AM-303",
      name: "Financial Management",
      credits: 3,
      description:
        "Fundamentals of financial management including planning, analysis, and control of financial resources.",
      objectives: [
        "Understand financial management principles",
        "Learn capital budgeting and investment appraisal",
        "Analyze financial statements and ratios",
        "Manage working capital and financing decisions",
      ],
      topics: [
        "Introduction to Financial Management",
        "Time Value of Money",
        "Capital Budgeting Techniques",
        "Financial Statement Analysis",
        "Working Capital Management",
      ],
    },
    {
      code: "AM-304",
      name: "Air Traffic Management",
      credits: 3,
      description:
        "Overview of air traffic control systems, procedures, and technologies to ensure safe and efficient airspace management.",
      objectives: [
        "Understand air traffic control operations",
        "Learn airspace organization and procedures",
        "Explore communication and navigation systems",
        "Analyze safety and efficiency in air traffic management",
      ],
      topics: [
        "Air Traffic Control Fundamentals",
        "Airspace Structure and Classification",
        "Radar and Surveillance Systems",
        "Communication, Navigation, and Surveillance (CNS)",
        "Safety Management in Air Traffic",
      ],
    },
    {
      code: "AM-305",
      name: "HRM and Human Factors in Aviation",
      credits: 3,
      description:
        "Study of human resource management and human factors affecting safety and performance in aviation.",
      objectives: [
        "Understand HRM principles in aviation context",
        "Learn recruitment, training, and performance management",
        "Explore human factors and ergonomics",
        "Promote safety culture and reduce human error",
      ],
      topics: [
        "Human Resource Management in Aviation",
        "Training and Development",
        "Human Factors and Ergonomics",
        "Safety Culture and Risk Management",
        "Fatigue and Stress Management",
      ],
    },
    {
      code: "AM-306",
      name: "Aircraft Maintenance Management",
      credits: 3,
      description:
        "Covers principles and practices of managing aircraft maintenance to ensure airworthiness and operational safety.",
      objectives: [
        "Understand aircraft maintenance processes",
        "Learn regulatory requirements and standards",
        "Manage maintenance planning and control",
        "Explore maintenance documentation and quality assurance",
      ],
      topics: [
        "Introduction to Aircraft Maintenance",
        "Regulations and Compliance",
        "Maintenance Planning and Scheduling",
        "Quality Control and Assurance",
        "Maintenance Records and Documentation",
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
