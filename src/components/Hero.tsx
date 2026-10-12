import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, MapPin, Phone, Eye, Layers, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenBrochure: () => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBrochure, onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-slate-950 overflow-hidden">
      {/* Decorative gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 opacity-95 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Engineering badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Pan-India Out-of-Home (OOH) Infrastructure Specialists</span>
            <span className="text-slate-500">|</span>
            <span className="text-amber-400 font-bold">IS 875 Certified</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-display">
            Engineering Iconic{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
              Outdoor Advertising
            </span>{' '}
            Landscapes
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-normal leading-relaxed">
            Deekshith Infra Solutions fabricates, erects, and manages India’s premier network of mega highway unipoles, high-refresh digital DOOH video walls, and expressway gantries — engineered for unyielding structural integrity and unrivaled brand visibility.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#inventory"
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center gap-2 group"
            >
              <span>Explore Prime Inventory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#calculator"
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 transition flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Campaign ROI Estimator</span>
            </a>

            <button
              onClick={onOpenBrochure}
              className="px-5 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 text-slate-300 hover:text-amber-400 font-medium text-sm border border-slate-800 transition"
            >
              <span>Download Media Kit PDF</span>
            </button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 border-t border-slate-800/80 pt-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>IIT Vetted Structural Integrity</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>180 km/h Cyclonic Wind Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-blue-400" />
              <span>100% Unobstructed Line of Sight</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>14+ Metros & Economic Corridors</span>
            </div>
          </div>
        </div>

        {/* Floating Metrics Dashboard */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 font-display tracking-tight">
              {COMPANY_INFO.stats.activeStructures}
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-blue-400 mb-1">
              Prime Structures Active
            </div>
            <p className="text-xs text-slate-400">
              Unipoles, gantries & DOOH screens across key highway corridors.
            </p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-amber-500/50 transition">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 font-display tracking-tight">
              {COMPANY_INFO.stats.totalSqFt}
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-1">
              Sq. Ft. Display Surface
            </div>
            <p className="text-xs text-slate-400">
              Engineered high-tensile steel frames with maximum face exposure.
            </p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-emerald-500/50 transition">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 font-display tracking-tight">
              {COMPANY_INFO.stats.dailyFootfall}
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-emerald-400 mb-1">
              Daily Reach Impressions
            </div>
            <p className="text-xs text-slate-400">
              Audited vehicular traffic & transit commuter engagement.
            </p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-sky-500/50 transition">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-sky-500" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 font-display tracking-tight">
              {COMPANY_INFO.stats.structuralUptime}
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-sky-400 mb-1">
              Certified Illumination Uptime
            </div>
            <p className="text-xs text-slate-400">
              Automated sensor monitoring & dual backup power integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
