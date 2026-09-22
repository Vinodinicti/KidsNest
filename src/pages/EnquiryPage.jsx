import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Sparkles, Send, Phone, Mail, MapPin, Clock, CheckCircle2, MessageSquare, Check } from 'lucide-react';
import { FAQ } from '../components/FAQ';
import { schoolData } from '../data/schoolData';
import { playChimeSound, playFanfareSound, playPopSound } from '../utils/audio';
import { triggerGrandCelebration } from '../utils/confetti';

export const EnquiryPage = () => {
  const location = useLocation();
  const defaultSubject = location.state?.subject || 'General Admission Enquiry';

  const [form, setForm] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
    interest: defaultSubject,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = `ENQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(token);
    setSubmitted(true);
    playFanfareSound();
    triggerGrandCelebration();
  };

  return (
    <div className="pt-24 pb-16 space-y-10 sm:space-y-14">
      
      {/* Header */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-amber-300">
          <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
          <span>We'd Love to Hear From You</span>
        </div>
        <h1 className="font-comic text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 leading-tight">
          Get in Touch & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500">Enquire Now</span> 💬
        </h1>
        <p className="text-slate-900 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-semibold">
          Have questions regarding syllabus, fee structure, transportation routes, or campus visits? Send us a message or chat directly on WhatsApp.
        </p>
      </section>

      {/* Main Grid: Form + Contact Cards */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border-4 border-amber-300 shadow-2xl relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="pb-3 border-b border-amber-100">
                  <h3 className="font-comic font-bold text-2xl text-slate-950">
                    Send Us an Online Enquiry
                  </h3>
                  <p className="text-xs text-slate-900 mt-0.5 font-semibold">
                    Our educational counselor will respond via call / WhatsApp within 2 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-950">Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohini Sharma"
                      value={form.parentName}
                      onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                      className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-950">Mobile Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-950">Email Address</label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-950">Child's Name & Age</label>
                    <input
                      type="text"
                      placeholder="e.g. Aarav, 3 years"
                      value={form.childName}
                      onChange={(e) => setForm({ ...form, childName: e.target.value })}
                      className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-950">Program or Activity of Interest *</label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                  >
                    <option value="General Admission Enquiry">General Admission Enquiry (2025-26)</option>
                    <option value="Toddler Nest (1.5 - 2.5 yrs)">Toddler Nest (1.5 - 2.5 yrs)</option>
                    <option value="Playgroup / Pre-Nursery (2.5 - 3.5 yrs)">Playgroup / Pre-Nursery (2.5 - 3.5 yrs)</option>
                    <option value="Nursery Junior (3.5 - 4.5 yrs)">Nursery Junior (3.5 - 4.5 yrs)</option>
                    <option value="Kindergarten (4.5 - 6 yrs)">Kindergarten (4.5 - 6 yrs)</option>
                    <option value="After-School Hobby Club">After-School Hobby Club</option>
                    <option value="Daycare & Homework Supervision">Daycare & Homework Supervision</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-950">Your Message / Specific Questions</label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your child's interests, preferred schedule, or questions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
                  ></textarea>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-2xl font-comic font-bold text-sm sm:text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 shadow-xl shadow-orange-500/30 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry Token</span>
                  </button>

                  <a
                    href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20New%20Online%20Enquiry:%0A*Parent:*%20${encodeURIComponent(form.parentName || 'Parent')}%0A*Phone:*%20${encodeURIComponent(form.phone || 'Not provided')}%0A*Child:*%20${encodeURIComponent(form.childName || 'Child')}%20(${encodeURIComponent(form.childAge || 'Age not provided')})%0A*Interest:*%20${encodeURIComponent(form.interest)}%0A*Message:*%20${encodeURIComponent(form.message || 'I would like more information.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playPopSound()}
                    className="w-full py-3 rounded-2xl font-comic font-bold text-xs sm:text-sm text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <span>💬 Send Enquiry Directly on WhatsApp</span>
                  </a>
                </div>

              </form>
            ) : (
              <div className="text-center space-y-5 py-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
                  🎉
                </div>
                <div className="space-y-1">
                  <h3 className="font-comic font-bold text-2xl sm:text-3xl text-slate-950">
                    Enquiry Received! 🐣
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-900 max-w-md mx-auto font-semibold">
                    Thank you, <strong>{form.parentName}</strong>. Your enquiry ticket reference is:
                  </p>
                </div>

                <div className="bg-amber-100 p-3 sm:p-4 rounded-2xl border-2 border-dashed border-amber-400 font-mono font-bold text-xl text-amber-950">
                  {ticketId}
                </div>

                <p className="text-xs text-slate-900 font-medium">
                  We will call you at <strong>{form.phone}</strong> shortly.
                </p>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20I%20have%20submitted%20an%20Enquiry%20Ticket:%0A*Ticket%20ID:*%20${encodeURIComponent(ticketId)}%0A*Parent:*%20${encodeURIComponent(form.parentName)}%0A*Phone:*%20${encodeURIComponent(form.phone)}%0A*Child:*%20${encodeURIComponent(form.childName)}%20(${encodeURIComponent(form.childAge)})%0A*Interest:*%20${encodeURIComponent(form.interest)}%0A*Message:*%20${encodeURIComponent(form.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playPopSound()}
                    className="w-full py-3 rounded-xl font-comic font-bold text-xs sm:text-sm text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 hover:scale-102 transition-all flex items-center justify-center gap-2"
                  >
                    <span>💬 Chat on WhatsApp with Ticket #{ticketId}</span>
                  </a>

                  <button
                    onClick={() => {
                      playPopSound();
                      setSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs text-amber-950 bg-amber-100 hover:bg-amber-200 transition-colors border border-amber-300"
                  >
                    Send Another Enquiry 🔄
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Campus Details & Direct Connect */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box */}
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white rounded-3xl p-6 border-3 border-emerald-200 shadow-lg space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xl">
                  💬
                </div>
                <div>
                  <h3 className="font-comic font-bold text-xl text-slate-950">Instant WhatsApp Chat</h3>
                  <p className="text-xs text-slate-900 font-semibold">Immediate response from our team</p>
                </div>
              </div>

              <p className="text-xs text-slate-900 leading-relaxed font-semibold">
                Want a quick fee quotation or syllabus PDF directly on your phone? Tap below:
              </p>

              <a
                href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20I%20am%20interested%20in%20enrolling%20my%20child.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPopSound()}
                className="w-full py-3 rounded-2xl font-comic font-bold text-sm text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp</span>
                <span>➔</span>
              </a>
            </div>

            {/* Campus Info Card */}
            <div className="bg-white rounded-3xl p-6 border-3 border-amber-200 shadow-lg space-y-4">
              <h3 className="font-comic font-bold text-lg text-slate-950 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>Campus Location & Timings</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-900 font-semibold">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>{schoolData.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <a href={`tel:${schoolData.phone}`} className="hover:text-amber-700 font-bold">{schoolData.phone}</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <a href={`mailto:${schoolData.email}`} className="hover:text-amber-700">{schoolData.email}</a>
                </div>
                <div className="flex items-center gap-2.5 text-amber-950 bg-amber-50 p-2.5 rounded-xl border border-amber-300">
                  <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span><strong>Hours:</strong> {schoolData.timings}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

    </div>
  );
};
