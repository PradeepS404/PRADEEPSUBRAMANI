import React from 'react';
import { motion } from 'framer-motion';

export default function SceneAbout() {
  return (
    <section id="scene-03" className="scene-section">
      <div className="editorial-canvas">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <span className="micro-label">// SCENE 03</span>
            <span className="meta-label" style={{ fontSize: '0.7rem', color: '#666666' }}>[MATH & ARCHITECTURE]</span>
          </div>
          <h2 className="heading-lg">
            ENGINEERING & EXPLORATION
          </h2>
        </motion.div>

        {/* Editorial Content Grid with Math-like Subtle Coordinates */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="serif-subtitle" style={{ color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Building at the intersection of intelligence, design, and web architecture.
            </p>

            <p className="body-lead" style={{ marginBottom: '1.5rem' }}>
              Driven by a passion for AI and data, my focus is building intelligent platforms. I enjoy turning fresh ideas into impactful, well-designed applications that feature clean, purposeful visual systems.
            </p>
          </motion.div>

          {/* 4 Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ background: 'var(--bg-card)', padding: '1.8rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}
            >
              <span className="micro-label">01 // THEME</span>
              <h3 className="heading-md" style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>ARTIFICIAL INTELLIGENCE</h3>
              <p className="body-normal" style={{ fontSize: '0.85rem', color: '#888888' }}>
                Leveraging RAG, NLP, and LLM reasoning to solve complex domain workflows.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ background: 'var(--bg-card)', padding: '1.8rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}
            >
              <span className="micro-label">02 // THEME</span>
              <h3 className="heading-md" style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>DATA INTELLIGENCE</h3>
              <p className="body-normal" style={{ fontSize: '0.85rem', color: '#888888' }}>
                Analyzing debt ratios, compliance rules, and structured risk metrics.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ background: 'var(--bg-card)', padding: '1.8rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}
            >
              <span className="micro-label">03 // THEME</span>
              <h3 className="heading-md" style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>WEB DEVELOPMENT</h3>
              <p className="body-normal" style={{ fontSize: '0.85rem', color: '#888888' }}>
                Crafting modern, fast, art-directed web interfaces and smooth experiences.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ background: 'var(--bg-card)', padding: '1.8rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}
            >
              <span className="micro-label">04 // THEME</span>
              <h3 className="heading-md" style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>AGENT DEVELOPMENT</h3>
              <p className="body-normal" style={{ fontSize: '0.85rem', color: '#888888' }}>
                Designing autonomous workflows that plan, reason, and execute.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
