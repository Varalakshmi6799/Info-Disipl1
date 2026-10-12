import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, MapPin, Eye, Moon, Sun, ArrowUpRight, 
  CheckCircle, Clock, Lock, Sparkles, Navigation, Layers, Compass
} from 'lucide-react';
import { MEDIA_INVENTORY } from '../data/mockData';
import { MediaAsset } from '../types';

interface InventoryExplorerProps {
  onSelectAssetForDetail: (asset: MediaAsset) => void;
  onBookAsset: (asset: MediaAsset) => void;
}

export const InventoryExplorer: React.FC<InventoryExplorerProps> = ({ 
  onSelectAssetForDetail, 
  onBookAsset 
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [nightModeMap, setNightModeMap] = useState<Record<string, boolean>>({});

  const cities = ['All', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Chennai', 'Delhi-NCR'];
  const types = ['All', 'Mega Unipole', 'Digital DOOH (LED)', 'Highway Gantry', 'Cantilever'];

  const toggleNightMode = (assetId: string) => {
    setNightModeMap((prev) => ({
      ...prev,
      [assetId]: !prev[assetId],
    }));
  };

  const filteredAssets = useMemo(() => {
    return MEDIA_INVENTORY.filter((asset) => {
      const matchCity = selectedCity === 'All' || asset.city === selectedCity;
      const matchType = selectedType === 'All' || asset.type === selectedType;
      const matchSearch =
        searchQuery === '' ||
        asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.landmark.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.code.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCity && matchType && matchSearch;
    });
  }, [selectedCity, selectedType, searchQuery]);

  return (
    <section id="inventory" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            Live OOH Media Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Interactive OOH Asset Inventory Explorer
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg">
            Search our pan-India network of high-reach media installations. Toggle between daylight and night illumination simulations to preview your brand impact.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by landmark, flyover, highway, code (e.g. Silk Board, DND)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* City Filter Pills */}
            <div className="md:col-span-7 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                City:
              </span>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    selectedCity === city
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter Pills Row */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
              Structure Format:
            </span>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedType === type
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {type}
              </button>
            ))}

            <div className="ml-auto text-xs font-semibold text-slate-500">
              Showing <span className="text-blue-600 font-bold">{filteredAssets.length}</span> verified sites
            </div>
          </div>
        </div>

        {/* Assets Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAssets.map((asset) => {
            const isNight = !!nightModeMap[asset.id];
            const displayImage = isNight && asset.nightImageUrl ? asset.nightImageUrl : asset.imageUrl;

            return (
              <div
                key={asset.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col group"
              >
                {/* Visual Preview Container */}
                <div className="relative h-60 bg-slate-900 overflow-hidden">
                  <img
                    src={displayImage}
                    alt={asset.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Bar inside image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-slate-900/85 backdrop-blur-sm text-white font-mono text-[11px] font-bold border border-white/10">
                      {asset.code}
                    </span>

                    {/* Status badge */}
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-sm ${
                        asset.status === 'Available Immediately'
                          ? 'bg-emerald-500 text-white'
                          : asset.status === 'Available Next Month'
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-rose-600 text-white'
                      }`}
                    >
                      {asset.status === 'Available Immediately' && <CheckCircle className="w-3 h-3" />}
                      {asset.status === 'Available Next Month' && <Clock className="w-3 h-3" />}
                      {asset.status === 'Reserved' && <Lock className="w-3 h-3" />}
                      <span>{asset.status}</span>
                    </span>
                  </div>

                  {/* Day / Night simulation toggle */}
                  <button
                    onClick={() => toggleNightMode(asset.id)}
                    className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 text-white text-xs font-semibold backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow transition"
                    title="Toggle Night Illumination Simulation"
                  >
                    {isNight ? (
                      <>
                        <Sun className="w-3.5 h-3.5 text-amber-400" />
                        <span>Daylight View</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-3.5 h-3.5 text-blue-300" />
                        <span>Night Illumination</span>
                      </>
                    )}
                  </button>

                  {/* City and Type banner */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-bold text-blue-400 bg-slate-950/90 px-2.5 py-1 rounded border border-blue-500/30">
                      {asset.city} • {asset.type}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {asset.title}
                    </h3>
                    
                    <div className="flex items-start gap-1.5 text-xs text-slate-600 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{asset.landmark}</span>
                    </div>

                    {/* Metric Badges */}
                    <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl mb-4 text-xs border border-slate-100">
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Dimensions</span>
                        <span className="font-bold text-slate-900">{asset.dimensions}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Total Area</span>
                        <span className="font-bold text-blue-600">{asset.sqft.toLocaleString()} Sq. Ft.</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Traffic Count</span>
                        <span className="font-bold text-slate-900">{asset.dailyImpressions}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Illumination</span>
                        <span className="font-bold text-emerald-600 truncate block">{asset.illumination}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 italic line-clamp-1 mb-4">
                      Facing: {asset.facing}
                    </p>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Indicative Rate</span>
                      <span className="text-sm font-extrabold text-slate-900">{asset.rateEstimate}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectAssetForDetail(asset)}
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                        title="View Full Specifications & Blueprint"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onBookAsset(asset)}
                        className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1 shadow-sm"
                      >
                        <span>Reserve</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredAssets.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <Compass className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-800">No media assets match your filter criteria</h4>
            <p className="text-sm text-slate-500 max-w-md mx-auto mt-1 mb-4">
              Try selecting a different city or clearing the search terms. We also engineer custom bespoke unipoles on demand!
            </p>
            <button
              onClick={() => {
                setSelectedCity('All');
                setSelectedType('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
