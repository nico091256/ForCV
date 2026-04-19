import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
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
      width: '95%', 
      maxWidth: '1200px', 
      zIndex: 1000, 
      padding: '10px 20px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-1px' }}>
        PORT<span className="gradient-text">FOLIO</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="desktop-menu" style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        {navItems.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`} 
            style={{ 
              color: activeSection === item.id ? 'white' : 'var(--text-secondary)', 
              textDecoration: 'none', 
              fontSize: '0.85rem', 
              fontWeight: 500, 
              padding: '8px 15px',
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
                }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </a>
        ))}
        <div style={{ marginLeft: '10px', height: '20px', width: '1px', background: 'var(--border-color)', display: 'none' }}></div>
        <a href="#contact" className="glass hide-mobile" style={{ padding: '8px 20px', fontSize: '0.8rem', color: 'white', textDecoration: 'none', border: '1px solid var(--accent-primary)', marginLeft: '10px' }}>Hire Me</a>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="mobile-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass"
            style={{
              position: 'absolute',
              top: '70px',
              left: 0,
              right: 0,
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              textAlign: 'center'
            }}
          >
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={() => setIsOpen(false)}
                style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500 }}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
          .hide-mobile { display: none !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
