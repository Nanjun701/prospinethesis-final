import React, { useState } from 'react';
import './About.css';

const CONTENT_VERSION_A = {
  title: 'About Prospinethesis',
  paragraph1: 'Our brand was born during one of the most unique periods in human history, where readjust to the world humans had once built became a challenge for some people. Prospinethesis assists our clients in readjusting to life through a series of wearable smart devices that function as prosthesis for the spine. By minimizing the limitations imposed by spinal morphology, we help our clients readjust to life and achieve consensus with a world liberated by optimal spinal health.',
  buttonText: 'View Our Current Vision',
};

const CONTENT_VERSION_B = {
  title: 'About Prospinethesis',
  paragraph1: "In the future, when spinal condition is no longer a standard for judging human health, people begin to neglect its effects. Try to imagine: after continuous, unrestrained slumping and looking down at work, how will the spine change? How will these changes make even the simplest, most common daily tasks exceedingly difficult? This might be our future, and we help you foresee this grim possibility to re-emphasize the importance of spinal health.",
  buttonText: 'View Our Future Mission',
};

const About = () => {
  const [isVisionMode, setIsVisionMode] = useState(false);

  const currentContent = isVisionMode ? CONTENT_VERSION_B : CONTENT_VERSION_A;

  const handleToggle = () => {
    setIsVisionMode(prev => !prev);
  };

  return (
    <div className="about-page-container">
      <h1 className="about-title">{currentContent.title}</h1>
      <p className="about-paragraph">{currentContent.paragraph1}</p>
      
      <button 
        className="toggle-button xray-button"
        onClick={handleToggle}
      >
        {currentContent.buttonText}
      </button>
    </div>
  );
};

export default About;