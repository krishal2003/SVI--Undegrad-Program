"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    specialization: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Application submitted successfully! We will contact you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Apply Now</h1>
            <p className="text-xl opacity-90 mb-6">Start your journey in aviation management</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Apply</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-3xl">Application Form</CardTitle>
                <p className="opacity-90">
                  Fill out the form below to apply for the Bachelor of Aviation Management program
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Address *</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Highest Qualification *</label>
                      <select
                        name="qualification"
                        required
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                      >
                        <option value="">Select Qualification</option>
                        <option value="plus2">+2 / A Level</option>
                        <option value="diploma">Diploma</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Specialization</label>
                      <select
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                      >
                        <option value="">Select Specialization</option>
                        <option value="financial">Aviation Financial Management</option>
                        <option value="operations">Aviation Operations Management</option>
                        <option value="marketing">Sales and Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Additional Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us why you're interested in aviation management..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0a4936] to-green-600 hover:from-[#0a4936]/90 hover:to-green-600/90 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0a4936] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Address</div>
                    <div className="text-gray-600 text-sm leading-relaxed">
                      Kathmandu University School of Management
                      <br />
                      Balkumari, Lalitpur
                      <br />
                      Nepal
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#0a4936] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <div className="text-gray-600">+977-1-5970012</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#0a4936] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <div className="text-gray-600">info@aviation.ku.edu.np</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#0a4936] rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Office Hours</div>
                    <div className="text-gray-600 text-sm">
                      Sunday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: Closed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                <CardTitle className="text-2xl">Location</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 rounded-lg flex items-center justify-center">
                  {/* <div className="text-center text-gray-600">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-[#0a4936]" />
                    <p className="font-semibold text-lg">Interactive Map</p>
                    <p className="text-sm">Kathmandu University</p>
                    <p className="text-sm">Balkumari, Lalitpur</p>
                  </div> */}
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

            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                <CardTitle className="text-2xl">Admission Requirements</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Completed +2 or equivalent
                    qualification
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Minimum GPA requirements as per KU
                    standards
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>English proficiency
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Entrance examination (if applicable)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Personal interview
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0a4936] rounded-full mr-3"></span>Required documents and certificates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
