import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import robotBody from '../assets/robot body.json';
import robotHead from '../assets/robot head.json';

const RobotAssistant = () => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Strong amplification for noticeable movement
      const dx = (mouseX - centerX) * 5; // Increased amplification
      const dy = (mouseY - centerY) * 5; // Increased amplification
      
      // Calculate rotation angles with high sensitivity
      const rotateY = dx / 20; // Horizontal rotation (left/right)
      const rotateX = dy / 20; // Vertical rotation (up/down)
      
      // Apply generous but safe limits
      const maxTilt = 25; // Increased max tilt for dramatic movement
      setRotation({ 
        x: Math.max(-maxTilt, Math.min(maxTilt, rotateX)),
        y: Math.max(-maxTilt, Math.min(maxTilt, rotateY))
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 w-52 h-52 z-50 pointer-events-none"
    >
      {/* Robot Body (Static) */}
      <Lottie
        animationData={robotBody}
        loop
        autoplay
        className="w-full h-full absolute"
      />

      {/* Robot Head with dramatic movement */}
      <div 
        className="absolute top-[10%] left-0 w-full h-full flex items-start justify-center"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Lottie
          animationData={robotHead}
          loop
          autoplay
          className="w-[70%] h-[70%]"
        />
      </div>
    </div>
  );
};

export default RobotAssistant;