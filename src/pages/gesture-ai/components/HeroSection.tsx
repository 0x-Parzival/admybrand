import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import customLogo from '../../../assets/1630616908791.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
              >
                <img 
                  src={customLogo} 
                  alt="ADmyBRAND AI Suite Logo" 
                  className="h-12 w-auto"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  ADmyBRAND AI Suite
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
              >
                Unleash AI-Driven Marketing{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  Across Every Channel
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 mb-8"
              >
                Create, launch, and optimize campaigns automatically with our end-to-end artificial intelligence marketing suite.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a
                  href="#demo"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 group"
                >
                  Try Demo
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#about"
                  className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
            
            {/* Right side - Hero image */}
            <motion.div 
              className="md:w-1/2 mt-12 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl -rotate-6 blur-xl"></div>
                <img 
                  src={customLogo} 
                  alt="ADmyBRAND AI Suite Dashboard" 
                  className="relative z-10 rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
