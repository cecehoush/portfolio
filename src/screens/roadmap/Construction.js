import React from 'react';
import './Construction.css';

const RoadmapUnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="construction-card">
        <div className="tape-container">
          <div className="tape top-tape"></div>
          <div className="tape bottom-tape"></div>
        </div>
        
        <div className="content">
        {/* '🚧' or '🔨' or '🛠️' or '🔧' or '👷' or '🚜' or '🏗️' */}
          <div className="icon">👷🏗️</div> 
          <h2 className="title">Roadmap Under Construction</h2>
          <p className="text">
            I'm working hard to create an amazing roadmap experience. 
            Check back soon!
          </p>
          {/* <div className="button-container">
            <button className="notify-button">
              Notify Me When Ready
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RoadmapUnderConstruction;