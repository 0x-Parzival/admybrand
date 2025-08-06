import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiHeadphones, FiActivity, FiCode, FiServer, FiGrid, FiCamera, FiTablet, FiWatch } from 'react-icons/fi';

interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const useCases: UseCase[] = [
  {
    title: 'VR/AR Applications',
    description: 'Control virtual environments with natural hand movements for immersive experiences',
    icon: <FiMonitor className="w-6 h-6" />,
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Smart Home Control',
    description: 'Manage your smart home devices with simple, intuitive gestures',
    icon: <FiSmartphone className="w-6 h-6" />,
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Gaming',
    description: 'Next-level gaming with responsive, gesture-based controls',
    icon: <FiHeadphones className="w-6 h-6" />,
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Accessibility',
    description: 'Make technology accessible with touchless interaction',
    icon: <FiActivity className="w-6 h-6" />,
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    title: 'Robotics',
    description: 'Precise control of robotic systems with hand movements',
    icon: <FiCode className="w-6 h-6" />,
    gradient: 'from-red-500 to-pink-600'
  },
  {
    title: 'Healthcare',
    description: 'Hygienic, touchless control in medical environments',
    icon: <FiServer className="w-6 h-6" />,
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Digital Signage',
    description: 'Interactive displays that respond to user gestures',
    icon: <FiGrid className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'Photography',
    description: 'Control cameras and equipment with hand signals',
    icon: <FiCamera className="w-6 h-6" />,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Education',
    description: 'Interactive learning through gesture-based controls',
    icon: <FiTablet className="w-6 h-6" />,
    gradient: 'from-rose-500 to-pink-600'
  },
  {
    title: 'Wearables',
    description: 'Extend functionality of smartwatches and wearables',
    icon: <FiWatch className="w-6 h-6" />,
    gradient: 'from-violet-500 to-purple-600'
  }
];

const UseCasesSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
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
              Endless Marketing Possibilities
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-100"
          >
            Transform Your Marketing with ADmyBRAND AI Suite
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Discover how ADmyBRAND AI Suite drives growth across diverse industries and use-cases.
          </motion.p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative h-full"
            >
              <div className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-4`}>
                  <div className="text-white">
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-400 mt-auto">
                  {useCase.description}
                </p>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-10 rounded-2xl`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-gray-400 mb-6">Have a specific use case in mind?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold rounded-lg hover:opacity-90 transition-all duration-300 group"
          >
            Contact Our Team
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
