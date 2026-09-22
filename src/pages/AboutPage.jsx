import React from 'react';
import { Sparkles, Shield, Heart, Award, Users, BookOpen, CheckCircle, ArrowRight, Flag, Compass, Smile, Star } from 'lucide-react';
import { Facilities } from '../components/Facilities';
import { schoolData } from '../data/schoolData';
import { playChimeSound, playPopSound } from '../utils/audio';
import { Link } from 'react-router-dom';

export const AboutPage = ({ onOpenTour }) => {
  const milestones = [
    {
      year: '2015',
      title: 'The Nest Begins',
      desc: 'Founded with 1 vibrant classroom, 12 curious toddlers, and a vision of joy-led early childhood learning.',
      emoji: '🌱',
      badgeBg: 'bg-emerald-600 text-white shadow',
      cardBg: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/80 border-emerald-300 hover:border-emerald-500 shadow-emerald-600/15',
      stepColor: 'text-emerald-900 border-emerald-300 bg-emerald-100/70',
      titleColor: 'text-emerald-950',
    },
    {
      year: '2018',
      title: 'Montessori & STEAM Lab',
      desc: 'Expanded with dedicated tactile sensory labs, splash pools, and an 8:1 child-to-teacher ratio.',
      emoji: '🧪',
      badgeBg: 'bg-blue-600 text-white shadow',
      cardBg: 'bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100/80 border-sky-300 hover:border-sky-500 shadow-sky-600/15',
      stepColor: 'text-blue-900 border-blue-300 bg-blue-100/70',
      titleColor: 'text-blue-950',
    },
    {
      year: '2021',
      title: 'After-School Academy Launch',
      desc: 'Introduced Silambam, Karate, Fine Arts, and India Book of Records specialty training tracks.',
      emoji: '🥋',
      badgeBg: 'bg-purple-600 text-white shadow',
      cardBg: 'bg-gradient-to-br from-purple-50 via-fuchsia-50 to-indigo-100/80 border-purple-300 hover:border-purple-500 shadow-purple-600/15',
      stepColor: 'text-purple-900 border-purple-300 bg-purple-100/70',
      titleColor: 'text-purple-950',
    },
    {
      year: 'Present',
      title: '2,500+ Proud Little Graduates',
      desc: 'Recognized as the premier early education center with a warm community of loving educators and happy families.',
      emoji: '🎓',
      badgeBg: 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow',
      cardBg: 'bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100/80 border-amber-300 hover:border-rose-400 shadow-orange-600/15',
      stepColor: 'text-amber-900 border-amber-300 bg-amber-100/70',
      titleColor: 'text-amber-950',
    },
  ];

  const pillarStyles = [
    {
      cardBg: 'bg-gradient-to-br from-pink-50 via-rose-50 to-amber-100/75 border-pink-300 hover:border-pink-500 shadow-pink-500/15',
      iconBg: 'bg-gradient-to-br from-pink-400 to-rose-500 text-white shadow-pink-400/30',
      badgeBg: 'bg-pink-100 text-pink-900 border-pink-200',
      tag: 'Sensory Discovery',
      anim: 'group-hover:scale-125 group-hover:rotate-12 group-hover:translate-x-1',
      titleColor: 'text-pink-950 group-hover:text-pink-700',
    },
    {
      cardBg: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-100/75 border-indigo-300 hover:border-indigo-500 shadow-indigo-500/15',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-indigo-400/30',
      badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
      tag: 'Strength & Focus',
      anim: 'group-hover:scale-125 group-hover:-rotate-12 group-hover:-translate-y-1',
      titleColor: 'text-indigo-950 group-hover:text-indigo-700',
    },
    {
      cardBg: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100/75 border-amber-300 hover:border-amber-500 shadow-amber-500/15',
      iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-orange-400/30',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
      tag: 'Prestige & Records',
      anim: 'group-hover:scale-125 group-hover:rotate-6 group-hover:-translate-y-2',
      titleColor: 'text-amber-950 group-hover:text-amber-700',
    },
    {
      cardBg: 'bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-100/75 border-purple-300 hover:border-purple-500 shadow-purple-500/15',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-purple-400/30',
      badgeBg: 'bg-purple-100 text-purple-900 border-purple-200',
      tag: 'Expression & Stage',
      anim: 'group-hover:scale-125 group-hover:-rotate-6 group-hover:translate-x-1.5',
      titleColor: 'text-purple-950 group-hover:text-purple-700',
    },
  ];

  return (
    <div className="pt-24 pb-16 space-y-10 sm:space-y-14">
      
      {/* 1. About Hero Header */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>About Kids Nest Academy</span>
        </div>
        <h1 className="font-comic text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 leading-tight">
          Nurturing Wonder, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500">Sparking Greatness</span> 🐣✨
        </h1>
        <p className="text-slate-900 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-semibold">
          {schoolData.about.philosophy}
        </p>
      </section>

      {/* 2. Vision & Mission Cards */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 gap-3 sm:gap-8 items-stretch">
          
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-amber-500/10 via-yellow-50 to-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 border-2 sm:border-3 border-amber-300 shadow-md sm:shadow-lg space-y-3 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-2 sm:space-y-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-500 text-white flex items-center justify-center text-lg sm:text-2xl shadow-md">
                🌱
              </div>
              <h2 className="font-comic font-bold text-sm sm:text-2xl md:text-3xl text-slate-950 leading-tight">
                Our Educational Vision
              </h2>
              <p className="text-[11px] sm:text-sm md:text-base text-slate-900 leading-relaxed font-semibold">
                {schoolData.about.history}
              </p>
            </div>
            <div className="bg-white/90 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-amber-300 text-[10px] sm:text-xs font-bold text-amber-950 flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs sm:text-sm flex-shrink-0">🌟</span>
              <span className="leading-tight">100% focused on early neural wiring & curiosity.</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-pink-500/10 via-rose-50 to-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 border-2 sm:border-3 border-pink-300 shadow-md sm:shadow-lg space-y-3 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-2 sm:space-y-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-500 text-white flex items-center justify-center text-lg sm:text-2xl shadow-md">
                🎯
              </div>
              <h2 className="font-comic font-bold text-sm sm:text-2xl md:text-3xl text-slate-950 leading-tight">
                Our Core Mission
              </h2>
              <p className="text-[11px] sm:text-sm md:text-base text-slate-900 leading-relaxed font-semibold">
                {schoolData.about.mission}
              </p>
            </div>
            <div className="bg-white/90 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-pink-300 text-[10px] sm:text-xs font-bold text-pink-950 flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs sm:text-sm flex-shrink-0">🛡️</span>
              <span className="leading-tight">Zero pressure testing. 100% joy & child-led exploration.</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Our Journey & Milestones Timeline */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-8 sm:p-12 border-3 border-amber-200 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-200 text-amber-950 text-xs font-bold px-3 py-1 rounded-full">
              <Flag className="w-3.5 h-3.5 text-amber-800" />
              <span>Our Growth Journey</span>
            </div>
            <h2 className="font-comic text-3xl sm:text-4xl font-bold text-slate-950">
              The Story Behind Kids Nest 🐣
            </h2>
            <p className="text-xs sm:text-sm text-slate-900 font-semibold">
              From our humble beginnings to educating thousands of bright young leaders.
            </p>
          </div>

          {/* Growth Journey Grid (2-column on mobile) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className={`rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border-2 sm:border-3 shadow-md sm:shadow-lg flex flex-col justify-between space-y-2.5 sm:space-y-4 card-pop transition-all hover:scale-105 ${m.cardBg}`}
              >
                <div className="space-y-1.5 sm:space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${m.badgeBg}`}>
                      {m.year}
                    </span>
                    <span className="text-xl sm:text-3xl filter drop-shadow-sm">{m.emoji}</span>
                  </div>
                  <h3 className={`font-comic font-bold text-xs sm:text-lg leading-tight ${m.titleColor}`}>
                    {m.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-900 leading-snug sm:leading-relaxed font-semibold line-clamp-3 sm:line-clamp-none">
                    {m.desc}
                  </p>
                </div>
                <div className={`text-[9px] sm:text-[11px] font-bold tracking-wider uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl border flex items-center justify-between ${m.stepColor}`}>
                  <span>Step {idx + 1} of 4</span>
                  <span>✨</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 4 Foundational Pillars */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-1.5 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-pink-200 via-purple-200 to-amber-200 text-slate-950 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border border-amber-300 shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-600" />
            <span>Core Educational Philosophy</span>
          </div>
          <h2 className="font-comic text-2xl sm:text-4xl font-bold text-slate-950">
            Our 4 Foundational Pillars
          </h2>
          <p className="text-slate-900 text-xs sm:text-sm font-semibold">
            The values that guide every lesson, smile, meal, and story circle.
          </p>
        </div>

        {/* 4 Pillars Grid (2-column on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {schoolData.about.values.map((val, idx) => {
            const style = pillarStyles[idx % pillarStyles.length];
            return (
              <div
                key={val.title}
                onClick={() => playPopSound()}
                className={`rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border-2 sm:border-3 shadow-md sm:shadow-lg flex flex-col justify-between space-y-2.5 sm:space-y-4 card-pop transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] cursor-pointer group ${style.cardBg}`}
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-sm sm:shadow-md transition-transform duration-300 ${style.iconBg} ${style.anim}`}>
                      <span>{val.emoji}</span>
                    </div>
                    <span className={`text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border shadow-xs ${style.badgeBg} truncate max-w-[70px] sm:max-w-none`}>
                      {style.tag}
                    </span>
                  </div>
                  <h3 className={`font-comic font-bold text-xs sm:text-lg leading-tight transition-colors ${style.titleColor}`}>
                    {val.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-900 leading-snug sm:leading-relaxed font-semibold line-clamp-3 sm:line-clamp-none">
                    {val.desc}
                  </p>
                </div>
                <div className="pt-1.5 sm:pt-2 border-t border-black/5 flex items-center justify-between text-[9px] sm:text-[11px] font-bold text-slate-900">
                  <span className="opacity-80">Pillar 0{idx + 1}</span>
                  <span className="group-hover:translate-x-1 transition-transform">✨</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Facilities & Campus Standards */}
      <Facilities onOpenTour={onOpenTour} />

      {/* 7. Bottom Campus Tour CTA */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 text-white text-center shadow-xl space-y-2 sm:space-y-4">
          <h2 className="font-comic font-bold text-base sm:text-3xl md:text-4xl leading-tight">
            Want to experience the warmth of Kids Nest in person? 🐣
          </h2>
          <p className="text-white/95 text-xs sm:text-base leading-snug max-w-xl mx-auto font-medium">
            Book a private guided walk with our director, tour our splash pool, Montessori lab, and meet our teachers.
          </p>
          <div className="pt-1 sm:pt-2 flex flex-row justify-center items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                playChimeSound();
                onOpenTour();
              }}
              className="px-3.5 sm:px-8 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white text-slate-900 font-comic font-bold text-xs sm:text-sm shadow-md hover:bg-amber-100 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              Book Guided Tour 📍
            </button>
            <Link
              to="/enquiry"
              onClick={() => playChimeSound()}
              className="px-3.5 sm:px-8 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl bg-slate-900/40 border border-white/80 text-white font-comic font-bold text-xs sm:text-sm hover:bg-slate-900/60 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              Contact Us Online 💬
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
