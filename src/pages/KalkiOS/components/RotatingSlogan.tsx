import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface RotatingSloganProps {
  className?: string;
}

const RotatingSlogan: React.FC<RotatingSloganProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const typingInterval = useRef<NodeJS.Timeout>(null as unknown as NodeJS.Timeout);

  const slogans = [
    {
      text: "Sovereign Code. Sovereign Mind.",
      font: "font-bold",
      style: "text-center"
    },
    {
      text: "Boot into Freedom. Code Your Reality.",
      font: "font-italic",
      style: "text-center"
    },
    {
      text: "No Chains. No Clouds. Pure Compute.",
      font: "font-mono",
      style: "text-center"
    },
    {
      text: "Intelligence Built In, Not Borrowed.",
      font: "font-serif",
      style: "text-center"
    },
    {
      text: "Where AI Serves You—Offline and Unseen.",
      font: "font-normal",
      style: "text-center"
    },
    {
      text: "Awaken Local Intelligence. Command the Future.",
      font: "font-bold uppercase",
      style: "text-center"
    },
    {
      text: "Minimal Code. Maximal Sovereignty.",
      font: "font-sans",
      style: "text-center"
    },
    {
      text: "Fast. Private. Yours.",
      font: "font-bold",
      style: "flex flex-col items-center"
    },
    {
      text: "Reclaim Your Machine. Redefine Your World.",
      font: "font-cursive",
      style: "text-center"
    },
    {
      text: "The OS That Doesn't Watch Back.",
      font: "font-bold underline",
      style: "text-center"
    }
  ];

  const getRandomIndex = () => {
    // Get all indices except the current one
    const availableIndices = slogans.map((_, i) => i).filter(i => i !== currentIndex);
    // Randomly select from available indices
    const nextIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    // Ensure we don't get stuck in a loop
    if (availableIndices.length === 1) {
      return availableIndices[0];
    }
    return nextIndex;
  };

  const startTyping = () => {
    const slogan = slogans[currentIndex].text;
    let charIndex = 0;

    // Clear any existing interval before starting new one
    if (typingInterval.current) {
      clearInterval(typingInterval.current);
    }

    typingInterval.current = setInterval(() => {
      if (charIndex < slogan.length) {
        // Randomize typing speed slightly to make it more human-like
        const randomSpeed = 100 + Math.random() * 50; // 100-150ms
        setTypedText(slogan.substring(0, charIndex + 1));
        charIndex++;
      } else {
        // Wait a bit after typing is complete
        setIsTyping(false);
        // Wait before moving to next slogan
        setTimeout(() => {
          // Clear interval before moving to next slogan
          if (typingInterval.current) {
            clearInterval(typingInterval.current);
          }
          setCurrentIndex(getRandomIndex());
        }, 3000); // Increased wait time between slogans
      }
    }, 125); // Base typing speed in milliseconds
  };

  useEffect(() => {
    // Clear any existing typing interval
    if (typingInterval.current) {
      clearInterval(typingInterval.current);
    }

    // Reset state
    setTypedText('');
    setIsTyping(true);

    // Wait a moment before starting to type
    setTimeout(() => {
      startTyping();
    }, 500);

    return () => {
      if (typingInterval.current) {
        clearInterval(typingInterval.current);
      }
    };
  }, [currentIndex]);

  return (
    <div className={`relative ${className}`}>
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`inline-block text-3xl md:text-4xl font-mono font-bold text-emerald-700 ${slogans[currentIndex].font} ${slogans[currentIndex].style}`}
      >
        {typedText}
        {isTyping && <span className="inline-block animate-blink">|</span>}
      </motion.span>
    </div>
  );
};

export default RotatingSlogan;
