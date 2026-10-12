import React from 'react';
import { Star, Building2, Quote, Award } from 'lucide-react';
import { TRUSTED_CLIENTS } from '../data/mockData';

export const TestimonialsAndClients: React.FC = () => {
  const testimonials = [
    {
      quote: "DISIPL’s Electronic City Flyover mega unipole gave our flagship SUV launch extraordinary visibility. Their illuminated night lighting and zero-downtime execution made it the centerpiece of our South India OOH rollout.",
      author: "Senior Brand Director",
      company: "Leading Indian Automotive Conglomerate",
      campaign: "National EV Launch Campaign",
      rating: 5,
    },
    {
      quote: "We require 100% statutory clearance and engineering safety across all our bank branch advertising corridors. Deekshith Infra Solutions provided complete chartered engineer documentation and seamless municipal compliance.",
      author: "Head of Outdoor Media & Procurement",
      company: "Top Private Sector Banking Institution",
      campaign: "Annual Retainer Network",
      rating: 5,
    },
    {
      quote: "The clarity and brightness on their Bangalore Outer Ring Road DOOH screen is unmatched. In broad daylight at noon, our creative visuals stood out sharply against the skyline.",
      author: "VP Marketing",
      company: "Tier-1 Consumer Electronics Brand",
      campaign: "Festive Flagship Campaign",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos Strip */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
            Trusted by India’s Premier Enterprise Brands, Agencies & Media Buyers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {TRUSTED_CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2.5 hover:border-blue-400 transition"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="font-extrabold text-xs sm:text-sm text-slate-800 tracking-tight">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold border-l border-slate-200 pl-2">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative group hover:shadow-lg transition duration-200"
            >
              <Quote className="w-8 h-8 text-blue-100 absolute top-5 right-5 pointer-events-none group-hover:text-blue-200 transition-colors" />

              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-xs sm:text-sm">{t.author}</div>
                <div className="text-xs text-blue-600 font-semibold mt-0.5">{t.company}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-1">
                  {t.campaign}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
