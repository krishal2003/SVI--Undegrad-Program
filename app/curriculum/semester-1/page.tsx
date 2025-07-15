import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Award, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"

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
  ]

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Semester I</h1>
            <p className="text-xl opacity-90 mb-6">Foundation courses for aviation management</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/curriculum" className="hover:text-white transition-colors">
                Curriculum
              </Link>
              <span>/</span>
              <span className="text-white">Semester 1</span>
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
              The first semester provides foundational knowledge in management principles, introduces students to the
              aviation industry, and develops essential skills in communication, mathematics, and computer applications.
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
              <p className="text-gray-400">Not Available</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Next Semester</p>
              <Link href="/curriculum/semester-2" className="text-[#0a4936] font-semibold hover:underline">
                Semester II →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
