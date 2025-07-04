import React, { useEffect, useRef } from 'react';

const NeuralBackground = () => {
  const particlesRef = useRef(null);
  const particlesConfig = useRef({
    particles: {
      number: { 
        value: 180, 
        density: { 
          enable: true, 
          value_area: 800 
        } 
      },
      color: { 
        value: '#6f00ff'
      },
      shape: { 
        type: 'circle' 
      },
      opacity: { 
        value: 0.7,
        random: true 
      },
      size: { 
        value: 3, 
        random: true 
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: '#00ffe7',
        opacity: 0.7,
        width: 1.5,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { 
          enable: true, 
          mode: 'grab' 
        },
        onclick: { 
          enable: true, 
          mode: 'repulse' 
        },
        resize: true
      },
      modes: {
        grab: { 
          distance: 120, 
          line_linked: { 
            opacity: 1
          } 
        },
        repulse: { 
          distance: 200, 
          duration: 0.3
        },
        bubble: {
          distance: 400,
          size: 2,
          duration: 2,
          opacity: 0.5,
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 3
        }
      }
    },
    retina_detect: true
  });

  useEffect(() => {
    const initParticles = () => {
      // Destroy existing instance if it exists
      if (window.pJSDom && window.pJSDom.length > 0) {
        // CORRECTED: Use destroypJS instead of destroy
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
      }
      
      // Initialize new particles instance
      particlesRef.current = window.particlesJS('particles-js', particlesConfig.current);
    };

    // Load particles.js if not already loaded
    if (window.particlesJS) {
      initParticles();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.async = true;
      script.onload = initParticles;
      document.body.appendChild(script);
    }

    return () => {
      if (window.pJSDom && window.pJSDom.length > 0) {
        // CORRECTED: Use destroypJS instead of destroy
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
      }
    };
  }, []);

  // Function to update particles dynamically
  const updateParticles = (config) => {
    if (window.pJSDom && window.pJSDom.length > 0) {
      // Update config reference
      particlesConfig.current = {...particlesConfig.current, ...config};
      
      // Destroy and recreate particles
      // CORRECTED: Use destroypJS instead of destroy
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.particlesJS('particles-js', particlesConfig.current);
    }
  };

  // Example usage: 
  // Uncomment this to test dynamic updates after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Updating particles to new configuration");
      updateParticles({
        particles: {
          move: {
            speed: 6,
            out_mode: "bounce"
          },
          color: {
            value: "#ff0000"
          }
        }
      });
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return <div id="particles-js" className="absolute inset-0 z-0" />;
};

export default NeuralBackground;