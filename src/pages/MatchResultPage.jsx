import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../productData'; 
import Modal from '../components/Modal'; 
import './MatchResultPage.css'; 

const MODAL_STATUS = {
    HIDDEN: 'HIDDEN',               
    CONFIRMATION: 'CONFIRMATION',   
};

const ResultCard = ({ product, onBuyClick }) => {
    
    const getCurrentData = (isFront) => {
        return isFront ? product.front : product.back;
    };

    const renderCardContent = (isFront) => {
        const data = getCurrentData(isFront); 

        const ContentBlock = isFront ? (
<div className="card-side-text card-diagnosis" style={{ flex: '4', padding: '15px' }}>            
            <h3 className="diagnosis-item">
            {data.disorder}
            </h3>
            <p className="product-tag">{data.tag}</p>

            <p className="diagnosis-item">
                <span className="label">Symptom</span> {data.symptoms}
            </p>
            <p className="diagnosis-item">
                <span className="label">Cause</span> {data.cause}
            </p>
            <p className="diagnosis-item problem">
                <span className="label">Problem</span> {data.problem}
            </p>
        </div>
    ) : (
        <div className="card-side-text" style={{ flex: '4', padding: '15px' }}>
            <h3 className="product-name">{data.name}</h3>
            <p className="product-tag">{data.tag}</p>
            <p className="product-desc">
                {data.desc}
            </p>
            <div className="card-footer" style={{ marginTop: 'auto' }}>
                <span className="product-price">{data.price}</span>
                
                <button 
                  className="card-action-btn"
                  onClick={() => {
                    onBuyClick(product); 
                  }} 
                >
                    Get It
                </button>
                </div>
            </div>
        );


        return (
            <div className="card-side-content">
                <div 
                    className="card-side-image" 
                    style={{ flex: '3', aspectRatio: '3 / 4' }}
                >
                    <img 
                        src={data.image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover'}} 
                    />
                </div>
                
                {ContentBlock}
            </div>
        );
    };

    return (
        <div className="match-result-card-container">
            <div className="card-face card-front match-card">
                {renderCardContent(true)}
            </div>
            <div className="card-face card-back match-card match-card-back"> 
                {renderCardContent(false)}
            </div>
        </div>
    );
};


const MatchResultPage = () => {
    const navigate = useNavigate();
    
    const [modalStatus, setModalStatus] = useState(MODAL_STATUS.HIDDEN);
    const [currentProduct, setCurrentProduct] = useState(null); 

    const matchedProduct = useMemo(() => {
        const randomIndex = Math.floor(Math.random() * products.length);
        return products[randomIndex];
    }, []);


    const handleBuyClick = (product) => {
        setCurrentProduct(product); 
        setModalStatus(MODAL_STATUS.CONFIRMATION); 
    };

    const handleCancel = () => {
        setModalStatus(MODAL_STATUS.HIDDEN);
        setCurrentProduct(null);
    };

    const handleConfirmPurchase = () => {
        sessionStorage.setItem('purchasedProduct', JSON.stringify(currentProduct || matchedProduct));
        
        setModalStatus(MODAL_STATUS.HIDDEN);
        navigate('/purchase-success'); 
    };


    return (
        <div className="match-result-page-container">
            <h1>Diagnosis Result</h1>
            <p className="intro-text">
                Your diagnostic result and best-fit product have been provided.
            </p>

            <div className="result-display-area">
                <ResultCard product={matchedProduct} onBuyClick={handleBuyClick} />
            </div>
            
            <div className="action-footer">

                <button className="xray-button" onClick={() => navigate('/shop')}>
Browse other products                </button>
            </div>
            
            <Modal
                show={modalStatus === MODAL_STATUS.CONFIRMATION}
                product={currentProduct || matchedProduct} 
                status={'CONFIRMATION'} 
                onConfirm={handleConfirmPurchase}
                onCancel={handleCancel}
            />

        </div>
    );
};

export default MatchResultPage;