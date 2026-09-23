import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { StatusBeacon } from './ui/CornerTicks';
import { Menu, X } from 'lucide-react';

export function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0B0D]/90 backdrop-blur-md border-b border-[#23262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-sm bg-[#111318] border border-[#23262D] group-hover:border-[#FFB020] flex items-center justify-center transition-colors">
            <span className="font-mono text-xs font-bold text-[#FFB020]">
              {portfolioData.personal.initials}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-widest text-[#E4E6EA] group-hover:text-[#FFB020] transition-colors">
              RONAK HIRAWAT
            </span>
            <span className="font-mono text-[9px] text-[#6B7078] tracking-widest">
              SYS.DEV // COMMAND CENTER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {portfolioData.navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative px-3 py-1.5 font-mono text-xs transition-colors duration-150 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#E4E6EA] font-medium'
                    : 'text-[#6B7078] hover:text-[#E4E6EA]'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-[#FFB020]' : 'text-[#6B7078]'}`}>
                  {item.code}.
                </span>
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#FFB020]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Status Beacon & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center border-l border-[#23262D] pl-4">
            <StatusBeacon status="SYS.ONLINE" active={true} />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-sm bg-[#111318] border border-[#23262D] text-[#E4E6EA] hover:text-[#FFB020] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#23262D] bg-[#111318] px-4 py-4 space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#23262D]">
            <span className="text-[10px] text-[#6B7078] uppercase tracking-wider">// NAVIGATION MATRIX</span>
            <StatusBeacon status="ONLINE" active={true} />
          </div>
          {portfolioData.navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block px-3 py-2 rounded-sm transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#0A0B0D] text-[#FFB020] border-l-2 border-[#FFB020]'
                    : 'text-[#6B7078] hover:text-[#E4E6EA] hover:bg-[#0A0B0D]'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-[#6B7078]">{item.code}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
