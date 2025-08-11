import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, DollarSign, Users, CheckCircle, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ScholarshipsPage() {
  const scholarships = [
    {
      name: "Merit-Based Scholarship",
      amount: "Flat Rs 50,000 off",
      eligibility: "Academic excellence in +2 or equivalent",
      criteria: [
        "Minimum GPA of 3.5 or abvoe in +2 examination",
        "KUUMAT score of 50 and above",
        "submit their admission and scholarship application within the stated deadline to be considered",
        "The student must be enrolled as a full-time undergraduate student in the academic program",
         
      ],
      benefits: [
        "Partial or full tuition fee waiver for the first academic year.",
        "Early recognition and support for academic excellence.",
        "Boosts eligibility for future scholarships and honors.",
        "Encourages high-performing students to join the program.",
        "Reduces financial pressure on students.",
      ],
      deadline: "May 30, 2024",
      renewable: true,
    },
    {
      name: "Achievers Award",
      eligibility: "Top three students from every batch",
      criteria: [
        "Family income below specified threshold",
        "Academic performance above minimum requirements",
        "Submission of financial documents",
        "Community service involvement",
      ],
      benefits: [
        "Monetary reward or tuition fee concession for the next term.",
        "Public recognition during official events or ceremonies.",
        "Certificate of achievement to add to personal and professional portfolios.",
        "Encouragement for continued academic excellence.",
        "Priority consideration for internships, projects, and leadership roles.",
      ],
      deadline: "June 15, 2024",
      renewable: true,
    },
    // {
    //   name: "Regional Diversity Scholarship",
    //   amount: "25% tuition fee",
    //   eligibility: "Students from underrepresented regions of Nepal",
    //   criteria: [
    //     "Permanent residence in specified regions",
    //     "Academic merit requirements",
    //     "Commitment to return to home region after graduation",
    //     "Community development project proposal",
    //   ],
    //   benefits: [
    //     "Tuition fee discount",
    //     "Cultural integration support",
    //     "Regional networking opportunities",
    //     "Project funding support",
    //   ],
    //   deadline: "June 1, 2024",
    //   renewable: true,
    // },
    {
      name: "Women in Aviation Scholarship",
      eligibility: "Female students pursuing aviation management",
      criteria: [
        "Female applicants only",
        "Strong academic background",
        "Essay on women's role in aviation",
        "Commitment to aviation industry",
      ],
      benefits: [
        "Financial assistance covering tuition or training fees.",
        "Mentorship from women leaders in the aviation industry.",
        "Access to networking events and exclusive workshops.",
        "Boosts gender diversity and inclusion in the aviation sector.",
        "Inspires confidence and visibility for women in technical roles.",
      ],
      deadline: "May 20, 2024",
      renewable: true,
    },
  ]

  const applicationProcess = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Ensure you have completed high school with at least 40% and meet other admission criteria.",
    },
    {
      step: 2,
      title: "Prepare Documents",
      description: "Gather necessary documents such as transcripts, photo ID, and recent photographs",
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Fill out the online application form and pay the non-refundable application fee.",
    },
    {
      step: 4,
      title: "Interview Process",
      description: "Take part in the entrance exam or interview scheduled by the institute.",
    },
    {
      step: 5,
      title: "Award Notification",
      description: "Receive admission decision and confirm your seat by submitting the tuition fees before the deadline.",
    },
  ]

  const requiredDocuments = [
    "+2, Intermediate, or equivalent with minimum 40% aggregate or CGPA 1.6 and at least 'D+' in each subject",
    "GCE A-Level with minimum 3 subjects in A Level and 1 general paper in AS Level",
    "International Baccalaureate (IB) with at least 6 courses (3 in Higher Level) and minimum 24 points",
    "CTEVT three-year diploma with minimum 40% aggregate",
    "CBSE with minimum 40% aggregate",
    "Applicants awaiting 12th-grade results may apply provisionally",
    "All applicants must appear and pass the KUUMAT entrance test",
    "10% of total seats reserved for foreign nationals",
    // "Letters of recommendation (2-3)",
    // "Community service certificates (if applicable)",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Scholarships & Financial Aid</h1>
            <p className="text-xl opacity-90 mb-6">Making aviation management education accessible to all</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Scholarships</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Financial Support Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              KUSOM is committed to making quality aviation management education accessible through various scholarship
              and financial aid programs for deserving students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-gradient-to-br from-[#0a4936] to-green-600 text-white shadow-xl">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">75%</div>
                <div className="text-sm opacity-90">Maximum Aid</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">60%</div>
                <div className="text-sm opacity-90">Students Receive Aid</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-600 to-green-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <DollarSign className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-sm opacity-90">Scholarship Types</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-xl">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Renewable</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Available Scholarships */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Available Scholarships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{scholarship.name}</CardTitle>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                      {scholarship.amount}
                    </span>
                  </div>
                  <p className="opacity-90 text-sm">{scholarship.eligibility}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Eligibility Criteria:</h4>
                    <ul className="space-y-2">
                      {scholarship.criteria.map((criterion, criterionIndex) => (
                        <li key={criterionIndex} className="flex items-start text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {scholarship.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-gray-700 text-sm">
                          <Award className="w-4 h-4 text-[#0a4936] mt-0.5 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      Deadline: {scholarship.deadline}
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      {scholarship.renewable ? "Renewable" : "One-time"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationProcess.map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0a4936] to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{process.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Required Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requiredDocuments.map((document, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-[#0a4936] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{document}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#0a4936] mb-4">Scholarship Renewal</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Maintain minimum GPA of 3.0
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Complete required credit hours
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Submit annual renewal application
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Participate in community service
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a4936] mb-4">Additional Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Academic counseling services
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Career guidance and placement
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Peer tutoring programs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Financial literacy workshops
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Now */}
        <section>
          <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-16 rounded-2xl shadow-xl">
            <div className="max-w-4xl mx-auto px-8 text-center">
              <h2 className="text-4xl font-bold mb-8">Apply for Scholarships Today</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Don't let financial constraints hold you back from pursuing your aviation management dreams. Apply for
                our scholarship programs and take the first step towards your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#0a4936] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Apply for Scholarship
                </Button>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#0a4936] px-10 py-4 text-lg font-semibold rounded-full bg-transparent backdrop-blur-sm transition-all duration-300"
                  >
                    Contact Financial Aid
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
