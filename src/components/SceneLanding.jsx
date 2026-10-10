import React from 'react';
import { motion } from 'framer-motion';

export default function SceneLanding({ isWelcomeFinished = true }) {
  return (
    <div style={{ position: 'relative' }}>
      {/* SCENE 01 — LANDING */}
      <section 
        id="scene-01" 
        className="scene-section hero-scene-container"
      >
        {/* Editorial Canvas wrapper */}
        <div className="editorial-canvas hero-editorial-canvas">
          {/* Header Micro-label / Available Status */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isWelcomeFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="hero-header"
          >
            <span className="micro-label">// CREATIVE DEVELOPER</span>
            <div className="hero-status-badge">
              <span className="red-dot"></span>
              <span className="meta-label hero-meta-text">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </motion.div>

          {/* Central Hero Composition Container */}
          <div className="hero-composition">
            {/* NAME LAYER */}
            <div className="hero-name-back">
              {/* PRADEEP enters from LEFT (-100vw) */}
              <motion.div
                initial={{ x: '-100vw', opacity: 0 }}
                animate={isWelcomeFinished ? { x: '0vw', opacity: 1 } : { x: '-100vw', opacity: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="name-line-wrapper pradeep-wrapper"
              >
                <h1 className="display-title hero-name-text name-pradeep">
                  PRADEEP
                </h1>
              </motion.div>

              {/* SUBRAMANI enters from RIGHT (100vw) */}
              <motion.div
                initial={{ x: '100vw', opacity: 0 }}
                animate={isWelcomeFinished ? { x: '0vw', opacity: 1 } : { x: '100vw', opacity: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="name-line-wrapper subramani-wrapper"
              >
                <h1 className="display-title hero-name-text name-subramani">
                  SUBRAMANI
                </h1>
              </motion.div>
            </div>
          </div>

          {/* FOREGROUND LAYER (DEVELOPER designation) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isWelcomeFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="hero-foreground"
          >
            <h2 className="heading-lg hero-developer-title">
              DEVELOPER
            </h2>
            <p className="meta-label hero-institution-subtitle" style={{ color: 'var(--accent-red)' }}>
              A I  ×  D A T A  ×  W E B  ×  A G E N T S
            </p>
          </motion.div>
        </div>
      </section>

      {/* RUNNING TAGLINE MARQUEE */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-text">
            BUILDING WITH AI • EXPLORING DATA • DEVELOPING FOR THE WEB • LEARNING EVERY DAY •
          </span>
          <span className="marquee-text">
            BUILDING WITH AI • EXPLORING DATA • DEVELOPING FOR THE WEB • LEARNING EVERY DAY •
          </span>
          <span className="marquee-text">
            BUILDING WITH AI • EXPLORING DATA • DEVELOPING FOR THE WEB • LEARNING EVERY DAY •
          </span>
          <span className="marquee-text">
            BUILDING WITH AI • EXPLORING DATA • DEVELOPING FOR THE WEB • LEARNING EVERY DAY •
          </span>
        </div>
      </div>
    </div>
  );
}


