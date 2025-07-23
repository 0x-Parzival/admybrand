import React, { useEffect, useState, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const GlobalCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [trail, setTrail] = useState<CursorPosition[]>([]);
  const trailRef = useRef<HTMLDivElement[]>([]);
  const animationFrame = useRef<number | null>(null);
  const TRAIL_LENGTH = 8;
  const TRAIL_DELAY = 2;
  const frameCount = useRef(0);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(() => {
          setPosition({ x: e.clientX, y: e.clientY });
          
          if (frameCount.current % TRAIL_DELAY === 0) {
            setTrail(prevTrail => {
              const newTrail = [
                { x: e.clientX, y: e.clientY },
                ...prevTrail
              ].slice(0, TRAIL_LENGTH);
              
              return newTrail;
            });
          }
          
          frameCount.current++;
          animationFrame.current = null;
        });
      }
    };

    // Add event listener to the document
    document.addEventListener('mousemove', updatePosition);
    
    // Show cursor after a short delay to prevent initial flash
    const timer = setTimeout(() => {
      const cursor = document.querySelector('.cursor-dot') as HTMLElement;
      if (cursor) cursor.style.opacity = '1';
    }, 100);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div 
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: 0, // Start hidden, will be shown after mount
          transition: 'opacity 0.3s ease-out'
        }}
      />
      
      {/* Trail */}
      {trail.map((pos, i) => (
        <div
          key={`trail-${i}-${pos.x}-${pos.y}`}
          className="cursor-trail"
          ref={el => {
            if (el) trailRef.current[i] = el;
          }}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: 1 - (i / TRAIL_LENGTH) * 0.9,
          }}
        />
      ))}
    </>
  );
};

export default GlobalCursor;
