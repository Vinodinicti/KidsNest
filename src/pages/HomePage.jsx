import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { MiniGame } from '../components/MiniGame';
import { 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Shield, 
  Award, 
  Users, 
  BookOpen, 
  Star, 
  Compass, 
  Smile, 
  CheckCircle2, 
  MessageSquare,
  ThumbsUp,
  Quote,
  Check,
  Pause,
  Play
} from 'lucide-react';
import { schoolData } from '../data/schoolData';
import { playChimeSound, playPopSound, playBoingSound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export const HomePage = ({ onOpenTour }) => {
  const navigate = useNavigate();
  const [activeTrustCard, setActiveTrustCard] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const [likesState, setLikesState] = useState(() => {
    const initial = {};
    schoolData.testimonials.forEach((t) => {
      initial[t.id] = { count: t.likes || 25, liked: false };
    });
    return initial;
  });

  const portals = [
    {
      id: 'about',
      path: '/about',
      title: 'About Kids Nest',
      subtitle: 'Our Story & Loving Mentors',
      description: 'Discover our Montessori philosophy, 8:1 caring ratio, and 360° child safety standards.',
      emoji: '🐣',
      badge: 'Who We Are',
      stats: '10+ Years of Joy',
      cardBg: 'bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 border-amber-300/80 hover:border-white text-white shadow-amber-500/20',
      badgeStyle: 'bg-black/20 text-white border-white/30 backdrop-blur',
      subtitleColor: 'text-amber-100',
      textColor: 'text-amber-50/95',
      buttonColor: 'text-white group-hover:text-amber-100',
      borderColor: 'border-white/25',
    },
    {
      id: 'courses',
      path: '/courses',
      title: 'Academic Courses',
      subtitle: 'Playgroup to UKG & Daycare',
      description: 'Explore EYFS curriculum milestones, daily learning schedules, and interactive Age Calculator.',
      emoji: '📚',
      badge: 'Curriculum',
      stats: 'Ages 1.8 – 6 Yrs',
      cardBg: 'bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 border-blue-300/80 hover:border-white text-white shadow-blue-500/20',
      badgeStyle: 'bg-black/20 text-white border-white/30 backdrop-blur',
      subtitleColor: 'text-cyan-100',
      textColor: 'text-blue-50/95',
      buttonColor: 'text-white group-hover:text-cyan-100',
      borderColor: 'border-white/25',
    },
    {
      id: 'admission',
      path: '/admission',
      title: 'Admissions 2025-26',
      subtitle: 'Enrollment Open Now',
      description: 'View official admission flyer, grade age matrix, document checklist, and generate your VIP Pass.',
      emoji: '🎟️',
      badge: 'Open Now',
      stats: 'Official Circular',
      cardBg: 'bg-gradient-to-br from-rose-500 via-rose-600 to-pink-500 border-rose-300/80 hover:border-white text-white shadow-rose-500/20',
      badgeStyle: 'bg-black/20 text-white border-white/30 backdrop-blur',
      subtitleColor: 'text-rose-100',
      textColor: 'text-rose-50/95',
      buttonColor: 'text-white group-hover:text-rose-100',
      borderColor: 'border-white/25',
    },
    {
      id: 'after-school',
      path: '/after-school',
      title: 'After-School Activities',
      subtitle: 'Silambam, Karate, Dance & Records',
      description: '5 specialized evening hobby clubs with verified fees, schedules, and certified coaches.',
      emoji: '🥋',
      badge: 'Hobby Clubs',
      stats: '5 Special Tracks',
      cardBg: 'bg-gradient-to-br from-purple-500 via-purple-600 to-violet-600 border-purple-300/80 hover:border-white text-white shadow-purple-500/20',
      badgeStyle: 'bg-black/20 text-white border-white/30 backdrop-blur',
      subtitleColor: 'text-purple-100',
      textColor: 'text-purple-50/95',
      buttonColor: 'text-white group-hover:text-purple-100',
      borderColor: 'border-white/25',
    },
    {
      id: 'enquiry',
      path: '/enquiry',
      title: 'Enquiry & Campus Visit',
      subtitle: 'Get In Touch & FAQs',
      description: 'Submit an online enquiry, chat directly on WhatsApp, view campus map, and find answers.',
      emoji: '💬',
      badge: 'Support Desk',
      stats: 'Quick Response',
      cardBg: 'bg-gradient-to-br from-teal-500 via-emerald-600 to-emerald-600 border-teal-300/80 hover:border-white text-white shadow-emerald-500/20',
      badgeStyle: 'bg-black/20 text-white border-white/30 backdrop-blur',
      subtitleColor: 'text-emerald-100',
      textColor: 'text-emerald-50/95',
      buttonColor: 'text-white group-hover:text-emerald-100',
      borderColor: 'border-white/25',
    },
  ];

  const trustHighlights = [
    {
      id: 'cctv',
      title: '100% CCTV & 360° Safety',
      emoji: '🛡️',
      tag: 'Live Monitored',
      tagBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      pulseColor: 'bg-emerald-500',
      bgGradient: 'from-amber-400/20 via-yellow-50 to-orange-50/40',
      borderColor: 'border-amber-300 hover:border-amber-400',
      iconBox: 'bg-gradient-to-tr from-amber-400 to-orange-500 text-white shadow-amber-400/40',
      description: 'Padded soft indoor floorings, child-safe rounded furniture, biometric gate passes, and 24/7 continuous CCTV monitoring.',
      bullet: 'Finger-Safe Classrooms',
      stat: '100% Safe Campus'
    },
    {
      id: 'ratio',
      title: '8:1 Loving Motherly Ratio',
      emoji: '👩‍🏫',
      tag: 'Certified Mentors',
      tagBg: 'bg-rose-100 text-rose-800 border-rose-300',
      pulseColor: 'bg-rose-500',
      bgGradient: 'from-pink-400/20 via-rose-50 to-pink-50/40',
      borderColor: 'border-pink-300 hover:border-pink-400',
      iconBox: 'bg-gradient-to-tr from-pink-500 to-rose-500 text-white shadow-pink-400/40',
      description: 'Dedicated personal attention for every baby. Experienced early childhood educators trained in positive discipline and child first-aid.',
      bullet: 'CPR & Psychology Trained',
      stat: '8:1 Student Care'
    },
    {
      id: 'montessori',
      title: 'Montessori & EYFS Labs',
      emoji: '🎨',
      tag: 'Experiential STEM',
      tagBg: 'bg-sky-100 text-sky-800 border-sky-300',
      pulseColor: 'bg-sky-500',
      bgGradient: 'from-sky-400/20 via-blue-50 to-cyan-50/40',
      borderColor: 'border-sky-300 hover:border-sky-400',
      iconBox: 'bg-gradient-to-tr from-sky-400 to-blue-500 text-white shadow-sky-400/40',
      description: 'Sensory water bins, phonics musical rhyme circles, building blocks, and tactile STEM apparatus designed to spark organic wonder.',
      bullet: 'Zero Screen-Time Play',
      stat: '50+ Tactile Toys'
    },
    {
      id: 'nutrition',
      title: 'Fresh Organic Dining',
      emoji: '🥗',
      tag: 'Healthy Chef Meals',
      tagBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      pulseColor: 'bg-emerald-500',
      bgGradient: 'from-emerald-400/20 via-teal-50 to-green-50/40',
      borderColor: 'border-emerald-300 hover:border-emerald-400',
      iconBox: 'bg-gradient-to-tr from-emerald-400 to-teal-500 text-white shadow-emerald-400/40',
      description: 'Daily fresh warm meals cooked with organic ingredients, seasonal fruits, clean RO water, and nutritionist-curated allergy-free snacks.',
      bullet: 'Hygienic Chef Pantry',
      stat: '100% Organic Diet'
    }
  ];

  const handleCardClick = (id, e) => {
    playPopSound();
    const rect = e.currentTarget.getBoundingClientRect();
    triggerConfetti(
      (rect.left + rect.width / 2) / window.innerWidth,
      (rect.top + rect.height / 2) / window.innerHeight
    );
    setActiveTrustCard(activeTrustCard === id ? null : id);
  };

  const handleLikeReview = (id, e) => {
    e.stopPropagation();
    const current = likesState[id] || { count: 30, liked: false };
    if (!current.liked) {
      playBoingSound();
      const rect = e.currentTarget.getBoundingClientRect();
      triggerConfetti(
        (rect.left + rect.width / 2) / window.innerWidth,
        (rect.top + rect.height / 2) / window.innerHeight
      );
      setLikesState({
        ...likesState,
        [id]: { count: current.count + 1, liked: true }
      });
    } else {
      playPopSound();
      setLikesState({
        ...likesState,
        [id]: { count: current.count - 1, liked: false }
      });
    }
  };

  // Extract initials helper
  const getInitials = (name) => {
    if (!name) return 'KP';
    const clean = name.replace(/^(Mr\.|Mrs\.|Dr\.|and|&|\s)+/i, '').trim();
    const parts = clean.split(' ').filter(Boolean);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return clean.slice(0, 2).toUpperCase() || 'KN';
  };

  // Themes with unique animated icons and gradients
  const reviewThemes = [
    {
      gradient: 'from-amber-400/10 via-yellow-50 to-white',
      border: 'border-amber-300 hover:border-amber-500',
      avatarBg: 'from-amber-500 to-orange-500',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
      animBadge: 'animate-spin-slow',
      animEmoji: '🎋',
    },
    {
      gradient: 'from-purple-400/10 via-pink-50 to-white',
      border: 'border-purple-300 hover:border-purple-500',
      avatarBg: 'from-purple-500 to-pink-500',
      badgeBg: 'bg-purple-100 text-purple-900 border-purple-300',
      animBadge: 'animate-bounce',
      animEmoji: '🏆',
    },
    {
      gradient: 'from-sky-400/10 via-blue-50 to-white',
      border: 'border-sky-300 hover:border-sky-500',
      avatarBg: 'from-sky-500 to-blue-600',
      badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
      animBadge: 'animate-float',
      animEmoji: '🎨',
    },
    {
      gradient: 'from-emerald-400/10 via-teal-50 to-white',
      border: 'border-emerald-300 hover:border-emerald-500',
      avatarBg: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      animBadge: 'animate-wiggle',
      animEmoji: '🧸',
    },
    {
      gradient: 'from-rose-400/10 via-red-50 to-white',
      border: 'border-rose-300 hover:border-rose-500',
      avatarBg: 'from-rose-500 to-red-600',
      badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
      animBadge: 'animate-pulse',
      animEmoji: '🥋',
    },
    {
      gradient: 'from-fuchsia-400/10 via-pink-50 to-white',
      border: 'border-fuchsia-300 hover:border-fuchsia-500',
      avatarBg: 'from-fuchsia-500 to-violet-600',
      badgeBg: 'bg-fuchsia-100 text-fuchsia-900 border-fuchsia-300',
      animBadge: 'animate-float-delayed',
      animEmoji: '💃',
    },
  ];

  // Double the list for seamless infinite loop
  const infiniteReviews = [...schoolData.testimonials, ...schoolData.testimonials];

  return (
    <div className="space-y-10 md:space-y-14">
      
      {/* 1. Main Interactive Hero Banner */}
      <Hero
        onOpenTour={onOpenTour}
        onOpenAdmissions={() => {
          playBoingSound();
          navigate('/admission');
        }}
      />

      {/* 2. Interactive Page Adventure Portals */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 font-bold text-xs px-3.5 py-1 rounded-full border border-amber-300 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
            <span>Explore The Kids Nest Universe</span>
          </div>
          <h2 className="font-comic text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            What Would You Like to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500">Discover?</span> 🚀
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {portals.map((portal) => (
            <Link
              key={portal.id}
              to={portal.path}
              onClick={() => playChimeSound()}
              className={`${portal.cardBg} rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border-2 sm:border-3 shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group card-pop`}
            >
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[9px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full border shadow-sm ${portal.badgeStyle}`}>
                    {portal.badge}
                  </span>
                  <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-300">
                    {portal.emoji}
                  </span>
                </div>

                <div>
                  <h3 className="font-comic font-bold text-sm sm:text-xl text-white group-hover:brightness-125 transition-all leading-tight">
                    {portal.title}
                  </h3>
                  <p className={`text-[10px] sm:text-xs font-bold ${portal.subtitleColor} mt-0.5 line-clamp-1`}>
                    {portal.subtitle}
                  </p>
                </div>

                <p className={`text-[11px] sm:text-xs ${portal.textColor} leading-relaxed font-medium line-clamp-2 sm:line-clamp-none`}>
                  {portal.description}
                </p>
              </div>

              <div className={`pt-2 sm:pt-3 mt-2 sm:mt-3 border-t ${portal.borderColor} flex items-center justify-between`}>
                <span className={`text-[9px] sm:text-[10px] font-bold ${portal.badgeStyle} px-1.5 sm:px-2 py-0.5 rounded-lg border`}>
                  {portal.stats}
                </span>
                <span className={`text-[10px] sm:text-xs font-bold ${portal.buttonColor} flex items-center gap-1 group-hover:translate-x-1 transition-transform`}>
                  <span>Explore</span>
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </span>
              </div>
            </Link>
          ))}

          {/* Quick Tour Booking Tile */}
          <div
            onClick={() => {
              playChimeSound();
              onOpenTour();
            }}
            className="bg-gradient-to-br from-orange-500 via-amber-500 to-rose-500 border-2 sm:border-3 border-orange-300/80 hover:border-white text-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-md sm:shadow-lg shadow-orange-500/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer group card-pop"
          >
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full bg-black/20 text-white border border-white/30 backdrop-blur shadow-sm">
                  Campus Visit
                </span>
                <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-300">
                  📍
                </span>
              </div>

              <div>
                <h3 className="font-comic font-bold text-sm sm:text-xl text-white group-hover:brightness-125 transition-all leading-tight">
                  Book Guided Tour
                </h3>
                <p className="text-[10px] sm:text-xs font-bold text-amber-100 mt-0.5 line-clamp-1">
                  Walk Through With Our Principal
                </p>
              </div>

              <p className="text-[11px] sm:text-xs text-orange-50/95 leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">
                Experience our splash pool, sensory playroom, and Montessori classrooms.
              </p>
            </div>

            <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-white/25 flex items-center justify-between">
              <span className="text-[9px] sm:text-[10px] font-bold text-white bg-black/20 border border-white/30 px-1.5 sm:px-2 py-0.5 rounded-lg">
                Mon – Sat
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-white group-hover:text-amber-100 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Reserve</span>
                <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Kids Mini Game */}
      <MiniGame />

      {/* 4. Enhanced Ultra-Colorful Animated "Why Parents Trust Kids Nest" Section */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative">
        <div className="bg-gradient-to-br from-white via-amber-50/40 to-yellow-50/50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border-3 sm:border-4 border-amber-300 shadow-xl space-y-4 sm:space-y-6 relative overflow-hidden backdrop-blur-sm">
          
          {/* Header Title with Animated Badges */}
          <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-sm animate-pulse">
              <Sparkles className="w-3 h-3" />
              <span>PARENT PEACE OF MIND</span>
            </div>
            
            <h2 className="font-comic font-bold text-xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
              Why 2,500+ Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500">Trust Kids Nest</span> 🐣✨
            </h2>
            
            <p className="text-[11px] sm:text-sm text-slate-900 font-semibold max-w-md mx-auto">
              Engineered for extreme child safety, joyful discovery, and positive habit formation.
            </p>
          </div>

          {/* 4 Ultra-Colorful Animated Interactive Cards (2-column on mobile) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {trustHighlights.map((item) => (
              <div
                key={item.id}
                onClick={(e) => handleCardClick(item.id, e)}
                className={`bg-gradient-to-br ${item.bgGradient} p-3 sm:p-5 rounded-xl sm:rounded-2xl border-2 sm:border-3 ${item.borderColor} shadow-sm sm:shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 relative overflow-hidden`}
              >
                <div className="space-y-2 sm:space-y-3 relative z-10">
                  
                  {/* Top Bar: Icon Box + Pulse Live Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${item.iconBox} flex items-center justify-center text-lg sm:text-2xl shadow-sm sm:shadow-md transform group-hover:rotate-6 transition-transform`}>
                      {item.emoji}
                    </div>

                    <span className={`inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full border ${item.tagBg}`}>
                      <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${item.pulseColor} animate-ping`}></span>
                      <span className="truncate max-w-[65px] sm:max-w-none">{item.tag}</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-comic font-bold text-xs sm:text-base text-slate-950 group-hover:text-amber-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-bold text-amber-900 bg-white/80 px-1.5 py-0.5 rounded border border-amber-300 mt-1">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{item.bullet}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[10px] sm:text-xs text-slate-900 leading-relaxed font-semibold line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Footer Action */}
                <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-slate-300/60 flex items-center justify-between relative z-10 text-[9px] sm:text-[10px]">
                  <span className="font-bold text-slate-950 bg-white/95 px-1.5 sm:px-2 py-0.5 rounded-md sm:rounded-lg shadow-2xs">
                    {item.stat}
                  </span>
                  <span className="font-bold text-amber-900 group-hover:text-amber-950 flex items-center gap-0.5 sm:gap-1">
                    <span>Tap</span>
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. ULTRA-COMPACT AUTO-MOVING CONTINUOUS REAL-TIME REVIEWS ROW (NO IMAGES, SLEEK HEIGHT) */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pb-12 overflow-hidden">
        
        {/* Streamlined Compact Header */}
        <div className="flex items-center justify-between mb-4 bg-white/70 backdrop-blur-sm p-3.5 rounded-2xl border-2 border-pink-200 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl animate-wiggle">💬</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-comic font-bold text-lg sm:text-xl text-slate-950">
                  Real Parent Stories
                </h2>
                <span className="bg-pink-100 text-pink-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-pink-200 flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5 Verified</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-800 font-semibold">
                Live feedback from our happy families.
              </p>
            </div>
          </div>
        </div>

        {/* INFINITE AUTO-MOVING CONTINUOUS SINGLE-ROW CONTAINER */}
        <div 
          className="relative w-full overflow-hidden rounded-3xl py-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle edge fade overlays for infinite smooth aesthetic */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FFFDF7] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FFFDF7] to-transparent z-10 pointer-events-none"></div>

          <div 
            className="animate-marquee flex gap-4"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {infiniteReviews.map((t, idx) => {
              const isLiked = likesState[t.id]?.liked;
              const count = likesState[t.id]?.count || 25;
              const theme = reviewThemes[idx % reviewThemes.length];
              const initials = getInitials(t.name);

              return (
                <div
                  key={`${t.id}-${idx}`}
                  className={`w-[290px] sm:w-[330px] flex-shrink-0 bg-gradient-to-br ${theme.gradient} rounded-2xl p-4 border-2 ${theme.border} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-2.5 relative cursor-pointer`}
                >
                  <div className="space-y-1.5">
                    
                    {/* Top Row: Stars + Specialty Badge + Unique Animated Emoji */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-amber-400 text-xs">★</span>
                        ))}
                      </div>

                      <span className={`inline-flex items-center gap-1 ${theme.badgeBg} text-[10px] font-bold px-2 py-0.5 rounded-md border`}>
                        <span className={`text-xs ${theme.animBadge}`}>{theme.animEmoji}</span>
                        <span>{t.badge}</span>
                      </span>
                    </div>

                    {/* Review Quote - Compact Height */}
                    <p className="text-xs text-slate-950 leading-snug font-semibold italic line-clamp-3">
                      "{t.review}"
                    </p>

                  </div>

                  {/* Author Info (NO PHOTO - Clean Gradient Initial Badge) + Like Button */}
                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
                    
                    {/* Parent Details with Initial Avatar */}
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${theme.avatarBg} text-white font-comic font-bold text-xs flex items-center justify-center shadow-xs flex-shrink-0`}>
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <div className="font-comic font-bold text-xs text-slate-900 truncate">
                          {t.name}
                        </div>
                        <div className="text-[10px] font-semibold text-amber-700 truncate">
                          {t.child}
                        </div>
                      </div>
                    </div>

                    {/* Interactive Like Reaction */}
                    <button
                      onClick={(e) => handleLikeReview(t.id, e)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[11px] font-bold transition-all cursor-pointer ${
                        isLiked
                          ? 'bg-rose-500 text-white border-rose-500 shadow-xs'
                          : 'bg-white text-rose-600 border-rose-200 hover:bg-rose-50'
                      }`}
                      title="Like review"
                    >
                      <Heart className={`w-3 h-3 ${isLiked ? 'fill-white text-white' : 'fill-rose-500 text-rose-500'}`} />
                      <span>{count}</span>
                    </button>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </section>

    </div>
  );
};
