import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { Engine } from '@tsparticles/engine';
import { loadFull } from '@tsparticles/react';

interface ParticleBackgroundProps {
  opacity?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ opacity = 0.5 }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
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
            density: {
              enable: true,
              value: 800
            },
            value: 80
          },
          opacity: {
            value: opacity
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
