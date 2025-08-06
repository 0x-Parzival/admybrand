import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Cursor from './components/Cursor';
// Page Imports
import Home from './pages/Home';
import WhoAmI from './pages/WhoAmI';
import WhoIsShe from './pages/WhoIsShe';
import Spirituality from './pages/Spirituality';
import AECH from './pages/AECH';
import Gesture from './pages/Gesture';
import { GhibliStore } from './pages/GhibliStore.clean';
import TalkWithPhDs from './pages/TalkWithPhDs';
import NandAka from './pages/NandAka';
import DevDat from './pages/DevDatNew';
import DataTreyaPage from './pages/data-treya';
import ExpertsTalk from './pages/ExpertsTalk/ExpertsTalk';
import KalkiOS from './pages/KalkiOS/KalkiOS';
import GesturePage from './pages/gesture-ai/GesturePage';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import HomeButton from './components/HomeButton';
import { ParticlesProvider, useParticles } from './context/ParticlesContext';
import TantraMeditations from './pages/TantraMeditations';

function AppContent() {
  const { opacity } = useParticles();

  return (
    <Router>
      <div className="min-h-screen w-full overflow-y-auto relative bg-black/0">
        {/* Global Particle Background */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <ParticleBackground opacity={opacity} />
        </div>
        
        {/* Home Button */}
        <div className="fixed top-4 left-4 z-50">
          <HomeButton className="backdrop-blur-sm bg-black/20 p-3 rounded-lg" />
        </div>
        
        <Routes>
          {/* Main Navigation */}
          <Route path="/" element={<Gesture />} />
          <Route path="/whoami" element={<WhoAmI />} />
          <Route path="/whoishe" element={<WhoIsShe />} />
          
          {/* Spirituality Section */}
          <Route path="/spirituality" element={<Spirituality />} />
          
          {/* Projects */}
          <Route path="/aech" element={<AECH />} />
          <Route path="/gesture" element={<Gesture />} />
          <Route path="/ghibli-store" element={<GhibliStore />} />
          <Route path="/talk-with-phds" element={<TalkWithPhDs />} />
          <Route path="/nand.aka" element={<TalkWithPhDs />} />
          <Route path="/dev-dat" element={<DevDat />} />
          
          {/* Apps & Tools */}
          <Route path="/data-treya" element={<DataTreyaPage />} />
          <Route path="/experts-talk" element={<ExpertsTalk />} />
          <Route path="/kalkios" element={
            <KalkiOS />
          } />
          <Route path="/gesture-ai" element={<GesturePage />} />
          
          {/* Redirects */}
          <Route path="/kalki" element={<Navigate to="/kalkios" replace />} />
          <Route path="/talk" element={<Navigate to="/experts-talk" replace />} />
          
          {/* Tantra Meditations */}
          <Route path="/tantra-meditations" element={<TantraMeditations />} />
          
          {/* 404 - Keep this last */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ParticlesProvider>
        <div className="min-h-screen w-full overflow-y-auto relative bg-black/0">
          <Cursor />
          <AppContent />
        </div>
      </ParticlesProvider>
    </ThemeProvider>
  );
}
