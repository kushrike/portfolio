import { siteConfig } from "../content";
import Link from "next/link";
import GithubHeatmap from "./github-heatmap";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-12 md:py-20 px-4 gap-8 w-full">
        {/* Left: Hero Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center max-w-2xl w-full">
          <div className="flex flex-col items-center md:items-start gap-4 mb-8 w-full">
            {/* Rotating Card Image */}
            <div className="w-32 h-32 mb-2 relative overflow-hidden rounded-full flex items-center justify-center">
              <Image
                src="/card.png"
                alt="Rotating Card"
                fill
                className="object-cover animate-3d-rotate"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              <span>{siteConfig.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
              {siteConfig.title}
            </h2>
            <p className="text-gray-400 text-lg mb-4">{siteConfig.about.headline}</p>
          </div>
          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mb-8 w-full">
            <Link href={siteConfig.about.socials.github} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </Link>
            <Link href={siteConfig.about.socials.linkedin} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
            <Link href={siteConfig.about.socials.twitter} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </Link>
            <Link href={`mailto:${siteConfig.about.socials.email}`} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </Link>
            <Link href={siteConfig.about.socials.reddit} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors" aria-label="Reddit">
              {/* Reddit SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" stroke="#FF4500" strokeWidth="2" fill="none" />
                <ellipse cx="8.5" cy="13.5" rx="1.5" ry="1.2" fill="#FF4500" />
                <ellipse cx="15.5" cy="13.5" rx="1.5" ry="1.2" fill="#FF4500" />
                <circle cx="12" cy="15.5" r="3.2" stroke="#FF4500" strokeWidth="1.5" fill="none" />
                <circle cx="19" cy="7" r="1" fill="#FF4500" />
                <path d="M16.5 6.5l2.5 1" stroke="#FF4500" strokeWidth="1.2" />
              </svg>
            </Link>
          </div>
          {/* Resume Button */}
          <div className="flex justify-center md:justify-start w-full">
            <Link href="/resume" className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition">
              View Resume
            </Link>
          </div>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 flex items-center justify-center w-full max-w-md">
          <Image src="/hero.webp" alt="Hero Illustration" width={400} height={400} className="w-full h-auto object-contain" priority />
        </div>
      </section>
      {/* GitHub Heatmap Section - visually distinct */}
      <section className="relative z-20 flex flex-col items-center justify-center pb-12 w-full">
        <div className="relative z-10 w-full max-w-3xl mx-auto">
          <GithubHeatmap username={siteConfig.github.username} />
        </div>
      </section>
      {/* Recommendations Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4">
        <h3 className="text-lg font-semibold text-cyan-400 mb-2 text-center">recommendations</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">what do my mentors say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {siteConfig.recommendations.map((rec, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[#181c23] via-[#23233a] to-[#181c23] border border-[#232b36] shadow-xl p-6 rounded-2xl flex flex-col justify-between min-h-[260px]">
              <p className="text-gray-200 text-base mb-6">“{rec.text}”</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={rec.profile} alt={rec.name} className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400" />
                <div>
                  <div className="font-semibold text-gray-100">{rec.name}</div>
                  <div className="text-gray-400 text-sm">{rec.designation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
