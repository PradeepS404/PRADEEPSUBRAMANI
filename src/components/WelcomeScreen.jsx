import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Cpu, Layers } from 'lucide-react';

const WELCOME_URL = "www.pradeepsubramani.in";

export default function WelcomeScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [typedUrl, setTypedUrl] = useState('');

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Lock body scrolling while welcome screen is active
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const startTime = performance.now();
    const duration = 5000; // 5.0 seconds total

    // Progress bar animation loop
    const progressInterval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(currentProgress);

      if (elapsed >= 4500 && !isFadingOut) {
        setIsFadingOut(true);
        if (onFinish) onFinish();
      }

      if (elapsed >= duration) {
        clearInterval(progressInterval);
        setIsVisible(false);
        // Restore scrolling
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    }, 16);

    // Typing animation sequence (1.2s to 4.0s)
    if (prefersReducedMotion) {
      setTypedUrl(WELCOME_URL);
    } else {
      const typingStartTime = 1200;
      const typingEndTime = 4000;
      const totalChars = WELCOME_URL.length;
      const typingDuration = typingEndTime - typingStartTime;

      const typingTimer = setTimeout(() => {
        const charInterval = setInterval(() => {
          const elapsed = performance.now() - startTime;
          if (elapsed >= typingEndTime) {
            setTypedUrl(WELCOME_URL);
            clearInterval(charInterval);
          } else {
            const progress = (elapsed - typingStartTime) / typingDuration;
            const charCount = Math.floor(progress * totalChars);
            setTypedUrl(WELCOME_URL.substring(0, Math.max(0, charCount)));
          }
        }, 30);
      }, typingStartTime);

      return () => {
        clearInterval(progressInterval);
        clearTimeout(typingTimer);
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      };
    }

    return () => {
      clearInterval(progressInterval);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="welcome-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: isFadingOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="welcome-screen-overlay"
        >
          {/* Subtle Top Radial Glow */}
          <div className="welcome-glow-top" />

          {/* Subtle Bottom-Right Radial Glow */}
          <div className="welcome-glow-bottom-right" />

          {/* Center Column Container */}
          <div className="welcome-center-column">
            
            {/* 1. GLASS ICON CIRCLES */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="welcome-icons-row"
            >
              <div className="welcome-icon-circle">
                <Terminal size={17} />
              </div>
              <div className="welcome-icon-circle">
                <Code size={17} />
              </div>
              <div className="welcome-icon-circle">
                <Cpu size={17} />
              </div>
              <div className="welcome-icon-circle">
                <Layers size={17} />
              </div>
            </motion.div>

            {/* 2. BOLD INTRO TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="welcome-title-bold">
                PRADEEP SUBRAMANI
              </h1>
            </motion.div>

            {/* 3. SMALL GREY SUBTITLE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="welcome-subtitle-grey">
                CREATIVE DEVELOPER • AI & WEB ARCHITECTURES
              </p>
            </motion.div>

            {/* 4. TYPING URL GLASS PILL */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="welcome-url-pill"
            >
              <span className="welcome-url-dot" />
              <span className="welcome-url-text">
                {typedUrl}
                <span className="welcome-url-cursor" />
              </span>
            </motion.div>

          </div>

          {/* 5. THIN WHITE PROGRESS BAR (BOTTOM OF SCREEN) */}
          <div className="welcome-progress-container">
            <div
              className="welcome-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
