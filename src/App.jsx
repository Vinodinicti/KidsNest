import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TourModal } from './components/TourModal';
import { SplashScreen } from './components/SplashScreen';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { AfterSchoolPage } from './pages/AfterSchoolPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { schoolData } from './data/schoolData';
import { playPopSound } from './utils/audio';

// Scroll to top automatically on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [tourModalOpen, setTourModalOpen] = useState(false);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Router>
      <ScrollToTop />
      <div className="min-h-screen relative font-sans text-slate-950 bg-[#FFFDF7] flex flex-col justify-between">
        
        {/* Global Navigation Bar */}
        <Navbar onOpenTour={() => setTourModalOpen(true)} />

        {/* Main Routed Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenTour={() => setTourModalOpen(true)} />} />
            <Route path="/about" element={<AboutPage onOpenTour={() => setTourModalOpen(true)} />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/after-school" element={<AfterSchoolPage onOpenTour={() => setTourModalOpen(true)} />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
            <Route path="*" element={<HomePage onOpenTour={() => setTourModalOpen(true)} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenTour={() => setTourModalOpen(true)} />

        {/* Campus Discovery Tour Booking Modal */}
        <TourModal
          isOpen={tourModalOpen}
          onClose={() => setTourModalOpen(false)}
        />

        {/* Floating Quick Action Buttons */}
        <aside aria-label="Quick actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
          <Link
            to="/admission"
            state={{ openForm: true }}
            onClick={() => playPopSound()}
            title="Open Admission Form"
            className="group flex items-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all"
          >
            <span className="text-base">🎓</span>
            <span className="hidden sm:inline">Admission</span>
          </Link>

          <a
            href={`https://wa.me/${schoolData.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Kids%20Nest!%20I%20would%20like%20to%20know%20more%20about%20admissions%20and%20activities.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playPopSound()}
            title="Chat with Kids Nest on WhatsApp"
            className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all"
          >
            <span className="text-base animate-bounce">💬</span>
            <span className="hidden sm:inline">WhatsApp Chat</span>
          </a>
        </aside>

      </div>
    </Router>
    </>
  );
}

export default App;
