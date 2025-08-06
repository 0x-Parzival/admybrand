import React, { useCallback } from 'react';
import { useParticles } from '../context/ParticlesContext';
import Particles from '@tsparticles/react';
import { Engine } from '@tsparticles/engine';
import loadFull from '@tsparticles/react';

interface ParticleBackgroundProps {
  opacity?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ opacity = 0.5 }) => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: {
              enable: true,
              delay: 0.5
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#00d9ff",
          },
          links: {
            color: "#00d9ff",
            distance: 150,
            enable: true,
            opacity: opacity,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            value: 80
          },
          opacity: {
            value: opacity,
          },
          shape: {
            type: "circle"
          },
          size: {
            value: {
              min: 1,
              max: 5
            }
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
