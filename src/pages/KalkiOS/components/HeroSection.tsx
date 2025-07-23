import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import RotatingSlogan from './RotatingSlogan';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      const terminal = new Terminal({
        theme: {
          background: '#000000',
          foreground: '#ffffff',
          cursor: '#ffffff'
        },
        fontSize: 14
      });

      terminal.open(terminalRef.current);
      
      // Simulate typing animation
      const commands = [
        'sudo ignite_transcendence',
        'Loading AI core...',
        'Initializing quantum entanglement...',
        'System ready.'
      ];

      const typeCommand = async (cmd: string, delay: number = 50) => {
        for (let i = 0; i < cmd.length; i++) {
          terminal.write(cmd[i]);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
        terminal.write('\r\n');
      };

      const animateTerminal = async () => {
        for (const cmd of commands) {
          await typeCommand(cmd);
        }
      };

      animateTerminal();
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('kalkios-page');
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/50 to-black/60">
        {/* Geometric patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1)_0%,rgba(168,85,247,0)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1)_0%,rgba(147,51,234,0)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.1)_0%,rgba(79,70,229,0)_100%)]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-6xl md:text-8xl font-extrabold tracking-tight">
              KalkiOS
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300/80 to-blue-400/80">
            <RotatingSlogan />
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Built for AI, privacy, and digital sovereignty—without compromise.
          </p>
          
          {/* Keywords */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {['Offline', 'Open-source', 'AI Assistance', 'No Telemetry', 'Arch Core'].map((keyword) => (
              <span
                key={keyword}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-800/50 to-blue-900/50 text-white/90 text-sm font-medium backdrop-blur-sm"
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* Terminal Animation */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl h-48">
            <div ref={terminalRef} className="w-full h-full" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              <a href="#download" className="flex-1">Download Alpha</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
            >
              <a href="https://github.com/kalki-os/kalki-os" target="_blank" rel="noopener noreferrer" className="flex-1">View on GitHub</a>
            </motion.div>
          </div>

          <div className="mt-8">
            <div className="h-64 w-full bg-black/50 rounded-lg border border-gray-800 overflow-hidden">
              <div ref={terminalRef} className="h-full" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center text-gray-400"
          >
            <span className="mr-2">Scroll to Begin</span>
            <svg className="inline w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
