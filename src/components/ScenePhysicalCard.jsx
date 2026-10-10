import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, ArrowRight } from 'lucide-react';

export default function ScenePhysicalCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="scene-02" className="scene-section card-scene-container">
      <div className="editorial-canvas" style={{ textAlign: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="micro-label">// SCENE 02 — INTERACTIVE IDENTITY</span>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
            PHYSICAL PROFILE CARD
          </h2>
          <p className="meta-label" style={{ color: '#777777', marginTop: '0.2rem' }}>
            CLICK OR PRESS ENTER TO FLIP
          </p>
        </motion.div>

        {/* 3D Physical Card Box */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div 
            className="card-perspective-box"
            onClick={toggleFlip}
            role="button"
            tabIndex={0}
            aria-label="Flip profile card"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFlip();
              }
            }}
          >
            <div className={`physical-card-3d ${isFlipped ? 'flipped' : ''}`}>
              
              {/* FRONT SIDE */}
              <div className="card-face card-face-front">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="micro-label" style={{ color: '#aaaaaa' }}>PS // 2026</span>
                  <span className="micro-label" style={{ color: 'var(--accent-red)' }}>FRONT FACE</span>
                </div>

                <div className="card-photo-frame">
                  <img 
                    src="/images/Photo.png" 
                    alt="Pradeep Subramani profile photo" 
                    className="card-photo-img"
                    onError={(e) => { e.target.src = '/images/Photo.png'; }}
                  />
                </div>

                <div style={{ textAlign: 'left' }}>
                  <h3 className="heading-md" style={{ letterSpacing: '-0.02em', margin: 0 }}>
                    PRADEEP SUBRAMANI
                  </h3>
                  <p className="meta-label" style={{ fontSize: '0.75rem', marginTop: '0.3rem', color: '#888888' }}>
                    CREATIVE DEVELOPER • B.TECH IT
                  </p>
                </div>

                <div className="card-flip-cue">
                  <RotateCw size={14} />
                  <span>TAP TO ROTATE CARD</span>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="card-face card-face-back">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="micro-label" style={{ color: 'var(--accent-red)' }}>BACK FACE</span>
                  <span className="micro-label" style={{ color: '#aaaaaa' }}>MANIFESTO</span>
                </div>

                <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.2rem', margin: 'auto 0' }}>
                  <div>
                    <span className="micro-label" style={{ fontSize: '0.65rem', color: '#666666' }}>CORE FOCUS</span>
                    <h4 className="heading-md" style={{ fontSize: '1.2rem', color: 'var(--accent-red)', marginTop: '0.2rem' }}>
                      AI • DATA • WEB • AGENTS
                    </h4>
                  </div>

                  <p className="body-normal" style={{ fontSize: '0.9rem', color: '#cccccc', lineHeight: 1.5 }}>
                    Currently exploring, learning, and building across artificial intelligence systems, document intelligence, automated risk evaluation, and modern web architectures.
                  </p>

                  <div style={{ borderTop: '1px dashed var(--border-medium)', paddingTop: '0.8rem' }}>
                    <span className="meta-label" style={{ fontSize: '0.7rem', color: '#888888' }}>
                      SNS COLLEGE OF TECHNOLOGY • COIMBATORE
                    </span>
                  </div>
                </div>

                <div className="card-flip-cue">
                  <RotateCw size={14} />
                  <span>RETURN TO FRONT</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA BUTTONS (RULE 21) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <button 
            className="editorial-btn editorial-btn-glow"
            onClick={() => scrollToSection('scene-04')}
          >
            <span>VIEW PROJECTS</span>
            <ArrowRight size={16} />
          </button>

          <button 
            className="editorial-btn"
            onClick={() => scrollToSection('scene-07')}
          >
            <span>LET'S TALK</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
