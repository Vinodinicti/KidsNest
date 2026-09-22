import React, { useState, useEffect } from 'react';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, Baby, Calendar } from 'lucide-react';
import { playChimeSound, playBoingSound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import { schoolData } from '../data/schoolData';

export const AgeCalculator = ({ onOpenAdmissions }) => {
  const [birthDate, setBirthDate] = useState('2022-04-15');
  const [calculatedProgram, setCalculatedProgram] = useState(null);
  const [ageDetails, setAgeDetails] = useState({ years: 3, months: 2 });

  const calculateAgeAndProgram = (selectedDate) => {
    if (!selectedDate) return;
    const bDate = new Date(selectedDate);
    const today = new Date();
    
    let totalMonths = (today.getFullYear() - bDate.getFullYear()) * 12 + (today.getMonth() - bDate.getMonth());
    if (today.getDate() < bDate.getDate()) {
      totalMonths--;
    }

    if (totalMonths < 0) totalMonths = 0;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const ageInDecimal = years + months / 12;

    setAgeDetails({ years, months });

    let match = null;
    if (ageInDecimal < 1.5) {
      match = {
        name: "Toddler Nest (Early Registration)",
        status: "Eligible Soon (Starts at 18 months)",
        badge: "Infant & Toddler Track",
        color: "bg-amber-500",
        message: "Your little one will soon be ready for Toddler Nest! Pre-register now to reserve an early sensory bay.",
        focus: ["Sensory stimulation", "Gentle socialization", "Rhythm & Music"],
      };
    } else if (ageInDecimal >= 1.5 && ageInDecimal < 2.5) {
      match = {
        name: "Toddler Nest",
        status: "Perfect Match! 🧸",
        badge: "1.5 – 2.5 Years",
        color: "bg-amber-500",
        message: "Ideal for gentle transition into social interaction, sensory discovery bins, and motor coordination.",
        focus: ["Sensory exploration", "Speech development", "Potty training & motor play"],
      };
    } else if (ageInDecimal >= 2.5 && ageInDecimal < 3.5) {
      match = {
        name: "Playgroup / Pre-Nursery",
        status: "Perfect Match! 🎨",
        badge: "2.5 – 3.5 Years",
        color: "bg-sky-500",
        message: "Ideal for messy art, phonics rhymes, peer sharing, and gross motor outdoor activities.",
        focus: ["Jolly Phonics foundation", "Messy play & finger art", "Social empathy"],
      };
    } else if (ageInDecimal >= 3.5 && ageInDecimal < 4.5) {
      match = {
        name: "Nursery Junior",
        status: "Perfect Match! 🚀",
        badge: "3.5 – 4.5 Years",
        color: "bg-pink-500",
        message: "Ideal for foundational reading, arithmetic games, little STEAM experiments, and stage confidence.",
        focus: ["Reading readiness", "Number puzzles", "Little STEM lab"],
      };
    } else if (ageInDecimal >= 4.5 && ageInDecimal <= 6.5) {
      match = {
        name: "Kindergarten (KG / UKG)",
        status: "Perfect Match! 🎓",
        badge: "4.5 – 6.0 Years",
        color: "bg-purple-500",
        message: "Ideal for primary school readiness, creative writing, logical reasoning, and world curiosity.",
        focus: ["Sentence reading & writing", "Mental math", "Non-screen coding board games"],
      };
    } else {
      match = {
        name: "After-School & Activity Nest",
        status: "Specialty Club Match! 🌟",
        badge: "6.0+ Years",
        color: "bg-emerald-500",
        message: "Your child is ready for our exciting evening hobby clubs (Taekwondo, Chess, Robotics & Theater).",
        focus: ["Hobby mastery", "Homework mentorship", "Sports & Arts"],
      };
    }

    setCalculatedProgram(match);
  };

  const handleDateChange = (e) => {
    const val = e.target.value;
    setBirthDate(val);
    calculateAgeAndProgram(val);
    playChimeSound();
  };

  React.useEffect(() => {
    calculateAgeAndProgram(birthDate);
  }, []);

  return (
    <section id="calculator" className="py-2 sm:py-4 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border-2 sm:border-4 border-amber-300 shadow-xl relative overflow-hidden">
          
          {/* Decorative Corner Bubbles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-200/40 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200/40 rounded-full blur-xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Column: Inputs */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-bold px-3.5 py-1 rounded-full border border-amber-300">
                <Calculator className="w-3.5 h-3.5 text-amber-600" />
                <span>Smart Program Finder</span>
              </div>

              <h2 className="font-comic text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 leading-tight">
                Find the <span className="text-amber-500">Perfect Grade</span> for Your Child
              </h2>

              <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                Enter your child's birth date to instantly discover their ideal Montessori class, curriculum roadmap, and batch timings.
              </p>

              {/* Date Input */}
              <div className="bg-amber-50/80 p-4 rounded-2xl border-2 border-amber-200 space-y-2">
                <label className="block text-xs font-bold text-slate-950 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>Select Child's Date of Birth:</span>
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={handleDateChange}
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full bg-white border-2 border-amber-300 rounded-xl px-3.5 py-2.5 font-bold text-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
                />
              </div>

              {/* Calculated Age Preview Badge */}
              <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-400 text-white flex items-center justify-center font-bold text-lg">
                  👶
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Current Age Estimate</div>
                  <div className="font-comic font-bold text-base sm:text-lg text-slate-950">
                    {ageDetails.years} Years & {ageDetails.months} Months old
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Matched Program Card */}
            <div className="lg:col-span-6">
              {calculatedProgram && (
                <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-6 border-2 border-amber-300 shadow-lg space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {calculatedProgram.status}
                    </span>
                    <span className="text-xs font-bold text-slate-900 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {calculatedProgram.badge}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">Recommended Stage</div>
                    <h3 className="font-comic font-bold text-2xl sm:text-3xl text-slate-950 mt-0.5">
                      {calculatedProgram.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold">
                    {calculatedProgram.message}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-xs font-bold text-slate-950">Key Focus Highlights:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {calculatedProgram.focus.map((item, i) => (
                        <span key={i} className="bg-white text-slate-950 text-xs font-bold px-2.5 py-1 rounded-lg border border-amber-300 shadow-2xs">
                          ✨ {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => {
                        playBoingSound();
                        triggerConfetti();
                        onOpenAdmissions(calculatedProgram.name);
                      }}
                      className="w-full py-3 rounded-2xl font-comic font-bold text-sm text-white bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 shadow-md shadow-orange-500/25 hover:shadow-lg hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Apply for {calculatedProgram.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
