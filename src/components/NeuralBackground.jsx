import React, { useEffect } from 'react';

const NeuralBackground = () => {
  useEffect(() => {
    // Load particles.js on component mount
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    
    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 300, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 2, random: true },
          line_linked: {
            enable: true,
            distance: 100,
            color: '#ffffff',
            opacity: 0.22,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: true,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            grab: { distance: 100, line_linked: { opacity: 1 } },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        retina_detect: true,
      });
    };

    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      document.body.removeChild(script);
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroy();
      }
    };
  }, []);

  return <div id="particles-js" className="absolute inset-0 z-0" />;
};

export default NeuralBackground;