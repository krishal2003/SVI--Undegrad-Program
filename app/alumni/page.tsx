import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AlumniPage() {
  const featuredAlumni = [
    {
      name: "Rajesh Shrestha",
      graduationYear: "2020",
      currentPosition: "Airport Operations Manager",
      company: "Tribhuvan International Airport",
      location: "Kathmandu, Nepal",
      specialization: "Aviation Operations Management",
      achievement: "Led the implementation of new passenger flow management system",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Priya Gurung",
      graduationYear: "2019",
      currentPosition: "Airline Operations Coordinator",
      company: "Buddha Air",
      location: "Kathmandu, Nepal",
      specialization: "Aviation Operations Management",
      achievement: "Improved flight scheduling efficiency by 25%",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Amit Thapa",
      graduationYear: "2021",
      currentPosition: "Aviation Safety Inspector",
      company: "Civil Aviation Authority of Nepal",
      location: "Kathmandu, Nepal",
      specialization: "Aviation Financial Management",
      achievement: "Developed new safety audit protocols for regional airports",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const alumniStats = [
    { label: "Total Graduates", value: "500+", icon: GraduationCap },
    { label: "Employment Rate", value: "95%", icon: Briefcase },
    { label: "Industry Leaders", value: "50+", icon: Award },
    { label: "Countries", value: "15+", icon: MapPin },
  ]

  const careerPaths = [
    {
      title: "Airport Management",
      count: "120+",
      description: "Alumni working in various airport management roles",
      companies: ["TIA", "Pokhara Airport", "Bharatpur Airport"],
    },
    {
      title: "Airline Operations",
      count: "150+",
      description: "Graduates in airline operations and management",
      companies: ["Nepal Airlines", "Buddha Air", "Yeti Airlines"],
    },
    {
      title: "Aviation Consulting",
      count: "80+",
      description: "Alumni providing aviation consulting services",
      companies: ["Independent Consultants", "Aviation Firms"],
    },
    {
      title: "Regulatory Bodies",
      count: "60+",
      description: "Working with aviation regulatory organizations",
      companies: ["CAAN", "ICAO", "Regional Bodies"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Alumni Network</h1>
            <p className="text-xl opacity-90 mb-6">Connecting aviation management professionals worldwide</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Alumni</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Alumni Statistics */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Alumni Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our graduates are making significant contributions to the aviation industry across Nepal and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {alumniStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0a4936] to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#0a4936] mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Alumni */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAlumni.map((alumni, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0a4936] to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">{alumni.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{alumni.name}</h3>
                  <p className="text-[#0a4936] font-semibold mb-1">{alumni.currentPosition}</p>
                  <p className="text-gray-600 mb-2">{alumni.company}</p>
                  <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {alumni.location}
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Specialization:</strong> {alumni.specialization}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Class of:</strong> {alumni.graduationYear}
                    </p>
                  </div>
                  <p className="text-sm text-gray-700 italic">"{alumni.achievement}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Alumni Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((path, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">{path.count}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Employers:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.companies.map((company, companyIndex) => (
                        <span key={companyIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Alumni Network Benefits */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Alumni Network Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#0a4936] mb-4">For Recent Graduates</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Job placement assistance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Mentorship programs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Industry networking events
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Career guidance and counseling
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a4936] mb-4">For Established Alumni</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Professional development
                    opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Business networking platform
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Guest speaking opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Alumni directory access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Join Alumni Network */}
        <section>
          <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-16 rounded-2xl shadow-xl">
            <div className="max-w-4xl mx-auto px-8 text-center">
              <h2 className="text-4xl font-bold mb-8">Join Our Alumni Network</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Stay connected with your fellow graduates and contribute to the growth of Nepal's aviation industry
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#0a4936] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Register as Alumni
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#0a4936] px-10 py-4 text-lg font-semibold rounded-full bg-transparent backdrop-blur-sm transition-all duration-300"
                >
                  Alumni Directory
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
