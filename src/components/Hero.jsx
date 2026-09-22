import React, { useState } from 'react';
import { Sparkles, Play, Shield, Award, Users, HeartHandshake, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { playChimeSound, playBoingSound, playPopSound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import { schoolData } from '../data/schoolData';
import { RunningStats } from './RunningStats';

export const Hero = ({ onOpenTour, onOpenAdmissions, onWatchReel }) => {
  const [mascotMood, setMascotMood] = useState(0);
  const mascotGreetings = [
    "Hi Little Friends! Welcome to Kids Nest! 🐣",
    "Ready for colors, science & sandbox fun? 🎨",
    "Did you know? We have splash pool parties! 💦",
    "Click me again for more joyful surprises! ⭐",
  ];

  const handleMascotClick = (e) => {
    playBoingSound();
    const rect = e.currentTarget.getBoundingClientRect();
    triggerConfetti(
      (rect.left + rect.width / 2) / window.innerWidth,
      (rect.top + rect.height / 2) / window.innerHeight
    );
    setMascotMood((prev) => (prev + 1) % mascotGreetings.length);
  };

  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing Sun */}
        <div className="absolute -top-12 -right-12 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-amber-300/40 via-yellow-200/30 to-transparent blur-3xl animate-pulse"></div>
      </div>

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Main Catchy Heading */}
            <h1 className="font-comic text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950 leading-snug sm:leading-[1.15]">
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500">Little Minds</span> Spread{' '}
              <span className="relative inline-block text-sky-600">
                Big Wings!
                <svg className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full" viewBox="0 0 250 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 14C50 4 150 4 247 14" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-xs sm:text-base md:text-xl text-slate-900 max-w-2xl mx-auto lg:mx-0 font-semibold leading-relaxed">
              Step into an enchanted world of joyful learning! At <strong className="text-amber-700">Kids Nest</strong>, our playful Montessori curriculum, 
              curiosity labs, and warm caring mentors nurture every toddler into a confident, creative explorer.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
              <button
                onClick={() => {
                  playChimeSound();
                  onOpenAdmissions();
                }}
                className="group px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-comic font-bold text-xs sm:text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 shadow-md sm:shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
              >
                <span>Enroll My Little One</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  playChimeSound();
                  onOpenTour();
                }}
                className="px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-comic font-bold text-xs sm:text-base text-slate-950 bg-white border-2 border-amber-300 hover:border-amber-500 hover:bg-amber-50 shadow-sm sm:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
              >
                <span>Book Campus Visit</span>
                <span className="text-amber-600">📍</span>
              </button>
            </div>

            {/* Trust Highlights Checklist - Clean 3-Column Single Row */}
            <div className="pt-2 sm:pt-3 grid grid-cols-3 gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs font-bold text-slate-950">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-1 sm:gap-2 bg-white/90 px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-amber-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                <span className="leading-tight">100% Safe & CCTV</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-1 sm:gap-2 bg-white/90 px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-amber-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 flex-shrink-0" />
                <span className="leading-tight">1:8 Teacher Ratio</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-1 sm:gap-2 bg-white/90 px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-amber-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-600 flex-shrink-0" />
                <span className="leading-tight">Montessori Lab</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Mascot + Visual Showcase Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Main Media Showcase Card */}
            <div className="relative w-full max-w-[560px] mx-auto bg-white rounded-[28px] p-2.5 sm:p-3 shadow-[0_18px_45px_rgba(251,146,60,0.12)] border-[3px] border-amber-200/80 card-pop">
              
              {/* Video/Image Showcase Container */}
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/3] bg-slate-900 group">
                <video
                  src="/assets/hero-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20 opacity-0 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="hidden">Campus Life</span>
                </div>

                {/* Center Explore Button Trigger */}
                <button
                  onClick={() => {
                    playChimeSound();
                    onOpenTour();
                  }}
                  className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-500 to-pink-500 text-white flex items-center justify-center shadow-xl shadow-pink-500/50 hover:scale-110 active:scale-95 transition-all group-hover:ring-4 group-hover:ring-white/40 opacity-0 pointer-events-none"
                  title="Explore Campus Tour"
                >
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </button>

                {/* Bottom Details on Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 pointer-events-none">
                  <p className="font-comic font-bold text-sm sm:text-base leading-tight">
                    Joyful Play-Way Learning Every Day 🎨
                  </p>
                  <p className="text-[11px] text-amber-200 flex items-center gap-1 mt-0.5 font-medium">
                    <span>✨ Splash Pool</span> • <span>Montessori Labs</span> • <span>Music & Theatre</span>
                  </p>
                </div>
              </div>

              {/* Quick Card Footer Badges */}
              <div className="mt-3 grid grid-cols-2 gap-2 opacity-0 pointer-events-none">
                <div className="bg-amber-50 rounded-xl p-2.5 border border-amber-200 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-950 flex items-center justify-center font-bold text-sm">
                    🌟
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-950">EYFS + Play</div>
                    <div className="text-[10px] text-slate-800 font-semibold">Holistic Curriculum</div>
                  </div>
                </div>

                <div className="bg-sky-50 rounded-xl p-2.5 border border-sky-200 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-200 text-sky-950 flex items-center justify-center font-bold text-sm">
                    🧸
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-950">Age 1.5 - 6 Yrs</div>
                    <div className="text-[10px] text-slate-800 font-semibold">Playgroup to KG</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Global Statistics Ribbon with Live Running Numbers & Typewriter Animations */}
        <RunningStats />

      </div>
    </section>
  );
};
