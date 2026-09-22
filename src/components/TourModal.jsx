import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import { playFanfareSound, playPopSound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';
import { schoolData } from '../data/schoolData';

export const TourModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    date: '',
    timeSlot: '10:00 AM – 11:30 AM (Morning Slot)',
    childAge: '3',
  });

  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
    playFanfareSound();
    triggerConfetti();
  };

  const handleClose = () => {
    playPopSound();
    setBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-300 relative max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!booked ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Header */}
            <div className="text-center space-y-1 pb-3 border-b border-amber-100">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mx-auto text-2xl">
                📍
              </div>
              <h3 className="font-comic font-bold text-2xl text-slate-950">
                Book a Campus Discovery Tour
              </h3>
              <p className="text-xs text-slate-900 font-semibold">
                Experience our splash pool, sensory lab, and meet our early childhood mentors!
              </p>
            </div>

            {/* Parent Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-amber-600" />
                <span>Parent Name *</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Priya Patel"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Mobile Phone *</span>
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

            {/* Date */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>Select Tour Date *</span>
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Slot */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Preferred Time Slot *</span>
              </label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full bg-amber-50/40 border-2 border-amber-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-950 focus:outline-none focus:border-amber-500"
              >
                <option value="10:00 AM – 11:30 AM (Morning Slot)">10:00 AM – 11:30 AM (Morning Slot)</option>
                <option value="12:00 PM – 1:30 PM (Noon Slot)">12:00 PM – 1:30 PM (Noon Slot)</option>
                <option value="4:00 PM – 5:30 PM (Evening Play Slot)">4:00 PM – 5:30 PM (Evening Play Slot)</option>
              </select>
            </div>

            {/* Submit */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl font-comic font-bold text-sm text-white bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm Guided Visit 🐣</span>
              </button>

              <a
                href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20I%20would%20like%20to%20book%20a%20campus%20discovery%20tour.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPopSound()}
                className="w-full py-2.5 rounded-2xl font-comic font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>💬 Quick Book Directly via WhatsApp</span>
              </a>
            </div>

          </form>
        ) : (
          /* Confirmation */
          <div className="text-center space-y-4 py-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
              🎉
            </div>
            <h3 className="font-comic font-bold text-2xl text-slate-950">
              Campus Visit Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold">
              Thank you, <strong>{formData.parentName}</strong>! We look forward to welcoming you and your little one on <strong>{formData.date}</strong> during <strong>{formData.timeSlot}</strong>.
            </p>
            <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 text-xs text-amber-950 font-bold">
              📍 Location: {schoolData.address}
            </div>
            
            {/* Send to WhatsApp Confirmation Button */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20I%20have%20booked%20a%20campus%20visit.%0A%0A*Parent%20Name:*%20${encodeURIComponent(formData.parentName)}%0A*Phone:*%20${encodeURIComponent(formData.phone)}%0A*Date:*%20${encodeURIComponent(formData.date)}%0A*Slot:*%20${encodeURIComponent(formData.timeSlot)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPopSound()}
                className="w-full py-3 rounded-xl font-comic font-bold text-xs sm:text-sm text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all hover:scale-102"
              >
                <span>💬 Send Confirmation to WhatsApp</span>
              </a>

              <button
                onClick={handleClose}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
