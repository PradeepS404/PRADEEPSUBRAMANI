import React from 'react';

export default function SceneFooter() {
  return (
    <footer id="scene-09" className="scene-section" style={{ minHeight: '40vh', borderBottom: 'none', background: '#000000', padding: '4rem 6vw' }}>
      <div className="editorial-canvas" style={{ textAlign: 'center' }}>
        
        <h2 className="heading-lg" style={{ letterSpacing: '0.1em', margin: 0 }}>
          PRADEEP SUBRAMANI
        </h2>
        
        <p className="meta-label" style={{ marginTop: '0.5rem', color: 'var(--accent-red)' }}>
          DEVELOPER • AI × DATA × WEB
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0', flexWrap: 'wrap' }}>
          <a href="https://github.com/PradeepS404" target="_blank" rel="noopener noreferrer" className="meta-label" style={{ textDecoration: 'none', color: '#aaaaaa' }}>
            GITHUB
          </a>
          <span style={{ color: '#444444' }}>/</span>
          <a href="https://www.linkedin.com/in/pradeepsubramanipradeep/" target="_blank" rel="noopener noreferrer" className="meta-label" style={{ textDecoration: 'none', color: '#aaaaaa' }}>
            LINKEDIN
          </a>
          <span style={{ color: '#444444' }}>/</span>
          <a href="https://leetcode.com/u/Pradeep2414/" target="_blank" rel="noopener noreferrer" className="meta-label" style={{ textDecoration: 'none', color: '#aaaaaa' }}>
            LEETCODE
          </a>
        </div>

        <div style={{ height: '1px', width: '100%', maxWidth: '300px', background: 'var(--border-subtle)', margin: '2rem auto' }}></div>

        <p className="meta-label" style={{ fontSize: '0.7rem', color: '#555555' }}>
          © 2026 PRADEEP SUBRAMANI • CREATIVE DEVELOPER PORTFOLIO
        </p>

      </div>
    </footer>
  );
}
