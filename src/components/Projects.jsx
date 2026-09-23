import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from './ui/SectionHeader';
import { CornerTicks, CrosshairTicks } from './ui/CornerTicks';
import { ExternalLink, Github, Terminal, ArrowUpRight, Cpu, Layers } from 'lucide-react';

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#23262D] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <SectionHeader
          number="06"
          label="EVENT LOG & DEPLOYMENTS"
          title="The event log"
          subtitle="ARTIFACT_REGISTRY // 04_PROJECTS_CATALOGED"
        />

        {/* Project Event Log Entries */}
        <div className="space-y-8">
          {portfolioData.projects.map((project, idx) => (
            <article
              key={project.id}
              className="group relative bg-[#111318] border border-[#23262D] hover:border-[#FFB020]/80 transition-all duration-300 p-6 sm:p-8"
            >
              <CornerTicks />
              <CrosshairTicks />

              {/* Top Log Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#23262D] pb-3 mb-6 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-[#0A0B0D] border border-[#23262D] text-[#FFB020] font-bold text-[11px]">
                    {project.logId}
                  </span>
                  <span className="text-[#6B7078]">//</span>
                  <span className="text-[#6B7078] text-[11px] uppercase tracking-wider">
                    STATUS: {project.status.replace(/_/g, ' ')}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <span className="font-mono text-[#FFB020] text-[11px] tracking-wide">
                    [{project.metrics}]
                  </span>
                </div>
              </div>

              {/* Main Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left: Titles & Description */}
                <div className="lg:col-span-8 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#E4E6EA] tracking-tight group-hover:text-[#FFB020] transition-colors flex items-center gap-3 flex-wrap">
                      <span>{project.title}</span>
                      {project.isClientProject && (
                        <span className="px-2 py-0.5 bg-[#FFB020]/10 border border-[#FFB020] text-[#FFB020] font-mono text-[10px] tracking-wider uppercase font-semibold">
                          // CLIENT PROJECT
                        </span>
                      )}
                      {project.status === "IN_MAKING" && (
                        <span className="px-2 py-0.5 bg-[#0A0B0D] border border-[#6B7078] text-[#E4E6EA] font-mono text-[10px] tracking-wider uppercase font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#FFB020] rounded-none animate-pulse" />
                          IN MAKING
                        </span>
                      )}
                    </h3>
                    <p className="font-mono text-xs text-[#FFB020]">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#6B7078] leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-[#0A0B0D] border border-[#23262D] font-mono text-xs text-[#E4E6EA] tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Action Buttons & Telemetry */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2 lg:pt-0 space-y-4">
                  <div className="space-y-2.5 font-mono text-xs">
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-[#0A0B0D] border border-[#23262D] text-[#E4E6EA] hover:border-[#FFB020] hover:text-[#FFB020] transition-all group/btn"
                      >
                        <span className="font-medium">GitHub Repository</span>
                        <ArrowUpRight size={14} className="text-[#6B7078] group-hover/btn:text-[#FFB020]" />
                      </a>
                    )}

                  </div>

                  <div className="hidden lg:block font-mono text-[9px] text-[#6B7078] text-right pt-4 border-t border-[#23262D]/60">
                    HASH: 0x{((idx + 1) * 31415).toString(16).toUpperCase()} // VERIFIED
                  </div>
                </div>

              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-3 border-t border-[#23262D] flex items-center justify-between font-mono text-[10px] text-[#6B7078]">
                <span>ENTRY: #00{idx + 1} OF 004</span>
                <span className="text-[#FFB020]">ENGINE: PY // ML // FULLSTACK</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Archive Prompt */}
        <div className="mt-10 p-4 bg-[#111318] border border-[#23262D] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="text-[#6B7078]">
            <span className="text-[#FFB020]">// REPOSITORY:</span> Comprehensive codebase archives, notebooks & research models hosted on GitHub.
          </div>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#FFB020] hover:underline shrink-0"
          >
            <span>Explore All Repositories</span>
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
