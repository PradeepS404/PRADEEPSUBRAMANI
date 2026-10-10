import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACT_WEBHOOK_URL } from '../config';

const EMAIL_ADDRESS = "mailto:pradeepsubramani2004@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/pradeepsubramanipradeep/";
const GITHUB_URL = "https://github.com/PradeepS404";
const LEETCODE_URL = "https://leetcode.com/u/Pradeep2414/";

const LinkedinIcon = ({ size = 20, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function SceneContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    // Reset state before submission
    setStatus('idle');
    setErrorMessage('');
    setSuccessMessage('');
    const newFieldErrors = {};

    // Honeypot Bot Spam Protection
    if (formData.honeypot && formData.honeypot.trim() !== '') {
      setStatus('success');
      setSuccessMessage('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      return;
    }

    const nameTrimmed = formData.name.trim();
    const emailTrimmed = formData.email.trim();
    const messageTrimmed = formData.message.trim();

    if (!nameTrimmed) {
      newFieldErrors.name = true;
      setErrorMessage('Please enter your Name.');
    } else if (!emailTrimmed) {
      newFieldErrors.email = true;
      setErrorMessage('Please enter your Email ID.');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailTrimmed)) {
        newFieldErrors.email = true;
        setErrorMessage('Please enter a valid email address.');
      } else if (!messageTrimmed) {
        newFieldErrors.message = true;
        setErrorMessage('Please enter your Message.');
      }
    }

    if (Object.keys(newFieldErrors).length > 0) {
      setFieldErrors(newFieldErrors);
      setStatus('error');
      return;
    }

    setStatus('loading');

    const payload = {
      name: nameTrimmed,
      email: emailTrimmed,
      message: messageTrimmed
    };

    try {
      const targetUrl = CONTACT_WEBHOOK_URL || (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_CONTACT_WEBHOOK_URL) || '';

      if (!targetUrl || targetUrl.trim() === '') {
        throw new Error('Something went wrong. Please try again.');
      }

      const res = await fetch(targetUrl.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      let responseData = null;
      try {
        responseData = await res.json();
      } catch (_) {}

      if (res.ok) {
        setStatus('success');
        setSuccessMessage(responseData?.message || 'Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        const friendlyError = responseData?.error || responseData?.message || 'Something went wrong. Please try again.';
        setStatus('error');
        setErrorMessage(friendlyError);
      }
    } catch (err) {
      console.error('Form submission failed:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="scene-07" className="scene-section contact-scene-wrapper">
      {/* Soft Breathing Glow Blobs Background */}
      <div className="contact-glow-blob blob-1" />
      <div className="contact-glow-blob blob-2" />

      <div className="editorial-canvas">
        
        {/* Top Header Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          {/* Animated Top Label: — CONTACT — */}
          <div className="contact-top-label-row">
            <span className="contact-dash-line left" />
            <span className="micro-label" style={{ letterSpacing: '0.25em' }}>CONTACT</span>
            <span className="contact-dash-line right" />
          </div>
        </motion.div>

        {/* 2-Column Desktop Grid Layout */}
        <div className="contact-grid-layout">
          
          {/* LEFT COLUMN: Heading, Description, Follow Me, Social Icons, Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-left-content"
          >
            {/* Main Heading: LET'S WORK TOGETHER */}
            <h2 className="contact-left-heading">
              LET'S WORK TOGETHER
            </h2>

            {/* Short Description */}
            <p className="serif-subtitle contact-serif-paragraph">
              "Have an idea, project, or collaboration in mind? Send me a message and let’s create something clean, modern, and impactful together."
            </p>

            {/* FOLLOW ME Area */}
            <div className="contact-follow-wrapper">
              <span className="contact-follow-title">
                FOLLOW ME
              </span>

              <div className="contact-social-glass-row">
                <a href={EMAIL_ADDRESS} className="contact-social-glass-circle" aria-label="Email" title="Email">
                  <Mail size={18} color="#ffffff" />
                </a>

                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact-social-glass-circle" aria-label="LinkedIn Profile" title="LinkedIn">
                  <LinkedinIcon size={18} color="#ffffff" />
                </a>

                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="contact-social-glass-circle" aria-label="GitHub Profile" title="GitHub">
                  <GithubIcon size={18} color="#ffffff" />
                </a>

                <a href={LEETCODE_URL} target="_blank" rel="noopener noreferrer" className="contact-social-glass-circle" aria-label="LeetCode Profile" title="LeetCode">
                  <Code2 size={18} color="#ffffff" />
                </a>
              </div>

              {/* Copyright Line */}
              <div className="contact-copyright-text">
                © 2026 PRADEEP SUBRAMANI
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: SEND MESSAGE (PREMIUM GLASS FORM CARD) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              x: { duration: 0.8 },
              opacity: { duration: 0.8 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
            className="bg-[#0f0f11]/90 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md contact-glass-form-card"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="heading-md text-white text-xl tracking-wider m-0">
                SEND MESSAGE
              </h3>
              <span className="micro-label text-zinc-400 text-xs tracking-widest uppercase border border-white/10 px-2.5 py-1 rounded-full">
                DIRECT
              </span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Hidden Honeypot Field for Spam Protection */}
              <div style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <input 
                  type="text" 
                  name="honeypot" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  value={formData.honeypot} 
                  onChange={handleChange} 
                />
              </div>

              {/* 1. NAME FIELD */}
              <div className="flex flex-col space-y-1.5 w-full form-field-wrapper">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block align-left form-field-label" htmlFor="contact-name">
                  NAME <span style={{ color: 'var(--accent-red)' }}>*</span>
                </label>
                <input 
                  type="text" 
                  id="contact-name" 
                  name="name" 
                  className={`w-full bg-zinc-900/80 border ${fieldErrors.name ? 'border-red-500' : 'border-zinc-800'} focus:border-zinc-500 rounded-xl placeholder-zinc-500 text-white text-sm px-4 py-3 outline-none transition-colors form-field-input`}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  required
                />
              </div>

              {/* 2. EMAIL ID FIELD */}
              <div className="flex flex-col space-y-1.5 w-full form-field-wrapper">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block align-left form-field-label" htmlFor="contact-email">
                  EMAIL ID <span style={{ color: 'var(--accent-red)' }}>*</span>
                </label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="email" 
                  className={`w-full bg-zinc-900/80 border ${fieldErrors.email ? 'border-red-500' : 'border-zinc-800'} focus:border-zinc-500 rounded-xl placeholder-zinc-500 text-white text-sm px-4 py-3 outline-none transition-colors form-field-input`}
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  required
                />
              </div>

              {/* 3. MESSAGE FIELD (EXACTLY 4 ROWS, RESIZE-NONE) */}
              <div className="flex flex-col space-y-1.5 w-full form-field-wrapper">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block align-left form-field-label" htmlFor="contact-message">
                  MESSAGE <span style={{ color: 'var(--accent-red)' }}>*</span>
                </label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  rows={4} 
                  className={`w-full bg-zinc-900/80 border ${fieldErrors.message ? 'border-red-500' : 'border-zinc-800'} focus:border-zinc-500 rounded-xl placeholder-zinc-500 text-white text-sm px-4 py-3 outline-none resize-none transition-colors form-field-textarea`}
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  required
                />
              </div>

              {status === 'error' && (
                <div className="contact-status-box error flex items-center gap-2 text-red-400 text-sm mt-2">
                  <AlertCircle size={15} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="contact-status-box success flex items-center gap-2 text-emerald-400 text-sm mt-2">
                  <CheckCircle2 size={15} />
                  <span>{successMessage || 'Thank you! Your message has been sent.'}</span>
                </div>
              )}

              {/* Metallic Shimmer Submit Button */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-b from-zinc-200 to-zinc-400 text-black uppercase font-bold text-xs tracking-widest py-3.5 px-6 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-[0.99] cursor-pointer contact-submit-metallic-btn mt-4"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    <span>SENDING...</span>
                  </div>
                ) : (
                  <span>SEND MESSAGE</span>
                )}
              </button>

              {/* Response Status Indicator */}
              <div className="flex items-center gap-2.5 mt-4 text-xs text-zinc-400 font-mono contact-response-status">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse contact-green-dot" />
                <span>Usually replies within a few hours</span>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}



