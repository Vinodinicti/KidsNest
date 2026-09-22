import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, BookOpen, Star, X } from 'lucide-react';
import { playChimeSound, playBoingSound, playPopSound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import { schoolData } from '../data/schoolData';

export const Programs = ({ onOpenAdmissions }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const openProgramModal = (prog) => {
    playPopSound();
    setSelectedProgram(prog);
  };

  return (
    <section id="programs" className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-amber-300">
            <span>🐥</span>
            <span>Nurturing Step by Step</span>
          </div>
          <h2 className="font-comic text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950">
            Our Loving <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500">Learning Programs</span>
          </h2>
          <p className="text-slate-900 text-sm sm:text-base font-semibold max-w-2xl mx-auto">
            Thoughtfully tailored developmental milestones combining Montessori sensory exploration, phonics, joyful arithmetic, and creative arts.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {schoolData.programs.map((prog, idx) => (
            <div
              key={prog.id}
              className={`rounded-3xl bg-white border-2 p-5 sm:p-6 shadow-lg shadow-amber-900/5 card-pop flex flex-col justify-between relative overflow-hidden group hover:border-amber-400 ${prog.color.split(' ')[0]}`}
            >
              {/* Top Age Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-100 text-amber-950 text-xs font-bold px-3 py-1 rounded-full border border-amber-300">
                  {prog.ageRange}
                </span>
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                  {prog.emoji}
                </span>
              </div>

              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-4 bg-slate-100">
                <img
                  src={prog.image}
                  alt={prog.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  {prog.badge}
                </div>
              </div>

              {/* Program Details */}
              <div className="space-y-3 flex-1">
                <h3 className="font-comic font-bold text-xl sm:text-2xl text-slate-950 group-hover:text-amber-600 transition-colors">
                  {prog.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>{prog.timing}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-900 line-clamp-2 leading-relaxed font-semibold">
                  {prog.description}
                </p>

                {/* Key Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {prog.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-amber-50 text-amber-950 text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-amber-200"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => openProgramModal(prog)}
                  className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 hover:underline flex items-center gap-1"
                >
                  <span>Explore Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    playBoingSound();
                    onOpenAdmissions(prog.name);
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all"
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detailed Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-300 relative max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{selectedProgram.emoji}</span>
              <div>
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {selectedProgram.ageRange}
                </span>
                <h3 className="font-comic font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                  {selectedProgram.name}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {selectedProgram.description}
            </p>

            {/* Detailed Features */}
            <div className="space-y-4 mb-6">
              <h4 className="font-comic font-bold text-base text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Curriculum Pillars & Activities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProgram.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-amber-50/70 p-3 rounded-xl border border-amber-200/60">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Routine Preview */}
            <div className="bg-sky-50 rounded-2xl p-4 border border-sky-200 mb-6">
              <h4 className="font-bold text-sm text-sky-900 mb-2 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Typical Daily Routine ({selectedProgram.timing})</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <div className="font-bold text-sky-950">Welcome Circle</div>
                  <div className="text-[10px] text-slate-900 font-semibold">Rhymes & Phonics</div>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <div className="font-bold text-sky-950">Sensory Lab</div>
                  <div className="text-[10px] text-slate-900 font-semibold">Montessori Tasks</div>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <div className="font-bold text-sky-950">Fruit Snack</div>
                  <div className="text-[10px] text-slate-900 font-semibold">Table Etiquette</div>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <div className="font-bold text-sky-950">Outdoor Arena</div>
                  <div className="text-[10px] text-slate-900 font-semibold">Sand & Ball Play</div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-5 py-2.5 rounded-xl font-bold text-sm text-slate-950 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  playBoingSound();
                  const progName = selectedProgram.name;
                  setSelectedProgram(null);
                  onOpenAdmissions(progName);
                }}
                className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 shadow-lg shadow-orange-500/30 hover:scale-105 transition-all"
              >
                Apply for {selectedProgram.name} ➔
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
