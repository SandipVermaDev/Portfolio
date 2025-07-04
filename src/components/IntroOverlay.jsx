import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroOverlay = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1000); // 1 second delay
    return () => clearTimeout(timer);
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
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-neon font-orbitron text-2xl md:text-4xl mb-6 drop-shadow-[0_0_18px_#00ffe7]"
          >
            Initializing Portfolio
          </motion.h1>

          {/* Futuristic Loading Bar */}
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="w-full max-w-md h-2 bg-white/10 border border-neon rounded-full overflow-hidden"
          >
            <div className="h-full bg-neon animate-glowBar" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;
