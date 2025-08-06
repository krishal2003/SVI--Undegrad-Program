// Semester VIII Internship Only

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Semester8Page() {
  const internship = {
    code: "AM-806",
    name: "Internship",
    credits: 6,
    description:
      "Full-time supervised internship in an aviation organization to apply academic knowledge in a real-world context.",
    objectives: [
      "Gain hands-on industry experience",
      "Understand real-world operations and culture",
      "Develop technical and interpersonal skills",
      "Produce professional reports and reflections",
    ],
    topics: [
      "Orientation and Planning",
      "Field Assignment Tasks",
      "Midterm Evaluation",
      "Final Reporting",
      "Presentation and Feedback",
    ],
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-[#e8f4ec]">
        <Navbar />

        <header className="bg-[#3e8558] text-white py-20 mt-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Semester VIII</h1>
            <p className="text-lg opacity-90 mb-6">
              Final semester focusing on a comprehensive internship program.
            </p>
            <div className="flex justify-center space-x-2 text-green-200 text-sm">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link href="/curriculum" className="hover:text-white">
                Curriculum
              </Link>
              <span>/</span>
              <span className="text-white font-medium">Semester 8</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-16">
          <div className="mb-10">
            <Link href="/curriculum">
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-white shadow-md"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Curriculum
              </Button>
            </Link>
          </div>

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
              Internship
            </h2>
            <Card className="border border-gray-200 shadow-md">
              <CardHeader className="bg-[#3e8558] text-white">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">
                    {internship.code}: {internship.name}
                  </CardTitle>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {internship.credits} Credits
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-gray-700 mb-4">{internship.description}</p>
                  <h4 className="text-lg font-semibold mb-2">Objectives</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {internship.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Topics</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {internship.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Previous Semester</p>
                <Link
                  href="/curriculum/semester-7"
                  className="text-[#3e8558] font-semibold hover:underline"
                >
                  ← Semester VII
                </Link>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">End of Program</p>
                <p className="text-gray-400">Congratulations!</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
