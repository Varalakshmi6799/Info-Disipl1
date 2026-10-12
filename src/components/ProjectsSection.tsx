import React, { useState } from 'react';
import { Eye, MapPin, Calendar, Award, Check, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onOpenQuoteModal: (projectName?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const [nightModeMap, setNightModeMap] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Unipoles', 'Digital DOOH', 'Highway Gantries', 'Transit & Urban'];

  const toggleNight = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setNightModeMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProjects = PROJECTS_DATA.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            Portfolio & Landmark Installations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Showcase of Iconic Executions
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg">
            Witness our heavy-engineering benchmarks across high-speed national expressways, tech corridors, and metro transit centers.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isNight = !!nightModeMap[project.id];
            const imgToDisplay = isNight && project.nightImageUrl ? project.nightImageUrl : project.imageUrl;

            return (
              <div
                key={project.id}
                onClick={() => setActiveProjectModal(project)}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-slate-900 flex flex-col justify-end min-h-[380px]"
              >
                {/* Background image */}
                <img
                  src={imgToDisplay}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                {/* Top Badge Strip */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-md bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow">
                    {project.category}
                  </span>

                  <button
                    onClick={(e) => toggleNight(project.id, e)}
                    className="px-2.5 py-1 rounded-md bg-slate-950/80 hover:bg-slate-900 text-white text-[11px] font-semibold border border-white/20 flex items-center gap-1 backdrop-blur-md"
                  >
                    {isNight ? (
                      <>
                        <Sun className="w-3 h-3 text-amber-400" />
                        <span>Day</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-3 h-3 text-blue-300" />
                        <span>Night</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Card Content Overlay */}
                <div className="relative z-10 p-6 sm:p-8 text-white">
                  <div className="flex items-center gap-2 text-xs text-blue-400 font-bold uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.city} • {project.location}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Footprint</span>
                      <span className="font-bold text-white">{project.dimensions}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-blue-300 font-bold group-hover:translate-x-1 transition-transform">
                      <span>View Engineering Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Project Blueprint & Execution
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-4">
              {activeProjectModal.title}
            </h3>

            {/* Image Preview with Day/Night toggle */}
            <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-72 bg-slate-900 relative">
              <img
                src={nightModeMap[activeProjectModal.id] && activeProjectModal.nightImageUrl ? activeProjectModal.nightImageUrl : activeProjectModal.imageUrl}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={(e) => toggleNight(activeProjectModal.id, e)}
                className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-slate-950/80 text-white text-xs font-semibold backdrop-blur-md border border-white/20 flex items-center gap-1.5"
              >
                {nightModeMap[activeProjectModal.id] ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" /> Day View
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-blue-300" /> Night Illumination
                  </>
                )}
              </button>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-xl mb-6 border border-slate-100 text-xs">
              <div>
                <span className="text-slate-500 uppercase text-[10px] font-bold block">Region</span>
                <span className="font-bold text-slate-900">{activeProjectModal.city}</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase text-[10px] font-bold block">Dimensions</span>
                <span className="font-bold text-slate-900">{activeProjectModal.dimensions}</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase text-[10px] font-bold block">Key Brands</span>
                <span className="font-bold text-blue-600">{activeProjectModal.clientSector}</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase text-[10px] font-bold block">Year Built</span>
                <span className="font-bold text-slate-900">{activeProjectModal.completionYear}</span>
              </div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              {activeProjectModal.description}
            </p>

            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Engineering & Execution Highlights
            </h4>
            <div className="space-y-2 mb-8">
              {activeProjectModal.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 text-sm text-slate-600 font-semibold hover:bg-slate-100 rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeProjectModal.title;
                  setActiveProjectModal(null);
                  onOpenQuoteModal(`Inquiry for Project Spec: ${title}`);
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-bold shadow-md transition"
              >
                Inquire for Similar Infrastructure
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
