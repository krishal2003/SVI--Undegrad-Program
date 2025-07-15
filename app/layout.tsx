import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/loading-screen";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School of Aviation Management",
  description:
    "SVI - Bachelor of Aviation Management program affiliated with Kathmandu University.",
  generator: "krishal- github",
  icons: {
    icon: "/svi.png", // You can also use .png or add multiple sizes
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreen />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
