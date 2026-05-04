"use client";

import Link from "next/link";
import { useState } from "react";

import BrandLogo from "@/components/ui/brand-logo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ["MARKETS", "PLATFORM", "TOOLS", "COMPANY", "PARTNER"];

  return (
    <nav className="w-full fixed top-0 z-50 py-4 px-6 md:px-10 bg-[#020617]/85 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Go to home page"
          onClick={(event) => {
            if (window.location.pathname !== "/") {
              return;
            }

            event.preventDefault();
            window.location.assign("/");
          }}
        >
          <BrandLogo
            className="w-[185px] sm:w-[220px]"
            priority
          />
        </Link>
        
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-slate-300">
          {navLinks.map((link) => (
            <div key={link} className="flex items-center group cursor-pointer hover:text-white transition-colors duration-200">
              {link}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-1.5 opacity-60 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-200"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          ))}
        </div>

        {/* CTA Buttons & Hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center justify-center px-7 py-2 bg-[#020617]/50 text-white font-bold text-[13px] tracking-wide rounded-full border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:bg-blue-900/20 hover:border-blue-400 transition-all duration-300">
            LOGIN
          </button>
          <button className="hidden sm:flex items-center justify-center px-7 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-[13px] tracking-wide rounded-full hover:from-blue-500 hover:to-blue-300 shadow-[0_4px_14px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
            REGISTER
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 py-6 shadow-2xl" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-[15px] font-semibold text-slate-300">
          {navLinks.map((link) => (
            <div 
              key={link} 
              className="flex items-center group cursor-pointer hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-1.5 opacity-60"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          ))}
          <div className="flex flex-col sm:hidden w-11/12 max-w-sm gap-3 mt-2">
            <button className="px-7 py-2.5 bg-[#020617]/50 text-white font-bold text-[13px] tracking-wide rounded-full border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              LOGIN
            </button>
            <button className="px-7 py-2.5 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-[13px] tracking-wide rounded-full shadow-[0_4px_14px_rgba(59,130,246,0.4)]">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
