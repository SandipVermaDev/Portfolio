import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Util to generate optimized star layer using box-shadow
const generateBoxShadows = (count, color) => {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${color}`);
  }
  return shadows.join(', ');
};

// StarLayer using box-shadow
const StarLayer = ({ count = 1000, size = 1, duration = 50, starColor = '#fff' }) => {
  const [boxShadow, setBoxShadow] = useState('');

  useEffect(() => {
    setBoxShadow(generateBoxShadows(count, starColor));
  }, [count, starColor]);

  return (
    <motion.div
      animate={{ y: [0, -2000] }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
      className="absolute top-0 left-0 w-full h-[2000px]"
    >
      {/* Duplicate to create infinite scroll illusion */}
      <div
        className="absolute rounded-full bg-transparent"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow,
        }}
      />
      <div
        className="absolute top-[2000px] rounded-full bg-transparent"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow,
        }}
      />
    </motion.div>
  );
};

const StarsBackground = () => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const springX = useSpring(offsetX, { stiffness: 50, damping: 20 });
  const springY = useSpring(offsetY, { stiffness: 50, damping: 20 });

  const handleMouseMove = useCallback((e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const factor = 0.15;
    offsetX.set(-(e.clientX - centerX) * factor);
    offsetY.set(-(e.clientY - centerY) * factor);
  }, [offsetX, offsetY]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden z-0 bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]"
    >
      <motion.div style={{ x: springX, y: springY }}>
        <StarLayer count={1000} size={1} duration={50} starColor="#ffffff" />
        <StarLayer count={400} size={2} duration={100} starColor="#00ffe7" />
        <StarLayer count={200} size={3} duration={150} starColor="#7a00ff" />
      </motion.div>
    </div>
  );
};

export default StarsBackground;
