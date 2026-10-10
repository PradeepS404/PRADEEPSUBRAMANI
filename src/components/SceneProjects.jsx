import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight, RotateCcw } from 'lucide-react';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'AI-Powered Patient Record Retrieval and Summarization System using RAG',
    shortDesc: 'An AI-based system that enables healthcare professionals to retrieve relevant patient information through natural-language queries and generate concise summaries using Retrieval-Augmented Generation.',
    focus: 'AI / RAG / NLP / DATA',
    url: '' // Must remain empty until provided
  },
  {
    id: 2,
    number: '02',
    title: 'ReguLens — AI-Powered Regulatory Compliance Platform',
    shortDesc: 'An AI-powered platform that analyzes product documents against regulatory requirements and helps generate compliance insights and reports, making compliance workflows more efficient and transparent.',
    focus: 'AI / DOCUMENT INTELLIGENCE / COMPLIANCE / AUTOMATION',
    url: '' // Must remain empty until provided
  },
  {
    id: 3,
    number: '03',
    title: 'LoanWise — Automated Loan Underwriting with Explainable Decisions',
    shortDesc: 'An automated lending platform that evaluates loan applications using credit scores, income verification, debt analysis, and alternative data to generate transparent risk assessments and explainable lending decisions.',
    focus: 'AI / DATA / RISK ANALYSIS / EXPLAINABLE AI',
    url: '' // Must remain empty until provided
  }
];

export default function SceneProjects() {
  const [expandedId, setExpandedId] = useState(null);

  const activeProject = projects.find((p) => p.id === expandedId);

  return (
    <section id="scene-04" className="scene-section">
      <div className="editorial-canvas">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="micro-label">// SCENE 04 — ARCHITECTURES</span>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
            PROJECTS
          </h2>
          <p className="meta-label" style={{ color: '#777777', marginTop: '0.2rem' }}>
            CLICK "READ MORE" TO EXPAND A PROJECT IN PLACE
          </p>
        </motion.div>

        {/* Projects Container (Side-by-Side 3 Cards on Desktop, In-Place Expanse when expanded) */}
        <div className={`projects-grid ${expandedId !== null ? 'expanded-mode' : ''}`}>
          <AnimatePresence mode="wait">
            {expandedId === null ? (
              // COLLAPSED STATE — 3 CARDS SIDE-BY-SIDE
              projects.map((proj) => (
                <motion.div
                  key={proj.id}
                  layoutId={`project-card-${proj.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="project-card-item"
                >
                  <div>
                    <div className="project-card-header">
                      <span className="project-card-number">{proj.number}</span>
                      <span className="project-focus-tag">{proj.focus}</span>
                    </div>

                    <h3 className="project-card-title">
                      {proj.title}
                    </h3>

                    <p className="project-card-desc-preview">
                      {proj.shortDesc}
                    </p>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <button
                      className="editorial-btn"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', width: '100%', justifyContent: 'space-between' }}
                      onClick={() => setExpandedId(proj.id)}
                    >
                      <span>READ MORE</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              // EXPANDED STATE — SINGLE EXPANDED CARD IN PLACE
              activeProject && (
                <motion.div
                  key={`expanded-${activeProject.id}`}
                  layoutId={`project-card-${activeProject.id}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="project-card-item expanded"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.4rem' }}>
                      <span className="project-card-number" style={{ color: 'var(--accent-red)', marginBottom: 0 }}>
                        {activeProject.number}
                      </span>
                      <span className="project-focus-tag" style={{ marginBottom: 0 }}>
                        {activeProject.focus}
                      </span>
                    </div>

                    <button
                      className="editorial-btn"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
                      onClick={() => setExpandedId(null)}
                    >
                      <RotateCcw size={14} />
                      <span>READ LESS</span>
                    </button>
                  </div>

                  <h3 className="heading-md" style={{ color: '#ffffff', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', margin: '1.2rem 0' }}>
                    {activeProject.title}
                  </h3>

                  <p className="project-card-desc-full">
                    {activeProject.shortDesc}
                  </p>

                  <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <button
                        className="editorial-btn editorial-btn-glow"
                        style={{ padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}
                        onClick={() => {
                          if (activeProject.url) {
                            window.open(activeProject.url, '_blank');
                          } else {
                            alert('Project demo link will be added upon deployment.');
                          }
                        }}
                      >
                        <span>VIEW PROJECT</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <span className="meta-label" style={{ fontSize: '0.7rem', color: '#666666' }}>
                        {activeProject.url ? activeProject.url : 'LINK COMING SOON'}
                      </span>
                    </div>

                    <button
                      className="editorial-btn"
                      style={{ padding: '0.6rem 1.2rem', fontSize: '0.75rem' }}
                      onClick={() => setExpandedId(null)}
                    >
                      <span>READ LESS</span>
                    </button>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

