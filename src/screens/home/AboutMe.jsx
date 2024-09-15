// import React, { useState } from 'react';
// import { FaCode, FaPalette, FaLightbulb, FaCoffee } from 'react-icons/fa';
// import './AboutMe.css';

// const AboutMe = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const facts = [
//     { icon: <FaCode />, text: "I love turning ideas into code!" },
//     { icon: <FaPalette />, text: "UI/UX design is my passion!" },
//     { icon: <FaLightbulb />, text: "Always learning new technologies!" },
//     { icon: <FaCoffee />, text: "Fueled by coffee and creativity!" },
//   ];

//   return (
//     <div className="about-me-container">
//       <h2>About Me</h2>
//       <p>
//         I'm a full stack developer and UI/UX designer with a passion for creating beautiful and functional web applications.
//       </p>
//       <div className="fact-bubbles">
//         {facts.map((fact, index) => (
//           <div
//             key={index}
//             className={`fact-bubble ${activeIndex === index ? 'active' : ''}`}
//             onMouseEnter={() => setActiveIndex(index)}
//             onMouseLeave={() => setActiveIndex(null)}
//           >
//             <div className="icon">{fact.icon}</div>
//             <p className="text">{fact.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

import React from 'react';
import { FaPalette, FaLightbulb, FaTrophy, FaDatabase } from 'react-icons/fa';
import './AboutMe.css';
import hackathonPhoto from '../../assets/hackathon.png';
import sqlPhoto from '../../assets/sql.png';
import rainbowPhoto from '../../assets/rainbow.png';  
import newyorkPhoto from '../../assets/newyork.png';

const AboutMe = () => {
  const skills = [
    { 
      icon: <FaTrophy />, 
      title: "Hackathon Winner", 
      description: "I enjoy participating in hackathons! In October 2023, my team and I won 2nd place.",
      isPhoto: true,
      photo: hackathonPhoto
    },
    { 
      icon: <FaPalette />, 
      title: "Nature Lover", 
      description: "I'm passionate about UI/UX and draw inspiration from nature, especially with my love for clouds.",
      isPhoto: true,
      photo: rainbowPhoto
    },
    { icon: <FaLightbulb />, 
      title: "Traveler", 
      description: "Although I haven't done it much yet, I like to travel and explore new places. I'm open to traveling and would like to do it more!",
      isPhoto: true,
      photo: newyorkPhoto
    },
    { 
      icon: <FaDatabase />, 
      title: "SQL Champion", 
      description: "I won a SQL Competition against 30 other students!",
      isPhoto: true,
      photo: sqlPhoto
    },
  ];

  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <p>
        I'm a full stack developer and UI/UX designer. For more technical details about me, check out my Portfolio tab!
        <br></br>
        Otherwise, here are some things about me :)
      </p>
      <div className="skill-cards-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-card-front">
                {skill.icon}
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
              <div className="skill-card-back">
                {skill.isPhoto ? (
                  <img src={skill.photo} alt={skill.title} className="achievement-photo" />
                ) : (
                  <p>{skill.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;