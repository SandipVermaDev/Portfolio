import React from 'react';
import { motion } from 'framer-motion';
import CyberGridBackground from './CyberGridBackground';

const educationData = [
  {
    title: 'D. Y. Patil International University',
    subtitle: 'M.C.A. in AI & DS',
    location: 'Pune, Maharashtra',
    duration: '08/2024 – Present',
  },
  {
    title: 'C B Patel Computer College – VNSGU',
    subtitle: 'B.C.A. – Computer Applications | CGPA: 8.54 / 10',
    location: 'Surat, Gujarat',
    duration: '08/2021 – 04/2024',
  },
  {
    title: 'Vidya Bharti Hindi Vidyalaya',
    subtitle: '12th | GSEB – 77.86%',
    location: 'Surat, Gujarat',
    duration: '06/2020 – 05/2021',
  },
  {
    title: 'Vidya Bharti Hindi Vidyalaya',
    subtitle: '10th | GSEB – 80%',
    location: 'Surat, Gujarat',
    duration: '06/2018 – 03/2019',
  },
];

const Education = () => {
  return (
    <section id="education" className="relative min-h-screen bg-[#0c0f14] text-white py-24 px-6 md:px-20 overflow-hidden">
      <CyberGridBackground />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-[#B8EF43] mb-16 drop-shadow-[0_0_10px_#B8EF43] font-orbitron"
      >
        Education
      </motion.h2>

      {/* Timeline with central line and paired cards */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Vertical Line */}
        <div className="absolute w-1 bg-[#B8EF43] h-full left-1/2 transform -translate-x-1/2 rounded-full" />

        {/* Pair each 2 cards into a row */}
        {Array.from({ length: educationData.length / 2 }, (_, i) => (
          <div key={i} className="flex flex-col md:flex-row justify-between w-full max-w-6xl py-6 md:py-10 gap-6 md:gap-12">
            {[0, 1].map((j) => {
              const index = i * 2 + j;
              const edu = educationData[index];
              if (!edu) return null;

              const isLeft = j === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative w-full md:w-[48%] px-4 ${
                    isLeft ? 'text-left' : 'text-right'
                  }`}
                >
                  <div className="bg-[#1c1f26]/80 backdrop-blur-md border-2 border-[#B8EF43]/40 p-6 rounded-xl 
                    shadow-[0_0_12px_#B8EF43] transition duration-300
                    hover:shadow-[0_0_20px_#00ffe7,0_0_30px_#6f00ff] 
                    hover:border-[#6f00ff] hover:scale-105 group">
                    <h3 className="text-xl font-bold text-[#B8EF43] mb-2 font-orbitron drop-shadow-[0_0_5px_#B8EF43]">
                      {edu.title}
                    </h3>
                    <p className="text-sm text-gray-200">{edu.subtitle}</p>
                    <p className="text-sm text-gray-400 mt-2">{edu.location}</p>
                    <p className="text-sm text-gray-500">{edu.duration}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
