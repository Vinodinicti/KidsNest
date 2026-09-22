import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { isSoundEnabled, setSoundEnabled, playChimeSound, playPopSound } from '../utils/audio';
import { schoolData } from '../data/schoolData';

export const Navbar = ({ onOpenTour }) => {
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playChimeSound();
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Course', path: '/courses' },
    { name: 'Admission', path: '/admission' },
    { name: 'After School Activities', path: '/after-school' },
    { name: 'Enquiry', path: '/enquiry' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#3772b6] shadow-xl shadow-blue-950/25 py-2.5 border-b-2 border-amber-400/40' 
        : 'bg-[#3772b6] py-3.5 shadow-md border-b-2 border-amber-400/30'
    }`}>
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <Link 
            to="/" 
            onClick={() => playChimeSound()} 
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative bg-white p-1 rounded-2xl border-2 border-amber-300 shadow-md group-hover:scale-105 group-hover:rotate-2 transition-transform">
              <img 
                src={schoolData.logo} 
                alt="Kids Nest Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-comic font-bold text-lg sm:text-2xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  Kids<span className="text-amber-300">Nest</span>
                </span>
                <span className="bg-amber-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm hidden sm:inline-flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> Pre-School
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-blue-100 tracking-wide">
                {schoolData.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-black/15 backdrop-blur-sm p-1.5 rounded-full border border-white/20 shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => playChimeSound()}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-400 text-slate-900 shadow-md font-bold'
                      : 'text-white hover:text-amber-200 hover:bg-white/15'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Mute sound effects' : 'Enable sound effects'}
              className={`p-2 rounded-full border transition-all ${
                soundOn 
                  ? 'bg-white/20 text-white border-white/40 hover:bg-white/30' 
                  : 'bg-black/20 text-white/50 border-white/20'
              }`}
            >
              {soundOn ? <Volume2 className="w-4 h-4 animate-pulse text-amber-300" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Admission CTA */}
            <Link
              to="/admission"
              onClick={() => playChimeSound()}
              className="px-4 py-2 rounded-full text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-500/30 hover:scale-105 transition-all"
            >
              Admissions Open 🐣
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-full bg-white/20 text-white border border-white/30"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-amber-300" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                playPopSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl bg-amber-400 text-slate-900 shadow-md focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#3772b6] border-t border-white/20 px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => {
                  playChimeSound();
                  setMobileMenuOpen(false);
                }}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl font-comic font-bold text-sm transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-400 text-slate-900 shadow-md'
                      : 'text-white hover:bg-white/10'
                  }`
                }
              >
                <span>{link.name}</span>
                <span>➔</span>
              </NavLink>
            ))}

            <div className="pt-3 border-t border-white/20 flex flex-col gap-2">
              <a
                href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20I%20would%20like%20to%20enquire%20about%20admissions%20and%20activities.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPopSound()}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 text-center flex items-center justify-center gap-2 shadow"
              >
                <span>💬 WhatsApp Quick Chat</span>
              </a>

              <button
                onClick={() => {
                  playChimeSound();
                  setMobileMenuOpen(false);
                  onOpenTour();
                }}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-[#3772b6] bg-white hover:bg-amber-100 text-center flex items-center justify-center gap-2 shadow"
              >
                <Calendar className="w-4 h-4 text-[#3772b6]" />
                <span>Book Guided Campus Tour</span>
              </button>

              <a
                href={schoolData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-white/20 border border-white/30 text-center flex items-center justify-center gap-2"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow {schoolData.instagramHandle} on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
