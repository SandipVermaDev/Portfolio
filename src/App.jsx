import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import CustomCursor from './components/CustomCursor';
import IntroOverlay from './components/IntroOverlay';
import RobotAssistant from './components/RobotAssistant';
import TransitionDivider from './components/TransitionDivider';

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white scroll-smooth">
      <Navbar />
      <IntroOverlay />
      <CustomCursor />
      <RobotAssistant />

      <section id="home"><Hero /></section>
      <TransitionDivider />
      <section id="education"><Education /></section>
      <TransitionDivider />
      <section id="skills"><Skills /></section>
      <TransitionDivider />
      <section id="projects"><Projects /></section>
      <TransitionDivider />
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
