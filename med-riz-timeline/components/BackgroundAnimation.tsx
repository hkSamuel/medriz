
import React, { useEffect, useState } from 'react';

const EMOJIS = ['💉', '🧬', '💊', '🧪', '🩺', '🏥', '🧠', '🦴', '🩸', '🦠'];

// Explicitly type as React.FC to allow standard props like 'key' which are used when mapping over arrays
const FloatingEmoji: React.FC<{ emoji: string }> = ({ emoji }) => {
  const [position] = useState({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 20,
    size: 20 + Math.random() * 40
  });

  return (
    <div
      className="fixed pointer-events-none opacity-20 select-none animate-float"
      style={{
        left: `${position.left}%`,
        top: `${position.top}%`,
        fontSize: `${position.size}px`,
        animationDelay: `${position.delay}s`,
        animationDuration: `${position.duration}s`,
        zIndex: 0
      }}
    >
      {emoji}
    </div>
  );
};

export const BackgroundAnimation: React.FC = () => {
  const [instances] = useState(() => Array.from({ length: 30 }, (_, i) => ({
    id: i,
    emoji: EMOJIS[i % EMOJIS.length]
  })));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {instances.map((inst) => (
        <FloatingEmoji key={inst.id} emoji={inst.emoji} />
      ))}
    </div>
  );
};
