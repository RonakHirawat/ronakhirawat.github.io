import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from './ui/SectionHeader';
import { CornerTicks, CrosshairTicks } from './ui/CornerTicks';
import { Cpu, Terminal, Layers, Database, Wrench } from 'lucide-react';

const categoryIcons = {
  "Languages": Terminal,
  "AI & NLP": Cpu,
  "Machine Learning": Layers,
  "Frameworks & Tools": Wrench,
  "Core Concepts": Database
};

export function Skills() {
  const totalInstruments = portfolioData.skills.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#23262D] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <SectionHeader
          number="03"
          label="ARSENAL & REPOSITORY"
          title="My technical toolkit"
          subtitle={`MODULE_REGISTRY // ${totalInstruments}_SUBSYSTEMS_ACTIVE`}
        />

        {/* Technical Readout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Terminal;
            const isWide = idx === 2; // AI/ML spans nicely or balance in grid

            return (
              <div
                key={cat.category}
                className={`relative bg-[#111318] border border-[#23262D] p-5 sm:p-6 transition-all duration-200 hover:border-[#6B7078] flex flex-col justify-between ${
                  isWide ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <CornerTicks />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-[#23262D] pb-3 mb-4 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <Icon size={14} className="text-[#FFB020]" />
                      <h3 className="font-semibold text-[#E4E6EA] tracking-wider uppercase">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="text-[10px] text-[#6B7078]">
                      [{cat.code}]
                    </span>
                  </div>

                  {/* Skills Readout List */}
                  <div className="space-y-2 font-mono">
                    {cat.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center justify-between px-3 py-2 bg-[#0A0B0D] border border-[#23262D]/60 hover:border-[#FFB020]/60 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[10px] text-[#6B7078] group-hover:text-[#FFB020] transition-colors">
                            {skill.code}
                          </span>
                          <span className="text-xs text-[#E4E6EA] font-medium tracking-wide">
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-[#6B7078] uppercase hidden sm:inline">
                            {skill.level}
                          </span>
                          <span className="w-1.5 h-1.5 bg-[#23262D] group-hover:bg-[#FFB020] transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subsystem Telemetry Bottom Bar */}
                <div className="mt-5 pt-3 border-t border-[#23262D] flex items-center justify-between font-mono text-[9px] text-[#6B7078]">
                  <span>INTEGRITY: OPTIMAL</span>
                  <span className="text-[#FFB020]">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Stack Summary Line */}
        <div className="mt-10 p-4 bg-[#111318] border border-[#23262D] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#6B7078]">
          <div className="flex items-center gap-2">
            <span className="text-[#FFB020]">// SUMMARY:</span>
            <span className="text-[#E4E6EA]">Core competencies anchored in mathematical AI, scalable backend services & modern interfaces.</span>
          </div>
          <div className="text-[11px] text-[#FFB020] shrink-0">
            TOTAL_INSTRUMENTS: {totalInstruments}
          </div>
        </div>

      </div>
    </section>
  );
}
