import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Feature {
  icon: string;
  title: string;
  description: string;
  benefit: string;
  tooltip?: string;
}

const features: Feature[] = [
  {
    icon: '🔄',
    title: 'Offline Boot',
    description: 'KalkiOS boots without internet, caching packages locally.',
    benefit: 'No dependency on external servers.',
    tooltip: 'Offline-first design ensures system reliability without internet access.',
  },
  {
    icon: '🧠',
    title: 'AI Integration',
    description: 'Built-in Ollama AI assistant for local development.',
    benefit: 'AI-powered development without cloud services.',
    tooltip: 'Local AI processing ensures data privacy and reduces latency.',
  },
  {
    icon: '📦',
    title: 'Modular Packages',
    description: 'Pre-configured package sets for different use cases.',
    benefit: 'Choose what you need, nothing more.',
    tooltip: 'Customizable package selection for minimal system footprint.',
  },
  {
    icon: '🔒',
    title: 'Security First',
    description: 'AppArmor + Firejail sandboxing.',
    benefit: 'Secure by default.',
    tooltip: 'Process isolation and security policies protect your system.',
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Minimal overhead, optimized for speed.',
    benefit: 'Runs smoothly on older hardware.',
    tooltip: 'Lightweight architecture ensures efficient resource usage.',
  },
  {
    icon: '💻',
    title: 'Developer Tools',
    description: 'Pre-configured development environment.',
    benefit: 'Ready to code out of the box.',
    tooltip: 'Integrated development tools for AI-powered workflows.',
  },
];

const TechnicalFeaturesSection: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const renderFeatureCard = (feature: Feature) => {
    return (
      <div className="relative">
        <div className="flex items-center mb-6">
          <span className="text-5xl md:text-6xl text-purple-400/80">{feature.icon}</span>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white/90">{feature.title}</h3>
            <p className="text-gray-400/80 mt-2">{feature.description}</p>
          </div>
        </div>
        <p className="text-gray-400/80 mt-4">{feature.benefit}</p>
        {feature.tooltip && hoveredFeature === feature.title && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-4 text-white w-72 text-sm">
            <p className="text-white/90">{feature.tooltip}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-purple-900/50 via-purple-800/30 to-black/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300/80 to-blue-400/80"
          >
            Technical Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400/80 max-w-3xl mx-auto"
          >
            Core capabilities that make KalkiOS unique
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/60 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredFeature(feature.title)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                {renderFeatureCard(feature)}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalFeaturesSection;
