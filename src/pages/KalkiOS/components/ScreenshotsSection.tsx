import React from 'react';
import { motion } from 'framer-motion';

interface Screenshot {
  id: number;
  title: string;
  description: string;
  src: string;
  alt: string;
}

const screenshots: Screenshot[] = [
  {
    id: 1,
    title: 'Bootup Sequence',
    description: 'Experience KalkiOS booting up with its sleek interface and offline-first design.',
    src: '/screenshots/placeholder.png',
    alt: 'KalkiOS bootup sequence placeholder',
  },
  {
    id: 2,
    title: 'Terminal Interface',
    description: 'The terminal with built-in AI assistant, ready to help you with your tasks.',
    src: '/screenshots/placeholder.png',
    alt: 'KalkiOS terminal interface placeholder',
  },
  {
    id: 3,
    title: 'Desktop Environment',
    description: 'Clean and minimal desktop interface with essential tools at your fingertips.',
    src: '/screenshots/placeholder.png',
    alt: 'KalkiOS desktop environment placeholder',
  },
  {
    id: 4,
    title: 'Jupyter Notebook',
    description: 'Integrated Jupyter notebook with Ollama support for AI-powered development.',
    src: '/screenshots/placeholder.png',
    alt: 'KalkiOS Jupyter notebook placeholder',
  },
];

const ScreenshotsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/50 to-black/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Interface Peek
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            See KalkiOS in action. Experience the interface that puts you in control.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={screenshots[currentSlide].src}
                  alt={screenshots[currentSlide].alt}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-semibold text-white mb-2">{screenshots[currentSlide].title}</h3>
                <p className="text-gray-400">{screenshots[currentSlide].description}</p>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrev}
                className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
