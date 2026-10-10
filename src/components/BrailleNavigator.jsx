import React from 'react';

const scenes = [
  { id: 'scene-01', title: '01. LANDING', pattern: [1, 0, 0, 0, 0, 0] },
  { id: 'scene-02', title: '02. PHYSICAL CARD', pattern: [1, 1, 0, 0, 0, 0] },
  { id: 'scene-03', title: '03. ABOUT', pattern: [1, 0, 0, 1, 0, 0] },
  { id: 'scene-04', title: '04. PROJECTS', pattern: [1, 0, 0, 1, 1, 0] },
  { id: 'scene-05', title: '05. SKILLS', pattern: [1, 0, 0, 0, 1, 0] },
  { id: 'scene-06', title: '06. EXPERIENCE & EDUCATION', pattern: [1, 1, 0, 1, 0, 0] },
  { id: 'scene-07', title: '07. CONTACT', pattern: [1, 1, 0, 1, 1, 0] },
];

export default function BrailleNavigator({ activeSceneIndex, onSelectScene }) {
  const handleClick = (id, idx) => {
    if (onSelectScene) {
      onSelectScene(idx);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="braille-navigator-container" aria-label="Braille Scene Navigator">
      {scenes.map((scene, idx) => {
        const isActive = activeSceneIndex === idx;
        return (
          <div
            key={scene.id}
            className={`braille-cell-item ${isActive ? 'current-scene' : ''}`}
            onClick={() => handleClick(scene.id, idx)}
            role="button"
            tabIndex={0}
            aria-label={`Go to ${scene.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick(scene.id, idx);
              }
            }}
          >
            <div className="braille-cell-grid">
              {scene.pattern.map((isFilled, dotIdx) => (
                <div
                  key={dotIdx}
                  className={`braille-dot ${isFilled ? 'dot-active' : ''}`}
                />
              ))}
            </div>
            <span className="braille-tooltip">{scene.title}</span>
          </div>
        );
      })}
    </nav>
  );
}
