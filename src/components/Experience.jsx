import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from './ui/SectionHeader';
import { CornerTicks } from './ui/CornerTicks';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#23262D] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <SectionHeader
          number="04"
          label="CHRONOLOGY & TENURE"
          title="Work & leadership"
          subtitle="TIMELINE // PROFESSIONAL_TRACK"
        />

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          
          {/* Continuous vertical timeline rail */}
          <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-6 w-[1px] bg-[#23262D]" />

          {portfolioData.experience.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Amber Timeline Marker Dot */}
              <div className="absolute -left-[29px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="signal-pulse absolute inline-flex h-full w-full bg-[#FFB020] opacity-40" />
                  <span className="relative inline-flex h-3 w-3 bg-[#FFB020] rotate-45 group-hover:scale-125 transition-transform" />
                </span>
              </div>

              {/* Experience Card */}
              <div className="relative bg-[#111318] border border-[#23262D] p-6 sm:p-8 hover:border-[#6B7078] transition-colors">
                <CornerTicks />

                {/* Top Metainfo Line */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#23262D] pb-3 mb-4 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-[#FFB020] font-bold">
                      0{idx + 1}.EXP
                    </span>
                    <span className="text-[#6B7078]">//</span>
                    <span className="text-[#E4E6EA] tracking-wide uppercase font-semibold">
                      {item.organization}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-[#6B7078] text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#FFB020]" />
                      {item.period}
                    </span>
                    <span className="hidden sm:inline px-2 py-0.5 bg-[#0A0B0D] border border-[#23262D] text-[#FFB020] text-[10px]">
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Role Title & Org Context */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E4E6EA] tracking-tight">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs text-[#6B7078] mt-1">
                    {item.fullOrg}
                  </p>
                </div>

                {/* Responsibilities & Leadership Deliverables */}
                <div className="space-y-2.5 font-mono text-xs text-[#6B7078]">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <span className="text-[#FFB020] mt-0.5 select-none">&gt;</span>
                      <span className="text-[#E4E6EA]/90 leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-3 border-t border-[#23262D] flex items-center justify-between font-mono text-[10px] text-[#6B7078]">
                  <span>TRACK: {item.type}</span>
                  <span className="text-[#FFB020]">STATUS: VERIFIED_RECORD</span>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
