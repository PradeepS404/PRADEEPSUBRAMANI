import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on coarse pointer devices (touch devices)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.physical-card-3d') ||
        target.closest('.project-card-item') ||
        target.closest('.skill-chip') ||
        target.closest('.braille-cell-item')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
      <div
        className="custom-cursor-ring"
        style={{
          transform: `translate3d(${pos.x - 18}px, ${pos.y - 18}px, 0) scale(${isHovered ? 1.8 : 1})`,
          borderColor: isHovered ? 'var(--accent-red)' : 'rgba(255, 42, 42, 0.4)',
        }}
      />
    </>
  );
}
