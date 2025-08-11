import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, Users } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CurriculumPage() {
  const semesters = [
    {
      semester: "I",
      courses: [
        { code: "AM-101", name: "Advanced English I", credits: 3 },
        { code: "AM-102", name: "Mathematics", credits: 3 },
        { code: "AM-103", name: "Principles of Microeconomics", credits: 3 },
        { code: "AM-104", name: "Introduction to Psychology", credits: 3 },
        { code: "AM-105", name: "Society and Culture", credits: 3 },
        { code: "AM-106", name: "Financial Accounting", credits: 3 },
  ],
}
,
    {
      semester: "II",
      courses: [
        { code: "AM-201", name: "Macroeconomics", credits: 3 },
        { code: "AM-202", name: "Business Management", credits: 3 },
        { code: "AM-203", name: "Corporate Communication", credits: 3 },
        { code: "AM-204", name: "Business Statistics", credits: 3 },
        { code: "AM-205", name: "Introduction to Aviation Industry", credits: 3 },
        { code: "AM-206", name: "Airport Equipment and Facilities", credits: 3 },
      ],
    }
,
    {
      semester: "III",
      courses: [
        { code: "AM-301", name: "Principles of Marketing", credits: 3 },
        { code: "AM-302", name: "Ethics and Social Responsibility", credits: 3 },
        { code: "AM-303", name: "Financial Management", credits: 3 },
        { code: "AM-304", name: "Air Traffic Management", credits: 3 },
        { code: "AM-305", name: "HRM and Human Factor in Aviation", credits: 3 },
        { code: "AM-306", name: "Aircraft Maintenance Management", credits: 3 },
      ],
    }
,
    {
      semester: "IV",
      courses: [
        { code: "AM-401", name: "Database Management", credits: 3 },
        { code: "AM-402", name: "Research Methodology", credits: 3 },
        { code: "AM-403", name: "Business Strategy", credits: 3 },
        { code: "AM-404", name: "Aviation Safety and Security", credits: 3 },
        { code: "AM-405", name: "Operational Research Applied to Air Transportation", credits: 3 },
        { code: "AM-406", name: "Meteorology Services for Aviation", credits: 3 },
      ],
    }
,
    {
        semester: "V",
        courses: [
          // Core
          { code: "AM-501 (Core)", name: "Aircraft Certification & Airworthiness", credits: 3 },
          { code: "AM-502 (Core)", name: "Aviation Law and Regulation", credits: 3 },

          // Elective (choose one)
          { code: "AM-503 (Elective)", name: "Elective 1", credits: 3 },


          // Specialization 1 - Aviation Financial Management
          { code: "AM-506 (Specialization 1)", name: "Aviation Financial Management Management", credits: 3 },
          

          // Specialization 2 - Aviation Operations Management
          { code: "AM-509 (Specialization 2)", name: "Aviation Operations Management", credits: 3 },
          

          // Specialization 3 - Aviation Sales and Marketing
          { code: "AM-512 (Specialization 3)", name: "Aviation Sales and Marketing", credits: 3 },
        ],
      }

,
   {
      semester: "VI",
      courses: [
        // Core
        { code: "AM-601 (Core)", name: "Project Management", credits: 3 },
        { code: "AM-602 (Core)", name: "Disaster Management in Aviation", credits: 3 },
        { code: "AM-603 (Core)", name: "Avionics System", credits: 3 },

       // Specialization 1 - Aviation Financial Management
          { code: "AM-506 (Specialization 1)", name: "Aviation Financial Management Management", credits: 3 },
          

          // Specialization 2 - Aviation Operations Management
          { code: "AM-509 (Specialization 2)", name: "Aviation Operations Management", credits: 3 },
          

          // Specialization 3 - Aviation Sales and Marketing
          { code: "AM-512 (Specialization 3)", name: "Aviation Sales and Marketing", credits: 3 },
      ],
    }
,
    {
      semester: "VII",
      courses: [
        { code: "AM-701", name: "Project (Capstone Project)", credits: 6 },
      ],
    },
    {
      semester: "VIII",
      courses: [
        { code: "AM-801", name: "Internship", credits: 6 },
        
      ],
    },
  ];

  const specializations = [
    {
      name: "Aviation Financial Management",
      color: "from-[#0a4936] to-green-600",
      courses: [
        "Financial Management and Incsurance in Aviation(Sem-V)",
        "Investment Analysis and Portfolio Management(Sem-V)",
        "Taxation and auditing(Sem-V)",
        "Air Transport Economics(Sem VI)",
        "Accounting For Managers(Sem VI)",
        "Aircraft Leasing and Financing*(Sem VI)",
        ,
      ],
    },
    {
      name: "Aviation Operations Management",
      color: "from-blue-600 to-blue-700",
      courses: [
        "Cargo & Supply Chain Management for Aviation (Sem V)",
        "Airport Operation, Planning and Design (Sem V)",
        "Ground handling and Ramp Management (Sem V)",
        "Flight Mechanics (Sem VI)",
        "Airline Scheduling and Onboard Crew Management (Sem VI)",
        "Flight Operations (Sem VI)",
      ],
    },
    {
      name: "Aviation Sales and Marketing",
      color: "from-green-600 to-green-700",
      courses: [
        "Airline Customer Service (Sem V)",
        "Sales Management (Sem V)",
        "Service Marketing (Sem V)",
        "Air Ticketing and Fare Construction (Sem VI)",
        "Branding and Advertising (Sem VI)",
        "Digital Marketing (Sem VI)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Course Structure</h1>
            <p className="text-xl opacity-90 mb-6">
              Comprehensive curriculum designed for aviation industry excellence
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Curriculum</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Semester-wise Curriculum */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Semester-wise Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {semesters.map((sem, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300"
              >
                <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                  <CardTitle className="text-2xl">
                    Semester {sem.semester}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {sem.courses.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-gray-900">
                            {course.code}
                          </div>
                          <div className="text-sm text-gray-600">
                            {course.name}
                          </div>
                        </div>
                        <div className="text-[#0a4936] font-bold">
                          {course.credits} CR
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-right text-sm text-gray-600">
                      Total Credits:{" "}
                      <span className="font-bold text-[#0a4936]">
                        {sem.courses.reduce(
                          (sum, course) => sum + course.credits,
                          0
                        )}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Specialization Tracks */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Specialization Tracks
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Students choose one specialization track in their 5th and 6th
            semesters to develop expertise in their area of interest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader
                  className={`bg-gradient-to-r ${spec.color} text-white`}
                >
                  <CardTitle className="text-xl">{spec.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {spec.courses.map((course, courseIndex) => (
                      <li
                        key={courseIndex}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Elective Courses */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Elective Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#0a4936] mb-4">
                  Elective I (Semester V)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>
                    Helicopter Operations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>
                    Drone Regulations & Operations 
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>
                    Sustainable Aviation
                  </li>
                </ul>
              </div>
              {/* <div>
                <h3 className="text-xl font-bold text-[#0a4936] mb-4">
                  Elective II (Semester VIII)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>
                    Advanced Aviation Law and Regulation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>
                    Business Ethics and Values
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>
                    Global Business Environment
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </section>

        {/* Practical Components */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Practical Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-[#0a4936] to-green-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Industrial Experience Project
                </h3>
                <p className="mb-4 opacity-90">Semester VII - 3 Credit Hours</p>
                <p className="leading-relaxed">
                  Students work on real-world aviation industry projects,
                  gaining hands-on experience and applying theoretical knowledge
                  to practical situations under industry supervision.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Internship Program</h3>
                <p className="mb-4 opacity-90">
                  Semester VIII - 6 Credit Hours
                </p>
                <p className="leading-relaxed">
                  Comprehensive internship program with aviation companies,
                  airports, airlines, or regulatory bodies to provide
                  professional work experience and industry networking
                  opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
