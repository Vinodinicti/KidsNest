import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { playChimeSound } from '../utils/audio';
import { schoolData } from '../data/schoolData';

export const Events = ({ onOpenTour }) => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-amber-300">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Mark Your Calendars</span>
          </div>
          <h2 className="font-comic text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500">Events & Festivals</span> 🎪
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium max-w-2xl mx-auto">
            Experience our vibrant campus spirit through interactive science fairs, art carnivals, and cultural galas.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {schoolData.events.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-to-b from-amber-50/40 to-white rounded-3xl p-6 border-2 border-amber-200/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all card-pop flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-300 inline-block">
                  {event.badge}
                </span>

                <h3 className="font-comic font-bold text-xl text-slate-900 leading-snug">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {event.description}
                </p>

                <div className="space-y-1.5 pt-2 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Kids%20Nest!%20I%20would%20like%20to%20RSVP%20and%20attend%20the%20event:%20*${encodeURIComponent(event.title)}*%20on%20${encodeURIComponent(event.date)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPopSound()}
                  className="w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>💬 RSVP on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
