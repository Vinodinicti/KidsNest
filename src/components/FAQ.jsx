import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { playPopSound } from '../utils/audio';
import { schoolData } from '../data/schoolData';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    playPopSound();
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="pt-0 pb-6 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-amber-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-comic text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500">Questions</span> 💡
          </h2>
          <p className="text-slate-900 text-xs sm:text-sm md:text-base font-semibold">
            Everything you need to know about safety, curriculum, meals, and enrollment at Kids Nest.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {schoolData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-amber-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-4 sm:p-5 font-comic font-bold text-base sm:text-lg text-slate-950 flex items-center justify-between gap-4 hover:bg-amber-50/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-amber-100 text-amber-950 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-amber-500 text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-950 leading-relaxed font-semibold border-t border-amber-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
