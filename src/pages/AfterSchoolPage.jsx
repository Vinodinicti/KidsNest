import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Clock, CheckCircle2, ArrowRight, Award, Shield, Users, Heart, Phone, Target, Brain } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import { playBoingSound, playChimeSound, playPopSound } from '../utils/audio';

export const AfterSchoolPage = ({ onOpenTour }) => {
  const navigate = useNavigate();

  const handleClubEnquiry = (clubTitle) => {
    playBoingSound();
    navigate('/enquiry', { state: { subject: `After-School Activity: ${clubTitle}` } });
  };

  return (
    <div className="pt-24 pb-16 space-y-10 sm:space-y-14">
      
      {/* Header */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 via-orange-100 to-amber-100 text-red-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-red-300">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Open to all Kids 4+ Years • Certified Instructors</span>
          </div>
          <h1 className="font-comic text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 leading-tight">
            After School <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500">Activities</span> 🥋🎨
          </h1>
          <div className="font-comic text-lg sm:text-xl text-amber-900 font-bold">
            LEARN • GROW • ACHIEVE
          </div>
          <p className="text-slate-900 text-sm sm:text-base max-w-2xl mx-auto font-semibold">
            Enrich your child's skills, boost confidence and discover their true potential!
          </p>
        </div>

        {/* Main Activities Collage Showcase Banner */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border-3 sm:border-4 border-amber-300 group">
          <img 
            src={schoolData.afterSchoolHero} 
            alt="Kids Nest After School Activities - Silambam, Pencil Sketch, Karate, Dance" 
            className="w-full max-h-[360px] sm:max-h-[420px] md:max-h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
        {/* Quick Registration & Helpline Bar */}
        <div className="max-w-4xl mx-auto bg-white py-3 px-5 sm:px-6 rounded-2xl border-2 border-amber-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <div className="text-xs font-bold text-slate-950 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <Phone className="w-4 h-4 text-red-600" />
              <span>For Registration & Details:</span>
            </div>
            <p className="text-xs text-slate-900 font-semibold">Open to all kids 4+ years from any school</p>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${schoolData.afterSchoolPhone}`} 
              className="font-comic font-bold text-lg sm:text-xl text-red-600 hover:text-red-700 hover:underline"
            >
              📞 {schoolData.afterSchoolPhone}
            </a>
            <a
              href={`https://wa.me/${schoolData.afterSchoolPhone.replace(/[^0-9]/g, '')}?text=Hi%20Kids%20Nest!%20I%20would%20like%20to%20register%20for%20After-School%20activities.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playPopSound()}
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow transition-all flex items-center gap-1"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5 Exact Activities Playlist from Flyer */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-950 text-xs font-bold px-3 py-1 rounded-full border border-amber-300">
            <span>⭐</span>
            <span>Choose Your Specialty Club</span>
          </div>
          <h2 className="font-comic text-3xl sm:text-4xl font-bold text-slate-950">
            Our 5 After-School Activity Tracks
          </h2>
          <p className="text-slate-900 text-xs sm:text-sm font-semibold">
            Explore schedules, monthly fees, and core developmental focus for each activity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolData.afterSchool.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-3xl overflow-hidden border-3 border-amber-200 hover:border-red-400 shadow-xl card-pop flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Full-Width Image Header */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={act.image} 
                    alt={act.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/35 pointer-events-none" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 sm:inset-x-4 flex items-center justify-between">
                    <span className="bg-red-600 text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {act.badge}
                    </span>
                    <span className="text-[11px] font-bold text-slate-950 bg-amber-300 border border-amber-400 px-3 py-1 rounded-full shadow-md">
                      {act.fees}
                    </span>
                  </div>

                  {/* Title & Tagline on Image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl leading-none filter drop-shadow">{act.emoji}</span>
                      <h3 className="font-comic font-bold text-2xl sm:text-3xl text-white drop-shadow-md">
                        {act.title}
                      </h3>
                    </div>
                    <p className="text-xs font-semibold text-amber-200 italic mt-0.5 drop-shadow">
                      "{act.tagline}"
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  {/* Days & Time */}
                  <div className="bg-amber-50/80 p-3 rounded-2xl border border-amber-200 flex items-center justify-between text-xs font-bold text-slate-950">
                    <span>📅 {act.days}</span>
                    <div className="flex items-center gap-1 text-slate-900">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{act.time}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-900 leading-relaxed font-semibold">
                    {act.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-1.5 pt-1">
                    {act.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="p-4 sm:p-6 pt-3 border-t border-slate-200 bg-amber-50/30 space-y-2">
                <a
                  href={`https://wa.me/${schoolData.afterSchoolPhone.replace(/[^0-9]/g, '')}?text=Hi%20Kids%20Nest!%20I%20would%20like%20to%20register%20my%20child%20for%20*${encodeURIComponent(act.title)}*%20(${encodeURIComponent(act.days)},%20${encodeURIComponent(act.time)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPopSound()}
                  className="w-full py-2.5 sm:py-3 rounded-2xl font-comic font-bold text-xs sm:text-sm text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <span>💬 Register via WhatsApp</span>
                </a>

                <button
                  onClick={() => handleClubEnquiry(act.title)}
                  className="w-full py-2 sm:py-2.5 rounded-xl font-comic font-bold text-xs text-slate-800 bg-white hover:bg-amber-50 border border-amber-300 hover:scale-[1.01] active:scale-99 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Fill Web Enquiry Form</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Benefits for Your Child (Directly from Flyer) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-4 border-amber-300 shadow-xl space-y-8">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              Holistic Growth
            </span>
            <h2 className="font-comic font-bold text-3xl sm:text-4xl text-slate-950">
              Benefits For Your Child 🌟
            </h2>
            <p className="text-xs sm:text-sm text-slate-900 max-w-md mx-auto font-semibold">
              Our structured training enhances cognitive, physical, and emotional capabilities.
            </p>
          </div>

          {/* Benefits Grid (2-column on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 text-center">
            {schoolData.afterSchoolBenefits.map((b, idx) => (
              <div key={idx} className={`bg-gradient-to-b from-amber-50/60 to-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border-2 border-amber-200 flex flex-col items-center justify-between space-y-1.5 sm:space-y-2 card-pop ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-200 text-amber-950 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-xs sm:shadow-sm shrink-0">
                  {idx === 0 ? '🎯' : idx === 1 ? '🛡️' : idx === 2 ? '🧠' : idx === 3 ? '🤝' : '💖'}
                </div>
                <h3 className="font-comic font-bold text-xs sm:text-sm text-slate-950 leading-tight">
                  {b.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-900 leading-snug sm:leading-relaxed font-semibold line-clamp-2 sm:line-clamp-none">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
