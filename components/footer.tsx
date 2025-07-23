import { MapPin, Phone, Mail, Clock, CalendarClock } from "lucide-react";
import Link from "next/link";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="white"
    viewBox="0 0 24 24"
  >
    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.726 0 1.326-.6 1.326-1.326V1.326C24 .6 23.4 0 22.675 0z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="white"
    viewBox="0 0 24 24"
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 3.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="white"
    viewBox="0 0 24 24"
  >
    <path d="M23.498 6.186a2.998 2.998 0 00-2.11-2.122C19.48 3.5 12 3.5 12 3.5s-7.48 0-9.388.564a2.998 2.998 0 00-2.11 2.122 31.28 31.28 0 000 5.627 2.998 2.998 0 002.11 2.122C4.52 16.5 12 16.5 12 16.5s7.48 0 9.388-.564a2.998 2.998 0 002.11-2.122 31.28 31.28 0 000-5.627zM9.75 14.5v-5l4.75 2.5-4.75 2.5z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="font-bold text-xl">SVI - Undergrad Program</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Developing industry-ready graduates for Nepal's aviation sector
              since 1996.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/schoolofaviationmanagement"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0a4936] transition-colors cursor-pointer">
                  <FacebookIcon />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/svi.undergrad?igsh=MXZiNXM2a3JnY3E2aQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0a4936] transition-colors cursor-pointer">
                  <InstagramIcon />
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/@siddharthavanasthaliinstit1222"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0a4936] transition-colors cursor-pointer">
                  <YouTubeIcon />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Program
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-white transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/curriculum"
                  className="hover:text-white transition-colors"
                >
                  Curriculum
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="hover:text-white transition-colors"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  href="/alumni"
                  className="hover:text-white transition-colors"
                >
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/curriculum"
                  className="hover:text-white transition-colors"
                >
                  Bachelor of Aviation Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-[#0a4936]" />
                <a
                  href="https://maps.app.goo.gl/C5MRXaUNjY2M2VzT9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed hover:underline"
                >
                  SVI - Undergrad Program
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#0a4936]" />
                <a
                  href="tel:+9779707191358"
                  className="text-sm hover:underline"
                >
                  9707191358
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#0a4936]" />

                <a
                  href="mailto:siddharthavanasthalipanauti@gmail.com"
                  className="text-sm hover:underline"
                >
                  siddhartha@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <CalendarClock className="w-5 h-5 text-[#0a4936]" />
                <span className="text-sm">Sun–Fri: 7:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Kathmandu University School of Management. All rights
            reserved.
          </p>
          <br />
          <Link href="https://www.uddheshyagroup.com/" target="_blank">
            <p>Made by Uddheshya Group</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
