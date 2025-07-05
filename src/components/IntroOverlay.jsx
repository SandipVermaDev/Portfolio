import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroOverlay = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited) {
      setShow(false);
    } else {
      const timer = setTimeout(() => {
        setShow(false);
        localStorage.setItem('hasVisited', 'true');
      }, 1200); // 1.2s for full flash effect
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-black z-[9998] flex flex-col items-center justify-center"
        >
          {/* Flashing Text */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-neon font-orbitron text-2xl md:text-4xl mb-6 drop-shadow-[0_0_18px_#00ffe7]"
          >
            Initializing Portfolio
          </motion.h1>

          {/* Flash Bar Effect */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute top-1/2 h-[4px] w-1/2 bg-gradient-to-r from-transparent via-neon to-transparent blur-md opacity-80 animate-flash-sweep" />

          {/* Full Screen Flash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 bg-neon/20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;
