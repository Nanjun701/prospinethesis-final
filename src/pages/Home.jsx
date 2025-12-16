import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const [isDetecting, setIsDetecting] = useState(false); 
  const navigate = useNavigate();

  const handleStartDetection = () => {
    setIsDetecting(true); 
    setTimeout(() => {
      navigate('/face-scan'); 
      setIsDetecting(false);
    }, 1500); 
  };

  return (
    <div className="home-page-container"> 
      <h1 className="tagline-title">We help you readjust to life.</h1> 

      <div className="button-selection-area">
        
        <button 
          className="xray-button"
          onClick={handleStartDetection}
          disabled={isDetecting} 
        >
          {isDetecting ? 'Preparing...' : 'Diagnosing Your Spinal Type And Match With Product'}
        </button>
      </div>
    </div>
  );
};

export default Home;