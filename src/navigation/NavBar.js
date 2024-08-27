import React, { useEffect, useRef } from 'react';
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
      zIndex: 1000
    });
    gsap.set(navContainerElement, { maxWidth: '1200px' });

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        if (self.direction === 1 && !isNarrow && self.scroll() > 100) {
          // Scrolling down and navbar is full width, narrow it and pop it down
          if (!hasAnimated) {
            gsap.to(navElement, { 
              y: '20px',
              duration: 0.2,
              ease: 'power1.out',
              onComplete: () => {
                gsap.to(navElement, {
                  width: '80%',
                  borderRadius: '0 0 10px 10px',
                  duration: 0.3
                });
              }
            });
            hasAnimated = true;
          } else {
            gsap.to(navElement, { 
              width: '80%',
              borderRadius: '0 0 10px 10px',
              duration: 0.3
            });
          }
          gsap.to(navContainerElement, { maxWidth: '960px', duration: 0.3 });
          isNarrow = true;
        } else if (self.direction === -1 && isNarrow && self.scroll() <= 100) {
          // Scrolling up and near the top, restore to full width
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

  return (
    <nav ref={navRef} className="navbar">
      <div ref={navContainerRef} className="navbar-container">
        <a href="/" ref={logoRef} className="navbar-logo">Logo</a>
        <ul className="navbar-menu">
          {['Home', 'About', 'Nej', 'Contact'].map((item, index) => (
            <li key={item}>
              <a href={`/${item.toLowerCase()}`} ref={el => menuItemsRef.current[index] = el}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;