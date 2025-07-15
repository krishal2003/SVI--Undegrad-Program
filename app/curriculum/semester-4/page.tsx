import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Award, ArrowLeft, Lightbulb, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Semester4Page() {
  const courses = [
    {
      code: "AM-401",
      name: "Organizational Behavior",
      credits: 3,
      description:
        "Study of individual and group behavior within aviation organizations, focusing on leadership and team dynamics.",
      objectives: [
        "Understand individual behavior in organizations",
        "Learn group dynamics and team management",
        "Study leadership styles and effectiveness",
        "Analyze organizational culture and change",
      ],
      topics: [
        "Individual Behavior",
        "Group Dynamics",
        "Leadership Theories",
        "Organizational Culture",
        "Change Management",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      code: "AM-402",
      name: "Entrepreneurship",
      credits: 3,
      description: "Introduction to entrepreneurial concepts and business development in the aviation industry.",
      objectives: [
        "Understand entrepreneurship principles",
        "Learn business plan development",
        "Study innovation and creativity",
        "Explore aviation business opportunities",
      ],
      topics: [
        "Entrepreneurship Fundamentals",
        "Business Plan Development",
        "Innovation Management",
        "Aviation Startups",
        "Risk Assessment",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      code: "AM-403",
      name: "Disaster Management in Aviation",
      credits: 3,
      description: "Comprehensive study of disaster preparedness, response, and recovery in aviation operations.",
      objectives: [
        "Understand disaster management principles",
        "Learn emergency response procedures",
        "Study crisis communication strategies",
        "Develop contingency planning skills",
      ],
      topics: [
        "Disaster Preparedness",
        "Emergency Response",
        "Crisis Communication",
        "Business Continuity",
        "Recovery Planning",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      code: "AM-404",
      name: "Revenue Generation in Aviation Sector",
      credits: 3,
      description: "Analysis of revenue models and generation strategies in various aviation business segments.",
      objectives: [
        "Understand aviation revenue models",
        "Learn pricing strategies and techniques",
        "Study ancillary revenue opportunities",
        "Analyze revenue optimization methods",
      ],
      topics: [
        "Revenue Management",
        "Pricing Strategies",
        "Ancillary Revenue",
        "Yield Management",
        "Revenue Analytics",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      code: "AM-405",
      name: "Technological Trends in Aviation",
      credits: 3,
      description: "Exploration of emerging technologies and their impact on aviation operations and management.",
      objectives: [
        "Understand current aviation technologies",
        "Learn about emerging tech trends",
        "Study digital transformation in aviation",
        "Analyze technology adoption strategies",
      ],
      topics: [
        "Aviation Technology Overview",
        "Digital Transformation",
        "Artificial Intelligence",
        "Blockchain in Aviation",
        "Future Technologies",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header with Background Image */}
      <div className="relative bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/placeholder.svg?height=400&width=1200" alt="Aviation Technology" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Semester IV</h1>
            <p className="text-xl opacity-90 mb-6">Leadership, innovation, and technology in aviation</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/curriculum" className="hover:text-white transition-colors">
                Curriculum
              </Link>
              <span>/</span>
              <span className="text-white">Semester 4</span>
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

        {/* Semester Overview with Image */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Semester Overview</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                The fourth semester focuses on leadership development, entrepreneurship, and emerging technologies in
                aviation. Students explore innovative approaches to aviation management and disaster preparedness.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-[#0a4936]" />
                    <span className="font-semibold">Innovation Focus</span>
                  </div>
                  <p className="text-sm text-gray-600">Entrepreneurship & Technology</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-[#0a4936]" />
                    <span className="font-semibold">Revenue Focus</span>
                  </div>
                  <p className="text-sm text-gray-600">Revenue Generation Strategies</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Aviation Innovation and Leadership"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
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

        {/* Course Details with Images */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Course Details</h2>
          <div className="space-y-12">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image src={course.image || "/placeholder.svg"} alt={course.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a4936]/80 to-green-600/80 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">{course.code}</h3>
                        <p className="text-lg opacity-90">{course.credits} Credits</p>
                      </div>
                    </div>
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl text-gray-900">{course.name}</CardTitle>
                      <p className="text-gray-600 leading-relaxed">{course.description}</p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Learning Objectives</h4>
                          <ul className="space-y-2">
                            {course.objectives.slice(0, 2).map((objective, objIndex) => (
                              <li key={objIndex} className="flex items-start text-gray-700 text-sm">
                                <div className="w-2 h-2 bg-[#0a4936] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Key Topics</h4>
                          <ul className="space-y-2">
                            {course.topics.slice(0, 3).map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start text-gray-700 text-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Semester Highlights with Images */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Semester Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Leadership Development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Leadership Workshop</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Interactive leadership development sessions with aviation industry executives.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Business Innovation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Innovation Lab</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">Hands-on entrepreneurship projects and aviation startup case studies.</p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Technology Trends"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Tech Showcase</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Exploration of cutting-edge aviation technologies and digital transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <section>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Previous Semester</p>
              <Link href="/curriculum/semester-3" className="text-[#0a4936] font-semibold hover:underline">
                ← Semester III
              </Link>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Next Semester</p>
              <Link href="/curriculum/semester-5" className="text-[#0a4936] font-semibold hover:underline">
                Semester V →
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
