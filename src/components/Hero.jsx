import React from 'react';
import { motion } from 'framer-motion';
import NeuralBackground from './NeuralBackground';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Neural Particle Background */}
      <NeuralBackground />

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-4 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_#6f00ff]">
          Hi, I'm Sandip Verma
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-[#00ffe7] drop-shadow-[0_0_10px_#00ffe7]">
          Aspiring Data Scientist & ML Engineer crafting intelligent, data-driven solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
