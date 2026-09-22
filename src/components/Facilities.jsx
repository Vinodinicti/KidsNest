import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Camera, Eye } from 'lucide-react';
import { playPopSound, playChimeSound } from '../utils/audio';
import { schoolData } from '../data/schoolData';

export const Facilities = ({ onOpenTour }) => {
  const [activeFacility, setActiveFacility] = useState(schoolData.facilities[0]);

  return (
    <section id="facilities" className="pt-0 pb-6 relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Child-Safe World-Class Campus</span>
          </div>
          <h2 className="font-comic text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950">
            Enchanted Spaces for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">Every Adventure</span>
          </h2>
          <p className="text-slate-900 text-xs sm:text-sm md:text-base font-semibold max-w-2xl mx-auto">
            From temperature-controlled splash pools to sterilized sensory play arenas, our campus is designed with 100% ergonomic child safety and endless wonder.
          </p>
        </div>

        {/* Facility Category Buttons */}
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-1.5 sm:gap-3 mb-6 sm:mb-10">
          {schoolData.facilities.map((facility) => {
            const isActive = activeFacility.id === facility.id;
            return (
              <button
                key={facility.id}
                onClick={() => {
                  playPopSound();
                  setActiveFacility(facility);
                }}
                className={`px-2 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl font-comic font-bold text-[10px] sm:text-sm transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 border-2 text-center ${
                  isActive
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-md shadow-emerald-500/20 scale-102'
                    : 'bg-white text-slate-950 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400'
                }`}
              >
                <span className="text-sm sm:text-base">{facility.emoji}</span>
                <span className="leading-tight">
                  <span className="sm:hidden">{facility.shortTitle || facility.title}</span>
                  <span className="hidden sm:inline">{facility.title}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Facility Spotlight Box */}
        <div className="bg-gradient-to-br from-emerald-50/60 via-teal-50/40 to-sky-50/60 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border-2 sm:border-4 border-emerald-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Image with Badge */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 shadow-lg group">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live Campus Photo</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-950 text-xs font-bold px-3 py-1.5 rounded-xl shadow">
                <span>{activeFacility.emoji} {activeFacility.title}</span>
              </div>
            </div>

            {/* Right: Feature Highlights */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{activeFacility.emoji}</span>
                <h3 className="font-comic font-bold text-2xl sm:text-3xl text-slate-950">
                  {activeFacility.title}
                </h3>
              </div>

              <p className="text-slate-900 text-xs sm:text-sm md:text-base leading-relaxed font-semibold">
                {activeFacility.description}
              </p>

              {/* Checkpoints */}
              <div className="space-y-2.5 pt-2">
                {activeFacility.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-emerald-300 shadow-2xs">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-950">{item}</span>
                  </div>
                ))}
              </div>

              {/* Book Visit Button */}
              <div className="pt-3">
                <button
                  onClick={() => {
                    playChimeSound();
                    onOpenTour();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-comic font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>See This Facility in Person (Book Tour)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
