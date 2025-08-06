import React, { useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// Lazy load components for better performance
const HeroSection = lazy(() => import('./gesture-ai/components/HeroSection'));
const FeaturesSection = lazy(() => import('./gesture-ai/components/FeaturesSection'));
const UseCasesSection = lazy(() => import('./gesture-ai/components/UseCasesSection'));
const DemoSection = lazy(() => import('./gesture-ai/components/DemoSection'));
const ContactSection = lazy(() => import('./gesture-ai/components/ContactSection'));
const BackgroundParticles = lazy(() => import('./gesture-ai/components/BackgroundParticles'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="animate-pulse text-2xl text-cyan-400">Loading Gesture AI...</div>
  </div>
);

// Error Boundary component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Gesture AI Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center">
          <h2 className="text-2xl font-bold text-rose-500 mb-4">Something went wrong</h2>
          <p className="mb-4">We're having trouble loading the Gesture AI page.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-cyan-500 text-black rounded-md hover:bg-cyan-400 transition-colors"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const Gesture: React.FC = () => {
  useEffect(() => {
    // Set the page title
    document.title = 'ADmyBRAND AI Suite | AI-Powered Marketing Platform';
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="gesture-ai-page">
        <Helmet>
          <meta name="description" content="Elevate your marketing with ADmyBRAND AI Suite – the unified platform that creates, manages, and optimizes campaigns autonomously across channels." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Helmet>
        
        <Suspense fallback={<LoadingFallback />}>
          <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
            <BackgroundParticles />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <HeroSection />
                <div className="relative w-full h-[600px] mt-16 mb-24">
                  <div className="relative z-10 rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20">
                    <img 
                      src="/images/gesture-logo.png" 
                      alt="ADmyBRAND AI Suite Illustration" 
                      className="w-full h-full object-cover rounded-2xl"
                      style={{
                        filter: 'brightness(0.9) contrast(1.1)'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
                </div>
                <FeaturesSection />
                <UseCasesSection />
                <DemoSection />
                <ContactSection />
              </motion.div>
            </div>
          </div>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default Gesture;
