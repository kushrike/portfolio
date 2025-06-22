import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { siteConfig } from "../content";
import GlassmorphicPanel from "../components/GlassmorphicPanel";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaRedditAlien } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name + " | " + siteConfig.title,
  description: siteConfig.about.headline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // These values should match the heatmap's logic
  const cell = 18;
  const gap = 3;
  const labelWidth = 36;
  // 53 weeks is the max for GitHub heatmap
  const weeks = 53;
  const gridWidth = weeks * (cell + gap) - gap;
  const boxWidth = gridWidth + labelWidth + 48; // 48px for left/right box padding
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0f0f] text-[#f0f0f0]`}>
        <div className="min-h-screen w-full flex justify-center items-stretch bg-transparent">
          <GlassmorphicPanel boxWidth={boxWidth}>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1 w-full pt-14 md:pt-16">{children}</main>
              <footer className="w-full flex items-center justify-between px-8 py-6 border-t border-[#232b36] mt-auto text-gray-400 text-sm">
                <span>© 2025 kushrike • all rights reserved</span>
                <div className="flex items-center gap-4">
                  <a href={siteConfig.about.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-1 hover:bg-cyan-900/30 hover:scale-110 transition-all duration-200 opacity-80">
                    <FaGithub size={22} color="#f0f0f0" />
                  </a>
                  <a href={siteConfig.about.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-1 hover:bg-cyan-900/30 hover:scale-110 transition-all duration-200 opacity-80">
                    <FaLinkedin size={22} color="#f0f0f0" />
                  </a>
                  <a href={`mailto:${siteConfig.about.socials.email}`} aria-label="Email" className="rounded-full p-1 hover:bg-cyan-900/30 hover:scale-110 transition-all duration-200 opacity-80">
                    <MdEmail size={22} color="#f0f0f0" />
                  </a>
                  <a href={siteConfig.about.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="rounded-full p-1 hover:bg-cyan-900/30 hover:scale-110 transition-all duration-200" style={{ opacity: 0.7 }}>
                    <FaXTwitter size={22} color="#f0f0f0" />
                  </a>
                  <a href={siteConfig.about.socials.reddit} target="_blank" rel="noopener noreferrer" aria-label="Reddit" className="rounded-full p-1 hover:bg-cyan-900/30 hover:scale-110 transition-all duration-200" style={{ opacity: 0.7 }}>
                    <FaRedditAlien size={22} color="#f0f0f0" />
                  </a>
                </div>
              </footer>
            </div>
          </GlassmorphicPanel>
        </div>
      </body>
    </html>
  );
}
