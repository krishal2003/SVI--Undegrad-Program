import { Card, CardContent } from "@/components/ui/card"
import { Building, Award, Users, Globe, BookOpen, Target } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function UniversityPartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">University Partner</h1>
            <p className="text-xl opacity-90 mb-6">Kathmandu University School of Management</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">University Partner</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* KUSOM Introduction */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Kathmandu University School of Management</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Bachelor of Aviation Management program is administered by Kathmandu University School of Management
              (KUSOM), a premier business school in Nepal known for its excellence in management education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0a4936] to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Established Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  KUSOM has been a leading institution in management education since its establishment, maintaining high
                  academic standards and industry relevance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  KUSOM ensures rigorous academic administration, quality control, and adherence to Kathmandu
                  University's principles and policies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Industry Connection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strong industry partnerships and connections that provide students with practical exposure and career
                  opportunities in the aviation sector.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Kathmandu University */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Kathmandu University</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
              <p className="mb-6 text-lg">
                Kathmandu University (KU) is an autonomous, not-for-profit, self-funding public institution established in 1991 through an Act of Parliament. It is widely recognized for maintaining academic excellence in both classical and professional fields and has grown into one of Nepal’s most respected universities.
              </p>
              <p className="mb-6 text-lg">
                The university operates under a semester system and offers more than 200 programs across seven schools, including Management, Engineering, and Medical Sciences. KU places strong emphasis on practical exposure, research competence, and community engagement, making its graduates highly compatible in the global workforce.
              </p>
              <p className="text-lg">
                With a focus on quality, innovation, and relevance, KU supports a student-friendly learning environment. Its specialized programs, experienced faculty, and industry linkages ensure that students in the Bachelor of Aviation Management program gain the academic foundation and applied skills required to excel in the aviation sector.
              </p>
            </div>
          </div>
        </section>

        {/* KUSOM Responsibilities */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">KUSOM's Role & Responsibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0a4936] to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">Academic Administration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Establishing and enforcing academic administration procedures, curriculum development, and
                      maintaining academic standards in line with university policies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">Program Management</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Complete program administration including student admissions, academic scheduling, examination
                      procedures, and graduation requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">Faculty Management</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Recruitment and management of qualified faculty members, ensuring they meet the academic and
                      professional standards required for aviation management education.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">Fee Structure & Policies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Setting tuition and fees for the program in accordance with Kathmandu University's principles and
                      policies, ensuring accessibility and sustainability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* University Statistics */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-16 rounded-2xl shadow-xl">
            <div className="max-w-4xl mx-auto px-8">
              <h2 className="text-4xl font-bold mb-12 text-center">University at a Glance</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-5xl font-bold mb-3">30+</div>
                  <div className="text-lg opacity-90">Years of Excellence</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-5xl font-bold mb-3">22</div>
                  <div className="text-lg opacity-90">Affiliations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-5xl font-bold mb-3">21k+</div>
                  <div className="text-lg opacity-90">Current Students</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-5xl font-bold mb-3">46k+</div>
                  <div className="text-lg opacity-90">Alumni</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose KU */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Kathmandu University?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0a4936] mb-4">Academic Excellence</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Strong academic foundation with rigorous standards
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Innovative and student-centered teaching methods


                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Emphasis on research and practical learning


                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Active partnerships with international institutions


                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a4936] mb-4">Student Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Dedicated academic advising and support services


                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Career counseling and job placement assistance


                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Merit-based and need-based scholarship programs


                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Access to modern infrastructure and digital resources


                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
