import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Users, Target, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

interface CampaignCalculatorProps {
  onApplyEstimateToQuote: (summaryText: string) => void;
}

export const CampaignCalculator: React.FC<CampaignCalculatorProps> = ({ onApplyEstimateToQuote }) => {
  const [city, setCity] = useState<string>('Bengaluru');
  const [format, setFormat] = useState<'Unipole' | 'DOOH' | 'Gantry' | 'ShelterCluster'>('Unipole');
  const [siteCount, setSiteCount] = useState<number>(3);
  const [duration, setDuration] = useState<number>(30); // in days
  const [audience, setAudience] = useState<string>('Tech Corridor & IT Executives');

  // Calculation multipliers based on selections
  const calculations = useMemo(() => {
    // Base daily impressions per site
    const baseImpressionsMap = {
      Unipole: 450000,
      DOOH: 620000,
      Gantry: 540000,
      ShelterCluster: 280000,
    };

    // Base monthly rate per site in INR
    const baseMonthlyRateMap = {
      Unipole: 310000,
      DOOH: 420000,
      Gantry: 480000,
      ShelterCluster: 190000,
    };

    const dailyImprPerSite = baseImpressionsMap[format];
    const totalImpressions = dailyImprPerSite * siteCount * duration;
    
    // Monthly rate adjusted for duration
    const durationMultiplier = duration / 30;
    // Volume discount
    const discount = siteCount >= 5 ? 0.88 : siteCount >= 3 ? 0.93 : 1.0;
    
    const totalEstCost = Math.round(baseMonthlyRateMap[format] * siteCount * durationMultiplier * discount);
    
    // Average sq ft
    const sqFtPerSite = format === 'Unipole' ? 3200 : format === 'DOOH' ? 1800 : format === 'Gantry' ? 3800 : 1200;
    const totalSqFt = sqFtPerSite * siteCount;

    // Effective CPM
    const effectiveCPM = ((totalEstCost / totalImpressions) * 1000).toFixed(2);

    return {
      totalImpressions,
      totalEstCost,
      totalSqFt,
      effectiveCPM,
      discountPct: Math.round((1 - discount) * 100),
    };
  }, [city, format, siteCount, duration]);

  const handleTransferToQuote = () => {
    const summary = `Campaign Plan: ${siteCount}x ${format} in ${city} for ${duration} days. Est. Impressions: ${(calculations.totalImpressions / 1000000).toFixed(1)}M. Est. Budget: ₹${(calculations.totalEstCost / 100000).toFixed(2)} Lakhs.`;
    onApplyEstimateToQuote(summary);
  };

  return (
    <section id="calculator" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            Strategic Planning Tool
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Campaign Reach & ROI Estimator
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-base sm:text-lg">
            Configure your target market, structure formats, and flight duration to model audience reach, gross impressions, and estimated media investment.
          </p>
        </div>

        {/* Planner Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* City Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  1. Target Metropolitan Region
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {['Bengaluru', 'Hyderabad', 'Mumbai', 'Chennai', 'Delhi-NCR'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCity(c)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold transition text-center ${
                        city === c
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  2. Media Structure Format
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'Unipole', label: 'Mega Unipole', sub: 'Highway Monolith' },
                    { id: 'DOOH', label: 'Digital DOOH', sub: 'P3.9 LED Video Wall' },
                    { id: 'Gantry', label: 'Overhead Gantry', sub: 'Over-Expressway' },
                    { id: 'ShelterCluster', label: 'Bus Shelters', sub: 'Urban Transit Cluster' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormat(item.id as any)}
                      className={`p-3 rounded-xl text-left border transition ${
                        format === item.id
                          ? 'bg-blue-900/40 border-blue-500 text-white ring-1 ring-blue-500'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{item.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Sites Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    3. Number of Prime Locations
                  </label>
                  <span className="text-sm font-extrabold text-blue-400 bg-blue-950 px-2.5 py-0.5 rounded border border-blue-800">
                    {siteCount} {siteCount === 1 ? 'Site' : 'Prime Sites'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={siteCount}
                  onChange={(e) => setSiteCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>1 (Flagship)</span>
                  <span>4 (City Impact)</span>
                  <span>8 (High Penetration)</span>
                  <span>12+ (Full Corridor Dominance)</span>
                </div>
              </div>

              {/* Duration Radio */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  4. Campaign Duration Flight
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { days: 15, label: '15 Days (Flash)' },
                    { days: 30, label: '1 Month (Standard)' },
                    { days: 90, label: '3 Months (Quarter)' },
                    { days: 180, label: '6 Months (Dominance)' },
                  ].map((d) => (
                    <button
                      key={d.days}
                      type="button"
                      onClick={() => setDuration(d.days)}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold text-center border transition ${
                        duration === d.days
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom info note */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Includes 100% certified 24/7 illumination, structural upkeep, and monthly drone monitoring report.</span>
            </div>
          </div>

          {/* Results Output Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 border border-blue-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <TrendingUp className="w-48 h-48 text-blue-400" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Estimated Reach Projection
                </span>
                {calculations.discountPct > 0 && (
                  <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    {calculations.discountPct}% Volume Rebate Applied
                  </span>
                )}
              </div>

              {/* Huge Impressions Metric */}
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
                  {(calculations.totalImpressions / 1000000).toFixed(2)}M
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                  Gross Audience Impressions
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Across {city} {format} corridor over {duration} days flight.
                </p>
              </div>

              {/* Metric Breakdown Matrix */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Brand Canvas</span>
                  <span className="text-lg font-extrabold text-white">
                    {calculations.totalSqFt.toLocaleString()} Sq. Ft.
                  </span>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Audited CPM Cost</span>
                  <span className="text-lg font-extrabold text-amber-400">
                    ₹{calculations.effectiveCPM} / 1K
                  </span>
                </div>
              </div>

              {/* Estimated Budget Box */}
              <div className="p-4 bg-blue-900/30 border border-blue-500/30 rounded-2xl mb-6">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">
                  Indicative Media Budget
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 font-display">
                  ₹{(calculations.totalEstCost / 100000).toFixed(2)} Lakhs
                  <span className="text-xs text-slate-400 font-normal ml-2">(+ GST)</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Covers structural lease, high-output LED power, printing/mounting, and daily surveillance.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleTransferToQuote}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 group"
              >
                <span>Request Custom RFP with this Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:+917022662105`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition flex items-center justify-center gap-2"
              >
                <span>Discuss with Lead Planner: +91 7022662105</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
