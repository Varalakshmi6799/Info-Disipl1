import React, { useState } from 'react';
import { 
  X, MapPin, Eye, CheckCircle2, Moon, Sun, ArrowUpRight, 
  Shield, Layers, Navigation, Calendar, Award 
} from 'lucide-react';
import { MediaAsset } from '../types';

interface AssetDetailModalProps {
  asset: MediaAsset | null;
  onClose: () => void;
  onBook: (asset: MediaAsset) => void;
}

export const AssetDetailModal: React.FC<AssetDetailModalProps> = ({ asset, onClose, onBook }) => {
  const [isNight, setIsNight] = useState(false);

  if (!asset) return null;

  const displayImg = isNight && asset.nightImageUrl ? asset.nightImageUrl : asset.imageUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Strip */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-mono font-bold">
              {asset.code}
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {asset.city} • {asset.type}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            {asset.title}
          </h2>
          <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>{asset.landmark}</span>
          </div>
        </div>

        {/* Visual Preview with Day/Night switch */}
        <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80 bg-slate-900 relative">
          <img
            src={displayImg}
            alt={asset.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Toggle button */}
          <button
            onClick={() => setIsNight(!isNight)}
            className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-white text-xs font-semibold backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow"
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

          <div className="absolute bottom-4 left-4 text-white text-xs">
            <span className="font-bold text-amber-400 block">Traffic Flow Direction:</span>
            <span>{asset.facing}</span>
          </div>
        </div>

        {/* Technical Blueprint Specifications Grid */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            Structural & Audience Specifications
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] font-bold block">Display Size</span>
              <span className="font-extrabold text-slate-900 text-sm">{asset.dimensions}</span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] font-bold block">Surface Area</span>
              <span className="font-extrabold text-blue-600 text-sm">{asset.sqft.toLocaleString()} Sq. Ft.</span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] font-bold block">Daily Impressions</span>
              <span className="font-extrabold text-slate-900 text-sm">{asset.dailyImpressions}</span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] font-bold block">Illumination</span>
              <span className="font-extrabold text-emerald-600 text-xs truncate block">{asset.illumination}</span>
            </div>
          </div>
        </div>

        {/* Engineering Features */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
            Key Architectural Advantages
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {asset.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Booking CTA Strip */}
        <div className="p-4 bg-slate-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Indicative Monthly Retainer</span>
            <span className="text-xl font-extrabold text-amber-400 font-display">{asset.rateEstimate}</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">Status: <strong className="text-emerald-400">{asset.status}</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs text-slate-300 hover:text-white font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(asset);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow transition"
            >
              <span>Book / Inquire for this Site</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
