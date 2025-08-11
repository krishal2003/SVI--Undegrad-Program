import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Users,
  BookOpen,
  Globe,
  Target,
  Lightbulb,
  Play,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Video-like Background */}
      <div className="relative bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-4 gap-2 h-full">
            {[...Array(12)].map((_, i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=200&width=300&text=Aviation${
                  i + 1
                }`}
                alt={`Aviation ${i + 1}`}
                fill
                className="object-cover"
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a4936]/80 to-green-600/80"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Play className="w-5 h-5" />
              <span>About Our Program</span>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Shaping Aviation Leaders
            </h1>
            <p className="text-2xl opacity-90 mb-8">
              First aviation management course in Nepal 
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">About</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Program Introduction with Visual Elements */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Program Introduction</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Excellence in Aviation Education
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
               <p className="mb-6 text-xl">
                The Bachelor of Aviation Management (BAM) is a four-year, eight-semester undergraduate program designed to provide students with a strong foundation in aviation operations, airline and airport management, aviation safety, economics, law, and marketing.
              </p>
              <p className="mb-6 text-lg">
                Students will gain both theoretical understanding and practical exposure through real-world projects, internships, and certifications, preparing them for leadership roles in the fast-paced global aviation industry.
              </p>

              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-[#0a4936] mb-2">
                    Global Exposure
                  </div>
                  <div className="text-gray-600">Internships, Airline Visits & Simulations</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                     Electives
                  </div>
                  <div className="text-gray-600">Finance, Marketing, and Operation</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/placeholder.svg?height=200&width=250"
                    alt="Aviation Students"
                    width={250}
                    height={200}
                    className="rounded-2xl shadow-xl"
                  />
                  <Image
                    src="/placeholder.svg?height=150&width=250"
                    alt="Aviation Lab"
                    width={250}
                    height={150}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <Image
                    src="/placeholder.svg?height=150&width=250"
                    alt="Campus Life"
                    width={250}
                    height={150}
                    className="rounded-2xl shadow-xl"
                  />
                  <Image
                    src="/placeholder.svg?height=200&width=250"
                    alt="Industry Partnership"
                    width={250}
                    height={200}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Background & Need with Infographic Style */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-blue-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="max-w-6xl mx-auto relative">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Globe className="w-4 h-4" />
                  <span>Industry Need</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-8">
                  Why Aviation Management?
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="prose prose-lg text-gray-700 leading-relaxed">
                    <p className="mb-6 text-xl">
                    Nepal's aviation sector has seen remarkable growth, contributing significantly to tourism development. As an International Civil Aviation Organization(ICAO) contracting member, Nepal is committed to maintaining international standards.
                    </p>
                    <p className="mb-6 text-lg">
                      We offer Nepal’s first internationally recognized aviation management program, providing global-standard education right here at home. There's no need to go abroad—students gain the skills and credentials needed to thrive in the fast-growing aviation industry. With industry-relevant training and expert faculty, our program bridges the gap between local opportunity and international excellence.
                    </p>

                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                      <div className="text-4xl mb-2">📈</div>
                      <div className="font-bold text-2xl text-[#0a4936] mb-1">
                        300%
                      </div>
                      <div className="text-gray-600 text-sm">
                        Industry Growth
                      </div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                      <div className="text-4xl mb-2">🎯</div>
                      <div className="font-bold text-2xl text-blue-600 mb-1">
                        85%
                      </div>
                      <div className="text-gray-600 text-sm">Skills Gap</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Nepal Aviation Industry"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold">
                      Growing Aviation Sector
                    </h3>
                    <p className="text-sm opacity-90">
                      Nepal's aviation industry expansion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Objectives with Enhanced Visuals */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>Our Objectives</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Program Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive goals designed to create industry-ready aviation
              management professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Industry Understanding",
                description:
                  "Gain a deep understanding of Nepal’s aviation industry, including its history, structure, technologies, and regulations.",
                color: "from-[#0a4936] to-green-600",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: Users,
                title: "Management Skills",
                description:
                  "Develop essential management skills needed to oversee aviation operations, airlines, and airport functions effectively.",
                color: "from-blue-600 to-blue-700",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: BookOpen,
                title: "Practical Training",
                description:
                  "Get hands-on experience through practical training and industry exposure, preparing for real-world aviation challenges.",
                color: "from-green-600 to-green-700",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: Lightbulb,
                title: "Critical Thinking",
                description:
                  "Enhance problem-solving, communication, and critical thinking skills to manage complex aviation activities.",
                color: "from-purple-600 to-purple-700",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: Award,
                title: "Innovation & Research",
                description:
                  "Encourage research, innovation, and entrepreneurship to support the growth and development of Nepal’s aviation sector.",
                color: "from-orange-600 to-orange-700",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: Globe,
                title: "Social Responsibility",
                description:
                  "Prepare graduates to be ethically responsible, socially aware, and active contributors to the community and industry.",
                color: "from-teal-600 to-teal-700",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((objective, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={objective.image || "/placeholder.svg"}
                    alt={objective.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${objective.color} opacity-80`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <objective.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-gray-900">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Program Statistics with Visual Appeal */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-6 gap-4 h-full">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg"></div>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-8 relative">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-8">Program at a Glance</h2>
                <p className="text-xl opacity-90">
                  Comprehensive program designed for aviation excellence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { number: "4", label: "Years Duration", icon: "📅" },
                  { number: "120", label: "Credit Hours", icon: "📚" },
                  { number: "8", label: "Semesters", icon: "🎓" },
                  { number: "3", label: "Specializations", icon: "🎯" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-4">
                      <div className="text-4xl mb-4">{stat.icon}</div>
                      <div className="text-5xl font-bold mb-3">
                        {stat.number}
                      </div>
                      <div className="text-lg opacity-90">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why This Program Matters */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Aviation Industry Growth"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Industry Impact</h3>
                <p className="opacity-90">
                  Transforming Nepal's aviation landscape
                </p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                <span>Program Impact</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Why This Program Matters
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      Regional Success Model
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Aviation management courses have been successfully running
                      in South Asian countries like India and Sri Lanka.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      Growing Global Demand
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Increasing global demand for professionals with expertise
                      in aviation management in a rapidly evolving field.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      Local Market Focus
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Curriculum specifically designed to cater to the demands
                      of the Nepali local market and industry needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-[#0a4936] to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="text-3xl text-white">✈️</div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Begin Your Aviation Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join Nepal's premier aviation management program and become part
                of the next generation of aviation leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/apply">
                  <button className="bg-[#0a4936] hover:bg-[#0a4936]/90 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Apply Now
                  </button>
                </Link>
                <Link href="/curriculum">
                  <button className="border-2 border-[#0a4936] text-[#0a4936] hover:bg-[#0a4936] hover:text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                    View Curriculum
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
