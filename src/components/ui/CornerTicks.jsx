import React from 'react';

export function CornerTicks({ className = "" }) {
  return (
    <>
      <span className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-[#6B7078]/40 pointer-events-none ${className}`} />
      <span className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-[#6B7078]/40 pointer-events-none ${className}`} />
      <span className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#6B7078]/40 pointer-events-none ${className}`} />
      <span className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#6B7078]/40 pointer-events-none ${className}`} />
    </>
  );
}

export function CrosshairTicks({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none text-[10px] font-mono text-[#6B7078]/60 ${className}`}>
      <span className="absolute -top-2.5 -left-2">+</span>
      <span className="absolute -top-2.5 -right-2">+</span>
      <span className="absolute -bottom-2.5 -left-2">+</span>
      <span className="absolute -bottom-2.5 -right-2">+</span>
    </div>
  );
}

export function StatusBeacon({ status = "ONLINE", active = true }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E4E6EA]">
      <span className="relative flex h-2 w-2">
        {active && (
          <span className="signal-pulse absolute inline-flex h-full w-full rounded-full bg-[#FFB020] opacity-75" />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB020]" />
      </span>
      <span className="tracking-widest uppercase text-[11px] font-medium">{status}</span>
    </div>
  );
}
