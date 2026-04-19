import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, LayoutDashboard, MonitorSmartphone, Code, GitBranch } from 'lucide-react';

const ProjectCard = ({ title, description, tags, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="glass" 
    style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', transition: 'var(--transition-smooth)' }}
  >
    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
      <Icon size={24} />
    </div>
    <h3 style={{ fontSize: '1.5rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{description}</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto' }}>
      {tags.map(tag => (
        <span key={tag} style={{ fontSize: '0.7rem', padding: '4px 10px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>{tag}</span>
      ))}
    </div>
    <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
      <a href="#" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem' }}>
        Live Demo <ExternalLink size={14} />
      </a>
      <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem' }}>
        Source <GitBranch size={14} />
      </a>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="work">
    <div style={{ marginBottom: '60px' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Featured Projects</h2>
      <p style={{ color: 'var(--text-secondary)' }}>A selection of my recent works in web development.</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
      <ProjectCard 
        title="Flow Market Dashboard" 
        description="E-commerce Marketplace Admin Panel with catalog moderation, merchant approval, and financial reporting modules."
        tags={['React', 'Vite', 'Vanilla CSS', 'Lucide']}
        icon={LayoutDashboard}
      />
      <ProjectCard 
        title="JobHunter Portal" 
        description="A comprehensive job board platform with advanced filtering, candidate dashboards, and Figma fidelity."
        tags={['React', 'Next.js', 'Tailwind', 'Framer Motion']}
        icon={MonitorSmartphone}
      />
      <ProjectCard 
        title="AutoMarket CRM" 
        description="Custom CRM system for automotive businesses featuring session authentication and brand management."
        tags={['React Context', 'Hooks', 'CRUD', 'Auth']}
        icon={Code}
      />
    </div>
  </section>
);

export default Projects;
