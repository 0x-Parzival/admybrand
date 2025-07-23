import { useEffect } from 'react';

const Cursor: React.FC = () => {
  useEffect(() => {
    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');

    cursorDot.className = 'cursor-dot fixed w-3 h-3 bg-emerald-400 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference';
    cursorOutline.className = 'cursor-outline fixed w-8 h-8 border-2 border-emerald-400 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference';

    // Add smooth animation properties
    cursorOutline.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    cursorOutline.style.willChange = 'transform';
    cursorOutline.style.backfaceVisibility = 'hidden';

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      // Update dot position immediately
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      
      // Animate outline position
      requestAnimationFrame(() => {
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      });
      // Animate outline position
      requestAnimationFrame(() => {
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      });
    };

    document.addEventListener('mousemove', moveCursor, { passive: true });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cursorDot.remove();
      cursorOutline.remove();
    };
  }, []);

  return null;
};

export default Cursor;
