
import React, { useEffect, useState } from 'react';
import { HeartData } from '../types';

interface HeartBackgroundProps {
  isMoving?: boolean;
  count?: number;
}

const HeartBackground: React.FC<HeartBackgroundProps> = ({ isMoving = true, count = 30 }) => {
  const [hearts, setHearts] = useState<HeartData[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 25 + 10,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-400"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `floatUp ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
            animationPlayState: isMoving ? 'running' : 'paused',
            transition: 'top 0.5s ease-out, left 0.5s ease-out',
          }}
        >
          ❤️
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(115vh) rotate(0deg); }
          100% { transform: translateY(-115px) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default HeartBackground;
