import React, { useState, useEffect } from 'react';
import './SideNav.css';
import cloudImage from '../assets/cloud.png';

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('01');

  const navItems = [
    { id: '01', label: 'Welcome', target: 'welcome' },
    { id: '02', label: 'About', target: 'about' },
    { id: '03', label: 'Nej', target: 'nej' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const item of navItems) {
        const element = document.getElementById(item.target);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderMiniClouds = (index) => {
    const isActive = navItems[index].id === activeSection;
    if (!isActive) return null;

    return (
      <div className="mini-cloud-trail">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="mini-cloud" 
            style={{ 
              backgroundImage: `url(${cloudImage})`,
              right: `${i % 2 === 1 ? 20 : 40}px`, 
              top: `${i * 20 + Math.random() * 10 - 5}px`  // random vertical cloud placement
            }} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="side-nav">
      <nav>
        {navItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <a
              href={`#${item.target}`}
              onClick={(e) => handleClick(e, item.target)}
              className={`cloud-item ${activeSection === item.id ? 'active' : ''}`}
              style={{ backgroundImage: `url(${cloudImage})` }}
            >
              <span className="item-number">{item.id}</span>
              <span className="item-label">{item.label}</span>
            </a>
            {renderMiniClouds(index)}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;