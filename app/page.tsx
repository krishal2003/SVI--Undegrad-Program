"use client";

import { useState } from "react";
import { useEffect } from "react";

import Image from "next/image";
import {
  ChevronDown,
  Users,
  Award,
  BookOpen,
  Globe,
  ArrowDown,
  Play,
  MapPin,
  Calendar,
  Target,
  Zap,
  Wrench,
  Brain,
  Rocket,
  Plane,
  Briefcase,
  Activity,
  BrainCog,
  FlaskConical,
  Scale,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("main");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      question:
        "What is the duration of the Bachelor of Aviation Management program?",
      answer:
        "The Bachelor of Aviation Management is a four-year undergraduate program (8 semesters) with a total of 120 credit hours.",
    },
    {
      question: "What are the career opportunities after graduation?",
      answer:
        "Graduates can pursue careers as Airport Managers, Airline Operations Managers, Air Traffic Controllers, Aviation Safety Inspectors, Aviation Consultants, Aviation Analysts, and more in the rapidly growing aviation industry.",
    },
    {
      question: "What specializations are available in the program?",
      answer:
        "The program offers three specialization tracks: Aviation Financial Management, Aviation Operations Management, and Sales and Marketing.",
    },
    {
      question: "Is there practical training included in the curriculum?",
      answer:
        "Yes, the program includes an Industrial Experience Project in the 7th semester and a 6-credit hour Internship in the final semester to provide hands-on experience.",
    },
    {
      question: "What makes this program unique in Nepal?",
      answer:
        "This is designed to address the shortage of qualified aviation management professionals in Nepal, with curriculum specifically tailored to meet industry demands and international standards.",
    },
  ];

  const testimonials = [
    {
      name: "Sampal Bhandara",
      role: "Graduate student",
      company: "ABS International School",
      content:
        " I found Siddhartha Vanasthali Institute through research, appreciated its vocational teaching style and professional faculty, which helped me improve both academic and personal skills.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Afridi Ghesi",
      role: "Student",
      company: "Siddhartha Vanasthali Institute",
      content:
        "I was inspired by a lifelong passion for aviation, chose Siddhartha for its practical learning beyond textbooks and considers it the best decision for pursuing aviation management.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Amit Thapa",
      role: "Student",
      company: "Siddhartha Vanasthali Institute",
      content:
        "I express pride in the batch’s achievement of 4 GPA, credits mentors and peers for support, and it reflects my dedication and inspiration in my aviation management journey.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ];

  const newsItems = [
    {
      title: "New Aviation Lab Inaugurated",
      date: "2024-01-15",
      image: "/placeholder.svg?height=200&width=300",
      excerpt:
        "State-of-the-art aviation simulation lab opens for student training.",
    },
    {
      title: "Industry Partnership Expansion",
      date: "2024-01-10",
      image: "/placeholder.svg?height=200&width=300",
      excerpt:
        "New partnerships with leading airlines for internship programs.",
    },
    {
      title: "Student Achievement Awards",
      date: "2024-01-05",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Aviation management students win national competition.",
    },
  ];

  const galleryImages = [
    "/placeholder.svg?height=300&width=400",
    "/1.jpg?height=400&width=400",
    "/2.jpg?height=400&width=400",
    "/3.jpg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ];

  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopover(true); // Show popover after 5 seconds
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {showPopover && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="relative max-w-md w-full">
            <img
              src="/pop.png"
              alt="Admission Open"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setShowPopover(false)}
              className="absolute top-2 right-2  text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Navbar />

      <section className="relative h-screen flex items-center justify-center">
        <Image
          // src="/images/hero-airplane.jpg"
          src="/simrik.jpg"
          alt="Aviation Management Program"
          fill
          className="object-cover brightness-75" // reduces brightness by 25%
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* University Logos */}
          <div className="flex justify-center items-end gap-6 flex-wrap mb-5 ">
            <img
              src="/svi.png"
              alt="University 1"
              className="h-12 md:h-16 object-contain"
            />
            <img
              src="/annapurna.png"
              alt="University 2"
              className="h-12 md:h-16 object-contain"
            />
                      <Link href="https://www.kusom.edu.np/" target="_blank">

            <img
              src="/ku.png"
              alt="University 3"
              className="h-12 md:h-16 object-contain"
            />
                                  </Link>

          </div>

          {/* Animated Heading */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              PREPARING <br />
              <span className="bg-gradient-to-r from-[#52ae74] to-[#6fcf97] bg-clip-text text-transparent">
                TOMORROW'S AVIATION{" "}
              </span>
              <br />
              LEADERS
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 font-light tracking-wide"></p>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={scrollToNextSection}
            className="flex flex-col items-center text-white hover:text-green-400 transition-colors duration-300 group"
          >
            <span className="text-sm font-medium mb-2 opacity-80 group-hover:opacity-100 tracking-wider">
              EXPLORE MORE
            </span>
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center group-hover:border-green-400 transition-colors duration-300 animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>
          </button>
        </div>
        {/* Explore More Button */}
{/*         <div className="absolute top-8 left-10 transform -translate-x-1/2 z-10">
          <Link href="https://www.kusom.edu.np/" target="_blank">
            <img src="kusom.png" alt="" width="50px" />{" "}
          </Link>
        </div> */}
      </section>
      {/* Program Overview with Visual Enhancements */}
      <section className="py-28 bg-white relative overflow-hidden" id="main">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
              {/* Left: Text Content */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                  <BookOpen className="w-4 h-4" />
                  <span>Our Program</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                  Bachelor of{" "}
                  <span className="text-[#3e8558]">Aviation Management</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  A comprehensive four-year program preparing students for
                  leadership roles in the aviation industry with cutting-edge
                  curriculum and strong industry partnerships.
                </p>
                <Link href="/curriculum">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 transition-transform duration-200 text-white px-8 py-4 text-lg rounded-full shadow-lg">
                    View Curriculum
                  </Button>
                </Link>
              </div>

              {/* Right: Visual Images */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <Image
                    src="/bam1.jpg"
                    alt="Female Pilot Student"
                    width={260}
                    height={340}
                    className="rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                  />
                  <Image
                    src="/bam2.jpg"
                    alt="Aviation Cockpit Training"
                    width={260}
                    height={220}
                    className="rounded-3xl shadow-2xl mt-14 transform hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>

                {/* Gradient Circles */}
                <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-gradient-to-br from-green-300 to-blue-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              </div>
            </div>

            {/* Program Objectives */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-14 shadow-2xl">
              <h3 className="text-4xl font-bold mb-12 text-center text-gray-900">
                Program Objectives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  {
                    icon: <Plane className="w-10 h-10 text-[#3e8558]" />,
                    text: "Understand the Nepali aviation industry deeply",
                  },
                  {
                    icon: <Briefcase className="w-10 h-10 text-[#3e8558]" />,
                    text: "Build core management skills for aviation",
                  },
                  {
                    icon: <Activity className="w-10 h-10 text-[#3e8558]" />,
                    text: "Train for real-world aviation challenges",
                  },
                  {
                    icon: <BrainCog className="w-10 h-10 text-[#3e8558]" />,
                    text: "Sharpen thinking and problem-solving",
                  },
                  {
                    icon: <FlaskConical className="w-10 h-10 text-[#3e8558]" />,
                    text: "Encourage innovation and research in aviation",
                  },
                  {
                    icon: <Scale className="w-10 h-10 text-[#3e8558]" />,
                    text: "Develop ethical and socially aware graduates",
                  },
                ].map((objective, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center text-center space-y-4 hover:scale-[1.02] transition-transform duration-200"
                  >
                    <div className="flex-shrink-0">{objective.icon}</div>
                    <p className="text-gray-700 text-lg">{objective.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Images */}
      <section
        id="why-choose-us"
        className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Leading Aviation Education
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Addressing the critical shortage of qualified aviation management
              professionals with world-class education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Industry Demand",
                description:
                  "High demand for aviation professionals in Nepal's expanding sector",
                image: "/industry.webp?height=200&width=300",
                // color: "from-[#0a4936] to-green-600",
              },
              {
                icon: Award,
                title: "ICAO Standards",
                description:
                  "Curriculum designed to meet international aviation standards",
                image: "/icao.png?height=200&width=300",
                // color: "from-blue-600 to-blue-700",
              },
              {
                icon: BookOpen,
                title: "Practical Training",
                description:
                  "Hands-on experience through internships and industry partnerships",
                image: "/training.jpg?height=200&width=300",
                // color: "from-green-600 to-green-700",
              },
              {
                icon: Users,
                title: "Career Opportunities",
                description:
                  "Multiple career paths in airports, airlines, and regulatory bodies",
                image: "/pilot.webp?height=200&width=300",
                // color: "from-purple-600 to-purple-700",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t  opacity-20`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center"></div>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations with Enhanced Visuals */}
      {/* <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Specializations</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Develop specialized expertise in your area of interest and build a
              successful aviation career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Aviation Financial Management",
                icon: "💰",
                description:
                  "Master financial aspects of aviation operations and investment strategies",
                image: "/placeholder.svg?height=250&width=400",
                color: "from-[#0a4936] to-green-600",
                courses: [
                  "Aircraft Finance",
                  "Aviation Insurance",
                  "Investment Analysis",
                  "Financial Reporting",
                ],
              },
              {
                title: "Aviation Operations Management",
                icon: "✈️",
                description:
                  "Focus on operational efficiency and management of aviation systems",
                image: "/placeholder.svg?height=250&width=400",
                color: "from-blue-600 to-blue-700",
                courses: [
                  "Logistics Management",
                  "Operations Research",
                  "Airport Equipment",
                  "Information Systems",
                ],
              },
              {
                title: "Sales and Marketing",
                icon: "📈",
                description:
                  "Develop expertise in aviation marketing and customer service strategies",
                image: "/placeholder.svg?height=250&width=400",
                color: "from-green-600 to-green-700",
                courses: [
                  "Customer Service",
                  "Digital Marketing",
                  "Brand Management",
                  "Crew Management",
                ],
              },
            ].map((spec, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={spec.image || "/placeholder.svg"}
                    alt={spec.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${spec.color} opacity-80`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-5xl mb-4">{spec.icon}</div>
                      <h3 className="text-2xl font-bold">{spec.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {spec.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {spec.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#0a4936] hover:bg-[#0a4936]/90 text-white rounded-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Campus Life Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              <span>Campus Life</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Our Gallery
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Modern facilities, vibrant student life, and industry-standard
              learning environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Campus ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold">Campus Facility {index + 1}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/facilities">
              <Button className="bg-[#0a4936] hover:bg-[#0a4936]/90 text-white px-8 py-4 text-lg rounded-full">
                Explore All Facilities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Testimonials{" "}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div>
                      <div className="font-bold text-xl text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">{testimonial.role}</div>
                      <div className="text-[#0a4936] font-semibold">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#3e8558] fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  

      {/* Enhanced FAQ Section */}
      <section className="py-28 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-5 animate-fade-in">
                <BookOpen className="w-5 h-5" />
                <span>FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our aviation management
                program.
              </p>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between transition-colors duration-300 hover:bg-gray-100"
                  >
                    <span className="font-semibold text-gray-800 text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-green-700 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 pb-4 text-gray-600 text-base transition-all duration-300 ease-in-out ${
                      openFaq === index ? "block" : "hidden"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#52ae74] to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Ready to Take Flight?
          </h2>
          <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Join Nepal's premier aviation management program and launch your
            career in the aviation industry with world-class education and
            industry connections
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link href="/apply">
              <Button
                size="lg"
                className="bg-white text-[#52ae74] hover:bg-gray-100 px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#52ae74] px-12 py-6 text-xl font-semibold rounded-full bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
