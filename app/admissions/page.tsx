import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Calendar, Users, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function AdmissionsPage() {
  const admissionRequirements = [
    {
      category: "Academic Qualifications",
      icon: BookOpen,
      color: "from-[#0a4936] to-green-600",
      requirements: [
        "Completed +2 or equivalent qualification from a recognized institution",
        "Minimum GPA of 2.0 in +2 or equivalent examination",
        "Strong foundation in English, Mathematics, and General Knowledge",
        "Preference given to students with commerce or management background",
      ],
    },
    {
      category: "Entrance Requirements",
      icon: FileText,
      color: "from-blue-600 to-blue-700",
      requirements: [
        "Kathmandu University Common Admission Test (KUCAT) or equivalent",
        "English proficiency test (if applicable)",
        "Personal interview with admission committee",
        "Group discussion (if required)",
      ],
    },
    {
      category: "Documentation",
      icon: Award,
      color: "from-green-600 to-green-700",
      requirements: [
        "Official transcripts from +2 or equivalent examination",
        "Character certificate from previous institution",
        "Citizenship certificate or passport copy",
        "Recent passport-size photographs",
        "Medical certificate (if required)",
      ],
    },
    {
      category: "Additional Criteria",
      icon: Users,
      color: "from-purple-600 to-purple-700",
      requirements: [
        "Demonstrated interest in aviation industry",
        "Leadership qualities and extracurricular activities",
        "Communication skills in English and Nepali",
        "Commitment to four-year program completion",
      ],
    },
  ]

  const admissionProcess = [
    {
      step: 1,
      title: "Application Submission",
      description: "Submit completed application form with required documents",
      timeline: "March - May",
    },
    {
      step: 2,
      title: "Entrance Examination",
      description: "Take KUCAT or equivalent entrance examination",
      timeline: "June",
    },
    {
      step: 3,
      title: "Interview & Assessment",
      description: "Attend personal interview and group discussion",
      timeline: "July",
    },
    {
      step: 4,
      title: "Merit List Publication",
      description: "Check merit list and admission status",
      timeline: "July",
    },
    {
      step: 5,
      title: "Admission Confirmation",
      description: "Complete admission formalities and fee payment",
      timeline: "August",
    },
    {
      step: 6,
      title: "Orientation Program",
      description: "Attend orientation and begin classes",
      timeline: "September",
    },
  ]

  const importantDates = [
    { event: "Application Opens", date: "March 1, 2024" },
    { event: "Application Deadline", date: "May 15, 2024" },
    { event: "Entrance Examination", date: "June 10, 2024" },
    { event: "Interview Period", date: "July 1-15, 2024" },
    { event: "Merit List Publication", date: "July 20, 2024" },
    { event: "Admission Deadline", date: "August 15, 2024" },
    { event: "Classes Begin", date: "September 1, 2024" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Admission Requirements</h1>
            <p className="text-xl opacity-90 mb-6">Your pathway to aviation management excellence</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Admissions</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Admission Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Bachelor of Aviation Management program follows a competitive admission process designed to select
              motivated students with the potential to excel in the aviation industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-gradient-to-br from-[#0a4936] to-green-600 text-white shadow-xl">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">40</div>
                <div className="text-sm opacity-90">Seats Available</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-sm opacity-90">Years Duration</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-600 to-green-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">2.0</div>
                <div className="text-sm opacity-90">Minimum GPA</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">+2</div>
                <div className="text-sm opacity-90">Minimum Qualification</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {admissionRequirements.map((req, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardHeader className={`bg-gradient-to-r ${req.color} text-white`}>
                  <CardTitle className="text-xl flex items-center">
                    <req.icon className="w-6 h-6 mr-3" />
                    {req.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {req.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Admission Process */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Admission Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {admissionProcess.map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0a4936] to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{process.title}</h3>
                          <span className="text-sm text-[#0a4936] font-semibold bg-green-100 px-3 py-1 rounded-full">
                            {process.timeline}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{process.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Important Dates</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Academic Year 2024-25
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-200">
                  {importantDates.map((date, index) => (
                    <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">{date.event}</span>
                        <span className="text-[#0a4936] font-bold">{date.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Selection Criteria */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Selection Criteria</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0a4936] mb-4">Merit-Based Selection</h3>
                  <p className="mb-4">
                    Students are selected based on their academic performance, entrance examination scores, and
                    performance in personal interviews. The selection process is transparent and merit-based.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Academic performance (40%)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Entrance examination (35%)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Personal interview (25%)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a4936] mb-4">Special Considerations</h3>
                  <p className="mb-4">
                    Special consideration is given to students from underrepresented regions, those with
                    aviation-related experience, and students demonstrating exceptional leadership qualities.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Regional diversity
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Aviation experience
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Leadership potential
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-16 rounded-2xl shadow-xl">
            <div className="max-w-4xl mx-auto px-8 text-center">
              <h2 className="text-4xl font-bold mb-8">Ready to Apply?</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Take the first step towards your aviation management career. Submit your application today and join
                Nepal's premier aviation management program.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/apply">
                  <Button
                    size="lg"
                    className="bg-white text-[#0a4936] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#0a4936] px-10 py-4 text-lg font-semibold rounded-full bg-transparent backdrop-blur-sm transition-all duration-300"
                  >
                    Contact Admissions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
