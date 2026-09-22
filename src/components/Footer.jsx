import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Shield, FileText, X, CheckCircle2, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { playPopSound, playChimeSound } from '../utils/audio';
import { schoolData } from '../data/schoolData';

export const Footer = () => {
  const [modalContent, setModalContent] = useState(null); // 'privacy' | 'terms' | null

  const openModal = (type) => {
    playPopSound();
    setModalContent(type);
  };

  const closeModal = () => {
    playPopSound();
    setModalContent(null);
  };

  return (
    <footer className="bg-[#3772b6] text-white pt-12 pb-10 relative overflow-hidden border-t-4 border-amber-400 shadow-2xl">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Footer Main Links Grid (3 Balanced Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/20">
          
          {/* Col 1: Brand & Socials */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-lg border-2 border-amber-300">
                <img src={schoolData.logo} alt="Kids Nest Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-comic font-bold text-2xl text-white">
                  Kids<span className="text-amber-300">Nest</span>
                </span>
                <p className="text-xs text-blue-100">Where Little Minds Spread Big Wings ✨</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-blue-50 leading-relaxed font-medium max-w-sm">
              Kids Nest is a premier early childhood academy offering Montessori playgroup, nursery, kindergarten, and exciting after-school activity clubs.
            </p>

            {/* Social & Call Icons Strip */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-2">Connect With Us:</span>
              <div className="flex items-center gap-3">
                
                {/* WhatsApp Icon */}
                <a
                  href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20I%20would%20like%20to%20know%20more%20about%20admissions%20and%20activities.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPopSound()}
                  className="w-10 h-10 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all text-xl"
                  title="Chat on WhatsApp"
                >
                  💬
                </a>

                {/* Instagram Icon */}
                <a
                  href={schoolData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPopSound()}
                  className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all"
                  title={`Follow ${schoolData.instagramHandle} on Instagram`}
                >
                  <InstagramIcon className="w-5 h-5 text-white" />
                </a>

                {/* Call Icon */}
                <a
                  href={`tel:${schoolData.phone}`}
                  onClick={() => playPopSound()}
                  className="w-10 h-10 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all"
                  title="Direct Phone Call"
                >
                  <Phone className="w-5 h-5 text-slate-950" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Pages Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-comic font-bold text-base text-amber-300">Navigation Pages</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-blue-50">
              <li>
                <Link to="/" onClick={() => playChimeSound()} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-300 text-[10px]">➔</span>
                  <span>Home Page</span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => playChimeSound()} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-300 text-[10px]">➔</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" onClick={() => playChimeSound()} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-300 text-[10px]">➔</span>
                  <span>Course & Syllabus</span>
                </Link>
              </li>
              <li>
                <Link to="/admission" onClick={() => playChimeSound()} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-300 text-[10px]">➔</span>
                  <span>Admission 2025-26</span>
                </Link>
              </li>
              <li>
                <Link to="/after-school" onClick={() => playChimeSound()} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-300 text-[10px]">➔</span>
                  <span>After School Activities</span>
                </Link>
              </li>
              <li>
                <Link to="/enquiry" onClick={() => playChimeSound()} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-300 text-[10px]">➔</span>
                  <span>Enquiry & Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-comic font-bold text-base text-amber-300">Campus Contact</h4>
            <div className="space-y-2.5 text-xs text-blue-50 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>{schoolData.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <a href={`tel:${schoolData.phone}`} className="hover:text-amber-300 font-semibold">{schoolData.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <a href={`mailto:${schoolData.email}`} className="hover:text-amber-300">{schoolData.email}</a>
              </div>
              <div className="text-[11px] text-amber-300 bg-white/10 p-2.5 rounded-xl border border-white/20 pt-1">
                ⏰ <strong>Hours:</strong> {schoolData.timings}
              </div>

              <div className="pt-1">
                <a
                  href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20I%20would%20like%20to%20know%20more%20about%20admissions%20and%20activities.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPopSound()}
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all w-full justify-center"
                >
                  <span>💬 Chat with Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links (Privacy & Terms), Made with Love */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-blue-100 gap-4">
          <p>© {new Date().getFullYear()} Kids Nest Academy. All rights reserved.</p>

          {/* Legal Links */}
          <div className="flex items-center gap-4 font-semibold text-blue-100">
            <button
              onClick={() => openModal('privacy')}
              className="hover:text-amber-300 underline underline-offset-4 decoration-amber-300/40 hover:decoration-amber-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => openModal('terms')}
              className="hover:text-amber-300 underline underline-offset-4 decoration-amber-300/40 hover:decoration-amber-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-pink-300 fill-pink-300 inline" />
            <span>for little bright learners</span>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {modalContent === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 text-slate-950">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-300 relative max-h-[90vh] overflow-y-auto space-y-4">
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-comic font-bold text-2xl text-slate-950">Privacy Policy</h3>
                <p className="text-xs text-slate-600">Kids Nest Early Education & Skill Academies</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
              <p>
                At <strong>Kids Nest</strong>, we treat the privacy and safety of your child and family with paramount care. This policy outlines our standards regarding data protection, image usage, and campus security.
              </p>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-950 flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1. Student & Parent Data Collection
                </h4>
                <p className="text-slate-700 pl-5">
                  We only gather essential information during admissions, campus visits, or online enquiries (child name, date of birth, guardian phone, and emergency medical notes) solely for student enrollment, educational care, and parental communication.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-950 flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 2. 24/7 CCTV & Campus Safety Footage
                </h4>
                <p className="text-slate-700 pl-5">
                  Live CCTV feeds and recorded video footage across all classrooms, activity arenas, and entry gates are strictly restricted to authorized security administrators and management for student safety. Footage is never shared publicly or sold.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-950 flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 3. Media & Event Photography Consent
                </h4>
                <p className="text-slate-700 pl-5">
                  Photographs and celebratory video reels captured during annual galas, sports days, or activity milestones are used for school newsletters and social channels strictly with parental consent obtained during admission.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-950 flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 4. Non-Disclosure to Third Parties
                </h4>
                <p className="text-slate-700 pl-5">
                  We never sell, lease, or distribute parent phone numbers, email addresses, or student records to any commercial third-party marketing companies.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-semibold">For queries: {schoolData.email}</span>
              <button
                onClick={closeModal}
                className="px-6 py-2 rounded-xl font-comic font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Terms and Conditions Modal */}
      {modalContent === 'terms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 text-slate-950">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-300 relative max-h-[90vh] overflow-y-auto space-y-4">
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl">
                <FileText className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-comic font-bold text-2xl text-slate-950">Terms & Conditions</h3>
                <p className="text-xs text-slate-600">Kids Nest Academy Rules & Regulations</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
              <p>
                By enrolling your child at <strong>Kids Nest</strong> or participating in our academic programs and after-school clubs, you agree to the following institutional standards:
              </p>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-950 flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" /> 1. Enrollment & Age Placement
                </h4>
                <p className="text-slate-700 pl-5">
                  Admission into Playgroup, Pre KG, LKG, and UKG is based on the developmental age guidelines defined in our official circular. Parents must provide authentic proof of birth and immunization certificates.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-950 flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" /> 2. Schedule, Attendance & Pick-up Protocol
                </h4>
                <p className="text-slate-700 pl-5">
                  Parents/guardians must strictly follow regular reporting and pick-up hours. For child safety, students will only be released to parents holding the official Kids Nest Guardian Pass or pre-notified authorized family members.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-950 flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" /> 3. Health & Medical Policy
                </h4>
                <p className="text-slate-700 pl-5">
                  To safeguard classroom wellbeing, children showing signs of contagious illness or acute fever should rest at home until fully recovered. In the event of unforeseen medical needs on campus, certified mentors will provide first-aid and notify parents immediately.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-950 flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" /> 4. Fee Schedules & After-School Activity Clubs
                </h4>
                <p className="text-slate-700 pl-5">
                  Academic tuition and monthly specialty club fees (Silambam, Karate, Pencil Sketching, Dance, Record Training) are payable per the agreed terms. Training materials, uniforms, and grading certificates are distributed per program guidelines.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-semibold">Contact: {schoolData.phone}</span>
              <button
                onClick={closeModal}
                className="px-6 py-2 rounded-xl font-comic font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                I Understand & Agree
              </button>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
};

