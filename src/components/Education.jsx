import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap, FaSchool } from 'react-icons/fa';
import CyberGridBackground from './CyberGridBackground';

const educationData = [
  {
    title: 'D. Y. Patil International University',
    subtitle: 'M.C.A. in AI & DS',
    location: 'Pune, Maharashtra',
    duration: '08/2024 – Present',
    icon: <FaUniversity className="text-[#B8EF43] text-2xl" />,
  },
  {
    title: 'C B Patel Computer College – VNSGU',
    subtitle: 'B.C.A. – Computer Applications | CGPA: 8.54 / 10',
    location: 'Surat, Gujarat',
    duration: '08/2021 – 04/2024',
    icon: <FaGraduationCap className="text-[#B8EF43] text-2xl" />,
  },
  {
    title: 'Vidya Bharti Hindi Vidyalaya',
    subtitle: '12th | GSEB – 77.86%',
    location: 'Surat, Gujarat',
    duration: '06/2020 – 05/2021',
    icon: <FaSchool className="text-[#B8EF43] text-2xl" />,
  },
  {
    title: 'Vidya Bharti Hindi Vidyalaya',
    subtitle: '10th | GSEB – 80%',
    location: 'Surat, Gujarat',
    duration: '06/2018 – 03/2019',
    icon: <FaSchool className="text-[#B8EF43] text-2xl" />,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen bg-[#0c0f14] text-white py-7 px-6 md:px-20 overflow-hidden"
    >
      <CyberGridBackground />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-[#B8EF43] mb-16 drop-shadow-[0_0_10px_#B8EF43] font-orbitron"
      >
        Education
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Timeline line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#B8EF43] opacity-50 rounded-full" />

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
                {/* Marker */}
                <span className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#00ffe7] border-4 border-[#0c0f14] rounded-full shadow-[0_0_12px_#00ffe7] z-10" />

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
    </section>
  );
};

export default Education;