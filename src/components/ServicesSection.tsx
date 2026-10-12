import React, { useState } from 'react';
import { 
  Building2, Tv, Maximize2, Train, Store, Wrench, 
  ArrowRight, Check, X, Shield, Sparkles, SlidersHorizontal 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-8 h-8 text-blue-600" />;
      case 'Tv': return <Tv className="w-8 h-8 text-blue-600" />;
      case 'Maximize2': return <Maximize2 className="w-8 h-8 text-blue-600" />;
      case 'Train': return <Train className="w-8 h-8 text-blue-600" />;
      case 'Store': return <Store className="w-8 h-8 text-blue-600" />;
      case 'Wrench': return <Wrench className="w-8 h-8 text-blue-600" />;
      default: return <Building2 className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            End-To-End Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Our Core Capabilities & Engineering Offerings
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg">
            From heavy-gauge fabrication in our specialized steel yards to precision civil installation and smart LED video walls, explore our comprehensive OOH advertising solutions.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* 64x64 Vector Icon Box */}
                <div className="w-16 h-16 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:[&_svg]:text-white transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Bullet highlights */}
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {service.specs.slice(0, 2).map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition"
                >
                  <span>Technical Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                {renderIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Engineering Capability
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Banner Image */}
            <div className="rounded-xl overflow-hidden mb-6 h-52 bg-slate-100 relative">
              <img
                src={selectedService.bannerImage}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white font-medium bg-blue-600/90 px-2.5 py-1 rounded">
                  IS 875 Compliant Fabrication
                </span>
              </div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            {/* Technical Specifications */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                Technical & Structural Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.specs.map((spec, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs font-medium text-slate-800 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Applications */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Recommended Strategic Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.applications.map((app, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-semibold border border-blue-200">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-sm text-slate-600 font-semibold hover:bg-slate-100 rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForQuote(serviceName);
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-bold shadow-md transition"
              >
                Inquire For This Solution
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
