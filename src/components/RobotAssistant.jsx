// components/RobotAssistant.jsx
import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import robotBody from '../assets/robot body.json';
import robotHead from '../assets/robot head.json';
import ChatBotUI from './ChatBotUI';

const RobotAssistant = () => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.max(window.innerWidth, window.innerHeight);

      const sensitivity = 0.7 + (distance / maxDistance) * 0.8;
      const rotateX = -(dy / window.innerHeight) * 35 * sensitivity;
      const rotateY = -(dx / window.innerWidth) * 70 * sensitivity;

      const maxTilt = 45;
      setRotation({
        x: Math.max(-maxTilt, Math.min(maxTilt, rotateX)),
        y: Math.max(-maxTilt, Math.min(maxTilt, rotateY))
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        ref={containerRef}
        className="relative w-52 h-52 cursor-pointer"
        onClick={() => setShowChat(prev => !prev)}
      >
        <Lottie animationData={robotBody} loop autoplay className="w-full h-full absolute" />
        <div
          className="absolute top-[10%] left-0 w-full h-full flex items-start justify-center"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.12s ease-out',
            filter: 'drop-shadow(0 0 12px #00ffe7)',
          }}
        >
          <Lottie animationData={robotHead} loop autoplay className="w-[70%] h-[70%]" />
        </div>
      </div>
      {showChat && <ChatBotUI onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default RobotAssistant;