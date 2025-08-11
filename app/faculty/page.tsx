import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Users, BookOpen, Globe, Target, Images } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function FacultyPage() {
  const facultyRequirements = [
    {
      position: "Mr. Dipen Manandhar",
      qualification: "Operation Head",
      experience: "Minimum 10 years in aviation industry and academia",
      responsibilities: [
        "Overall program leadership and administration",
        "Curriculum development and quality assurance",
        "Industry liaison and partnership development",
        "Faculty recruitment and development",
      ],
       image: "/Dipen.png",
    },
    {
      position: "Mr. Puspa Ram KC",
      qualification: "Chairman Inspector General",
      experience: "Minimum 5 years teaching and industry experience",
      responsibilities: [
        "Teaching core aviation management courses",
        "Student mentoring and guidance",
        "Research and publication activities",
        "Industry project supervision",
      ],
      image: "/Puspa.png",
      
    },

    {
      position: "Mr. Rajan Thapa",
      qualification: "Academic Head",
      experience: "Senior positions in airlines, airports, or regulatory bodies",
      responsibilities: [
        "Guest lectures and specialized courses",
        "Practical training and workshops",
        "Industry insights and case studies",
        "Career guidance and networking",
      ],
      image: "/Rajan.png",
      
    },
    {
      position: "Mr. Sachan Thapa",
      qualification: "Director",
      experience: "Global aviation industry and academic experience",
      responsibilities: [
        "International perspective on aviation",
        "Comparative studies and best practices",
        "Research collaboration",
        "Student exchange programs",
      ],
      image: "/Sachan.png",
    },
    {
      position: "Mr. Sanjiv Udash",
      qualification: "Executive Director",
      experience: "Global aviation industry and academic experience",
      responsibilities: [
        "International perspective on aviation",
        "Comparative studies and best practices",
        "Research collaboration",
        "Student exchange programs",
      ],
      image: "/Sanjiv.png",
    },
  ]

  const subjectAreas = [
    {
      area: "Aviation Operations & Planning",
      icon: Globe,
      color: "from-[#0a4936] to-green-600",
      topics: [
        "Airport Planning and Management",
        "Airline Operations",
        "Ground Handling and Ramp Services",
        "Air Traffic Management",
        "Meteorology Services for Aviation"
      ],
    },
    {
      area: "Finance, Accounting & Economics",
      icon: Award,
      color: "from-blue-600 to-blue-700",
      topics: [
        "Aviation Economics and Forecasting",
        "Aircraft Leasing and Financing",
        "Financial Management in Aviation",
        "Taxation and Auditing",
        "Aviation Insurance"
      ],
    },
    {
      area: "Regulation & Safety",
      icon: BookOpen,
      color: "from-green-600 to-green-700",
      topics: [
        "Aviation Law and Policy",
        "International and ICAO Regulations",
        "Aircraft Certification & Airworthiness",
        "Safety and Security Standards",
        "Drone and Helicopter Operations"
      ],
    },
    {
      area: "Leadership & Communication",
      icon: Users,
      color: "from-purple-600 to-purple-700",
      topics: [
        "Strategic and Project Management",
        "Human Resource and Organizational Behavior",
        "Corporate Communication",
        "Ethics and Social Responsibility",
        "Leadership in Aviation"
      ],
    }

  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Faculty</h1>
            <p className="text-xl opacity-90 mb-6">Expert faculty with industry experience and academic excellence</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Faculty</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Faculty Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Faculty Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Bachelor of Aviation Management program is delivered by a team of highly qualified faculty members who
              bring together academic excellence and extensive industry experience in aviation management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* <Card className="text-center p-6 bg-gradient-to-br from-[#0a4936] to-green-600 text-white shadow-xl">
              <CardContent className="pt-6">
                <GraduationCap className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">PhD</div>
                <div className="text-sm opacity-90">Qualified Faculty</div>
              </CardContent>
            </Card> */}
            <Card className="text-center p-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">Faculty with</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-600 to-green-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">Multiple</div>
                <div className="text-sm opacity-90">Industry Experts</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">Global</div>
                <div className="text-sm opacity-90">Perspective</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Faculty Requirements */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Faculty & Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyRequirements.map((faculty, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                  <CardTitle className="text-xl text-center">{faculty.position}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <img
                  src={faculty.image}
                  className="w-48 h-48 object-cover rounded-full mb-4 mx-auto"
                />
                  <div className="mb-4 ">
                    <h4 className="font-semibold text-gray-900 mb-2 text-center">Position:</h4>
                    <p className="text-gray-600 text-sm text-center">{faculty.qualification}</p>
                  </div>
                  <div className="mb-4">
                    {/* <h4 className="font-semibold text-gray-900 mb-2">Experience:</h4>
                    <p className="text-gray-600 text-sm">{faculty.experience}</p> */}
                  </div>
                  <div>
                    {/* <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4> */}
                    {/* <ul className="space-y-1">
                      {faculty.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#0a4936] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul> */}
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Subject Areas */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Faculty Expertise Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our faculty members specialize in various areas of aviation management, ensuring comprehensive coverage of
            all aspects of the aviation industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjectAreas.map((area, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mr-4`}
                    >
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{area.area}</h3>
                  </div>
                  <ul className="space-y-3">
                    {area.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Faculty Development */}
        {/* <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Faculty Development & Support</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0a4936] mb-4">Continuous Learning</h3>
                  <p className="mb-4">
                    Faculty members are encouraged to participate in continuous professional development through
                    conferences, workshops, and training programs related to aviation management and education.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>International conference
                      participation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Industry training and
                      certification
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Research collaboration
                      opportunities
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a4936] mb-4">Research & Publication</h3>
                  <p className="mb-4">
                    Faculty members are supported in their research activities and encouraged to publish in reputed
                    journals and contribute to the advancement of aviation management knowledge.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Research funding support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Publication incentives
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Sabbatical opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Join Our Faculty */}
        <section>
          <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-16 rounded-2xl shadow-xl">
            <div className="max-w-4xl mx-auto px-8 text-center">
              <h2 className="text-4xl font-bold mb-8">Join Our Faculty Team</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                We are always looking for qualified and passionate educators and industry experts to join our faculty
                team and contribute to the development of future aviation management professionals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Target className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">Academic Excellence</h3>
                  <p className="text-sm opacity-90">Commitment to high-quality education and student success</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">Industry Experience</h3>
                  <p className="text-sm opacity-90">Practical knowledge and real-world aviation expertise</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <BookOpen className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">Research Focus</h3>
                  <p className="text-sm opacity-90">Contribution to aviation management research and innovation</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
