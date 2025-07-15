import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Award, ArrowLeft, Settings, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Semester5Page() {
  const courses = [
    {
      code: "AM-501",
      name: "Air Traffic Control",
      credits: 3,
      description:
        "Comprehensive study of air traffic control systems, procedures, and technologies used in aviation operations.",
      objectives: [
        "Understand ATC systems and procedures",
        "Learn radar and communication technologies",
        "Study airspace management principles",
        "Analyze traffic flow optimization",
      ],
      topics: [
        "ATC Systems Overview",
        "Radar Technology",
        "Communication Procedures",
        "Airspace Management",
        "Traffic Flow Control",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      code: "AM-502",
      name: "Aircraft Maintenance Management",
      credits: 3,
      description:
        "Study of aircraft maintenance planning, scheduling, and management systems to ensure aviation safety and efficiency.",
      objectives: [
        "Understand maintenance planning principles",
        "Learn regulatory compliance requirements",
        "Study maintenance scheduling systems",
        "Analyze cost optimization strategies",
      ],
      topics: [
        "Maintenance Planning",
        "Regulatory Compliance",
        "Scheduling Systems",
        "Cost Management",
        "Quality Assurance",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const specializationCourses = [
    {
      specialization: "Aviation Financial Management",
      courses: ["International Financial Reporting Standards", "Aviation Insurance", "Aircraft Finance"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-[#0a4936] to-green-600",
    },
    {
      specialization: "Aviation Operations Management",
      courses: ["Logistics Management for Aviation", "Operations Research", "Airport Equipment & Facility"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-600 to-blue-700",
    },
    {
      specialization: "Sales and Marketing",
      courses: ["Airline Customer Service", "Digital Marketing", "Branding and Advertising"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-green-600 to-green-700",
    },
  ]

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0) + 9 // 3 specialization courses × 3 credits

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header with Background Image */}
      <div className="relative bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/placeholder.svg?height=400&width=1200" alt="Air Traffic Control" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Semester V</h1>
            <p className="text-xl opacity-90 mb-6">Specialization begins - Choose your path</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/curriculum" className="hover:text-white transition-colors">
                Curriculum
              </Link>
              <span>/</span>
              <span className="text-white">Semester 5</span>
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
                The fifth semester marks the beginning of specialization tracks. Students take core courses in air
                traffic control and aircraft maintenance while choosing their specialization area.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <Settings className="w-5 h-5 text-[#0a4936]" />
                    <span className="font-semibold">Core Focus</span>
                  </div>
                  <p className="text-sm text-gray-600">ATC & Maintenance Management</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <Plane className="w-5 h-5 text-[#0a4936]" />
                    <span className="font-semibold">Specialization</span>
                  </div>
                  <p className="text-sm text-gray-600">Choose Your Track</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Air Traffic Control Operations"
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
                <div className="text-3xl font-bold mb-2">5</div>
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
                <div className="text-3xl font-bold mb-2">Mixed</div>
                <div className="text-sm opacity-90">Core + Specialization</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Courses */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Core Courses</h2>
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

        {/* Specialization Tracks */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Choose Your Specialization</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Students select one specialization track and complete three specialized courses in their chosen area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializationCourses.map((spec, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={spec.image || "/placeholder.svg"}
                    alt={spec.specialization}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${spec.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold text-center px-4">{spec.specialization}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Specialization Courses:</h4>
                  <ul className="space-y-2">
                    {spec.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href={`/programs/${spec.specialization.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button className="w-full bg-[#0a4936] hover:bg-[#0a4936]/90 text-white">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Practical Training */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Training Components</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Semester 5 includes hands-on training sessions and industry visits to complement theoretical learning.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#0a4936] rounded-full mr-3"></div>
                    <span className="text-gray-700">ATC Simulator Training</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#0a4936] rounded-full mr-3"></div>
                    <span className="text-gray-700">Aircraft Maintenance Facility Visits</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#0a4936] rounded-full mr-3"></div>
                    <span className="text-gray-700">Industry Expert Guest Lectures</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#0a4936] rounded-full mr-3"></div>
                    <span className="text-gray-700">Specialization-specific Workshops</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Practical Training"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Previous Semester</p>
              <Link href="/curriculum/semester-4" className="text-[#0a4936] font-semibold hover:underline">
                ← Semester IV
              </Link>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Next Semester</p>
              <Link href="/curriculum/semester-6" className="text-[#0a4936] font-semibold hover:underline">
                Semester VI →
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
