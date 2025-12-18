import { siteConfig } from "../content";
import Link from "next/link";
import GithubHeatmap from "./github-heatmap";
import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaRedditAlien } from "react-icons/fa6";

import { MdEmail } from 'react-icons/md';

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
              <FaGithub size={22} color="#f0f0f0" />
            </Link>
            <Link href={siteConfig.about.socials.linkedin} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={22} color="#f0f0f0" />
            </Link>
            <Link href={`mailto:${siteConfig.about.socials.email}`} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="Email">
              <MdEmail size={22} color="#f0f0f0" />
            </Link>
            <Link href={siteConfig.about.socials.twitter} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="Twitter">
              <FaXTwitter size={22} color="#f0f0f0" />
            </Link>
            <Link href={siteConfig.about.socials.reddit} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF4500]/20 transition-colors" aria-label="Reddit">
              <FaRedditAlien size={22} color="#f0f0f0" />
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
          <GithubHeatmap
            beforeUsername={siteConfig.github.beforeCutoffUsername}
            afterUsername={siteConfig.github.afterCutoffUsername}
            cutoffDate={siteConfig.github.cutoffDate}
          />
        </div>
      </section>
      {/* Recommendations Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4">
        <h3 className="text-lg font-semibold text-cyan-400 mb-2 text-center">recommendations</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">what do my mentors say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {siteConfig.recommendations.map((rec, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-[#181c23] via-[#23233a] to-[#181c23] border border-[#232b36] shadow-xl p-6 rounded-2xl flex flex-col justify-between min-h-[260px] ${idx === 0 ? 'md:col-span-2 md:flex-row md:items-center md:gap-10' : ''}`}
            >
              <div className={idx === 0 ? 'md:w-[65%]' : ''}>
                <p className={`recommendation-text text-gray-200 text-base ${idx === 0 ? 'mb-0' : 'mb-6'}`} dangerouslySetInnerHTML={{ __html: `"${rec.text}"` }} />
              </div>
              <div className={`flex items-center gap-4 ${idx === 0 ? 'md:w-[35%] md:border-l md:border-gray-700 md:pl-8' : 'mt-auto'}`}>
                <img src={rec.profile} alt={rec.name} className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400" />
                <div className="flex-1">
                  <div className="font-semibold text-gray-100">{rec.name}</div>
                  <div className="text-gray-400 text-sm">{rec.designation}</div>
                </div>
                {rec.linkedin && (
                  <Link href={rec.linkedin} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label={`${rec.name}'s LinkedIn`}>
                    <FaLinkedin size={22} color="#f0f0f0" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
