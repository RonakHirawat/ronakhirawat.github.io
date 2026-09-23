import React from 'react';
import { portfolioData } from '../data/portfolio';
import { CornerTicks, CrosshairTicks, StatusBeacon } from './ui/CornerTicks';
import { ArrowDown, ChevronRight, Terminal, Cpu, Activity, Globe } from 'lucide-react';

export function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#23262D] overflow-hidden"
    >
      {/* Background Technical Grid & Telemetry Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-8 right-8 font-mono text-[10px] text-[#6B7078]/40 hidden md:block select-none pointer-events-none">
        COORD: 12.8231° N, 80.0444° E<br />
        SYS_KERNEL: v6.12.4-RH<br />
        CORE_LOAD: 0.12 // RAM: 16.4GB
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Top Node Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111318] border border-[#23262D] font-mono text-xs text-[#6B7078] mb-8 select-none">
          <span className="text-[#FFB020]">// 01.NODE</span>
          <span>::</span>
          <span className="text-[#E4E6EA] uppercase tracking-wider">COMMAND_CENTER // DEV_SHELL</span>
          <span className="w-1.5 h-3 bg-[#FFB020] terminal-cursor ml-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="font-mono text-xs sm:text-sm text-[#FFB020] tracking-wide flex items-center gap-2">
                <span>&gt;</span> Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#E4E6EA]">
                {portfolioData.personal.name}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#6B7078] max-w-2xl font-normal leading-relaxed">
              {portfolioData.personal.subtitle}
            </p>

            {/* Technical Focus Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0A0B0D] border border-[#23262D] font-mono text-xs text-[#6B7078]">
              <span className="text-[#FFB020]">// STACK:</span>
              <span className="text-[#E4E6EA]">{portfolioData.personal.technicalFocus}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#111318] border border-[#FFB020] text-[#FFB020] font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 hover:bg-[#FFB020] hover:text-[#0A0B0D] focus:outline-none"
              >
                <span>View My Work</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#111318] border border-[#23262D] text-[#E4E6EA] font-mono text-xs tracking-wider uppercase transition-colors duration-200 hover:border-[#6B7078] hover:text-[#FFB020] focus:outline-none"
              >
                <span>Get In Touch</span>
                <ChevronRight size={14} className="text-[#6B7078] group-hover:text-[#FFB020]" />
              </button>
            </div>
          </div>

          {/* Technical Status & Readings Panel */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#111318] border border-[#23262D] p-6 shadow-2xl">
              <CornerTicks />
              <CrosshairTicks />

              {/* Panel Header */}
              <div className="flex items-center justify-between border-b border-[#23262D] pb-3 mb-5 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#E4E6EA]">
                  <Activity size={14} className="text-[#FFB020]" />
                  <span className="font-semibold tracking-wider">// LIVE READINGS</span>
                </div>
                <span className="text-[10px] text-[#6B7078]">ID: RH-TELEMETRY</span>
              </div>

              {/* Metrics Grid */}
              <div className="space-y-4 font-mono">
                
                {/* Metric 1: GPA */}
                <div className="flex items-center justify-between p-3 bg-[#0A0B0D] border border-[#23262D]/70">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#FFB020]" />
                    <span className="text-xs text-[#6B7078] uppercase">Academic Index / GPA</span>
                  </div>
                  <div className="text-sm font-bold text-[#E4E6EA]">
                    {portfolioData.personal.gpa}
                  </div>
                </div>

                

                {/* Metric 4: Location & Track */}
                <div className="flex items-center justify-between p-3 bg-[#0A0B0D] border border-[#23262D]/70">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#6B7078]" />
                    <span className="text-xs text-[#6B7078] uppercase">Spec / Focus</span>
                  </div>
                  <div className="text-xs text-[#E4E6EA]">
                    AI/ML + Scalable Web
                  </div>
                </div>

              </div>

              {/* Status Footer Telemetry */}
              <div className="mt-5 pt-3 border-t border-[#23262D] flex items-center justify-between font-mono text-[10px] text-[#6B7078]">
                <span>BUFFER: 100% HEALTH</span>
                <span className="text-[#FFB020]">SYNC: REALTIME</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 sm:mt-24 flex items-center justify-between border-t border-[#23262D] pt-4">
          <button
            onClick={() => scrollTo('about')}
            className="group inline-flex items-center gap-3 font-mono text-xs text-[#6B7078] hover:text-[#FFB020] transition-colors focus:outline-none"
          >
            <div className="w-6 h-6 rounded-none border border-[#23262D] group-hover:border-[#FFB020] flex items-center justify-center transition-colors">
              <ArrowDown size={12} className="text-[#6B7078] group-hover:text-[#FFB020] animate-bounce" />
            </div>
            <span className="tracking-widest uppercase text-[11px]">Scroll Down</span>
          </button>

          <div className="font-mono text-[10px] text-[#6B7078] hidden sm:block">
            01 / 07 — ROOT_ENTRY
          </div>
        </div>

      </div>
    </section>
  );
}
