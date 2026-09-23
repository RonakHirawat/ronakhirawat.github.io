import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from './ui/SectionHeader';
import { CornerTicks, CrosshairTicks, StatusBeacon } from './ui/CornerTicks';
import { Mail, Github, Linkedin, Terminal, Copy, Check, ExternalLink, Send } from 'lucide-react';

export function Contact() {
  const { contact } = portfolioData;
  const [terminalOutput, setTerminalOutput] = useState([
    "INITIALIZING SECURE TERMINAL v2.4...",
    "HANDSHAKE PROTOCOL: TLS_AES_256_GCM_SHA384",
    "TRANSMISSION LINE OPEN. CLICK ANY COMMAND BELOW TO EXECUTE."
  ]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCommandClick = (cmdItem, idx) => {
    // Append command execution to terminal log
    const timestamp = new Date().toLocaleTimeString();
    setTerminalOutput(prev => [
      ...prev,
      `[${timestamp}] EXEC: ${cmdItem.cmd}`,
      `> ${cmdItem.returnMsg}`
    ]);

    // Copy to clipboard or trigger action
    if (cmdItem.copyValue) {
      navigator.clipboard?.writeText(cmdItem.copyValue);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2500);
    }

    if (cmdItem.action.startsWith('mailto:')) {
      window.location.href = cmdItem.action;
    } else if (cmdItem.action.startsWith('http')) {
      window.open(cmdItem.action, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#23262D] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <SectionHeader
          number="07"
          label="COMMUNICATION & UPLINK"
          title="Let's build something"
          subtitle="DISPATCH_CONSOLE // OPEN_CHANNELS"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative bg-[#111318] border border-[#23262D] p-6 sm:p-8 space-y-4">
              <CornerTicks />
              
              <div className="flex items-center gap-2 font-mono text-xs text-[#FFB020]">
                <Terminal size={14} />
                <span>// UPLINK_INVITE</span>
              </div>

              <p className="text-base text-[#E4E6EA] font-medium leading-relaxed">
                Whether you have an ambitious AI/ML initiative, a modern web engineering role, or a speculative collaboration — my inbox and terminal are always accessible.
              </p>

              <p className="text-sm text-[#6B7078] leading-relaxed">
                {contact.inviteText}
              </p>

              <div className="pt-4 border-t border-[#23262D] flex items-center justify-between font-mono text-xs">
                <span className="text-[#6B7078]">RESPONSE_LATENCY:</span>
                <span className="text-[#FFB020] font-semibold">&lt; 24 HOURS</span>
              </div>
            </div>

            {/* Direct Channel Badges */}
            <div className="relative bg-[#111318] border border-[#23262D] p-6 space-y-3">
              <CornerTicks />
              
              <div className="font-mono text-xs text-[#6B7078] uppercase tracking-wider mb-2">
                // EXTERNAL LINK PROTOCOLS
              </div>

              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center justify-between p-3 bg-[#0A0B0D] border border-[#23262D] hover:border-[#FFB020] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#FFB020]" />
                  <div>
                    <div className="font-mono text-xs font-semibold text-[#E4E6EA] group-hover:text-[#FFB020] transition-colors">
                      Email Dispatch
                    </div>
                    <div className="font-mono text-[11px] text-[#6B7078]">
                      {contact.email}
                    </div>
                  </div>
                </div>
                <ExternalLink size={14} className="text-[#6B7078] group-hover:text-[#FFB020]" />
              </a>

              {/* GitHub */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 bg-[#0A0B0D] border border-[#23262D] hover:border-[#FFB020] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Github size={16} className="text-[#FFB020]" />
                  <div>
                    <div className="font-mono text-xs font-semibold text-[#E4E6EA] group-hover:text-[#FFB020] transition-colors">
                      GitHub Matrix
                    </div>
                    <div className="font-mono text-[11px] text-[#6B7078]">
                      {contact.githubHandle}
                    </div>
                  </div>
                </div>
                <ExternalLink size={14} className="text-[#6B7078] group-hover:text-[#FFB020]" />
              </a>

              {/* LinkedIn */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 bg-[#0A0B0D] border border-[#23262D] hover:border-[#FFB020] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={16} className="text-[#FFB020]" />
                  <div>
                    <div className="font-mono text-xs font-semibold text-[#E4E6EA] group-hover:text-[#FFB020] transition-colors">
                      LinkedIn Network
                    </div>
                    <div className="font-mono text-[11px] text-[#6B7078]">
                      {contact.linkedinHandle}
                    </div>
                  </div>
                </div>
                <ExternalLink size={14} className="text-[#6B7078] group-hover:text-[#FFB020]" />
              </a>

            </div>

          </div>

          {/* Right Column: Interactive Terminal Console */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#111318] border border-[#23262D] shadow-2xl overflow-hidden">
              <CornerTicks />
              <CrosshairTicks />

              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0A0B0D] border-b border-[#23262D] font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-none bg-[#23262D]" />
                  <span className="w-2.5 h-2.5 rounded-none bg-[#23262D]" />
                  <span className="w-2.5 h-2.5 rounded-none bg-[#FFB020]" />
                  <span className="text-[#E4E6EA] font-semibold ml-2">bash — ronak@command-center:~</span>
                </div>
                <StatusBeacon status="TERMINAL READY" active={true} />
              </div>

              {/* Terminal Output Stream */}
              <div className="p-4 sm:p-6 bg-[#0A0B0D]/80 font-mono text-xs space-y-2 max-h-56 overflow-y-auto">
                {terminalOutput.map((line, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed ${
                      line.startsWith('[')
                        ? 'text-[#FFB020]'
                        : line.startsWith('>')
                        ? 'text-[#E4E6EA]'
                        : 'text-[#6B7078]'
                    }`}
                  >
                    {line}
                  </div>
                ))}
                <div className="flex items-center gap-2 text-[#FFB020] pt-1">
                  <span>ronak@command-center:~$</span>
                  <span className="w-2 h-4 bg-[#FFB020] terminal-cursor" />
                </div>
              </div>

              {/* Clickable Terminal Action Deck */}
              <div className="p-4 sm:p-6 border-t border-[#23262D] bg-[#111318] space-y-3 font-mono">
                <div className="text-[11px] text-[#6B7078] uppercase tracking-wider flex items-center justify-between">
                  <span>SELECT COMMAND TO EXECUTE // DISPATCH:</span>
                  <span className="text-[#FFB020]">INTERACTIVE_SHELL</span>
                </div>

                <div className="space-y-2">
                  {contact.terminalCommands.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCommandClick(item, idx)}
                      className="w-full text-left p-3.5 bg-[#0A0B0D] border border-[#23262D] hover:border-[#FFB020] group transition-all duration-150 flex items-center justify-between focus:outline-none"
                    >
                      <div className="space-y-1">
                        <div className="text-xs text-[#E4E6EA] group-hover:text-[#FFB020] transition-colors flex items-center gap-2">
                          <span className="text-[#FFB020] font-bold">&gt;</span>
                          <span className="font-semibold">{item.cmd}</span>
                        </div>
                        <div className="text-[10px] text-[#6B7078]">
                          {item.label}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[#6B7078] group-hover:text-[#FFB020] text-xs shrink-0">
                        {copiedIndex === idx ? (
                          <span className="inline-flex items-center gap-1 text-[#FFB020] text-[11px]">
                            <Check size={12} />
                            <span>COPIED / FIRED</span>
                          </span>
                        ) : (
                          <span className="text-[11px] text-[#6B7078] group-hover:text-[#FFB020] flex items-center gap-1">
                            <span>RUN</span>
                            <span>→</span>
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal System Status Footer */}
              <div className="px-4 py-2.5 bg-[#0A0B0D] border-t border-[#23262D] flex items-center justify-between font-mono text-[10px] text-[#6B7078]">
                <span>SESSION_KEY: 0x9B42A1</span>
                <span>CIPHER: AES-GCM // ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
