import React, { useState } from 'react';
import { Camera, Sparkles, X, ZoomIn, Heart } from 'lucide-react';
import { playPopSound, playBoingSound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import { schoolData } from '../data/schoolData';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [zoomedImage, setZoomedImage] = useState(null);

  const categories = ['All', 'Art & Craft', 'Play & Sports', 'Learning', 'Activities', 'Celebrations'];

  const filteredGallery = activeCategory === 'All'
    ? schoolData.gallery
    : schoolData.gallery.filter((item) => item.category === activeCategory);

  const handleZoom = (item) => {
    playPopSound();
    setZoomedImage(item);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-white via-pink-50/30 to-white relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-pink-300">
            <Camera className="w-3.5 h-3.5 text-pink-600" />
            <span>Cherished Smiles & Milestones</span>
          </div>
          <h2 className="font-comic text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950">
            Kids Nest <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500">Photo Moments</span> 📸
          </h2>
          <p className="text-slate-900 text-xs sm:text-sm md:text-base font-semibold max-w-xl mx-auto">
            Glimpses of daily joy, laughter, curious discoveries, and unforgettable celebrations at our campus.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playPopSound();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-comic font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20 scale-105'
                  : 'bg-white text-slate-950 border border-slate-300 hover:bg-pink-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => handleZoom(item)}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-100 cursor-pointer border-2 border-slate-100 hover:border-pink-300 shadow-sm hover:shadow-xl transition-all duration-300 card-pop"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-2.5 sm:p-4 text-white">
                <div className="flex justify-between items-start">
                  <span className="bg-pink-500/80 backdrop-blur-sm text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-comic font-bold text-xs sm:text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[9px] sm:text-[11px] text-pink-200 mt-0.5 hidden sm:block">Click to view in full size ✨</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-4 sm:p-6 shadow-2xl border-4 border-pink-300 relative">
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 mb-4">
              <img
                src={zoomedImage.image}
                alt={zoomedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="bg-pink-100 text-pink-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {zoomedImage.category}
                </span>
                <h3 className="font-comic font-bold text-xl sm:text-2xl text-slate-900 mt-1">
                  {zoomedImage.title}
                </h3>
              </div>

              <button
                onClick={() => {
                  playBoingSound();
                  triggerConfetti();
                }}
                className="px-4 py-2 rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-100 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                <span>Love This Photo!</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
