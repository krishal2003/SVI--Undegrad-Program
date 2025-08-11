import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, BookOpen, Users, Wifi, Car, Coffee, Monitor, Globe } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: Building,
      title: "Modern Classrooms",
      description:
        "State-of-the-art classrooms equipped with audio-visual systems, air conditioning, and comfortable seating arrangements for effective learning.",
      color: "from-[#0a4936] to-green-600",
    },
    {
      icon: BookOpen,
      title: "Library",
      description:
        "Specialized library with extensive collection of aviation management books, journals, research papers, and digital resources.",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Monitor,
      title: "Computer Labs",
      description:
        "Well-equipped computer laboratories with latest software for aviation management, flight simulation, and data analysis.",
      color: "from-green-600 to-green-700",
    },
    {
      icon: Users,
      title: "Seminar Halls",
      description:
        "Multiple seminar halls and conference rooms for guest lectures, industry presentations, and student presentations.",
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description:
        "Campus-wide high-speed internet connectivity for research, online learning, and digital resource access.",
      color: "from-orange-600 to-orange-700",
    },
    {
      icon: Car,
      title: "Parking",
      description: "Convenient parking areas for students and faculty members.",
      color: "from-teal-600 to-teal-700",
    },
    {
      icon: Coffee,
      title: "Student Facilities",
      description:
        "Cafeteria and recreation areas for comfortable campus life and social interaction.",
      color: "from-red-600 to-red-700",
    },
    {
      icon: Globe,
      title: "Industry Connections",
      description:
        "Direct connections with aviation industry partners for practical training, internships, and career opportunities.",
      color: "from-indigo-600 to-indigo-700",
    },
  ]

  const requiredFacilities = [
    {
      category: "Academic Infrastructure",
      items: [
        "Well-equipped classrooms with modern teaching aids",
        "Aviation management specialized library with numerous books and journals",
        "Computer laboratory with aviation management software",
        "Seminar halls for guest lectures, workshops, and presentations",
        "Faculty offices and administrative spaces",
        "Dedicated study areas and group discussion rooms"
      ],
    },
    {
      category: "Technology Requirements",
      items: [
        "High-speed internet connectivity throughout campus",
        "Audio-visual equipment in all classrooms",
        "Aviation management software packages for hands-on learning",
        "Digital learning management system for course materials and assignments",
        "Computer labs with updated hardware and software",
        "Online resources and databases for research and study"
      ],
    },
    {
      category: "Support Facilities",
      items: [
        "Student counseling and career guidance center",
        "Medical facilities with first aid and emergency support",
        "Cafeteria and dining facilities offering healthy options",
        "Recreation and sports facilities with outdoor fields",
        "Transportation services and parking spaces",
        "Student clubs, cultural events, and extracurricular activities"
      ],
    },
    {
      category: "Industry Partnerships",
      items: [
        "Partnerships with airports for practical training and site visits",
        "Collaboration with airlines for internships and apprenticeships",
        "Connections with aviation regulatory bodies and authorities",
        "Industry expert guest lectures and seminars",
        "Career placement and job networking support",
        "Joint research and development projects with aviation companies"
      ],
    },

  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Facilities & Infrastructure</h1>
            <p className="text-xl opacity-90 mb-6">World-class facilities for aviation management education</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Facilities</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Available Facilities */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              KUSOM provides comprehensive facilities and infrastructure to support the Bachelor of Aviation Management
              program, ensuring students have access to modern learning environments and industry-standard resources.
            </p>
          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${facility.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <facility.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{facility.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Required Infrastructure */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Infrastructure Requirements</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Based on the program requirements, the following infrastructure and facilities are essential for delivering
            quality aviation management education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requiredFacilities.map((category, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Campus Life */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Campus Life & Environment</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0a4936] mb-4">Learning Environment</h3>
                  <p className="mb-4">
                    The campus offers a supportive and modern learning environment that balances theory with practical experience. Students can use well-equipped classrooms, quiet study zones, group discussion rooms, and collaborative spaces to enhance their learning.
                  </p>
                  <p>
                    Specialized facilities for aviation management include flight simulation labs, aviation software, and up-to-date industry equipment, all designed to prepare students for the challenges of the aviation sector.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a4936] mb-4">Student Support Services</h3>
                  <p className="mb-4">
                    Students benefit from a wide range of support services such as academic counseling, career guidance, medical and health facilities, and various extracurricular programs. The campus encourages a strong community spirit where students grow both professionally and personally.
                  </p>
                  <p>
                    To connect students with the industry, the program regularly arranges site visits to airports and airlines, guest lectures by industry experts, and networking events to open doors to career opportunities in aviation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Developments */}
        <section>
          <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-16 rounded-2xl shadow-xl">
            <div className="max-w-4xl mx-auto px-8 text-center">
              <h2 className="text-4xl font-bold mb-8">Future Developments</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                KUSOM is committed to continuously upgrading its facilities and infrastructure to meet evolving industry
                standards and provide students with the best possible learning experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">Global Partnerships</h3>
                  <p className="text-sm opacity-90">Expanding collaborations with international aviation institutions for student exchanges, joint research, and global exposure.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">Digital Learning Platforms</h3>
                  <p className="text-sm opacity-90">Introducing enhanced e-learning tools, virtual classrooms, and interactive modules to complement traditional teaching.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">Sustainability Initiatives</h3>
                  <p className="text-sm opacity-90">Developing programs and facilities that focus on green aviation practices and sustainable airport operations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
