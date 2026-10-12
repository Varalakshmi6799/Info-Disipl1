import React, { useState } from 'react';
import { ShieldCheck, HardHat, Award, CheckCircle2, Cpu, Sun, Building, ChevronRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'engineering' | 'compliance' | 'digital' | 'green'>('engineering');

  const pillars = {
    engineering: {
      title: 'Geotechnical & Structural Engineering Mastery',
      description: 'Every monopole, cantilever, and gantry built by DISIPL begins with deep geotechnical soil investigations and computerized finite element stress modeling. Fabricated with IS 2062 Grade E250 high-tensile steel, our structures withstand extreme cyclonic wind speeds of up to 180 km/h with zero plastic deformation.',
      points: [
        'Deep reinforced concrete bored pile foundations up to 18 meters depth',
        'Hot-dip galvanized zinc coating (>85 microns) for 25-year anti-rust longevity',
        'Vibration damping trusses to eliminate harmonic oscillation from highway heavy freight',
        'Certified structural vetting by professors and accredited structural consultants',
      ],
    },
    compliance: {
      title: '100% Statutory Clearances & Municipal Compliance',
      description: 'Navigating India’s complex municipal and highway advertising bylaws is our core operational strength. Deekshith Infra Solutions guarantees 100% unencumbered, fully compliant site approvals across major metropolitan development authorities.',
      points: [
        'Strict compliance with IRC (Indian Roads Congress) horizontal and vertical clearance norms',
        'Full municipal documentation with BBMP, GHMC, BMC, and National Highways Authority (NHAI)',
        'Comprehensive Public Liability Insurance coverage up to ₹10 Crores per structure',
        'Annual non-destructive structural fitness certification and load auditing',
      ],
    },
    digital: {
      title: 'Next-Gen DOOH & Optical Technology',
      description: 'We lead India’s transition from static print media to high-refresh digital OOH networks. Our outdoor LED installations utilize broadcast-grade SMD modules with adaptive luminance and real-time remote telemetry.',
      points: [
        'Ultra-high 8,500+ nits luminance visible under direct tropical midday sunlight',
        'Automated photocell daylight sensors adjust brightness to reduce evening driver glare',
        'Cloud-based CMS with programmatic slot scheduling and real-time proof-of-play cameras',
        'IP68 fully encapsulated front and rear ingress protection against torrential monsoon rains',
      ],
    },
    green: {
      title: 'Sustainable Infrastructure & Solar Arrays',
      description: 'Deekshith Infra Solutions pioneers eco-responsible outdoor media. We integrate rooftop and median solar photovoltaic panels, smart lithium energy storage, and ultra-efficient low-loss LED drivers.',
      points: [
        'Autonomous off-grid solar-powered street furniture and highway cantilever signages',
        'Over 40% energy conservation achieved through high-efficiency constant-current drivers',
        '100% recyclable structural steel and modular dismantling protocols',
        'Smart dusk-to-dawn astronomical clock automation preventing unnecessary daytime load',
      ],
    },
  };

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            About Our Company
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Building the Physical Backbone of Indian Advertising
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg">
            Deekshith Infra Solutions India Private Limited is a specialized engineering and media infrastructure firm delivering heavy-duty Out-of-Home (OOH) media assets across India’s highest traffic economic corridors.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Corporate Narrative & Tab Switcher */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 leading-snug">
              Precision Civil Fabrication Meets High-Impact Media Placement
            </h3>
            <p className="text-slate-600 text-base mb-6 leading-relaxed">
              Founded on the belief that outdoor advertising structures must be as architecturally sound as bridges and skyscrapers, DISIPL provides turnkey execution — from land acquisition, geotechnical soil boring, heavy steel fabrication, crane lifting, to high-lux LED illumination and maintenance.
            </p>

            {/* Interactive Pillar Switcher */}
            <div className="flex flex-wrap gap-2 mb-6 p-1.5 bg-slate-100 rounded-xl">
              <button
                onClick={() => setActiveTab('engineering')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition ${
                  activeTab === 'engineering'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                Structural Engineering
              </button>
              <button
                onClick={() => setActiveTab('compliance')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition ${
                  activeTab === 'compliance'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                100% Municipal Clearance
              </button>
              <button
                onClick={() => setActiveTab('digital')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition ${
                  activeTab === 'digital'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                DOOH Tech
              </button>
              <button
                onClick={() => setActiveTab('green')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition ${
                  activeTab === 'green'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                Solar & Green
              </button>
            </div>

            {/* Active Content Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{pillars[activeTab].title}</span>
              </h4>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                {pillars[activeTab].description}
              </p>
              <ul className="space-y-2.5">
                {pillars[activeTab].points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Architectural Visual & Metric Cards */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80"
                alt="Deekshith Infra Solutions OOH Monopole"
                className="w-full h-72 sm:h-80 object-cover opacity-85 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400 mb-1">
                  Structural Assurance
                </span>
                <h4 className="text-xl font-extrabold font-display leading-tight">
                  Zero Failure Record Across 15+ Years
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Built to withstand high-velocity tropical monsoons, wind shears, and highway ground vibrations.
                </p>
              </div>
            </div>

            {/* Corporate Metric 2x2 Matrix */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-50 border-l-4 border-blue-600 p-4 rounded-r-xl border-y border-r border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {COMPANY_INFO.stats.activeStructures}
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Live OOH Media Assets
                </div>
              </div>

              <div className="bg-slate-50 border-l-4 border-amber-500 p-4 rounded-r-xl border-y border-r border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {COMPANY_INFO.stats.totalSqFt}
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Prime Advertising Space
                </div>
              </div>

              <div className="bg-slate-50 border-l-4 border-emerald-500 p-4 rounded-r-xl border-y border-r border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {COMPANY_INFO.stats.structuralUptime}
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Lighting & Sensor Uptime
                </div>
              </div>

              <div className="bg-slate-50 border-l-4 border-purple-600 p-4 rounded-r-xl border-y border-r border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {COMPANY_INFO.stats.corporateBrands}
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Trusted Brand Campaigns
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Ribbon */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h4 className="text-lg sm:text-xl font-bold font-display">
              Need Landowner Partnership or Highway Site Fabrication?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              We partner with commercial landowners, highway authorities, and real estate developers for turnkey lease monetization and certified structure erection.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow transition"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91 7022662105</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition"
            >
              <span>Site Proposal</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
