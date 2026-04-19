import React, { useState, useRef } from 'react';
import { GitBranch, Send, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
      }, (error) => {
          console.error('FAILED...', error);
          setStatus('error');
          setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <footer id="contact" style={{ padding: '100px 5% 50px', borderTop: '1px solid var(--border-color)', marginTop: '50px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
        <div style={{ maxWidth: '400px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Let's work <span className="gradient-text">together.</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Have a project in mind? Reach out and let's create something extraordinary.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="https://github.com/nico091256" target="_blank" rel="noopener noreferrer" className="glass" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <GitBranch />
            </a>
            <a href="https://t.me/vaxobov_nurillo" target="_blank" rel="noopener noreferrer" className="glass" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <Send />
            </a>
            <a href="mailto:nurillovahobov6@gmail.com" className="glass" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <Mail />
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="glass" style={{ padding: '30px', flex: 1, minWidth: '300px' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <input type="text" name="user_name" placeholder="Name" required className="glass" style={{ padding: '15px', background: 'transparent', border: '1px solid var(--border-color)', color: 'white' }} />
            <input type="email" name="user_email" placeholder="Email" required className="glass" style={{ padding: '15px', background: 'transparent', border: '1px solid var(--border-color)', color: 'white' }} />
          </div>
          <textarea name="message" placeholder="Message" required className="glass" rows="5" style={{ width: '100%', padding: '15px', background: 'transparent', border: '1px solid var(--border-color)', color: 'white', marginBottom: '20px' }}></textarea>
          <button 
            type="submit" 
            disabled={status === 'sending'}
            style={{ 
              width: '100%', 
              background: status === 'success' ? '#10b981' : 'var(--accent-primary)', 
              color: 'white', 
              border: 'none', 
              padding: '15px', 
              borderRadius: '12px', 
              fontWeight: 600, 
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error! Try Again' : 'Send Message'}
          </button>
          
          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 600px) {
              .footer-grid { grid-template-columns: 1fr !important; }
            }
          `}} />
        </form>
      </div>
      <div style={{ marginTop: '80px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Nurillo Vaxobov. Built with React & Passion.
      </div>
    </footer>
  );
};

export default Footer;
