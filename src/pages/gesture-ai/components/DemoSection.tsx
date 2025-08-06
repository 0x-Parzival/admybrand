import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMousePointer, FiVolume2, FiArrowRight, FiMonitor, FiArrowUp, FiArrowDown, FiArrowLeft, FiArrowRight as FiArrowRightIcon } from 'react-icons/fi';

const DemoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mouse');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const gestureModules = [
    {
      id: 'mouse',
      title: 'Mouse Control',
      icon: <FiMousePointer className="w-5 h-5" />,
      description: 'Control your cursor with intuitive hand movements',
      features: [
        'Move cursor with hand position',
        'Click by pinching thumb and index finger',
        'Drag and drop with closed fist',
        'Right-click with two fingers'
      ],
      video: '/videos/mouse-control-demo.mp4'
    },
    {
      id: 'volume',
      title: 'Volume Control',
      icon: <FiVolume2 className="w-5 h-5" />,
      description: 'Adjust volume with simple hand gestures',
      features: [
        'Raise hand to increase volume',
        'Lower hand to decrease volume',
        'Mute with closed fist',
        'Smooth volume transitions'
      ],
      video: '/videos/volume-control-demo.mp4'
    },
    {
      id: 'presentation',
      title: 'Presentation Control',
      icon: <FiMonitor className="w-5 h-5" />,
      description: 'Navigate presentations without a clicker',
      features: [
        'Swipe left/right to change slides',
        'Point up/down to scroll',
        'Zoom with pinch gestures',
        'Pointer mode for highlighting'
      ],
      video: '/videos/presentation-demo.mp4'
    }
  ];

  const activeModule = gestureModules.find(module => module.id === activeTab) || gestureModules[0];

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-cyan-500/3 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="px-4 py-2 text-sm font-medium text-cyan-400 bg-cyan-400/10 rounded-full mb-4 inline-block">
              Live Demos
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-100"
          >
            Experience ADmyBRAND AI Suite
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Try our interactive demos to see how ADmyBRAND AI Suite can supercharge your marketing workflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Demo Selector */}
          <div className="lg:col-span-4 space-y-4">
            {gestureModules.map((module) => (
              <motion.button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeTab === module.id 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 shadow-lg shadow-cyan-500/5'
                    : 'bg-white/5 border border-white/5 hover:border-cyan-500/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg mr-4 ${
                    activeTab === module.id 
                      ? 'bg-gradient-to-br from-cyan-500 to-emerald-500'
                      : 'bg-white/5'
                  }`}>
                    <img 
                      src="/assets/gesture.png" 
                      alt="ADmyBRAND AI Suite" 
                      className="w-8 h-8 object-cover"
                      style={{
                        filter: 'brightness(0.9) contrast(1.1)',
                        transform: 'scale(0.8)'
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{module.title}</h3>
                    <p className="text-sm text-gray-400">{module.description}</p>
                  </div>
                  {activeTab === module.id && (
                    <FiArrowRight className="ml-auto text-cyan-400" />
                  )}
                </div>
              </motion.button>
            ))}

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 border border-cyan-500/10">
              <h3 className="text-lg font-semibold text-white mb-3">Gesture Guide</h3>
              <ul className="space-y-3">
                {activeModule.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Demo Display */}
          <div className="lg:col-span-8">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden bg-black/30 border border-white/10 backdrop-blur-sm"
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <img 
                    src="/images/gesture-logo.png" 
                    alt="ADmyBRAND AI Suite in action" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => {
                        if (videoRef.current) {
                          if (isVideoPlaying) {
                            videoRef.current.pause();
                          } else {
                            videoRef.current.play();
                          }
                          setIsVideoPlaying(!isVideoPlaying);
                        }
                      }}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      {isVideoPlaying ? 'Pause' : 'Play'} Demo
                      {!isVideoPlaying && (
                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <video
                  ref={videoRef}
                  src={activeModule.video}
                  className="absolute inset-0 w-full h-full object-cover opacity-0"
                  loop
                  muted
                  playsInline
                  onEnded={handleVideoEnded}
                />
              </div>
              
              {/* Gesture Controls Overlay */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <FiArrowUp className="w-5 h-5" />
                  <span className="text-sm">Up</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <FiArrowDown className="w-5 h-5" />
                  <span className="text-sm">Down</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <FiArrowLeft className="w-5 h-5" />
                  <span className="text-sm">Left</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <FiArrowRightIcon className="w-5 h-5" />
                  <span className="text-sm">Right</span>
                </div>
                <div className="h-6 w-px bg-white/20 mx-2"></div>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  <span className="text-sm">Hand Detected</span>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-6">Ready to integrate ADmyBRAND AI Suite into your stack?</p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity group"
              >
                Get Started with ADmyBRAND AI Suite
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
