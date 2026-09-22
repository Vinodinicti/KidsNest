import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Clock, CheckCircle2, ArrowRight, BookOpen, Star, HelpCircle } from 'lucide-react';
import { AgeCalculator } from '../components/AgeCalculator';
import { schoolData } from '../data/schoolData';
import { playBoingSound, playChimeSound, playPopSound } from '../utils/audio';

export const CoursesPage = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(schoolData.programs[0]);

  const handleEnroll = (courseName) => {
    playBoingSound();
    navigate('/admission', { state: { selectedProgram: courseName } });
  };

  return (
    <div className="pt-24 pb-16 space-y-10 sm:space-y-14">
      
      {/* Header */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-amber-300">
          <BookOpen className="w-3.5 h-3.5 text-amber-600" />
          <span>Comprehensive Early Years Curriculum</span>
        </div>
        <h1 className="font-comic text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 leading-tight">
          Our Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500">Courses & Programs</span> 📚
        </h1>
        <p className="text-slate-900 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-semibold">
          Age-appropriate milestones integrating the UK EYFS framework, Montessori materials, phonetic reading fluency, and foundational STEM logic.
        </p>
      </section>

      {/* Interactive Age & Program Calculator */}
      <AgeCalculator onOpenAdmissions={(prog) => handleEnroll(prog)} />

      {/* Deep Dive Course Cards */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-comic text-3xl sm:text-4xl font-bold text-slate-950">
            Explore Detailed Course Syllabi
          </h2>
          <p className="text-slate-900 text-xs sm:text-sm font-semibold">
            Click any course below to inspect curriculum modules, daily routines, and skills developed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {schoolData.programs.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden border-3 border-amber-200 shadow-xl flex flex-col justify-between card-pop group"
            >
              <div>
                {/* Full-Width Cover Image with Overlay Badges */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-slate-100">
                  <img 
                    src={course.image} 
                    alt={course.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/35 pointer-events-none" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 sm:inset-x-4 flex items-center justify-between">
                    <span className="bg-amber-400 text-slate-950 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {course.ageRange}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-950 bg-white/95 backdrop-blur-sm border border-white/50 px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{course.timing}</span>
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center gap-2.5 text-white">
                    <span className="text-3xl sm:text-4xl leading-none filter drop-shadow">{course.emoji}</span>
                    <h3 className="font-comic font-bold text-2xl sm:text-3xl text-white drop-shadow-md">
                      {course.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold">
                    {course.description}
                  </p>

                  {/* Key Pillars */}
                  <div className="space-y-2">
                    <div className="text-[10px] sm:text-xs font-bold text-slate-950 uppercase tracking-wider">
                      Core Learning Modules:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {course.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 bg-amber-50/80 p-2.5 rounded-xl border border-amber-200 text-[11px] sm:text-xs font-semibold text-slate-950">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 bg-amber-50/30">
                <div className="flex flex-wrap gap-1">
                  {course.skills.map((s) => (
                    <span key={s} className="bg-amber-100 text-amber-950 text-[10px] font-bold px-2 py-0.5 rounded-md border border-amber-200">
                      ✓ {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20I%20would%20like%20to%20enquire%20about%20the%20*${encodeURIComponent(course.name)}*%20(${encodeURIComponent(course.ageRange)})%20curriculum%20and%20fees.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playPopSound()}
                    className="px-3 py-2 rounded-xl font-comic font-bold text-[11px] sm:text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1 flex-shrink-0"
                    title="Enquire on WhatsApp"
                  >
                    <span>💬 WhatsApp</span>
                  </a>

                  <button
                    onClick={() => handleEnroll(course.name)}
                    className="px-3.5 py-2 rounded-xl font-comic font-bold text-[11px] sm:text-xs text-white bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1 flex-shrink-0"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
