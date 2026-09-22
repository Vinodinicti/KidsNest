import React, { useState } from 'react';
import { Sparkles, CheckCircle, Send, Award, Download, Printer, User, Phone, Mail, Calendar, Baby, Heart } from 'lucide-react';
import { playBoingSound, playFanfareSound, playPopSound } from '../utils/audio';
import { triggerGrandCelebration } from '../utils/confetti';
import { schoolData } from '../data/schoolData';

export const Admissions = ({ initialProgram = null, onClose = null }) => {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '3',
    parentName: '',
    phone: '',
    email: '',
    program: initialProgram || 'Nursery Junior',
    visitDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [passId, setPassId] = useState('');

  const steps = [
    { num: '01', title: 'Submit Enquiry', desc: 'Fill the quick online form below to register interest.' },
    { num: '02', title: 'Campus Discovery', desc: 'Visit our campus for a guided tour & sandbox play session.' },
    { num: '03', title: 'Child Interaction', desc: 'Gentle, pressure-free informal chat and sensory milestones.' },
    { num: '04', title: 'Welcome to Nest!', desc: 'Receive your official welcome kit and join our family!' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedPass = `KN-2025-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassId(generatedPass);
    setSubmitted(true);
    playFanfareSound();
    triggerGrandCelebration();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="admissions" className="pt-0 pb-8 sm:pb-12 relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-pink-100 text-amber-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Admissions Academic Year {schoolData.admissionsYear}</span>
          </div>
          <h2 className="font-comic text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500">Kids Nest Family</span> 🐣
          </h2>
          <p className="text-slate-900 text-xs sm:text-sm md:text-base font-semibold max-w-2xl mx-auto">
            Give your child the gift of a joyful, nurturing early childhood foundation. Limited batch seats available for the upcoming session.
          </p>
        </div>

        {/* 4-Step Visual Journey (2-column on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 mb-8 sm:mb-12">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border-2 border-amber-200 shadow-sm relative overflow-hidden card-pop group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="font-comic font-bold text-lg sm:text-2xl text-amber-500 group-hover:scale-110 transition-transform">
                    {step.num}
                  </span>
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-100 text-amber-950 flex items-center justify-center text-[10px] sm:text-xs font-bold border border-amber-300">
                    ✓
                  </span>
                </div>
                <h3 className="font-comic font-bold text-xs sm:text-base text-slate-950 mb-1 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-900 leading-snug sm:leading-relaxed font-semibold line-clamp-3 sm:line-clamp-none">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Container / Pass Confirmation */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border-4 border-amber-300 shadow-2xl relative">
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="text-center pb-4 border-b border-amber-100">
                <h3 className="font-comic font-bold text-2xl text-slate-950">
                  Quick Online Admission Enquiry
                </h3>
                <p className="text-xs text-slate-900 mt-0.5 font-semibold">
                  Our admissions counselor will reach out within 2 hours with syllabus and fee details.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Child Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                    <Baby className="w-3.5 h-3.5 text-amber-600" />
                    <span>Child's Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Child Age */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Child's Age (Years) *</span>
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    min="1.5"
                    max="10"
                    required
                    placeholder="e.g. 3.5"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Parent Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-600" />
                    <span>Parent / Guardian Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohini Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Mobile Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-600" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Program Choice */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                    <Baby className="w-3.5 h-3.5 text-amber-600" />
                    <span>Program Interested In *</span>
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                  >
                    {schoolData.programs.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.ageRange})
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Preferred Tour Date */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>Preferred Date for Campus Visit (Optional)</span>
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-comic font-bold text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Enquiry & Get VIP Pass 🎉</span>
                </button>

                <a
                  href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20I%20would%20like%20to%20enquire%20about%20Admissions%20for%20my%20child.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPopSound()}
                  className="w-full py-3 rounded-2xl font-comic font-bold text-xs sm:text-sm text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <span>💬 Instant Admission Enquiry on WhatsApp</span>
                </a>
              </div>

            </form>
          ) : (
            /* Celebration VIP Pass & Confirmation */
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
              
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl animate-bounce shadow-inner">
                🎉
              </div>

              <div className="space-y-1">
                <h3 className="font-comic font-bold text-2xl sm:text-3xl text-slate-950">
                  Congratulations, {formData.parentName}! 🐣
                </h3>
                <p className="text-xs sm:text-sm text-slate-900 max-w-md mx-auto font-semibold">
                  We have received your admission enquiry for <strong>{formData.childName}</strong> for the <strong>{formData.program}</strong> program!
                </p>
              </div>

              {/* Printable VIP Pass Card */}
              <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-6 border-4 border-dashed border-amber-400 text-left shadow-lg relative overflow-hidden">
                <div className="flex items-start justify-between border-b border-amber-200 pb-3 mb-3">
                  <div>
                    <span className="text-[10px] font-bold text-amber-900 uppercase tracking-widest">Kids Nest VIP Admission Pass</span>
                    <h4 className="font-comic font-bold text-xl text-slate-950">Official Registration Token</h4>
                  </div>
                  <span className="bg-amber-500 text-white font-mono font-bold text-xs px-3 py-1 rounded-full shadow">
                    {passId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <span className="text-slate-900 block text-[10px] font-semibold">Student Name</span>
                    <strong className="text-slate-950 font-bold text-sm">{formData.childName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-900 block text-[10px] font-semibold">Enrolled Track</span>
                    <strong className="text-slate-950 font-bold text-sm">{formData.program}</strong>
                  </div>
                  <div>
                    <span className="text-slate-900 block text-[10px] font-semibold">Parent Contact</span>
                    <strong className="text-slate-950 font-bold">{formData.phone}</strong>
                  </div>
                  <div>
                    <span className="text-slate-900 block text-[10px] font-semibold">Campus Visit</span>
                    <strong className="text-emerald-800 font-bold">{formData.visitDate || 'To be scheduled with counselor'}</strong>
                  </div>
                </div>

                <div className="bg-white/90 p-2.5 rounded-xl border border-amber-200 text-[11px] text-slate-900 font-semibold flex items-center gap-2">
                  <span>📍</span>
                  <span>Present this token at the Kids Nest reception desk to receive your child's welcome goodie bag!</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20I%20have%20submitted%20an%20Admission%20Enquiry.%0A%0A*Token:*%20${encodeURIComponent(passId)}%0A*Child%20Name:*%20${encodeURIComponent(formData.childName)}%20(${encodeURIComponent(formData.childAge)}%20years)%0A*Parent%20Name:*%20${encodeURIComponent(formData.parentName)}%0A*Phone:*%20${encodeURIComponent(formData.phone)}%0A*Program:*%20${encodeURIComponent(formData.program)}%0A*Visit%20Date:*%20${encodeURIComponent(formData.visitDate || 'Not specified')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPopSound()}
                  className="px-6 py-3 rounded-xl font-comic font-bold text-xs sm:text-sm text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <span>💬 Send VIP Pass to School WhatsApp</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center gap-2 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Pass</span>
                </button>

                <button
                  onClick={() => {
                    playPopSound();
                    setSubmitted(false);
                    setFormData({
                      childName: '',
                      childAge: '3',
                      parentName: '',
                      phone: '',
                      email: '',
                      program: 'Nursery Junior',
                      visitDate: '',
                      notes: '',
                    });
                  }}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-amber-700 bg-amber-100 hover:bg-amber-200 transition-colors"
                >
                  New Enquiry 🔄
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
