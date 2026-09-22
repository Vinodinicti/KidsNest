import confetti from 'canvas-confetti';

export const triggerConfetti = (originX = 0.5, originY = 0.6) => {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x: originX, y: originY },
      colors: ['#FFD23F', '#38B6FF', '#FF5E7E', '#00E096', '#9D4EDD', '#FFA800'],
      disableForReducedMotion: true,
    });
  } catch (err) {
    console.debug('Confetti error:', err);
  }
};

export const triggerGrandCelebration = () => {
  try {
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  } catch (err) {
    console.debug('Grand celebration confetti error:', err);
  }
};
