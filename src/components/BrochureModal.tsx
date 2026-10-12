import React from 'react';
import { X, Printer, Download, Layers, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, CERTIFICATIONS } from '../data/mockData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const text = `
DEEKSHITH INFRA SOLUTIONS INDIA PRIVATE LIMITED
CORPORATE BROCHURE & OFFICIAL OOH RATE CARD (2026)
============================================================
Contact Phone: ${COMPANY_INFO.phone}
Contact Email: ${COMPANY_INFO.email}
Headquarters: ${COMPANY_INFO.headquarters}

1. ABOUT DEEKSHITH INFRA SOLUTIONS
We are India's premier Out-of-Home (OOH) advertising infrastructure developer, 
operating over 450+ high-traffic structures spanning 1.8M+ sq. ft. of prime visual real estate.

2. MEDIA INVENTORY SPECIFICATIONS & TARIFFS:
------------------------------------------------------------
• Mega Unipoles & Monoliths
  - Clear Height: 60 ft - 120 ft
  - Display Dimensions: 60x30 ft to 120x40 ft
  - Illumination: Philips High-Lux OptiFlood LEDs
  - Indicative Tariff: ₹2.4 Lakhs - ₹5.5 Lakhs / month

• Digital OOH (DOOH) LED Video Walls
  - Pixel Pitch: P3.9 to P4.8 Outdoor SMD
  - Brightness: 8,500+ nits (Daylight High-Contrast)
  - Content Cycle: 10-second slots / 120-second loop
  - Indicative Tariff: ₹3.5 Lakhs - ₹7.0 Lakhs / month

• Highway Gantries & Cantilevers
  - Spans: Spans 4 to 8 lane National Expressways
  - Dimensions: 80x20 ft to 140x30 ft
  - Indicative Tariff: ₹3.8 Lakhs - ₹8.0 Lakhs / month

• Transit & Bus Shelter Networks
  - 10-unit cluster package across prime commercial corridors
  - Indicative Tariff: ₹1.8 Lakhs - ₹3.5 Lakhs / month

3. STRUCTURAL SAFETY GUARANTEES:
- IS 875 (Part 3) Wind Load Certified up to 180 km/h cyclonic gusts
- Grade IS 2062 E250 Hot-Dip Galvanized Structural Steel (>85 microns zinc)
- 100% Statutory Clearance from BBMP, GHMC, BMC, and NHAI
- Comprehensive Public Liability Insurance coverage up to ₹10 Crores

For site reservations or custom fabrication:
Call: ${COMPANY_INFO.phone} | Email: ${COMPANY_INFO.email}
============================================================
    `.trim();

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DISIPL_Corporate_Brochure_Rate_Card.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative text-slate-900">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg font-display leading-tight">
                Corporate Rate Card & Media Deck
              </h3>
              <p className="text-xs text-slate-500">Deekshith Infra Solutions India Private Limited</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5 text-xs font-semibold"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition flex items-center gap-1.5 text-xs font-semibold"
              title="Download Text Document"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Brochure Content Sheet */}
        <div className="space-y-6">
          {/* Executive Summary */}
          <div className="p-5 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Official Media Asset Inventory Guide (2026)
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold font-display mb-2">
              Pan-India High-Impact Outdoor Advertising Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
              Engineered with deep pile foundations, wind shear mitigation up to 180 km/h, and 24/7 automated LED illumination monitoring across Bengaluru, Hyderabad, Mumbai, Chennai, and Delhi-NCR.
            </p>
          </div>

          {/* Rates & Formats Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Standard Media Formats & Indicative Monthly Tariffs
            </h4>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <th className="p-3">Structure Type</th>
                    <th className="p-3">Standard Dimensions</th>
                    <th className="p-3">Daily Impressions</th>
                    <th className="p-3">Indicative Monthly Retainer</th>
                    <th className="p-3">Min. Booking Flight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                  <tr>
                    <td className="p-3 font-bold text-blue-600">Mega Highway Unipole</td>
                    <td className="p-3">80ft x 35ft / 100ft x 40ft</td>
                    <td className="p-3">450,000+ Commuters</td>
                    <td className="p-3 font-semibold">₹2.4L - ₹5.5L / mo</td>
                    <td className="p-3 text-slate-500">15 Days</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold text-blue-600">Digital DOOH LED Video Wall</td>
                    <td className="p-3">60ft x 30ft (P3.9 SMD)</td>
                    <td className="p-3">650,000+ Commuters</td>
                    <td className="p-3 font-semibold">₹3.5L - ₹7.0L / mo</td>
                    <td className="p-3 text-slate-500">7 Days</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-blue-600">Highway Gantry (Full Span)</td>
                    <td className="p-3">120ft x 25ft (6 Lanes)</td>
                    <td className="p-3">550,000+ Vehicles</td>
                    <td className="p-3 font-semibold">₹4.0L - ₹8.0L / mo</td>
                    <td className="p-3 text-slate-500">30 Days</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold text-blue-600">Arterial Cantilever Monopole</td>
                    <td className="p-3">70ft x 30ft (Median Overhang)</td>
                    <td className="p-3">380,000+ Commuters</td>
                    <td className="p-3 font-semibold">₹2.2L - ₹4.0L / mo</td>
                    <td className="p-3 text-slate-500">15 Days</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-blue-600">Bus Shelter Cluster (10 Units)</td>
                    <td className="p-3">10 x Dual-Sided MUPIs</td>
                    <td className="p-3">320,000+ Pedestrians</td>
                    <td className="p-3 font-semibold">₹1.8L - ₹3.5L / mo</td>
                    <td className="p-3 text-slate-500">30 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 italic">
              * Tariffs vary based on corridor peak traffic, flight duration, and municipal advertising cess. Volume rebates available for 3+ sites or 90+ days bookings.
            </p>
          </div>

          {/* Safety & Compliance Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Structural Safety & Insurance
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                All structures are certified for IS 875 Part 3 wind loading and protected by comprehensive third-party public liability insurance up to ₹10 Crores.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Illumination & Surveillance
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Guaranteed 99.8% illumination uptime powered by dual circuits and real-time remote sensors with replacement within 3 hours.
              </p>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-slate-800">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-800">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
            <div className="text-slate-500 text-[11px]">
              Electronic City Phase 1, Bengaluru
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
