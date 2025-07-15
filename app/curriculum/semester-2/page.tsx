import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Award, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Semester2Page() {
  const courses = [
    {
      code: "AM-201",
      name: "Accounting and Management Decisions",
      credits: 3,
      description:
        "Comprehensive study of accounting principles and their application in management decision-making processes within aviation organizations.",
      objectives: [
        "Understand fundamental accounting principles and concepts",
        "Learn to prepare and analyze financial statements",
        "Apply accounting information for management decisions",
        "Understand cost accounting and budgeting processes",
      ],
      topics: [
        "Financial Accounting Fundamentals",
        "Management Accounting Systems",
        "Cost Analysis and Control",
        "Budgeting and Forecasting",
        "Financial Statement Analysis",
      ],
    },
    {
      code: "AM-202",
      name: "Microeconomics",
      credits: 3,
      description:
        "Study of individual economic units and market mechanisms, with specific focus on aviation industry economics and market structures.",
      objectives: [
        "Understand microeconomic principles and theories",
        "Analyze market structures and competition",
        "Study consumer and producer behavior",
        "Apply economic concepts to aviation industry",
      ],
      topics: [
        "Supply and Demand Analysis",
        "Market Structures and Competition",
        "Consumer Choice Theory",
        "Production and Cost Theory",
        "Aviation Market Economics",
      ],
    },
    {
      code: "AM-203",
      name: "Human Resources Management",
      credits: 3,
      description:
        "Comprehensive study of human resource management practices in aviation organizations, including recruitment, training, and performance management.",
      objectives: [
        "Understand HRM functions and processes",
        "Learn recruitment and selection techniques",
        "Study training and development programs",
        "Understand performance management systems",
      ],
      topics: [
        "HRM Planning and Job Analysis",
        "Recruitment and Selection",
        "Training and Development",
        "Performance Management",
        "Aviation Industry HR Challenges",
      ],
    },
    {
      code: "AM-204",
      name: "Airport Management",
      credits: 3,
      description:
        "Detailed study of airport operations, management systems, and the role of airports in the aviation ecosystem.",
      objectives: [
        "Understand airport organizational structure",
        "Learn airport operations management",
        "Study airport planning and development",
        "Understand airport revenue generation",
      ],
      topics: [
        "Airport Organization and Structure",
        "Terminal Operations Management",
        "Airfield Operations",
        "Airport Planning and Development",
        "Airport Revenue Management",
      ],
    },
    {
      code: "AM-205",
      name: "Aviation Safety and Security",
      credits: 3,
      description:
        "Comprehensive study of safety and security management systems in aviation, including regulatory frameworks and risk management.",
      objectives: [
        "Understand aviation safety management systems",
        "Learn security protocols and procedures",
        "Study risk assessment and management",
        "Understand regulatory compliance requirements",
      ],
      topics: [
        "Safety Management Systems (SMS)",
        "Aviation Security Protocols",
        "Risk Assessment and Management",
        "Emergency Response Planning",
        "Regulatory Compliance",
      ],
    },
  ]

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Semester II</h1>
            <p className="text-xl opacity-90 mb-6">Core management and aviation fundamentals</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/curriculum" className="hover:text-white transition-colors">
                Curriculum
              </Link>
              <span>/</span>
              <span className="text-white">Semester 2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/curriculum">
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Curriculum</span>
            </Button>
          </Link>
        </div>

        {/* Semester Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Semester Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The second semester builds upon foundation knowledge with core management subjects, introduces
              microeconomics, and provides specialized aviation courses in airport management and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-gradient-to-br from-[#0a4936] to-green-600 text-white shadow-xl">
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{courses.length}</div>
                <div className="text-sm opacity-90">Total Courses</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{totalCredits}</div>
                <div className="text-sm opacity-90">Total Credits</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-600 to-green-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">16</div>
                <div className="text-sm opacity-90">Weeks Duration</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">Core</div>
                <div className="text-sm opacity-90">Course Type</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Course Details */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Course Details</h2>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl">
                      {course.code}: {course.name}
                    </CardTitle>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                      {course.credits} Credits
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Course Description</h4>
                      <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>

                      <h4 className="text-lg font-bold text-gray-900 mb-4">Learning Objectives</h4>
                      <ul className="space-y-2">
                        {course.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start text-gray-700">
                            <div className="w-2 h-2 bg-[#0a4936] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Course Topics</h4>
                      <ul className="space-y-2">
                        {course.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Previous Semester</p>
              <Link href="/curriculum/semester-1" className="text-[#0a4936] font-semibold hover:underline">
                ← Semester I
              </Link>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Next Semester</p>
              <Link href="/curriculum/semester-3" className="text-[#0a4936] font-semibold hover:underline">
                Semester III →
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
