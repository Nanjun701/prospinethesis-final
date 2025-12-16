import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import BrandHighlights from './pages/BrandHighlights'; 
import About from './pages/About'; 
import FaceScanPage from './pages/FaceScanPage'; 
import MatchResultPage from './pages/MatchResultPage'; 
import PurchaseSuccessPage from './pages/PurchaseSuccessPage'; 

import './App.css'; 

function App() {
  return (
    <Router>
      <header className="header-container">
        <nav>
          <div className="logo">
            <Link to="/">
              <span className="logo-x">Prospinethesis</span>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Products</Link>
            <Link to="/highlights">Product Highlights</Link>
            <Link to="/about">About Us</Link>
          </div>
        </nav>
      </header>
      
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/highlights" element={<BrandHighlights />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/face-scan" element={<FaceScanPage />} /> 
          <Route path="/match-result" element={<MatchResultPage />} /> 
          <Route path="/purchase-success" element={<PurchaseSuccessPage />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;