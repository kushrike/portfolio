import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { siteConfig } from "../content";
import GlassmorphicPanel from "../components/GlassmorphicPanel";

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
            <Navbar />
            <main className="flex-1 w-full pt-14 md:pt-16">{children}</main>
            <footer className="w-full flex items-center justify-between px-8 py-6 border-t border-[#232b36] mt-8 text-gray-400 text-sm">
              <span>© 2025 kushrike • all rights reserved</span>
              <div className="flex items-center gap-4">
                <a href={siteConfig.about.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-400 transition"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>
                <a href={siteConfig.about.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400 transition"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
                <a href={siteConfig.about.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-cyan-400 transition"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
                <a href={`mailto:${siteConfig.about.socials.email}`} aria-label="Email" className="hover:text-cyan-400 transition"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                <a href={siteConfig.about.socials.reddit} target="_blank" rel="noopener noreferrer" aria-label="Reddit" className="hover:text-orange-400 transition"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="#FF4500" strokeWidth="2" fill="none" /><ellipse cx="8.5" cy="13.5" rx="1.5" ry="1.2" fill="#FF4500" /><ellipse cx="15.5" cy="13.5" rx="1.5" ry="1.2" fill="#FF4500" /><circle cx="12" cy="15.5" r="3.2" stroke="#FF4500" strokeWidth="1.5" fill="none" /><circle cx="19" cy="7" r="1" fill="#FF4500" /><path d="M16.5 6.5l2.5 1" stroke="#FF4500" strokeWidth="1.2" /></svg></a>
              </div>
            </footer>
          </GlassmorphicPanel>
        </div>
      </body>
    </html>
  );
}
