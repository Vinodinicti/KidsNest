import React from 'react';
import { HeartHandshake, Sparkles, BookOpen, Award } from 'lucide-react';
import { playPopSound } from '../utils/audio';
import { schoolData } from '../data/schoolData';

export const Teachers = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-pink-300">
            <HeartHandshake className="w-3.5 h-3.5 text-pink-600" />
            <span>Nurturing Second Mothers</span>
          </div>
          <h2 className="font-comic text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500">Loving Mentors</span> 👩‍🏫
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium max-w-2xl mx-auto">
            Certified early childhood educators, speech therapists, and Montessori masters dedicated to every child's physical, emotional, and cognitive growth.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {schoolData.teachers.map((teacher, idx) => (
            <div
              key={teacher.name}
              className="bg-gradient-to-b from-amber-50/40 via-white to-pink-50/30 rounded-2xl sm:rounded-3xl p-3 sm:p-5 border-2 border-amber-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 card-pop flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square mb-2.5 sm:mb-4 bg-slate-100">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 bg-white/90 backdrop-blur-sm text-slate-950 text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow">
                    {teacher.experience}
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-comic font-bold text-xs sm:text-lg md:text-xl text-slate-950 leading-tight">
                  {teacher.name}
                </h3>
                <p className="text-[10px] sm:text-xs font-semibold text-amber-800 mt-0.5">
                  {teacher.role}
                </p>

                {/* Superpower Badge */}
                <div className="mt-2 sm:mt-3 bg-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-amber-200/80 text-[10px] sm:text-xs text-slate-900 space-y-0.5 sm:space-y-1 shadow-2xs">
                  <div className="font-bold text-[9px] sm:text-[11px] text-pink-600 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-pink-500" /> Superpower:
                  </div>
                  <div className="font-semibold text-slate-950 line-clamp-1">{teacher.superpower}</div>
                </div>

                {/* Quote */}
                <p className="text-[10px] sm:text-xs text-slate-800 italic mt-2 sm:mt-3 leading-relaxed line-clamp-2">
                  "{teacher.quote}"
                </p>
              </div>

              {/* Storybook link */}
              <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold text-slate-900">
                <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 flex-shrink-0" />
                <span className="truncate">Fav: <strong>{teacher.favoriteStory}</strong></span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
