import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import robotBody from '../assets/robot body.json';
import robotHead from '../assets/robot head.json';

const RobotAssistant = () => {
  const headRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const centerX = screenWidth - 150; // adjusted for larger size
      const centerY = screenHeight - 150;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const maxTilt = 15;

      const rotateX = Math.max(-maxTilt, Math.min(maxTilt, (dy / centerY) * maxTilt));
      const rotateY = Math.max(-maxTilt, Math.min(maxTilt, -(dx / centerX) * maxTilt));

      setRotation({ x: rotateX, y: rotateY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 w-52 h-52 z-50 pointer-events-none"> {/* Increased from w-32 h-32 */}
      {/* Robot Body (Static) */}
      <Lottie
        animationData={robotBody}
        loop
        autoplay
        className="w-full h-full absolute"
      />

      {/* Robot Head (Animated on mouse) */}
      <div
        ref={headRef}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s linear',
        }}
      >
        <Lottie
          animationData={robotHead}
          loop
          autoplay
          className="w-[80%] h-[80%]" // Slightly bigger head
        />
      </div>
    </div>
  );
};

export default RobotAssistant;
