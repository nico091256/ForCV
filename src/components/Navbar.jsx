import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeSection }) => {
  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="glass" style={{ 
      position: 'fixed', 
      top: '20px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      width: '90%', 
      maxWidth: '1200px', 
      zIndex: 1000, 
      padding: '10px 30px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>
        PORT<span className="gradient-text">FOLIO</span>
      </div>
      
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', position: 'relative' }}>
        {navItems.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`} 
            style={{ 
              color: activeSection === item.id ? 'white' : 'var(--text-secondary)', 
              textDecoration: 'none', 
              fontSize: '0.9rem', 
              fontWeight: 500, 
              padding: '10px 20px',
              position: 'relative',
              zIndex: 1,
              transition: 'color 0.3s ease'
            }}
          >
            {item.name}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeGlow"
                className="glass"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(59, 130, 246, 0.15)',
                  border: '1px solid var(--accent-primary)',
                  borderRadius: '12px',
                  zIndex: -1,
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
                }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </a>
        ))}
        <div style={{ marginLeft: '10px', height: '24px', width: '1px', background: 'var(--border-color)' }}></div>
        <a href="#contact" className="glass" style={{ padding: '8px 20px', fontSize: '0.8rem', color: 'white', textDecoration: 'none', border: '1px solid var(--accent-primary)', marginLeft: '10px' }}>Hire Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
