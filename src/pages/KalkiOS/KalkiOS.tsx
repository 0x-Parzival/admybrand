import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import IdentitySection from './components/IdentitySection';
import TechnicalFeaturesSection from './components/TechnicalFeaturesSection';
import ScreenshotsSection from './components/ScreenshotsSection';
import RoadmapSection from './components/RoadmapSection';
import DownloadSection from './components/DownloadSection';
import ManifestoFooter from './components/ManifestoFooter';

const KalkiOS: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto font-mono">
      <div className="relative z-30">
        <HeroSection />
      </div>
      <div className="relative z-20 py-20">
        <IdentitySection />
      </div>
      <div className="relative z-20 py-20">
        <TechnicalFeaturesSection />
      </div>
      <div className="relative z-20 py-20">
        <ScreenshotsSection />
      </div>
      <div className="relative z-20 py-20">
        <RoadmapSection />
      </div>
      <div className="relative z-20 py-20">
        <DownloadSection />
      </div>
      <div className="relative z-20 py-20">
        <ManifestoFooter />
      </div>
    </div>
  );
};

export default KalkiOS;
