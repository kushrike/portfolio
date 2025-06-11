import React from 'react';
import Link from "next/link";
import { siteConfig } from "../content";

const COLOR_SCALE = [
  '#232b36', // 0 (very dark, for no contributions)
  '#04d1f3', // light blue
  '#5baaf7', // medium blue
  '#8770fa', // light purple
  '#9817fa', // deep purple
];

function getColor(count: number) {
  if (count === 0) return COLOR_SCALE[0];
  if (count < 2) return COLOR_SCALE[1];
  if (count < 6) return COLOR_SCALE[2];
  if (count < 8) return COLOR_SCALE[3];
  return COLOR_SCALE[4];
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = ['sun', 'tue', 'thu', 'sat']; // GitHub style: show every other day, starting with Sun

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMonthLabels(weeks: any[]) {
  const labels: { index: number; name: string }[] = [];
  let lastMonth: number | null = null;
  weeks.forEach((week, i) => {
    const firstDay = week.contributionDays[0];
    const month = new Date(firstDay.date).getMonth();
    if (month !== lastMonth) {
      labels.push({ index: i, name: MONTHS[month] });
      lastMonth = month;
    }
  });
  return labels;
}

async function fetchContributions(username: string, token?: string) {
  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
            totalContributions
          }
        }
      }
    }
  `;
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables: { login: username } }),
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json?.data?.user?.contributionsCollection?.contributionCalendar;
}

export default async function GithubHeatmap({ username }: { username: string }) {
  const token = process.env.PERSONAL_GITHUB_TOKEN;
  const calendar = await fetchContributions(username, token);
  if (!calendar) {
    return <div className="text-gray-400">Unable to load GitHub contributions.</div>;
  }
  const weeks = calendar.weeks;
  const monthLabels = getMonthLabels(weeks);
  // For day labels, GitHub shows Sun, Tue, Thu, Sat (0, 2, 4, 6)
  const dayIndexes = [0, 2, 4, 6];
  
  // Responsive cell and gap sizes
  const cell = typeof window !== 'undefined' && window.innerWidth < 768 ? 12 : 18;
  const gap = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 3;
  const labelWidth = typeof window !== 'undefined' && window.innerWidth < 768 ? 28 : 36;
  const gridWidth = weeks.length * (cell + gap) - gap;
  const boxWidth = gridWidth + labelWidth + (typeof window !== 'undefined' && window.innerWidth < 768 ? 32 : 48);

  return (
    <div className="w-full flex justify-center font-sans md:overflow-visible overflow-x-auto">
      <div
        className="relative rounded-2xl border border-[#2a3340] bg-[#181c23] p-4 md:p-8 shadow-xl mx-auto"
        style={{ width: boxWidth, minWidth: boxWidth, maxWidth: '100%' }}
      >
        {/* Top right: includes private contributions */}
        <div className="absolute right-4 md:right-8 top-4 md:top-6 text-xs text-blue-200 opacity-70">*includes private contributions</div>
        {/* Main text */}
        <div className="mb-4 text-gray-400 text-base md:text-lg font-normal">{calendar.totalContributions} contributions in the last year</div>
        <div className="flex flex-col" style={{ minWidth: 0 }}>
          {/* Month labels */}
          <div className="flex ml-8 md:ml-12 mb-2 text-xs md:text-sm text-blue-200 font-medium" style={{ minWidth: 0 }}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {weeks.map((_: any, i: number) => {
              const label = monthLabels.find((m) => m.index === i);
              return (
                <div
                  key={i}
                  className="flex-1 text-center"
                  style={{ minWidth: cell, width: cell }}
                >
                  {label ? label.name.toLowerCase() : ''}
                </div>
              );
            })}
          </div>
          <div className="flex" style={{ minWidth: 0 }}>
            {/* Day labels (Sun, Tue, Thu, Sat) */}
            <div className="flex flex-col justify-between mr-2 md:mr-3 text-xs md:text-sm text-blue-200 font-medium h-[96px] md:h-[144px] py-[2px]" style={{ width: labelWidth }}>
              {Array.from({ length: 7 }).map((_, i) =>
                dayIndexes.includes(i) ? (
                  <span key={i} className="opacity-70" style={{ height: cell }}>{DAY_LABELS[dayIndexes.indexOf(i)]}</span>
                ) : (
                  <span key={i} style={{ height: cell }}></span>
                )
              )}
            </div>
            {/* Heatmap grid */}
            <div className="flex gap-[2px] md:gap-[3px]" style={{ width: gridWidth }}>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {weeks.map((week: any, wi: number) => (
                <div key={wi} className="flex flex-col gap-[2px] md:gap-[3px]">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {week.contributionDays.map((day: any, di: number) => (
                    <div
                      key={di}
                      title={`${day.date}: ${day.contributionCount} contributions`}
                      className="rounded-[3px] md:rounded-[4px] transition-all duration-200"
                      style={{
                        width: cell,
                        height: cell,
                        backgroundColor: getColor(day.contributionCount),
                        border: '1px solid #232b36',
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom row: left = learn how..., right = legend */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 text-xs md:text-sm text-blue-200 w-full gap-2 md:gap-0">
          <Link href={siteConfig.github.contribution_url} target="_blank" className="opacity-70 hover:text-blue-400 transition-colors">learn how github counts contributions</Link>
          <div className="flex items-center gap-1 md:gap-2">
            <span>less</span>
            {COLOR_SCALE.map((color, i) => (
              <span key={i} className="w-4 h-4 md:w-5 md:h-5 rounded-[3px] md:rounded-[4px]" style={{ backgroundColor: color, border: '1px solid #232b36' }}></span>
            ))}
            <span>more</span>
          </div>
        </div>
      </div>
    </div>
  );
} 