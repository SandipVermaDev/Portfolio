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

      {/* Robot Head (Follows Cursor) */}
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
      >
        <Lottie
          animationData={robotHead}
          loop
          autoplay
          className="w-[80%] h-[80%]"
        />
      </div>
    </div>
  );
};

export default RobotAssistant;
