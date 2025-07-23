import React from 'react';
import { motion } from 'framer-motion';

const InterfaceMockup: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            {/* Mock Browser Header */}
            <div className="bg-gray-800/80 border-b border-gray-700 p-3 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-gray-900/50 rounded-md px-4 py-1.5 text-sm text-gray-400 border border-gray-700">
                kalki://desktop
              </div>
            </div>
            
            {/* Mock Desktop */}
            <div className="relative h-[500px] overflow-hidden">
              {/* Wallpaper */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" />
              
              {/* Icons */}
              <div className="absolute top-8 left-8 text-center w-20">
                <div className="w-12 h-12 mx-auto bg-cyan-500/10 backdrop-blur-sm rounded-lg border border-cyan-500/30 flex items-center justify-center text-2xl mb-1">
                  📁
                </div>
                <span className="text-xs text-white/80">Files</span>
              </div>
              
              <div className="absolute top-8 left-32 text-center w-20">
                <div className="w-12 h-12 mx-auto bg-purple-500/10 backdrop-blur-sm rounded-lg border border-purple-500/30 flex items-center justify-center text-2xl mb-1">
                  🌐
                </div>
                <span className="text-xs text-white/80">Browser</span>
              </div>
              
              <div className="absolute top-32 left-8 text-center w-20">
                <div className="w-12 h-12 mx-auto bg-pink-500/10 backdrop-blur-sm rounded-lg border border-pink-500/30 flex items-center justify-center text-2xl mb-1">
                  ⚙️
                </div>
                <span className="text-xs text-white/80">Settings</span>
              </div>
              
              {/* Terminal Window */}
              <motion.div 
                className="absolute bottom-8 right-8 w-2/3 h-64 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-cyan-500/30 overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="bg-gray-800/80 px-4 py-2 border-b border-gray-700 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-gray-400 ml-3">kalki-terminal</div>
                </div>
                <div className="p-4 font-mono text-sm text-green-400">
                  <div className="mb-2">$ <span className="text-white">welcome to kalki os</span></div>
                  <div className="mb-2">{'>'} <span className="text-cyan-400">system.status()</span></div>
                  <div className="text-gray-400 text-xs mb-4">Checking system status...</div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div>Kernel: <span className="text-green-400">v3.1.0</span></div>
                    <div>AI Core: <span className="text-green-400">active</span></div>
                    <div>Quantum: <span className="text-green-400">online</span></div>
                    <div>Security: <span className="text-green-400">enabled</span></div>
                  </div>
                  <div className="text-cyan-400">{'>'} <span className="text-white">_</span></div>
                </div>
              </motion.div>
              
              {/* Floating AI Assistant */}
              <motion.div 
                className="absolute bottom-32 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring' }}
              >
                <span className="text-xl">🤖</span>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Take Command of the Future
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              No visual clutter. No dopamine traps.
              Instead:
              Transparent terminals
              Fluent launcher tools
              Command-responsive UI
              Live AI agents you control
              Built to calmly scale with your daily needs—whether dev, research, or scripting.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterfaceMockup;
