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
  return (
    <section id="skills" className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 py-16">
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
    </section>
  );
};

export default Skills;
