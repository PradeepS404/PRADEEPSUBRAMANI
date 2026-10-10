import React, { useEffect, useState, useCallback } from 'react';
import SceneLanding from './components/SceneLanding';
import ScenePhysicalCard from './components/ScenePhysicalCard';
import SceneAbout from './components/SceneAbout';
import SceneProjects from './components/SceneProjects';
import SceneSkills from './components/SceneSkills';
import SceneEducationExperience from './components/SceneEducationExperience';
import SceneContact from './components/SceneContact';
import BrailleNavigator from './components/BrailleNavigator';
import CustomCursor from './components/CustomCursor';
import WelcomeScreen from './components/WelcomeScreen';

const sceneIds = [
  'scene-01',
  'scene-02',
  'scene-03',
  'scene-04',
  'scene-05',
  'scene-06',
  'scene-07'
];

export default function App() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isWelcomeFinished, setIsWelcomeFinished] = useState(false);

  const calculateActiveSection = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    // Requirement 11: Bottom-of-page correction
    // When user reaches the bottom of the page (within 45px tolerance), the LAST section (Contact) MUST be active.
    if (windowHeight + scrollY >= scrollHeight - 45) {
      return sceneIds.length - 1;
    }

    // Top-of-page check: First section (Landing)
    if (scrollY <= 60) {
      return 0;
    }

    // Reference anchor line: 38% down from top of viewport
    const anchorY = windowHeight * 0.38;
    let bestIndex = 0;
    let maxIntersectionHeight = -1;

    sceneIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();

      // Check if anchorY falls inside section bounds
      if (rect.top <= anchorY && rect.bottom >= anchorY) {
        bestIndex = index;
        maxIntersectionHeight = Infinity;
      } else if (maxIntersectionHeight !== Infinity) {
        // Calculate visible pixel height of section inside viewport
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxIntersectionHeight) {
          maxIntersectionHeight = visibleHeight;
          bestIndex = index;
        }
      }
    });

    return bestIndex;
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const nextIndex = calculateActiveSection();
          setActiveSceneIndex(nextIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Run immediately on mount / layout render
    handleScrollOrResize();

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    // Secondary Observer trigger for dynamic layout shifts
    const observer = new IntersectionObserver(
      () => {
        handleScrollOrResize();
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1.0] }
    );

    sceneIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      observer.disconnect();
    };
  }, [calculateActiveSection]);

  const handleSelectScene = (index) => {
    setActiveSceneIndex(index);
    const id = sceneIds[index];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-main-root">
      {/* 5-Second Premium Welcome / Loading Screen Overlay */}
      <WelcomeScreen onFinish={() => setIsWelcomeFinished(true)} />

      {/* Background Math Grid Overlay */}
      <div className="math-grid-overlay" />

      {/* Custom Cursor Tracker */}
      <CustomCursor />

      {/* Braille Scene Navigator */}
      <BrailleNavigator 
        activeSceneIndex={activeSceneIndex} 
        onSelectScene={handleSelectScene} 
      />

      {/* Visual Scenes 01 to 08 */}
      <main>
        <SceneLanding isWelcomeFinished={isWelcomeFinished} />
        <ScenePhysicalCard />
        <SceneAbout />
        <SceneProjects />
        <SceneSkills />
        <SceneEducationExperience />
        <SceneContact />
      </main>
    </div>
  );
}

