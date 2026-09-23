import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from './ui/SectionHeader';
import { CornerTicks, CrosshairTicks } from './ui/CornerTicks';
import { Terminal, Shield, Sparkles, Code2, Cpu } from 'lucide-react';

export function About() {
  const [candidateIndex, setCandidateIndex] = React.useState(0);
  const candidates = [
    portfolioData.personal.avatarUrl,
    "/avatar.JPG",
    "/avatar.jpg",
    "/avatar.png",
    "/avatar.jpeg",
  ].filter(Boolean);

  const currentSrc = candidates[candidateIndex];
  const hasImage = candidateIndex < candidates.length;

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#23262D] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <SectionHeader
          number="02"
          label="IDENTITY & DOSSIER"
          title="More about me"
          subtitle="BIO_DATA // SYSTEM_PROFILE"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Photograph / HUD Visual Frame */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative bg-[#111318] border border-[#23262D] p-4 shadow-xl">
              <CornerTicks />
              <CrosshairTicks />

              {/* Viewport Header */}
              <div className="flex items-center justify-between border-b border-[#23262D] pb-2 mb-4 font-mono text-[10px] text-[#6B7078]">
                <span>VISUAL_FEED :: RH_PRIMARY</span>
                <span className="text-[#FFB020]">STATUS: VERIFIED</span>
              </div>

              {/* High-Tech HUD Portrait Display */}
              <div className="relative aspect-[4/5] w-full bg-[#0A0B0D] border border-[#23262D] overflow-hidden flex flex-col items-center justify-center group">
                {/* User Photograph if provided */}
                {hasImage ? (
                  <img
                    key={currentSrc}
                    src={currentSrc}
                    alt={portfolioData.personal.name}
                    onError={() => setCandidateIndex(prev => prev + 1)}
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  />
                ) : null}

                {/* Tech grid inside portrait */}
                <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
                
                {/* HUD Scanline Effect */}
                <div className="absolute inset-0 hud-scanlines opacity-40 pointer-events-none" />

                {/* HUD Targeting Reticle */}
                <div className="absolute inset-4 border border-[#23262D]/60 pointer-events-none" />
                <div className="absolute top-2 left-2 text-[9px] font-mono text-[#6B7078]/80 select-none">
                  ISO: 400 // F: 1.8
                </div>
                <div className="absolute bottom-2 right-2 text-[9px] font-mono text-[#FFB020]/80 select-none">
                  REC: [LIVE]
                </div>

                {/* Fallback Stylized Developer HUD Emblem if no photo */}
                {!hasImage && (
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4 p-6">
                    <div className="relative w-28 h-28 rounded-none border-2 border-[#23262D] group-hover:border-[#FFB020] transition-colors flex items-center justify-center bg-[#111318]">
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#FFB020]" />
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#FFB020]" />
                      
                      <span className="font-mono text-3xl font-extrabold text-[#E4E6EA] tracking-tighter">
                        RH
                      </span>
                      {/* Concentric subtle radar circles */}
                      <div className="absolute inset-1 border border-[#23262D]/50 pointer-events-none" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#E4E6EA] tracking-wide">
                        Ronak Hirawat
                      </h3>
                      <p className="font-mono text-xs text-[#6B7078]">
                        SRM IST // Chennai, IN
                      </p>
                      <p className="font-mono text-[11px] text-[#FFB020] pt-1">
                        AI/ML & Scalable Web Systems
                      </p>
                    </div>
                  </div>
                )}

                {/* Telemetry Footer in Portrait */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between border-t border-[#23262D] pt-2 font-mono text-[9px] text-[#6B7078] bg-[#0A0B0D]/60 backdrop-blur-sm px-2">
                  <span>HASH: #7F001</span>
                  <span className="text-[#FFB020]">SIG: OK</span>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-[#6B7078]">
                <span>OPERATOR: RONAK HIRAWAT</span>
                <span className="text-[#FFB020]">ROLE: DEVELOPER</span>
              </div>
            </div>

            {/* // STATUS Terminal Panel */}
            <div className="relative bg-[#111318] border border-[#23262D] p-5">
              <CornerTicks />
              
              <div className="flex items-center gap-2 font-mono text-xs text-[#E4E6EA] border-b border-[#23262D] pb-3 mb-4">
                <Terminal size={14} className="text-[#FFB020]" />
                <span className="font-semibold tracking-wider">// STATUS</span>
                <span className="text-[10px] text-[#6B7078] ml-auto">RUNNING</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-baseline justify-between py-1 border-b border-[#23262D]/40">
                  <span className="text-[#6B7078] tracking-widest text-[11px]">FOCUS</span>
                  <span className="text-[#E4E6EA] font-medium">{portfolioData.about.statusPanel.FOCUS}</span>
                </div>
                <div className="flex items-baseline justify-between py-1 border-b border-[#23262D]/40">
                  <span className="text-[#6B7078] tracking-widest text-[11px]">STACK</span>
                  <span className="text-[#FFB020] font-medium">{portfolioData.about.statusPanel.STACK}</span>
                </div>
                <div className="flex items-baseline justify-between py-1 border-b border-[#23262D]/40">
                  <span className="text-[#6B7078] tracking-widest text-[11px]">ROLE</span>
                  <span className="text-[#E4E6EA] font-medium">{portfolioData.about.statusPanel.ROLE}</span>
                </div>
                <div className="flex items-baseline justify-between py-1">
                  <span className="text-[#6B7078] tracking-widest text-[11px]">BASED</span>
                  <span className="text-[#E4E6EA] font-medium">{portfolioData.about.statusPanel.BASED}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Bio Narrative & Technical Interests */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Bio Prose */}
            <div className="relative bg-[#111318] border border-[#23262D] p-6 sm:p-8 space-y-4">
              <CornerTicks />
              <div className="font-mono text-xs text-[#FFB020] mb-2 flex items-center gap-2">
                <span>&gt;</span>
                <span>SYSTEM_OVERVIEW :: OPERATOR_BIO</span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#6B7078] leading-relaxed">
                {portfolioData.about.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-[#E4E6EA]/90 font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-[#23262D] flex flex-wrap items-center gap-6 font-mono text-xs text-[#6B7078]">
                <div>
                  <span className="text-[#FFB020] mr-1.5">[INSTITUTE]</span>
                  <span className="text-[#E4E6EA]">SRMIST</span>
                </div>
                <div>
                  <span className="text-[#FFB020] mr-1.5">[BRANCH]</span>
                  <span className="text-[#E4E6EA]">CSE (AI/ML)</span>
                </div>
                <div>
                  <span className="text-[#FFB020] mr-1.5">[CGPA]</span>
                  <span className="text-[#E4E6EA]">{portfolioData.personal.gpa.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Core Technical Interests Grid */}
            <div className="relative bg-[#111318] border border-[#23262D] p-6 sm:p-8">
              <CornerTicks />
              <div className="flex items-center justify-between border-b border-[#23262D] pb-3 mb-5 font-mono text-xs">
                <span className="text-[#E4E6EA] font-semibold tracking-wider">// CORE VECTORS OF INTEREST</span>
                <span className="text-[10px] text-[#6B7078]">FIELD_INDEX</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {portfolioData.about.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#0A0B0D] border border-[#23262D] hover:border-[#FFB020]/60 transition-colors group flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <span className="block font-mono text-[9px] text-[#6B7078] group-hover:text-[#FFB020] transition-colors">
                        VEC_0{idx + 1}
                      </span>
                      <span className="block font-mono text-xs text-[#E4E6EA] font-medium">
                        {interest}
                      </span>
                    </div>
                    <span className="w-1 h-1 bg-[#6B7078] group-hover:bg-[#FFB020] transition-colors" />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
