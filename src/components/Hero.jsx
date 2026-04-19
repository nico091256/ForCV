import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section id="about" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass" style={{ display: 'inline-block', padding: '5px 15px', fontSize: '0.8rem', color: 'var(--accent-primary)', marginBottom: '20px', borderRadius: '20px' }}>
        Available for Freelance
      </div>
      <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '20px' }}>
        Turning Figma into <br />
        <span className="gradient-text">Functional Reality</span>
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
        Frontend Developer specializing in high-performance React applications, premium UI/UX, and complex dashboard systems.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <a href="#work" style={{ background: 'var(--accent-primary)', color: 'white', border: 'none', padding: '15px 35px', borderRadius: '12px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', textDecoration: 'none' }}>View Projects</a>
        <a href="#contact" className="glass" style={{ color: 'white', padding: '15px 35px', borderRadius: '12px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', textDecoration: 'none' }}>Contact Me</a>
      </div>
    </motion.div>
    
    <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-primary)', filter: 'blur(150px)', opacity: 0.15, zIndex: -1 }}></div>
    <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '300px', height: '300px', background: 'var(--accent-secondary)', filter: 'blur(150px)', opacity: 0.15, zIndex: -1 }}></div>
  </section>
);

export default Hero;
