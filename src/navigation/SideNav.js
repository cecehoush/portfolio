import React, { useState, useEffect } from 'react';
import './SideNav.css';

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('01');

  const navItems = [
    { id: '01', label: 'Welcome', target: 'welcome' },
    { id: '02', label: 'About', target: 'about' },
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

  return (
    <div className="side-nav">
      <nav>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.target}`}
            onClick={(e) => handleClick(e, item.target)}
            className={activeSection === item.id ? 'active' : ''}
          >
            <span className="item-number">{item.id}</span>
            <span className="item-label">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;