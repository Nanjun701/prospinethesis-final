import React from 'react';
import './BrandHighlights.css';

const BrandHighlights = () => {
  return (
    <div className="brand-highlights-container">
      <h1>Product Highlights</h1>
      
      <p className="intro-text">
        Crafted for the modern life: Functional, Light, Easy to bring, Use anytime. Our products offer the following highlights to meet customer demands:
      </p>

      <div className="highlight-section">
        <div className="highlight-content">
          <h2>1. Innovative Material</h2>
          <p>
            We use a special new type of material: a lightweight, strong, moldable, and comfortable plastic clay.
          </p>
        </div>
        <div className="highlight-image">
          <img 
            src="/images/highlight1.png" 
            alt="Innovative Plastic Clay Material"
          />
        </div>
      </div>

      <div className="highlight-section reverse-layout">
        <div className="highlight-content">
          <h2>2. One-Press Structure</h2>
          <p>
            All products feature a one-press mechanism for opening and collapsing, just like an umbrella.
          </p>
        </div>
        <div className="highlight-image">
          <img 
            src="/images/highlight2.png" 
            alt="One-Press Mechanism for Opening and Collapsing"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandHighlights;