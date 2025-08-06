// Semester VII layout with only Project section

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Semester7Page() {
  const project = {
    code: "AM-703",
    name: "Industrial Experience Project",
    credits: 3,
    description:
      "A supervised industrial placement project designed to apply academic knowledge in a real aviation workplace.",
    objectives: [
      "Gain hands-on experience in aviation industry",
      "Apply classroom knowledge to real tasks",
      "Understand workplace culture and processes",
      "Develop practical skills and reporting",
    ],
    topics: [
      "Field Work Planning",
      "Workplace Integration",
      "Project Log and Documentation",
      "Industry Report Writing",
      "Presentation and Evaluation",
    ],
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-[#e8f4ec]">
        <Navbar />

        <header className="bg-[#3e8558] text-white py-20 mt-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Semester VII</h1>
            <p className="text-lg opacity-90 mb-6">
              Apply skills in a real-world setting through an industry-focused
              project.
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
              <span className="text-white font-medium">Semester 7</span>
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
              Project
            </h2>
            <Card className="border border-gray-200 shadow-md">
              <CardHeader className="bg-[#3e8558] text-white">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">
                    {project.code}: {project.name}
                  </CardTitle>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {project.credits} Credits
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <h4 className="text-lg font-semibold mb-2">Objectives</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {project.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Topics</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {project.topics.map((topic, i) => (
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
                  href="/curriculum/semester-6"
                  className="text-[#3e8558] font-semibold hover:underline"
                >
                  ← Semester VI
                </Link>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Next Semester</p>
                <Link
                  href="/curriculum/semester-8"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Semester VIII →
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
