import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowRight, Bell, Newspaper, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "New Aviation Management Program Launched at KUSOM",
      excerpt:
        "Kathmandu University School of Management announces the launch of Nepal's first comprehensive Bachelor of Aviation Management program.",
      date: "2024-01-15",
      author: "KUSOM Administration",
      category: "Program Launch",
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "Industry Partnership with Tribhuvan International Airport",
      excerpt:
        "KUSOM signs MOU with TIA for practical training and internship opportunities for aviation management students.",
      date: "2024-01-10",
      author: "Partnership Team",
      category: "Partnership",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "Guest Lecture by Aviation Industry Expert",
      excerpt:
        "Renowned aviation consultant Mr. Rajesh Sharma delivers guest lecture on 'Future of Aviation in Nepal'.",
      date: "2024-01-08",
      author: "Academic Department",
      category: "Events",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      id: 4,
      title: "Scholarship Opportunities for Aviation Students",
      excerpt: "KUSOM announces merit-based scholarships for outstanding students in the Aviation Management program.",
      date: "2024-01-05",
      author: "Financial Aid Office",
      category: "Scholarships",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      id: 5,
      title: "Aviation Management Faculty Recruitment Drive",
      excerpt: "KUSOM seeks qualified faculty members with aviation industry experience for the new program.",
      date: "2024-01-03",
      author: "HR Department",
      category: "Faculty",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      id: 6,
      title: "Student Exchange Program with International Universities",
      excerpt:
        "Aviation Management students to benefit from exchange programs with leading international aviation schools.",
      date: "2024-01-01",
      author: "International Relations",
      category: "International",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
  ]

  const upcomingEvents = [
    {
      title: "Aviation Career Fair 2024",
      date: "2024-03-15",
      time: "10:00 AM - 4:00 PM",
      location: "KUSOM Campus",
      description: "Meet with aviation industry recruiters and explore career opportunities.",
    },
    {
      title: "Industry Expert Seminar Series",
      date: "2024-03-20",
      time: "2:00 PM - 4:00 PM",
      location: "Main Auditorium",
      description: "Monthly seminar featuring aviation industry leaders and experts.",
    },
    {
      title: "Student Research Presentation",
      date: "2024-03-25",
      time: "9:00 AM - 12:00 PM",
      location: "Conference Hall",
      description: "Aviation management students present their research projects.",
    },
  ]

  const categories = ["All", "Program Launch", "Partnership", "Events", "Scholarships", "Faculty", "International"]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl opacity-90 mb-6">Stay updated with the latest aviation management news</p>
            <div className="flex items-center justify-center space-x-2 text-green-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">News & Events</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured News */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured News</h2>
              {newsItems
                .filter((item) => item.featured)
                .map((item) => (
                  <Card key={item.id} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-64 md:h-auto flex items-center justify-center">
                        <Newspaper className="w-16 h-16 text-gray-500" />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="bg-[#0a4936] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {item.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(item.date).toLocaleDateString()}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{item.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-sm">
                            <User className="w-4 h-4 mr-1" />
                            {item.author}
                          </div>
                          <Button
                            variant="outline"
                            className="text-[#0a4936] border-[#0a4936] hover:bg-[#0a4936] hover:text-white bg-transparent"
                          >
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </section>

            {/* All News */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsItems
                  .filter((item) => !item.featured)
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 flex items-center justify-center">
                        <Newspaper className="w-12 h-12 text-gray-500" />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                            {item.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(item.date).toLocaleDateString()}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-xs">
                            <User className="w-3 h-3 mr-1" />
                            {item.author}
                          </div>
                          <Button size="sm" variant="ghost" className="text-[#0a4936] hover:bg-green-50">
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#0a4936] to-green-600 text-white">
                <CardTitle className="text-xl">Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors text-gray-700 hover:text-[#0a4936]">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-xl flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-bold text-gray-900 mb-2">{event.title}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-[#0a4936]" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-[#0a4936]" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-[#0a4936]" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardTitle className="text-xl">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter for the latest aviation management news.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a4936] focus:border-transparent"
                  />
                  <Button className="w-full bg-[#0a4936] hover:bg-[#0a4936]/90 text-white">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
