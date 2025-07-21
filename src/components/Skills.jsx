import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python',
  'JavaScript',
  'React',
  'SQL',
  'Power BI',
  'Pandas',
  'NumPy',
  'Machine Learning',
  'Excel',
  'Scikit-learn',
];

const Skills = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 py-16">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-[#00ffe7] drop-shadow-[0_0_10px_#00ffe7] mb-10"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-[#0d0d1a] border border-[#00ffe7]/20 rounded-xl text-center py-4 px-6 shadow-md shadow-[#00ffe7]/10 hover:shadow-[#00ffe7]/30 hover:scale-105 transition transform"
          >
            <span className="text-lg font-semibold text-white">{skill}</span>
          </motion.div>
        ))}
      </div>

      {/* Fixed & Corrected Futuristic Cyber Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <motion.div
          className="cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          onClick={scrollToProjects}
        >
          <div className="relative flex flex-col items-center">
            {/* Binary Code Animation */}
            <motion.div
              className="text-xs text-[#00ffe7] font-mono mb-1"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              01110000 01110010 01101111 01101010 01100101 01100011 01110100 01110011
            </motion.div>

            {/* Container for disc and scanner */}
            <div className="relative w-12 h-12">
              {/* Scanner Beam */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-[#00ffe7] rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 5px #00ffe7',
                    '0 0 20px #00ffe7, 0 0 30px #6f00ff',
                    '0 0 5px #00ffe7'
                  ],
                  top: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Holographic Disc - arrow removed */}
              <motion.div
                className="relative w-full h-full rounded-full border-2 border-[#00ffe7] flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 10px #00ffe7',
                    '0 0 20px #6f00ff, 0 0 30px #00ffe7',
                    '0 0 10px #00ffe7'
                  ],
                  rotate: 360
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Hexagonal Grid */}
                <div className="absolute inset-0 opacity-70">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-0.5 bg-[#00ffe7]"
                      style={{
                        transform: `rotate(${i * 60}deg)`,
                        top: '50%',
                        transformOrigin: 'center'
                      }}
                    />
                  ))}
                </div>

                {/* Central Pulse Effect - replacing the arrow */}
                <motion.div
                  className="absolute w-3 h-3 rounded-full bg-[#00ffe7]"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.7, 0.3, 0.7]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>

            {/* Text Label */}
            <motion.div
              className="mt-2 text-[#00ffe7] font-orbitron text-sm"
              animate={{ opacity: [0.6, 1, 0.6], textShadow: ['0 0 5px #00ffe7', '0 0 15px #00ffe7', '0 0 5px #00ffe7'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              VIEW PROJECTS
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;