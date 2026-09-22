import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { playChimeSound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export const RunningStats = () => {
  const [counts, setCounts] = useState({
    students: 0,
    instructors: 0,
    clubs: 0,
    records: 0,
  });

  const [displayedText, setDisplayedText] = useState(["", "", "", ""]);

  const statItems = [
    {
      id: 'students',
      target: 1500,
      suffix: '+',
      label: 'Happy Students',
      icon: '🎓',
      color: 'from-amber-500 via-orange-500 to-yellow-500',
      border: 'border-amber-300 hover:border-amber-500',
      bg: 'bg-gradient-to-b from-amber-50/70 via-white to-yellow-50/40',
      phrases: ['Joyful Little Learners', '2,500+ Alumni', 'Active Preschoolers'],
    },
    {
      id: 'instructors',
      target: 25,
      suffix: '+',
      label: 'Certified Mentors',
      icon: '👩‍🏫',
      color: 'from-pink-500 via-rose-500 to-red-500',
      border: 'border-pink-300 hover:border-pink-500',
      bg: 'bg-gradient-to-b from-pink-50/70 via-white to-rose-50/40',
      phrases: ['Montessori Certified', 'CPR Trained', 'Loving 8:1 Ratio'],
    },
    {
      id: 'clubs',
      target: 5,
      suffix: '+ Clubs',
      label: 'Specialty Clubs',
      icon: '🥋',
      color: 'from-purple-500 via-violet-500 to-indigo-500',
      border: 'border-purple-300 hover:border-purple-500',
      bg: 'bg-gradient-to-b from-purple-50/70 via-white to-violet-50/40',
      phrases: ['Silambam & Karate', 'Pencil Sketching', 'Classical Dance'],
    },
    {
      id: 'records',
      target: 100,
      suffix: '%',
      label: 'Record Breakers',
      icon: '🏆',
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
      border: 'border-emerald-300 hover:border-emerald-500',
      bg: 'bg-gradient-to-b from-emerald-50/70 via-white to-teal-50/40',
      phrases: ['India Book of Records', 'Memory Recall Stars', 'Confident Kids'],
    },
  ];

  // Running Number Count-Up Animation
  useEffect(() => {
    let startTimestamp = null;
    const duration = 1800;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        students: Math.floor(easeOut * 1500),
        instructors: Math.floor(easeOut * 25),
        clubs: Math.floor(easeOut * 5),
        records: Math.floor(easeOut * 100),
      });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, []);

  // Typewriter Effect for subtitles
  useEffect(() => {
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer = null;

    const tick = () => {
      const currentPhrases = statItems.map(item => item.phrases[phraseIdx % item.phrases.length]);
      
      if (!isDeleting) {
        charIdx++;
        setDisplayedText(currentPhrases.map(p => p.slice(0, charIdx)));
        if (charIdx === Math.max(...currentPhrases.map(p => p.length))) {
          isDeleting = true;
          timer = setTimeout(tick, 2000);
          return;
        }
        timer = setTimeout(tick, 60);
      } else {
        charIdx--;
        setDisplayedText(currentPhrases.map(p => p.slice(0, charIdx)));
        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx++;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, 35);
      }
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (e) => {
    playChimeSound();
    const rect = e.currentTarget.getBoundingClientRect();
    triggerConfetti(
      (rect.left + rect.width / 2) / window.innerWidth,
      (rect.top + rect.height / 2) / window.innerHeight
    );
  };

  return (
    <div className="mt-8 sm:mt-12 pt-6 border-t border-amber-200/60">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {statItems.map((stat, idx) => {
          const currentCount = counts[stat.id] || 0;
          const formattedCount = stat.id === 'students' 
            ? `${currentCount.toLocaleString()}${stat.suffix}`
            : `${currentCount}${stat.suffix}`;

          return (
            <div 
              key={stat.id}
              onClick={handleCardClick}
              className={`${stat.bg} rounded-2xl p-3 sm:p-4 border-2 ${stat.border} shadow-sm hover:shadow-lg transition-all duration-300 card-pop text-center group cursor-pointer relative overflow-hidden flex flex-col justify-between`}
              title="Tap to celebrate!"
            >
              {/* Top Row: Running Number + Icon */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">
                  {stat.icon}
                </span>
                <span className={`text-xl sm:text-2xl md:text-3xl font-comic font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} tracking-tight`}>
                  {formattedCount}
                </span>
              </div>

              {/* Label */}
              <div className="text-xs sm:text-sm font-comic font-bold text-slate-950 leading-tight my-0.5">
                {stat.label}
              </div>

              {/* Compact Live Typewriter Ribbon */}
              <div className="pt-1.5 mt-1 border-t border-slate-200/60 flex items-center justify-center min-h-[20px]">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-900 truncate">
                  {displayedText[idx] || "..."}
                  <span className="inline-block w-1 h-2.5 bg-amber-500 animate-pulse ml-0.5"></span>
                </span>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
