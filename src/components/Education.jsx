import React from 'react';
import { motion } from 'framer-motion';
import CyberGridBackground from './CyberGridBackground';

// Custom University Icon
const UniversityIcon = () => (
  <motion.div 
    className="text-[#B8EF43] text-2xl"
    animate={{ 
      y: [0, -3, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M12 3L3 8V21H21V8L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M7 21V12H17V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.path
        d="M10 8H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="12"
        cy="8"
        r="1"
        fill="currentColor"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  </motion.div>
);

// Custom College Icon
const CollegeIcon = () => (
  <motion.div 
    className="text-[#00ffe7] text-2xl"
    animate={{ 
      rotate: [0, 3, -3, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M21 16V8L12 3L3 8V16L12 21L21 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M7 12H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.path
        d="M10 16V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      />
      <motion.path
        d="M14 16V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.7 }}
      />
    </svg>
  </motion.div>
);

// Custom School Icon
const SchoolIcon = () => (
  <motion.div 
    className="text-[#ff00cc] text-2xl"
    animate={{ 
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M17 21V15H7V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        d="M12 3L3 8L12 13L21 8L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ 
          pathLength: [0.9, 1, 0.9],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.path
        d="M12 13V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      />
      <motion.circle
        cx="12"
        cy="8"
        r="1"
        fill="currentColor"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  </motion.div>
);

const educationData = [
  {
    title: 'D. Y. Patil International University',
    subtitle: 'M.C.A. in AI & DS',
    location: 'Pune, Maharashtra',
    duration: '08/2024 – Present',
    icon: <UniversityIcon />,
  },
  {
    title: 'C B Patel Computer College – VNSGU',
    subtitle: 'B.C.A. – Computer Applications | CGPA: 8.54 / 10',
    location: 'Surat, Gujarat',
    duration: '08/2021 – 04/2024',
    icon: <CollegeIcon />,
  },
  {
    title: 'Vidya Bharti Hindi Vidyalaya',
    subtitle: '12th | GSEB – 77.86%',
    location: 'Surat, Gujarat',
    duration: '06/2020 – 05/2021',
    icon: <SchoolIcon />,
  },
  {
    title: 'Vidya Bharti Hindi Vidyalaya',
    subtitle: '10th | GSEB – 80%',
    location: 'Surat, Gujarat',
    duration: '06/2018 – 03/2019',
    icon: <SchoolIcon />,
  },
];

const Education = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="education"
      className="relative min-h-screen bg-[#0c0f14] text-white py-7 px-6 md:px-20 overflow-hidden"
    >
      <CyberGridBackground />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-[#B8EF43] mb-16 drop-shadow-[0_0_10px_#B8EF43] font-orbitron"
        whileHover={{ scale: 1.05 }}
      >
        Education
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Timeline line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#B8EF43] opacity-100 rounded-full" />

        <div className="flex flex-col gap-5 md:gap-0">
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative w-full flex ${isLeft ? 'justify-start pr-8' : 'justify-end pl-8'} items-center`}
              >
                {/* Centered Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center h-full">
                  <motion.span
                    className="w-5 h-5 bg-[#00ffe7] border-4 border-[#0c0f14] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: ['0 0 8px #00ffe7', '0 0 15px #00ffe7', '0 0 8px #00ffe7']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                <div
                  className="w-full md:max-w-md bg-[#1c1f26]/80 backdrop-blur-md border-2 border-[#B8EF43]/40 p-6 rounded-xl 
                  shadow-[0_0_12px_#B8EF43] transition duration-300
                  hover:shadow-[0_0_20px_#00ffe7,0_0_30px_#6f00ff] 
                  hover:border-[#6f00ff] hover:scale-105 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {edu.icon}
                    <h3 className="text-xl font-bold text-[#B8EF43] font-orbitron drop-shadow-[0_0_5px_#B8EF43]">
                      {edu.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-200">{edu.subtitle}</p>
                  <p className="text-sm text-gray-400 mt-2">{edu.location}</p>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Compact Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <motion.div
          className="cursor-pointer"
          onClick={scrollToSkills}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="relative w-10 h-10 rounded-full border-2 border-[#00ffe7] flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 5px #00ffe7',
                '0 0 15px #00ffe7, 0 0 20px #6f00ff',
                '0 0 5px #00ffe7'
              ],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Central Pulse */}
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-[#00ffe7]"
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
            
            {/* Down Arrow */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                className="w-5 h-5 text-[#00ffe7]"
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
      </div>
    </section>
  );
};

export default Education;