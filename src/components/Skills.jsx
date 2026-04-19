import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiVite, 
  SiFramer, 
  SiFigma, 
  SiCss, 
  SiNextdotjs, 
  SiGit,
  SiPostman
} from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'CSS3 / SCSS', icon: SiCss, color: '#1572B6' },
    { name: 'REST API', icon: SiPostman, color: '#FF6C37' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
  ];

  return (
    <section id="skills" style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Tech Stack</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {skillsData.map((skill, index) => (
          <motion.div 
            key={skill.name} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="glass" 
            style={{ 
              padding: '12px 25px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              cursor: 'default',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <skill.icon style={{ color: skill.color, fontSize: '1.4rem' }} />
            <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
