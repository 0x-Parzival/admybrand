import React from 'react';
import { FiZap, FiGlobe, FiLayers, FiShield, FiCode, FiCpu } from 'react-icons/fi';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

export const features: Feature[] = [
  {
    title: 'AI Campaign Generator',
    description: 'Generate high-performing ads and copy in seconds using generative AI',
    icon: React.createElement(FiZap, { className: 'w-8 h-8 text-cyan-400' }),
    highlight: true
  },
  {
    title: 'Omnichannel Automation',
    description: 'Plan, launch, and manage campaigns across social, search, email, and more',
    icon: React.createElement(FiGlobe, { className: 'w-8 h-8 text-cyan-400' })
  },
  {
    title: 'Creative Intelligence',
    description: 'Continuously tests creatives and optimizes messaging for your audience',
    icon: React.createElement(FiLayers, { className: 'w-8 h-8 text-cyan-400' })
  },
  {
    title: 'Privacy First',
    description: 'Your data and customer information stay secure and compliant',
    icon: React.createElement(FiShield, { className: 'w-8 h-8 text-cyan-400' })
  },
  {
    title: 'Predictive Insights',
    description: 'Forecast performance and allocate budget automatically for maximum ROI',
    icon: React.createElement(FiCpu, { className: 'w-8 h-8 text-cyan-400' })
  },
  {
    title: 'Open API',
    description: 'Integrate ADmyBRAND AI Suite with your existing stack effortlessly',
    icon: React.createElement(FiCode, { className: 'w-8 h-8 text-cyan-400' })
  }
];
