"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowNavbar(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 bg-white shadow-sm transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center space-x-4">
            <img src="/svi.png" alt="" width="50px" />
            <img src="/annapurna.png" alt="" width="80px" />
            <img src="/ku.png" alt="" width="50px" />
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/apply">
              <Button className="hidden md:inline-flex bg-[#52ae74] hover:bg-[#70E99C]/90 text-white">
                APPLY NOW
              </Button>
            </Link>
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#0a4936] transition-colors"
            >
              <span className="font-medium">MENU</span>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 h-1/2 z-50 bg-[#3e8558] text-white shadow-md overflow-y-auto">
          <div className="absolute top-6 right-6">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="container mx-auto px-6 py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl">
              <div>
                <h2 className="text-xl font-bold mb-6 border-b border-green-400 pb-2">
                  ABOUT US
                </h2>
                <ul className="space-y-3 text-gray-200">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      About Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/university-partner"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      University Partner
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/facilities"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      Facilities & Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faculty"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      Faculty
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-6 border-b border-green-400 pb-2">
                  COURSE DETAIL
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-green-300">
                      Specializations
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li>
                        <Link
                          href="/programs/financial-management"
                          className="hover:text-white transition-colors"
                          onClick={toggleMenu}
                        >
                          Aviation Financial Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/programs/operations-management"
                          className="hover:text-white transition-colors"
                          onClick={toggleMenu}
                        >
                          Aviation Operations Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/programs/sales-marketing"
                          className="hover:text-white transition-colors"
                          onClick={toggleMenu}
                        >
                          Sales and Marketing
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-green-300">
                      Semesters
                    </h3>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-200">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                        <li key={sem}>
                          <Link
                            href={`/curriculum/semester-${sem}`}
                            className="hover:text-white transition-colors"
                            onClick={toggleMenu}
                          >
                            Semester {sem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-6 border-b border-green-400 pb-2">
                  ADMISSIONS
                </h2>
                <ul className="space-y-3 text-gray-200 mb-8">
                  <li>
                    <Link
                      href="/admissions"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      Admission Requirements
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/apply"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      How to Apply
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/scholarships"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      Scholarships
                    </Link>
                  </li>
                </ul>

                <h2 className="text-xl font-bold mb-6 border-b border-green-400 pb-2">
                  CONNECT
                </h2>
                <ul className="space-y-3 text-gray-200">
                  <li>
                    <Link
                      href="/news"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      News & Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/alumni"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      Alumni
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-6 border-b border-green-400 pb-2">
                  STUDENT LIFE
                </h2>
                <ul className="space-y-3 text-gray-200">
                  <li>
                    <Link
                      href="/notices"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      Notices
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/student-area"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      Student Area
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/experience"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      Student Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/activities"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      Activities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/international"
                      className="hover:text-white transition-colors"
                      onClick={toggleMenu}
                    >
                      International Exposure
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
