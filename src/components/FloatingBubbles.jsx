import React, { useState } from 'react';
import { playPopSound } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

const INITIAL_BUBBLES = [
  { id: 1, left: '8%', top: '22%', size: 48, delay: 0, emoji: '🎈' },
  { id: 2, left: '92%', top: '18%', size: 54, delay: 1.5, emoji: '⭐' },
  { id: 3, left: '15%', top: '65%', size: 42, delay: 0.8, emoji: '🐥' },
  { id: 4, left: '85%', top: '70%', size: 50, delay: 2.2, emoji: '🎨' },
  { id: 5, left: '4%', top: '45%', size: 38, delay: 1.1, emoji: '🌈' },
  { id: 6, left: '94%', top: '48%', size: 44, delay: 0.4, emoji: '✨' },
];

export const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState(INITIAL_BUBBLES);
  const [poppedCount, setPoppedCount] = useState(0);

  const popBubble = (e, id) => {
    e.stopPropagation();
    playPopSound();

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    triggerConfetti(x, y);

    setPoppedCount((prev) => prev + 1);
    setBubbles((prev) => prev.filter((b) => b.id !== id));

    // Re-spawn bubble after 4 seconds for endless delight
    setTimeout(() => {
      setBubbles((prev) => {
        if (prev.some((b) => b.id === id)) return prev;
        const original = INITIAL_BUBBLES.find((b) => b.id === id);
        return original ? [...prev, original] : prev;
      });
    }, 4000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          onClick={(e) => popBubble(e, bubble.id)}
          style={{
            left: bubble.left,
            top: bubble.top,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDelay: `${bubble.delay}s`,
          }}
          className="bubble pointer-events-auto flex items-center justify-center animate-float hover:scale-125 transition-transform duration-200 cursor-pointer shadow-lg hover:shadow-cyan-400/50"
          title="Click to pop me! 🫧"
        >
          <span className="text-base select-none pointer-events-none transform -translate-y-0.5">
            {bubble.emoji}
          </span>
        </div>
      ))}

      {poppedCount > 0 && (
        <div className="fixed bottom-4 left-4 z-40 bg-amber-500/90 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-lg backdrop-blur flex items-center gap-1.5 animate-bounce">
          <span>🫧 Bubbles Popped: {poppedCount}</span>
        </div>
      )}
    </div>
  );
};
