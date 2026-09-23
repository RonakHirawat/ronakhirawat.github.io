import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { StatusBeacon } from './ui/CornerTicks';
import { ArrowUp, Terminal, ShieldCheck } from 'lucide-react';

export function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#0A0B0D] border-t border-[#23262D] py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Footer Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#23262D]">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E4E6EA]">
              <span className="text-[#FFB020]">RH // DEV_OS</span>
              <span className="text-[#6B7078]">•</span>
              <span>RONAK HIRAWAT</span>
            </div>
            <p className="text-[11px] text-[#6B7078]">
              ENGINEERING INTELLIGENT SYSTEMS & HIGH-PRECISION WEB EXPERIENCES.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <StatusBeacon status="SYS.IDLE // READY" active={true} />
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#111318] border border-[#23262D] text-[#6B7078] hover:text-[#FFB020] hover:border-[#FFB020] transition-colors focus:outline-none"
              title="Return to Top"
              aria-label="Return to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom Telemetry & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] text-[#6B7078]">
          <div className="space-y-1">
            <div>© {new Date().getFullYear()} RONAK HIRAWAT. ALL RIGHTS RESERVED.</div>
            <div className="text-[#6B7078]/80">
              FRAMEWORK: REACT + VITE + TAILWIND // ZERO BLOAT ARCHITECTURE
            </div>
          </div>

          <div className="text-left sm:text-right space-y-1">
            <div className="text-[#FFB020]">SYS_TIME: {time || "SYNCING..."}</div>
            <div>STATION: 12.8231° N, 80.0444° E // CHENNAI, IN</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
