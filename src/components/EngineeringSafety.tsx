import React from 'react';
import { ShieldCheck, Wind, Cpu, CheckCircle, FileCheck, Anchor, AlertCircle, PhoneCall } from 'lucide-react';
import { CERTIFICATIONS, COMPANY_INFO } from '../data/mockData';

export const EngineeringSafety: React.FC = () => {
  return (
    <section id="safety" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            Structural Integrity & Standards
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Zero-Compromise Engineering & Safety Protocols
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg">
            In highway outdoor advertising, structural safety is paramount. Every foundation, anchor bolt, and truss manufactured by DISIPL complies with stringent Indian engineering codes.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={i}
              className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <span className="font-mono text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                {cert.code}
              </span>
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Engineering Comparison Checklist */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">
                The DISIPL Engineering Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-4 leading-tight">
                How We Prevent Structural Fatigue & Municipal Liabilities
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Unlike unorganized local fabricators who weld scrap tubular sections without wind calculations, Deekshith Infra Solutions deploys computerized CAD finite element stress simulation and continuous drone telemetry.
              </p>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <strong className="text-white block mb-0.5">24/7 Structural Rapid Response</strong>
                  Our dedicated mobile rigging teams are on standby 24 hours a day to address electrical anomalies, storm advisories, or highway emergencies.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: 'Bored Cast-in-Situ Piling',
                    desc: 'Micro-piles drilled into solid bedrock, preventing tilting and settlement on highway shoulders.',
                  },
                  {
                    title: 'Non-Destructive Ultrasonic Weld Testing',
                    desc: 'All load-bearing welds undergo magnetic particle and ultrasonic testing to verify zero micro-fractures.',
                  },
                  {
                    title: 'Aerodynamic Vortex Shedding',
                    desc: 'Lattice frame air-relief channels designed to reduce lateral drag during cyclonic gusts.',
                  },
                  {
                    title: 'Isolated Earthing & Surge Arrestors',
                    desc: 'Copper chemical earthing with class-B+C surge arrestors protecting against high-voltage lightning strikes.',
                  },
                  {
                    title: 'Dual-Circuit Smart Relays',
                    desc: 'Automatic phase failure switchover ensures illumination stays active even under single-phase supply drops.',
                  },
                  {
                    title: 'Pre-Approved Municipal NOCs',
                    desc: 'Comprehensive structural stability certificates signed by licensed chartered structural engineers.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
