import React from 'react';
import { portfolioData } from '../data/portfolio';

export function SideIndicator({ activeSection }) {
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
    <aside 
      aria-label="Section tracking rail"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4 pointer-events-auto"
    >
      <div className="font-mono text-[9px] text-[#6B7078] tracking-widest uppercase rotate-90 mb-4 select-none">
        HUD.NAV
      </div>

      <div className="relative flex flex-col items-center gap-3">
        {/* Continuous thin vertical rail */}
        <div className="absolute top-2 bottom-2 w-[1px] bg-[#23262D] -z-10" />

        {portfolioData.navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group relative flex items-center justify-center p-1 focus:outline-none"
              title={`${item.code} — ${item.label}`}
              aria-label={`Jump to ${item.label}`}
            >
              {/* Node indicator */}
              <div
                className={`transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-2.5 rounded-none bg-[#FFB020] shadow-[0_0_8px_rgba(255,176,32,0.6)] rotate-45'
                    : 'w-1.5 h-1.5 rounded-none bg-[#23262D] group-hover:bg-[#6B7078] group-hover:scale-125'
                }`}
              />

              {/* Hover Tooltip / Label */}
              <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none flex items-center gap-1.5 px-2 py-1 bg-[#111318] border border-[#23262D] text-[10px] font-mono whitespace-nowrap text-[#E4E6EA] shadow-lg">
                <span className="text-[#FFB020]">{item.code}</span>
                <span>{item.label}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 font-mono text-[9px] text-[#6B7078] select-none">
        {portfolioData.navItems.find(n => n.id === activeSection)?.code || "01"} / 07
      </div>
    </aside>
  );
}
