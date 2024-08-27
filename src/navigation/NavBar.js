import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './NavBar.css';

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);
  const navContainerRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    const navElement = navRef.current;
    const navContainerElement = navContainerRef.current;

    let isNarrow = false;
    let hasAnimated = false;

    gsap.set(navElement, { 
      y: 0, 
      width: '100%',
      position: 'fixed',
      top: 0,
      left: '50%',
      xPercent: -50,
      zIndex: 1000,
    });
    gsap.set(navContainerElement, { maxWidth: '1200px' });

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        if (self.direction === 1 && !isNarrow && self.scroll() > 100) {
          // Scrolling down, navbar is full width, narrow & pop it down
          if (!hasAnimated) {
            gsap.to(navElement, { 
              y: '20px',
              duration: 0.2,
              ease: 'power1.out',
              onComplete: () => {
                gsap.to(navElement, {
                  width: '60%',
                  borderRadius: '10px 10px 10px 10px',
                  backgroundColor: 'rgba(116, 140, 171, 0.8)', 
                  duration: 0.3
                });
              }
            });
            hasAnimated = true;
          } else {
            gsap.to(navElement, { 
              width: '80%',
              borderRadius: '10px 10px 10px 10px',
              backgroundColor: 'rgba(116, 140, 171, 0.8)', 
              duration: 0.3
            });
          }
          gsap.to(navContainerElement, { maxWidth: '960px', duration: 0.3 });
          isNarrow = true;
        } else if (self.direction === -1 && isNarrow && self.scroll() <= 100) {
          // Scrolling up, at top put back to full width
          gsap.to(navElement, { 
            y: 0,
            width: '100%', 
            borderRadius: '0', 
            duration: 0.3 
          });
          gsap.to(navContainerElement, { maxWidth: '1200px', duration: 0.3 });
          isNarrow = false;
          hasAnimated = false;
        }
      }
    });
  }, []);

  const handleHomeClick = (e) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav ref={navRef} className="navbar">
      <div ref={navContainerRef} className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleHomeClick} ref={logoRef}>Cece Housh</Link>
        <ul className="navbar-menu">
          {['Home', 'Portfolio', 'Roadmap', 'Nej', 'Contact'].map((item, index) => (
            <li key={item}>
              <Link 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                ref={el => menuItemsRef.current[index] = el}
                onClick={item === 'Home' ? handleHomeClick : undefined}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;