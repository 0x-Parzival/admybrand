import React from 'react';
import { motion } from 'framer-motion';

const DownloadSection: React.FC = () => {
  const downloadOptions = [
    {
      id: 'windows',
      name: 'Windows',
      version: 'Windows 10/11 x64',
      size: '2.4 GB',
      icon: '💻',
      extension: '.exe'
    },
    {
      id: 'macos',
      name: 'macOS',
      version: 'macOS 12+',
      size: '3.1 GB',
      icon: '🍎',
      extension: '.dmg'
    },
    {
      id: 'linux',
      name: 'Linux',
      version: 'Ubuntu/Debian',
      size: '2.8 GB',
      icon: '🐧',
      extension: '.deb'
    },
    {
      id: 'source',
      name: 'Source Code',
      version: 'GitHub Repository',
      size: '1.2 GB',
      icon: '📦',
      extension: '.tar.gz'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTFlMjkiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xNiA4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0xNiA4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0xNiA4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0tMTYgOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] -z-10 opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Get Started
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Download KalkiOS and join the community
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {downloadOptions.map((os) => (
              <div key={os.id}>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition-all hover:-translate-y-1">
                  <div className="p-6">
                  <div className="text-4xl mb-4">{os.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{os.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{os.version}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{os.size}</span>
                    <span className="mx-2">•</span>
                    <span>{os.extension}</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 font-medium hover:from-cyan-500/20 hover:to-blue-500/20 transition-all border-t border-gray-800 flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              System Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-cyan-400 font-medium mb-2">Minimum</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    64-bit x86 or ARM processor
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    4GB RAM (8GB recommended)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    20GB free disk space
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-cyan-400 font-medium mb-2">Recommended</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    8+ core processor
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    16GB+ RAM
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SSD with 50GB+ free space
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-bold text-white mb-4">Need help with installation?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Check out our documentation for detailed installation instructions and troubleshooting guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Documentation
            </a>
            <a 
              href="#" 
              className="px-6 py-3 border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-medium rounded-lg transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Troubleshooting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
