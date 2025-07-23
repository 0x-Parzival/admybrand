import React from 'react';
import { motion } from 'framer-motion';

interface Milestone {
  id: number;
  title: string;
  date: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  icon: string;
  progress: number;
  githubLink?: string;
  area: string;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: 'ISO Builder V2',
    area: '',
    date: 'Q3 2024',
    description: 'Incremental ISO with synced pacman cache',
    status: 'upcoming',
    icon: '',
    progress: 0,
    githubLink: 'https://github.com/kalkios/iso-builder/issues/1',
  },
  {
    id: 2,
    title: 'AI-Agent Assistant',
    area: '',
    date: 'Q4 2024',
    description: 'Shell-based real-time code assistant',
    status: 'upcoming',
    icon: '',
    progress: 0,
    githubLink: 'https://github.com/kalkios/ai-agent/issues/1',
  },
  {
    id: 3,
    title: 'Dev Portal',
    area: '',
    date: 'Q4 2024',
    description: 'Community Git repo manager, contribution guide',
    status: 'upcoming',
    icon: '',
    progress: 0,
    githubLink: 'https://github.com/kalkios/dev-portal/issues/1',
  },
  {
    id: 4,
    title: 'Hardened Mode',
    area: '',
    date: 'Q1 2025',
    description: 'Firejail + SQLite AppArmor profiles',
    status: 'upcoming',
    icon: '',
    progress: 0,
    githubLink: 'https://github.com/kalkios/hardened-mode/issues/1',
  },
  {
    id: 5,
    title: 'Nix Fusion',
    area: '',
    date: 'Q2 2025',
    description: 'Future experiment with hybrid Nix-Arch build',
    status: 'upcoming',
    icon: '',
    progress: 0,
    githubLink: 'https://github.com/kalkios/nix-fusion/issues/1',
  },
];

const RoadmapSection: React.FC = () => {
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
            Project Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Transparent development journey with community involvement
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + milestone.id * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4 text-purple-400">{milestone.area}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.date}</p>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-2 bg-gray-800 rounded-full">
                  <div
                    className="h-full bg-purple-400 rounded-full transition-all duration-300"
                    style={{ width: `${milestone.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-gray-400 mb-2">{milestone.description}</p>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-400">
                    {milestone.status === 'completed' ? '' : 
                     milestone.status === 'current' ? '' : 
                     milestone.status === 'upcoming' ? '' : ''}
                  </span>
                  <span className="text-xs text-gray-400">
                    {milestone.status === 'completed' ? 'Completed' : 
                     milestone.status === 'current' ? 'In Progress' : 
                     milestone.status === 'upcoming' ? 'Upcoming' : ''}
                  </span>
                </div>
                {milestone.githubLink && (
                  <a
                    href={milestone.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
