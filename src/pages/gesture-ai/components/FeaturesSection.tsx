import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/features';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-cyan-500/3 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="px-4 py-2 text-sm font-medium text-cyan-400 bg-cyan-400/10 rounded-full mb-4 inline-block">
              Why Choose ADmyBRAND AI Suite
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-100"
          >
            Smarter Features for Autonomous Marketing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Experience next-level marketing automation powered by cutting-edge generative AI.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl overflow-hidden ${
                feature.highlight 
                  ? 'bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20' 
                  : 'bg-white/5 backdrop-blur-sm border border-white/5 hover:border-cyan-500/30'
              }`}
            >
              {/* Highlight badge */}
              {feature.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-emerald-500 text-black rounded-full">
                  Most Popular
                </div>
              )}
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-6">
                <div className="w-8 h-8">
                  {feature.icon}
                </div>
              </div>
              
              {/* Title & Description */}
              <h3 className={`text-xl font-bold mb-3 ${
                feature.highlight ? 'text-white' : 'text-white'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                feature.highlight ? 'text-cyan-100' : 'text-gray-400'
              }`}>
                {feature.description}
              </p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-gray-400 mb-6">Ready to experience the future of interaction?</p>
          <a 
            href="#demo" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold rounded-lg hover:opacity-90 transition-all duration-300 group"
          >
            Try Demo Now
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;