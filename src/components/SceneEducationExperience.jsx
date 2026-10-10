import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, BookOpen, CheckCircle } from 'lucide-react';

export default function SceneEducationExperience() {
  return (
    <section id="scene-06" className="scene-section">
      <div className="editorial-canvas">
        
        {/* Scene Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="micro-label">// SCENE 06 — ACADEMIC & PROFESSIONAL BACKGROUND</span>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
            EDUCATION, EXPERIENCE & LEARNING
          </h2>
        </motion.div>

        {/* 1. EDUCATION SECTION (RULE 30) */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <GraduationCap color="var(--accent-red)" size={22} />
            <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>EDUCATION</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            
            {/* B.Tech */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}
            >
              <span className="micro-label" style={{ color: 'var(--accent-red)' }}>GRADUATION // EXPECTED 2029</span>
              <h4 className="heading-md" style={{ fontSize: '1.3rem', margin: '0.5rem 0 0.2rem 0' }}>
                B.Tech in Information Technology
              </h4>
              <p className="body-lead" style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1rem' }}>
                SNS College of Technology, Coimbatore
              </p>
              <div style={{ display: 'inline-block', padding: '0.4rem 0.8rem', background: 'rgba(255, 42, 42, 0.1)', border: '1px solid var(--accent-red)', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#ffffff' }}>
                CGPA: 9.3 / 10.0
              </div>
            </motion.div>

            {/* HSC */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}
            >
              <span className="micro-label" style={{ color: 'var(--accent-red)' }}>HIGHER SECONDARY // HSC</span>
              <h4 className="heading-md" style={{ fontSize: '1.3rem', margin: '0.5rem 0 0.2rem 0' }}>
                Bio-Maths Group
              </h4>
              <p className="body-lead" style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Kamarajar Higher Secondary School, Namakkal
              </p>
              <p className="meta-label" style={{ fontSize: '0.75rem', color: '#aaaaaa', marginBottom: '1rem' }}>
                SUBJECTS: Mathematics, Physics, Chemistry, Biology
              </p>
              <div style={{ display: 'inline-block', padding: '0.4rem 0.8rem', background: 'rgba(255, 42, 42, 0.1)', border: '1px solid var(--accent-red)', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#ffffff' }}>
                PERCENTAGE: 92.8%
              </div>
            </motion.div>

          </div>
        </div>

        {/* 2. EXPERIENCE SECTION (RULE 31 — PARALLEL ON DESKTOP, STACKED ON MOBILE) */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Briefcase color="var(--accent-red)" size={22} />
            <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>PROFESSIONAL INTERNSHIPS</h3>
          </div>

          <div className="experience-parallel-grid">
            
            {/* CodSoft */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="micro-label">CODSOFT</span>
                <span className="meta-label" style={{ fontSize: '0.75rem', color: 'var(--accent-red)' }}>NOV 2025 – DEC 2025</span>
              </div>
              <h4 className="heading-md" style={{ fontSize: '1.3rem', margin: '0.5rem 0 1rem 0' }}>
                Python Programming Intern
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li className="body-normal" style={{ fontSize: '0.88rem', color: '#aaaaaa', display: 'flex', gap: '0.5rem' }}>
                  <span className="red-accent-text">•</span> Completed a 4-week virtual internship focused on Python programming.
                </li>
                <li className="body-normal" style={{ fontSize: '0.88rem', color: '#aaaaaa', display: 'flex', gap: '0.5rem' }}>
                  <span className="red-accent-text">•</span> Developed hands-on projects to strengthen Python and problem-solving skills.
                </li>
                <li className="body-normal" style={{ fontSize: '0.88rem', color: '#aaaaaa', display: 'flex', gap: '0.5rem' }}>
                  <span className="red-accent-text">•</span> Applied core programming concepts to practical coding tasks.
                </li>
                <li className="body-normal" style={{ fontSize: '0.88rem', color: '#aaaaaa', display: 'flex', gap: '0.5rem' }}>
                  <span className="red-accent-text">•</span> Gained experience in structured programming and logical problem-solving.
                </li>
              </ul>
            </motion.div>

            {/* Mechnido Seed */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="micro-label">MECHNIDO SEED, COIMBATORE</span>
                <span className="meta-label" style={{ fontSize: '0.75rem', color: 'var(--accent-red)' }}>JUN 2026</span>
              </div>
              <h4 className="heading-md" style={{ fontSize: '1.3rem', margin: '0.5rem 0 1rem 0' }}>
                Web Development Intern
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li className="body-normal" style={{ fontSize: '0.88rem', color: '#aaaaaa', display: 'flex', gap: '0.5rem' }}>
                  <span className="red-accent-text">•</span> Completed a 15-day web development internship.
                </li>
                <li className="body-normal" style={{ fontSize: '0.88rem', color: '#aaaaaa', display: 'flex', gap: '0.5rem' }}>
                  <span className="red-accent-text">•</span> Gained practical experience in building and structuring web applications.
                </li>
                <li className="body-normal" style={{ fontSize: '0.88rem', color: '#aaaaaa', display: 'flex', gap: '0.5rem' }}>
                  <span className="red-accent-text">•</span> Applied HTML and CSS concepts to web development tasks.
                </li>
                <li className="body-normal" style={{ fontSize: '0.88rem', color: '#aaaaaa', display: 'flex', gap: '0.5rem' }}>
                  <span className="red-accent-text">•</span> Gained exposure to practical web development workflows.
                </li>
              </ul>
            </motion.div>

          </div>
        </div>

        {/* 3. LEARNING / CERTIFICATIONS (RULE 32 — 2x2 LAYOUT) */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <BookOpen color="var(--accent-red)" size={22} />
            <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>LEARNING & CERTIFICATIONS</h3>
          </div>

          <div className="certifications-2x2-grid">
            
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <CheckCircle color="var(--accent-red)" size={20} />
              <div>
                <h4 className="heading-md" style={{ fontSize: '1.05rem', margin: 0 }}>Claude Code in Action</h4>
                <span className="meta-label" style={{ fontSize: '0.7rem', color: '#777777' }}>CERTIFICATION / SPECIALIZATION</span>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <CheckCircle color="var(--accent-red)" size={20} />
              <div>
                <h4 className="heading-md" style={{ fontSize: '1.05rem', margin: 0 }}>Claude Code 101 — Anthropic</h4>
                <span className="meta-label" style={{ fontSize: '0.7rem', color: '#777777' }}>ANTHROPIC EDUCATION</span>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <CheckCircle color="var(--accent-red)" size={20} />
              <div>
                <h4 className="heading-md" style={{ fontSize: '1.05rem', margin: 0 }}>IBM Enterprise Design Thinking Practitioner</h4>
                <span className="meta-label" style={{ fontSize: '0.7rem', color: '#777777' }}>IBM BADGE</span>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <CheckCircle color="var(--accent-red)" size={20} />
              <div>
                <h4 className="heading-md" style={{ fontSize: '1.05rem', margin: 0 }}>TCS iON Career Edge — Young Professional</h4>
                <span className="meta-label" style={{ fontSize: '0.7rem', color: '#777777' }}>TCS iON</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4. ACHIEVEMENTS (RULE 33) */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Award color="var(--accent-red)" size={22} />
            <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>KEY ACHIEVEMENTS</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
              <span className="display-title" style={{ fontSize: '2.5rem', color: 'var(--accent-red)', display: 'block' }}>100+</span>
              <span className="meta-label" style={{ fontSize: '0.75rem', color: '#cccccc' }}>LEETCODE PROBLEMS SOLVED</span>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
              <span className="display-title" style={{ fontSize: '2.5rem', color: '#ffffff', display: 'block' }}>5</span>
              <span className="meta-label" style={{ fontSize: '0.75rem', color: '#cccccc' }}>HACKATHONS PARTICIPATED</span>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
              <span className="display-title" style={{ fontSize: '2.5rem', color: 'var(--accent-red)', display: 'block' }}>1</span>
              <span className="meta-label" style={{ fontSize: '0.75rem', color: '#cccccc' }}>HACKATHON SHORTLISTED</span>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
              <span className="display-title" style={{ fontSize: '2.5rem', color: '#ffffff', display: 'block' }}>9.3</span>
              <span className="meta-label" style={{ fontSize: '0.75rem', color: '#cccccc' }}>ACADEMIC CGPA</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
