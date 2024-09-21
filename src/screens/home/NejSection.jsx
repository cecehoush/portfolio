import React, { useState } from 'react';
import './NejSection.css';
// import nej from '../../assets/nej.png';
import nejSpread from '../../assets/nejSpread.png';
import nejSploot from '../../assets/nejSploot.png';
import nejSleep from '../../assets/nejSleep.png';
import nejScream from '../../assets/nejScream.png';
import nejBaby from '../../assets/nejBaby.png';
import nejHi from '../../assets/nejHi.png';
import cloudImage2 from '../../assets/cloud2.png';
import nejYoda from '../../assets/nejYoda.png';
import nejComputer from '../../assets/nejComputer.png';

const NejSection = () => {
    const [activeNej, setActiveNej] = useState(null);

    const nejPhotos = [
        { id: 1, src: nejBaby, fact: "This is Nej as a baby!" },
        { id: 2, src: nejSpread, fact: "Nej likes to escape :((" },
        { id: 3, src: nejSploot, fact: "Nej loves splooting" }, //licks plastic!
        { id: 4, src: nejSleep, fact: "He can't make biscuits..." },
        { id: 5, src: nejScream, fact: "He's a personal alarm clock!" },
        { id: 6, src: nejHi, fact: "Isn't he so pretty?" },
        { id: 7, src: nejYoda, fact: "He's really chill and relaxed!" },
        { id: 8, src: nejComputer, fact: "Good luck getting work done!" }
    ];

    const handleNejClick = (id) => {
        setActiveNej(activeNej === id ? null : id);
    };

    const getPosition = (index, total) => {
        const angle = (index / total) * 2 * Math.PI;
        const radius = 30; 
        return {
            left: `${50 + radius * Math.cos(angle)}%`,
            top: `${50 + radius * Math.sin(angle)}%`
        };
    };

    return (
        <section id="nej" className="nej-section">
            <h2>Welcome to my cat Ineji's world!</h2>
            <div className="nej-cloud">
                <img src={cloudImage2} alt="Nej's Cloud" className="nej-main-cloud" />
                {nejPhotos.map((photo, index) => {
                    const position = getPosition(index, nejPhotos.length);
                    const isActive = activeNej === photo.id;
                    return (
                        <div 
                            key={photo.id} 
                            className={`floating-nej ${isActive ? 'active' : ''}`}
                            style={{
                                ...position,
                                transform: isActive ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%)',
                                transition: 'all 0.7s ease',
                                left: isActive ? '50%' : position.left,
                                top: isActive ? '50%' : position.top,
                            }}
                            onClick={() => handleNejClick(photo.id)}
                        >
                            <img src={photo.src} alt={`Nej ${photo.id}`} />
                            {isActive && (
                                <div className="nej-fact">
                                    <span className="nej-fact-text">{photo.fact}</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <p className="nej-instruction">Click on Nej to learn more about him!</p>
        </section>
    );
};

export default NejSection;