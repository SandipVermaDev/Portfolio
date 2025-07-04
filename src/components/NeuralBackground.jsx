import React, { useEffect, useRef } from 'react';

const NeuralBackground = () => {
  const particlesConfig = useRef({
    particles: {
      number: { 
        value: 150, 
        density: { 
          enable: true, 
          value_area: 800 
        } 
      },
      color: { value: '#6f00ff' }, // Purple
      shape: { type: 'circle' },
      opacity: { value: 0.7, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 120,
        color: '#00ffe7', // Cyan
        opacity: 0.7,
        width: 1.5,
      },
      move: {
        enable: true,
        speed: 1.5, // Good default speed
        direction: 'none',
        random: true,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'repulse' }
      },
      modes: {
        grab: { distance: 120, line_linked: { opacity: 1 } },
        repulse: { distance: 200, duration: 0.3 }
      }
    }
  });

  const particlesInstance = useRef(null);

  useEffect(() => {
    const initParticles = () => {
      if (particlesInstance.current) {
        particlesInstance.current.fn.vendors.destroypJS();
      }
      particlesInstance.current = window.particlesJS('particles-js', particlesConfig.current);
    };

    if (window.particlesJS) {
      initParticles();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = initParticles;
      document.body.appendChild(script);
    }

    return () => {
      if (particlesInstance.current) {
        particlesInstance.current.fn.vendors.destroypJS();
      }
    };
  }, []);

  return <div id="particles-js" className="absolute inset-0 z-0" />;
};

export default NeuralBackground;