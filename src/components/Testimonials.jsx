import React from 'react';
import { Star, Heart, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-amber-50/40 relative overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-amber-300">
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>Loved by 2,500+ Happy Families</span>
          </div>
          <h2 className="font-comic text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Heartwarming <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500">Parent Stories</span> 💬
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium max-w-2xl mx-auto">
            Read what our wonderful parent community shares about their child's magical transformation at Kids Nest.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {schoolData.testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200/80 shadow-lg shadow-amber-900/5 card-pop flex flex-col justify-between relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-amber-200/60">
                <Quote className="w-10 h-10" />
              </div>

              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-1">5.0</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  "{test.review}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-300"
                />
                <div>
                  <h4 className="font-comic font-bold text-sm sm:text-base text-slate-900 flex items-center gap-1.5">
                    <span>{test.name}</span>
                  </h4>
                  <p className="text-[11px] text-amber-700 font-semibold">{test.child}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full mt-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                    {test.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
