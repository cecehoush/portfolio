import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './NavBar.css';
import Logo from '../assets/Logo.png';

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);
  const navContainerRef = useRef(null);
  const logoRef = useRef(null);
  const nameRef = useRef(null);
  const menuItemsRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const navElement = navRef.current;
    const navContainerElement = navContainerRef.current;
    const nameElement = nameRef.current;

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
          if (!hasAnimated) {
            gsap.to(navElement, { 
              y: '20px',
              duration: 0.2,
              ease: 'power1.out',
              onComplete: () => {
                gsap.to(navElement, {
                  width: '60%',
                  borderRadius: '10px 10px 10px 10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  duration: 0.3
                });
                // name disappears
                gsap.to(nameElement, {
                  width: 0,
                  opacity: 0,
                  duration: 0.5,
                  ease: 'power1.out'
                });
              }
            });
            hasAnimated = true;
          } else {
            gsap.to(navElement, { 
              width: '80%',
              borderRadius: '10px 10px 10px 10px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              duration: 0.3
            });
          }
          gsap.to(navContainerElement, { maxWidth: '960px', duration: 0.3 });
          isNarrow = true;
        } else if (self.direction === -1 && isNarrow && self.scroll() <= 100) {
          gsap.to(navElement, { 
            y: 0,
            width: '100%', 
            borderRadius: '0', 
            duration: 0.3,
            backgroundColor: '#fcf6f5' 
          });
          gsap.to(navContainerElement, { maxWidth: '1200px', duration: 0.3 });
          // name comes back
          gsap.to(nameElement, {
            width: 'auto',
            opacity: 1,
            duration: 0.5,
            ease: 'power1.in'
          });
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
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav ref={navRef} className="navbar">
      <div ref={navContainerRef} className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleHomeClick} ref={logoRef}>
          <img src={Logo} alt="Logo" />
          <span className="navbar-name" ref={nameRef}>Cece Housh</span>
        </Link>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {['Home', 'Portfolio', 'Roadmap', 'Contact'].map((item, index) => (
            <li key={item}>
              <Link 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                ref={el => menuItemsRef.current[index] = el}
                onClick={() => {
                  scrollToTop(); // Always scroll to the top
                  setIsMenuOpen(false);
                }}
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