import React, { useState, useEffect } from 'react';
import { schoolData } from '../data/schoolData';
import { Sparkles } from 'lucide-react';

export const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out slightly before 2 seconds for a smooth transition
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1700);

    // Completely unmount splash screen after 2 seconds
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#3772b6] via-[#2a5b94] to-[#1e416d] text-white transition-opacity duration-300 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="flex flex-col items-center text-center p-6 space-y-4 animate-in zoom-in-95 duration-500">
        {/* Logo Container */}
        <div className="relative bg-white p-5 rounded-3xl border-4 border-amber-300 shadow-2xl animate-bounce">
          <img
            src={schoolData.logo}
            alt={`${schoolData.name} Logo`}
            className="h-24 sm:h-32 w-auto object-contain"
          />
        </div>

        {/* Company Name */}
        <div className="space-y-1">
          <h1 className="font-comic font-bold text-4xl sm:text-6xl tracking-tight text-white drop-shadow-md">
            Kids<span className="text-amber-300">Nest</span>
          </h1>
          <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-900 text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-md mt-1">
            <Sparkles className="w-4 h-4 text-slate-900" /> Pre-School & Academy
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-lg font-medium text-amber-100 max-w-md tracking-wide pt-1">
          {schoolData.tagline}
        </p>

        {/* Pulse Loading Indicator */}
        <div className="flex items-center gap-2 pt-6">
          <span className="w-3 h-3 bg-amber-300 rounded-full animate-ping"></span>
          <span className="w-3 h-3 bg-amber-300 rounded-full animate-ping delay-150"></span>
          <span className="w-3 h-3 bg-amber-300 rounded-full animate-ping delay-300"></span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
