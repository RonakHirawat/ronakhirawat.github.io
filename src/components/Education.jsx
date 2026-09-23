import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from './ui/SectionHeader';
import { CornerTicks, CrosshairTicks, StatusBeacon } from './ui/CornerTicks';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';

export function Education() {
  const educationList = portfolioData.education;

  return (
    <section
      id="education"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#23262D] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <SectionHeader
          number="05"
          label="ACADEMIC DOSSIER & CHRONOLOGY"
          title="Academic foundation"
          subtitle="TIMELINE // 03_INSTITUTIONS_CATALOGED"
        />

        {/* Chronological Education Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-10">
          
          {/* Continuous vertical timeline rail */}
          <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-6 w-[1px] bg-[#23262D]" />

          {educationList.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Amber Timeline Marker Dot */}
              <div className="absolute -left-[29px] sm:-left-[39px] top-2 flex items-center justify-center">
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="signal-pulse absolute inline-flex h-full w-full bg-[#FFB020] opacity-35" />
                  <span className="relative inline-flex h-3 w-3 bg-[#FFB020] rotate-45 group-hover:scale-125 transition-transform" />
                </span>
              </div>

              {/* Technical Education Card */}
              <div className="relative bg-[#111318] border border-[#23262D] p-6 sm:p-8 hover:border-[#6B7078] transition-all duration-200">
                <CornerTicks />
                <CrosshairTicks />

                {/* Top Metainfo Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#23262D] pb-3 mb-6 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-[#0A0B0D] border border-[#23262D] text-[#FFB020] font-bold text-[11px]">
                      {item.code}
                    </span>
                    <span className="text-[#6B7078]">//</span>
                    <span className="text-[#E4E6EA] font-semibold tracking-wide uppercase">
                      {item.level}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-[#6B7078]">
                      <Calendar size={12} className="text-[#FFB020]" />
                      {item.period}
                    </span>
                    <span className="px-2 py-0.5 bg-[#0A0B0D] border border-[#23262D] text-[#FFB020] text-[10px]">
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Main Institution Details & Score Box */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left: Institution, Degree & Location */}
                  <div className="lg:col-span-8 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#E4E6EA] tracking-tight group-hover:text-[#FFB020] transition-colors">
                      {item.institution}
                    </h3>
                    <p className="font-mono text-sm text-[#FFB020] font-medium">
                      {item.degree}
                    </p>

                    {item.specialization && (
                      <p className="font-mono text-xs text-[#6B7078]">
                        Focus: {item.specialization}
                      </p>
                    )}

                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#6B7078] pt-1">
                      <MapPin size={12} className="text-[#FFB020]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Right: Technical Score Panel */}
                  <div className="lg:col-span-4 bg-[#0A0B0D] border border-[#23262D] p-4 font-mono flex flex-col justify-center">
                    <div className="flex items-center justify-between text-[11px] text-[#6B7078] pb-1 border-b border-[#23262D]/60 mb-2">
                      <span>// ACADEMIC RECORD</span>
                      <Award size={13} className="text-[#FFB020]" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-[#E4E6EA]">
                        {item.score}
                      </span>
                      <span className="text-xs text-[#FFB020] font-semibold">
                        {item.scoreLabel}
                      </span>
                    </div>
                    <div className="text-[10px] text-[#6B7078] mt-1">
                      VERIFIED // OFFICIAL RECORD
                    </div>
                  </div>

                </div>

                {/* Key Coursework Matrix */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-[#23262D] space-y-3 font-mono">
                    <div className="flex items-center justify-between text-xs text-[#6B7078]">
                      <span className="text-[#E4E6EA] text-[11px] font-semibold flex items-center gap-1.5">
                        <BookOpen size={12} className="text-[#FFB020]" />
                        <span>CORE CURRICULUM & MODULES</span>
                      </span>
                      <span className="text-[10px]">VERIFIED UNITS</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
                      {item.coursework.map((course, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2 p-2 bg-[#0A0B0D] border border-[#23262D]/70 text-[#6B7078] hover:text-[#E4E6EA] hover:border-[#FFB020]/40 transition-colors"
                        >
                          <span className="text-[10px] text-[#FFB020]">0{cIdx + 1}</span>
                          <span className="truncate text-[11px]">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Card Bottom Telemetry */}
                <div className="mt-6 pt-3 border-t border-[#23262D] flex items-center justify-between font-mono text-[10px] text-[#6B7078]">
                  <span>RECORD_INDEX: 0{idx + 1} OF 03</span>
                  <span className="text-[#FFB020]">ACCREDITED</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
