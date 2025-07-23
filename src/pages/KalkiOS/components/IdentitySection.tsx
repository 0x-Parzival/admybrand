import React from 'react';
import { motion } from 'framer-motion';

const coreValues = [
  {
    icon: '🛡️',
    title: 'Sovereignty',
    description: 'Your data, your rules. No telemetry, no tracking, no compromise.',
  },
  {
    icon: '🧠',
    title: 'Local Intelligence',
    description: 'Run AI locally, without cloud dependencies. Privacy-first by design.',
  },
  {
    icon: '🗝️',
    title: 'Source Access',
    description: 'Every line of code is yours to inspect, modify, and improve.',
  },
];

const IdentitySection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/80 to-purple-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Why KalkiOS Exists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Today's operating systems demand the internet. They demand telemetry. They demand your trust. KalkiOS offers a way out—the way back to sovereignty and truth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-xl border border-gray-800/50 bg-black/30 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3 text-purple-400">{value.icon}</span>
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
              </div>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto mt-16 text-center text-gray-400"
        >
          <p>
            In a world where GrapheneOS and NixOS lead the charge for digital autonomy, KalkiOS stands as the next evolution—where privacy meets AI, and sovereignty meets simplicity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IdentitySection;
