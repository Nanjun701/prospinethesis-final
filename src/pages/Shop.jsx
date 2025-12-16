import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import { products } from '../productData'; 
import FlippingCard from '../components/FlippingCard'; 
import './Shop.css'; 

const Shop = () => {
  const navigate = useNavigate();
  
  return (
    <div className="shop-page-container">
      <h3>Select the appropriate product based on your spine type.</h3>
      <p className="shop-intro">Hover to view product details</p>
      
      <div className="product-grid">
        {products.map(product => (
          <FlippingCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;