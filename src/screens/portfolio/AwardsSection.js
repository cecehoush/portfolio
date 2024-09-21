import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AwardsSection = ({ awardsData }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const awards = sectionRef.current.querySelectorAll('.award-item');

    gsap.set(awards, { opacity: 0, x: -50 });

    awards.forEach((award, index) => {
      gsap.to(award, {
        scrollTrigger: {
          trigger: award,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
        delay: index * 0.1
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="awards" ref={sectionRef}>
      <h2>Awards & Achievements</h2>
      <ul className="awards-list">
        {awardsData.map((award, index) => (
          <li key={index} className="award-item">
            <div className="award-icon">🏆</div>
            <div className="award-content">
              <h3>{award.title}</h3>
              <p>{award.description}</p>
              {award.link && (
                <a href={award.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AwardsSection;