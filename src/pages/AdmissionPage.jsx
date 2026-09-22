import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Sparkles, Phone, CheckCircle2, ShieldCheck, Heart, Clock, Calendar, Download } from 'lucide-react';
import { Admissions } from '../components/Admissions';
import { schoolData } from '../data/schoolData';
import { playPopSound } from '../utils/audio';

export const AdmissionPage = () => {
  const location = useLocation();
  const preSelectedProgram = location.state?.selectedProgram || 'Pre KG';

  useEffect(() => {
    if (location.state?.openForm) {
      const formSection = document.getElementById('admissions');
      if (formSection) {
        setTimeout(() => {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }
  }, [location.state]);

  const documents = [
    { title: "Child's Birth Certificate", desc: "Municipal birth certificate copy for age verification." },
    { title: "Immunization / Vaccination Card", desc: "Up-to-date pediatric health & allergy records." },
    { title: "Passport Size Photos (4 copies)", desc: "Recent passport photos of child and parents." },
    { title: "Parent / Guardian ID & Address Proof", desc: "Aadhaar Card / Passport / Residence proof." },
  ];

  return (
    <div className="pt-24 pb-20 space-y-10 sm:space-y-14">
      
      {/* Hero Header */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-pink-100 text-amber-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Admission OPEN NOW • Academic Year {schoolData.admissionsYear}</span>
          </div>
          <h1 className="font-comic text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 leading-tight">
            Admissions <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500">Open Now</span> 🐣
          </h1>
          <p className="text-slate-900 text-base sm:text-lg max-w-2xl mx-auto font-bold">
            "{schoolData.subTagline}"
          </p>
          <p className="text-slate-900 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
            We are excited to announce that enrolment for the upcoming academic year at our school is now open. Our program is designed to provide a fun educational experience for age group between 1 – 6.
          </p>
        </div>

        {/* Featured Campus Entrance Image */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300 group">
          <img 
            src={schoolData.admissionHero} 
            alt="Welcome to Kids Nest - Parents and children arriving happily at campus" 
            className="w-full h-64 sm:h-80 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-5 sm:p-8">
            <div className="text-left text-white space-y-1.5">
              <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow">
                🏫 Welcome to Kids Nest Campus
              </span>
              <h3 className="font-comic font-bold text-lg sm:text-2xl text-white drop-shadow">
                Where Every Child's Learning Journey Begins With Joy
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Placement & Helplines Grid Banner */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-3 sm:border-4 border-amber-300 shadow-xl space-y-4">
          <div className="text-center space-y-0.5 max-w-2xl mx-auto">
            <span className="text-[11px] font-bold text-amber-950 uppercase tracking-wider">
              Academic Eligibility Structure
            </span>
            <h2 className="font-comic font-bold text-xl sm:text-2xl text-slate-950">
              Grade Placement by Age Group
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-900 font-semibold">
              Select your child's age group to find their ideal classroom stage at Kids Nest
            </p>
          </div>

          {/* Age Group Grid (2-column on mobile) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            <div className="bg-white py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl border-2 border-amber-300 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-900 block">1.8 – 2.5 Age</span>
                <h3 className="font-comic font-bold text-sm sm:text-lg text-slate-950 leading-tight">Play Group</h3>
              </div>
              <span className="text-xl sm:text-2xl">🧸</span>
            </div>

            <div className="bg-white py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl border-2 border-amber-300 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-900 block">2.5 – 3.5 Age</span>
                <h3 className="font-comic font-bold text-sm sm:text-lg text-slate-950 leading-tight">Pre KG</h3>
              </div>
              <span className="text-xl sm:text-2xl">🎨</span>
            </div>

            <div className="bg-white py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl border-2 border-amber-300 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-900 block">3.5 – 4.5 Age</span>
                <h3 className="font-comic font-bold text-sm sm:text-lg text-slate-950 leading-tight">LKG</h3>
              </div>
              <span className="text-xl sm:text-2xl">🚀</span>
            </div>

            <div className="bg-white py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl border-2 border-amber-300 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-900 block">4.5 – 5.5 Age</span>
                <h3 className="font-comic font-bold text-sm sm:text-lg text-slate-950 leading-tight">UKG</h3>
              </div>
              <span className="text-xl sm:text-2xl">🎓</span>
            </div>
          </div>

          {/* Official Helplines - 2 Numbers in 2 Columns */}
          <div className="bg-white py-3 px-4 sm:px-5 rounded-xl border-2 border-amber-200 shadow-sm flex flex-col items-center justify-center space-y-2.5">
            <div className="text-center">
              <div className="text-[11px] sm:text-xs font-bold text-slate-950 uppercase tracking-wider flex items-center justify-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>Call For Admission Query:</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-800 font-semibold mt-0.5">
                Available Monday – Saturday (8:30 AM – 6:30 PM)
              </p>
            </div>
            
            {/* 2 Columns Phone Number Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-lg mx-auto font-comic font-bold text-xs sm:text-sm">
              <a 
                href={`tel:${schoolData.phone}`} 
                className="text-red-600 hover:text-red-700 hover:bg-red-100 flex items-center justify-center gap-1.5 bg-red-50/90 px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-red-200/80 shadow-xs transition-all text-center"
              >
                <span>📞</span>
                <span className="truncate">{schoolData.phone}</span>
              </a>
              <a 
                href={`tel:${schoolData.altPhone}`} 
                className="text-red-600 hover:text-red-700 hover:bg-red-100 flex items-center justify-center gap-1.5 bg-red-50/90 px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-red-200/80 shadow-xs transition-all text-center"
              >
                <span>📞</span>
                <span className="truncate">{schoolData.altPhone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Main Interactive Form & Roadmap */}
      <Admissions initialProgram={preSelectedProgram} />

      {/* Required Documentation Checklist (2-column on mobile) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border-3 border-amber-200 shadow-xl space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center text-xl sm:text-2xl shrink-0">
              📋
            </div>
            <div>
              <h2 className="font-comic font-bold text-xl sm:text-2xl text-slate-950">
                Required Documents Checklist
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-900 font-semibold">
                Keep these handy for your campus visit or enrollment completion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {documents.map((doc, idx) => (
              <div key={idx} className="bg-amber-50/70 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-amber-200/80 flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-comic font-bold text-xs sm:text-sm text-slate-950 leading-tight">{doc.title}</h4>
                  <p className="text-[10px] sm:text-xs text-slate-900 mt-0.5 font-medium line-clamp-2 sm:line-clamp-none">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
