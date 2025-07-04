import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import CustomCursor from './components/CustomCursor';
import IntroOverlay from './components/IntroOverlay';

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white scroll-smooth">
      <Navbar />
      <IntroOverlay />
      <CustomCursor />

      <section id="home"><Hero /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
