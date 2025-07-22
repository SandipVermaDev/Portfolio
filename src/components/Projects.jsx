import React from 'react';
import ShaderBackground from './ShaderBackground';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-20"
    >
      <ShaderBackground />
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#00ffe7] drop-shadow-[0_0_15px_#00ffe7] mb-8">
        Projects
      </h2>
      <p className="text-lg text-center max-w-3xl">
        {/* Insert holographic project cards with animations or 3D flip effects */}
        Futuristic project cards coming soon: Featuring real-time demos, tech stack tags, and AI-powered previews.
      </p>
    </section>
  );
};

export default Projects;