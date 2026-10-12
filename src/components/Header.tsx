import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, ShieldCheck, Download, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenBrochure: () => void;
  onOpenQuoteModal: (assetId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBrochure, onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Media Inventory', href: '#inventory' },
    { name: 'Projects', href: '#projects' },
    { name: 'ROI Estimator', href: '#calculator' },
    { name: 'Safety & Specs', href: '#safety' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3'
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group text-left">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/40 group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white block leading-none font-display">
              Deekshith Infra
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-blue-400 uppercase block mt-1">
              Solutions India Pvt Ltd
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-semibold transition-colors duration-200 relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Triggers */}
        <div className="hidden md:flex items-center gap-3">
          {/* Rate card brochure download button */}
          <button
            onClick={onOpenBrochure}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-md border border-slate-700 transition"
            title="Download Rate Card & Specifications"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Rate Card</span>
          </button>

          {/* Primary Phone Trigger */}
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 duration-200"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          {/* Request Quote Button */}
          <button
            onClick={() => onOpenQuoteModal()}
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-3.5 py-2 rounded-lg shadow-sm transition"
          >
            <span>Book Site</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="p-2 bg-amber-500 text-slate-950 rounded-lg font-bold"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white text-sm font-medium py-2 px-2 rounded hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold py-2.5 rounded-lg text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
            
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded-lg text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Chat</span>
            </a>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="flex items-center justify-center gap-1.5 bg-slate-900 text-slate-200 border border-slate-700 py-2 rounded-lg text-xs font-semibold"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                Rate Card
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="flex items-center justify-center gap-1.5 bg-blue-600 text-white py-2 rounded-lg text-xs font-semibold"
              >
                Book Site <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
