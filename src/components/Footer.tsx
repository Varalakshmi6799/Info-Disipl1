import React from 'react';
import { Layers, Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base text-white block leading-tight font-display">
                  Deekshith Infra Solutions
                </span>
                <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase block">
                  India Private Limited
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              India’s premier heavy-structural Out-of-Home (OOH) media infrastructure firm. Specializing in mega highway monopoles, P3.9 digital LED video walls, expressway gantries, and turnkey municipal site management.
            </p>

            <div className="pt-2 space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headquarters}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-display">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Services', 'Media Inventory', 'Projects', 'ROI Estimator', 'Safety & Specs', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '')}`}
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Infrastructure Offerings */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-display">
              Media Infrastructure
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition">Highway Mega Unipoles</a></li>
              <li><a href="#services" className="hover:text-white transition">Digital DOOH LED Screens</a></li>
              <li><a href="#services" className="hover:text-white transition">Overhead Highway Gantries</a></li>
              <li><a href="#services" className="hover:text-white transition">Transit & Metro Hubs</a></li>
              <li><a href="#services" className="hover:text-white transition">Bus Shelters & MUPIs</a></li>
              <li><a href="#services" className="hover:text-white transition">Custom Steel Fabrication</a></li>
            </ul>
          </div>

          {/* Regional Hubs & Compliance */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-display">
              Regional Operations
            </h4>
            <ul className="space-y-2">
              <li className="text-slate-300 font-medium">Bengaluru (Corporate HQ)</li>
              <li>Hyderabad (Hitec City Hub)</li>
              <li>Mumbai (BKC & Western Corridor)</li>
              <li>Chennai (OMR Express Hub)</li>
              <li>Delhi-NCR (DND & Gurugram)</li>
            </ul>

            <div className="pt-3">
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>IS 875 & IRC Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Deekshith Infra Solutions India Private Limited. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Media Lease</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Public Liability Undertaking</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition flex items-center gap-1"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
