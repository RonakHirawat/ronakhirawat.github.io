import React from 'react';

export function SectionHeader({ number, label, title, subtitle }) {
  return (
    <div className="mb-12 border-b border-[#23262D] pb-6">
      <div className="flex items-center gap-3 font-mono text-xs text-[#6B7078] mb-2 tracking-wider">
        <span className="text-[#FFB020] font-semibold">{number}</span>
        <span>//</span>
        <span className="uppercase tracking-widest">{label}</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E4E6EA]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs font-mono text-[#6B7078] tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
