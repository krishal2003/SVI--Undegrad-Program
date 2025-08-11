"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Siddhartha Vanasthali Institute", "Banepa - 5", "Kavre"],
      color: "from-[#0a4936] to-green-600",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+977-9707191358", "+977-9860001697"],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["siddharthavanasthalipanauti@gmail.com"],
      color: "from-green-600 to-green-700",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Friday: 9:00 AM - 5:00 PM", "Saturday: Closed", "Public Holidays: Closed"],
      color: "from-purple-600 to-purple-700",
    },
  ]

  const departments = [
    {
      name: "Admissions Office",
      email: "admissions@aviation.ku.edu.np",
      phone: "+977-1-5970012",
      description: "For admission inquiries, application process, and entrance requirements",
    },
    {
      name: "Academic Office",
      email: "academic@aviation.ku.edu.np",
      phone: "+977-1-5970013",
      description: "For curriculum information, course details, and academic support",
    },
    {
      name: "Student Services",
      email: "students@aviation.ku.edu.np",
      phone: "+977-1-5970014",
      description: "For student support, counseling, and campus life information",
    },
    {
      name: "Career Services",
      email: "careers@aviation.ku.edu.np",
      phone: "+977-1-5970015",
      description: "For internship opportunities, job placement, and career guidance",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90 mb-6">Get in touch with our aviation management team</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Contact</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-3xl flex items-center">
                  <MessageCircle className="w-8 h-8 mr-3" />
                  Send us a Message
                </CardTitle>
                <p className="opacity-90">Have questions about our aviation management program? We're here to help!</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Subject *</label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="curriculum">Curriculum Information</option>
                        <option value="fees">Fees and Scholarships</option>
                        <option value="career">Career Opportunities</option>
                        <option value="facilities">Facilities and Infrastructure</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Message *</label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your inquiry in detail..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0a4936] to-green-600 hover:from-[#0a4936]/90 hover:to-green-600/90 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-xl border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                <CardTitle className="text-xl">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {/* <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-[#0a4936]" />
                    <p className="font-semibold text-lg">Interactive Map</p>
                    <p className="text-sm">Kathmandu University</p>
                    <p className="text-sm">Balkumari, Lalitpur</p>
                  </div>
                </div> */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.1203276656665!2d85.2979427!3d27.7257474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18ea28354a9f%3A0x40915f1bcc9ba9a9!2sSiddhartha%20Vanasthali%20Institute!5e1!3m2!1sen!2snp!4v1754463282781!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    // allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>



              </CardContent>
            </Card>
          </div>
        </div>

        {/* Department Contacts
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Department Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#0a4936] mb-4">{dept.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-[#0a4936]" />
                      <span className="text-sm">{dept.email}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-[#0a4936]" />
                      <span className="text-sm">{dept.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Visit Us */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-16 rounded-2xl shadow-xl">
            <div className="max-w-4xl mx-auto px-8 text-center">
              <h2 className="text-4xl font-bold mb-8">Visit Our Campus</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                We welcome prospective students and their families to visit our campus and learn more about the Bachelor
                of Aviation Management program. Schedule a campus tour today!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Clock className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">Campus Tours</h3>
                  <p className="text-sm opacity-90">Daily tours available by appointment</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">Meet Faculty</h3>
                  <p className="text-sm opacity-90">Interact with our experienced faculty members</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">Information Sessions</h3>
                  <p className="text-sm opacity-90">Regular information sessions for prospective students</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
