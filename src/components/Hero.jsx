import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import NeuralBackground from './NeuralBackground';
import { TypeAnimation } from 'react-type-animation';
import avatar from '../assets/Avatar 2.jpeg';
import Tilt from 'react-parallax-tilt';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const educationRef = useRef(null);

  const scrollToEducation = () => {
    const element = document.getElementById('education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden px-4 md:px-16">
      {/* Neural Particle Background */}
      <NeuralBackground />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full pointer-events-none">
        {/* Avatar with orbit ring and glow */}
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          className="pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-40 h-40 md:w-60 md:h-60 group"
          >
            {/* Animated Orbit Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-neon z-0"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
                boxShadow: [
                  '0 0 5px #00ffe7',
                  '0 0 20px #00ffe7, 0 0 30px #6f00ff',
                  '0 0 5px #00ffe7'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Avatar image with animated border glow */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 
                    border-electric shadow-[0_0_30px_#6f00ff] group-hover:shadow-[0_0_40px_#00ffe7]">
              <img src={avatar} alt="Sandip Avatar" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </Tilt>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-8 md:mt-0 md:ml-12 text-center md:text-left pointer-events-none"
        >
          {/* "Hi, I'm" line */}
          <p className="text-lg md:text-xl font-bold 
            bg-gradient-to-r from-neon via-white via-white to-neon bg-[length:200%_200%] 
            bg-clip-text text-transparent font-orbitron tracking-widest 
            animate-text-shimmer drop-shadow-[0_0_10px_#00ffe7]">
            Hi, I'm
          </p>

          {/* Name shimmer animation */}
          <h1 className="text-4xl md:text-6xl font-extrabold 
            bg-gradient-to-r from-electric via-neon via-purple-500 via-neon to-electric
            bg-[length:300%_300%] bg-clip-text text-transparent
            animate-text-shimmer drop-shadow-[0_0_20px_#6f00ff] mb-2
            transition-transform duration-1000 ease-in-out hover:scale-105">
            Sandip Verma
          </h1>

          {/* Typewriter effect */}
          <TypeAnimation
            sequence={[
              'Data Scientist', 1000,
              'Machine Learning Engineer', 1000,
              'Data Analyst', 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-2xl md:text-3xl text-neon font-semibold drop-shadow-[0_0_10px_#00ffe7] mt-2"
          />

          {/* Tagline */}
          <p className="mt-4 text-md md:text-xl text-neon max-w-xl drop-shadow-[0_0_8px_#00ffe7]">
            Turning complex data into powerful insights using AI and ML.<br />
            Driven by curiosity. Powered by code.
          </p>

          {/* Social Links with Real Icons */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-6 pointer-events-auto">
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/sandip-verma-dev/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              className="text-neon hover:text-electric transition duration-300"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaLinkedin className="w-8 h-8 drop-shadow-[0_0_6px_#00ffe7] animate-pulse-glow" />
              </motion.div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/SandipVermaDev"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              className="text-neon hover:text-electric transition duration-300"
            >
              <motion.div
                animate={{
                  rotate: [0, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaGithub className="w-8 h-8 drop-shadow-[0_0_6px_#00ffe7] animate-pulse-glow" />
              </motion.div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:iamsandip2608@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              className="text-neon hover:text-electric transition duration-300"
            >
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaEnvelope className="w-8 h-8 drop-shadow-[0_0_6px_#00ffe7] animate-pulse-glow" />
              </motion.div>
            </motion.a>
          </div>

          {/* Resume Button with Glow Effect */}
          <div className="mt-6">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border-2 border-electric text-neon font-bold rounded-md 
              hover:bg-neon hover:text-black transition-all duration-300 
              drop-shadow-[0_0_8px_#00ffe7]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                boxShadow: [
                  "0 0 8px rgba(0, 255, 231, 0.7)",
                  "0 0 12px rgba(0, 255, 231, 0.9)",
                  "0 0 15px rgba(0, 255, 231, 1)",
                  "0 0 8px rgba(0, 255, 231, 0.7)"
                ]
              }}
              transition={{
                opacity: { duration: 0.5, delay: 1.6 },
                scale: { duration: 0.5, delay: 1.6 },
                boxShadow: { duration: 2, repeat: Infinity }
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px #00ffe7, 0 0 25px #6f00ff"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Rounded Glow with Bounce */}
      <motion.div
        onClick={scrollToEducation}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          opacity: { duration: 1, delay: 1.2 },
          y: { duration: 1, delay: 1.2 },
        }}
      >
        <motion.div
          className="p-2 rounded-full border-2 border-neon"
          animate={{
            boxShadow: [
              '0 0 5px #00ffe7',
              '0 0 20px #00ffe7, 0 0 30px #6f00ff',
              '0 0 5px #00ffe7'
            ],
            scale: [1, 1.1, 1]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg
              className="w-6 h-6 text-neon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;