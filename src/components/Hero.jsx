import React from 'react';
import { motion } from 'framer-motion';
import NeuralBackground from './NeuralBackground';
import { TypeAnimation } from 'react-type-animation';
import avatar from '../assets/Avatar 2.jpeg'; 

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden px-4 md:px-16">
      {/* Neural Particle Background */}
      <NeuralBackground />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full pointer-events-none">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden pointer-events-none border-4 border-[#6f00ff] shadow-[0_0_30px_#6f00ff] animate-border-glow"
        >
          <img src={avatar} alt="Sandip Avatar" className="w-full h-full object-cover" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-8 md:mt-0 md:ml-12 text-center md:text-left pointer-events-none"
        >
          <p className="text-lg font-bold text-[#9b00ff] drop-shadow-[0_0_8px_#9b00ff] font-orbitron tracking-widest">Hi, I'm</p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white bg-gradient-to-r from-[#6f00ff] via-[#b300ff] to-[#00ffe7] bg-clip-text text-transparent animate-text-shimmer mb-2">
            Sandip Verma
          </h1>

          <TypeAnimation
            sequence={[
              'Data Scientist', 2000,
              'Machine Learning Engineer', 2000,
              'Data Analyst', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-2xl md:text-3xl text-[#00ffe7] font-semibold drop-shadow-[0_0_10px_#00ffe7] mt-2"
          />

          <p className="mt-4 text-md md:text-xl text-[#00ffe7] max-w-xl drop-shadow-[0_0_8px_#00ffe7]">
            Turning complex data into powerful insights using AI and ML.<br />
            Driven by curiosity. Powered by code.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-[#00ffe7] animate-pulse-glow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
