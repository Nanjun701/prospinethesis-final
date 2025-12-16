import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './PurchaseSuccessPage.css';

const ScreenTimeChart = () => {
    const [screenTime, setScreenTime] = useState(5);
    
    const BASE_PROBABILITY = 10;
    const INCREMENT_PER_HOUR = 8.2;
    const MAX_TIME = 10;
    const MAX_HEIGHT_SCALE = 180;

    const calculatedProbability = useMemo(() => {
        let probability = BASE_PROBABILITY + (screenTime * INCREMENT_PER_HOUR);
        return Math.min(probability, 100); 
    }, [screenTime]);

    const screenTimeHeight = (screenTime / MAX_TIME) * MAX_HEIGHT_SCALE;

    const probabilityHeight = (calculatedProbability / 100) * MAX_HEIGHT_SCALE;
    
    const handleTimeChange = (event) => {
        const newTime = parseFloat(event.target.value);
        if (!isNaN(newTime) && newTime >= 0 && newTime <= MAX_TIME) {
            setScreenTime(newTime);
        }
    };

    return (
        <div className="screen-time-chart-container interactive-chart">
            <p className="chart-title">Screen Usage Time vs. Posture Deterioration Probability</p>

            <div className="chart-controls">
                <label htmlFor="screen-time-input">
                    Screen Time ({screenTime.toFixed(1)} Hours):
                </label>
                <input
                    id="screen-time-input"
                    type="range"
                    min="0"
                    max={MAX_TIME}
                    step="0.1"
                    value={screenTime}
                    onChange={handleTimeChange}
                />
            </div>
            
            <div className="chart-bars-wrapper dual-bars">
                <div className="chart-bar-group">
                    <div 
                        className="chart-bar time-bar" 
                        style={{ height: `${screenTimeHeight}px` }} 
                    >
                        {screenTime.toFixed(1)}h
                    </div>
                    <span className="bar-label">Screen Time</span>
                </div>

                <div className="chart-bar-group">
                    <div 
                        className="chart-bar probability-bar" 
                        style={{ height: `${probabilityHeight}px` }} 
                    >
                        {calculatedProbability.toFixed(1)}%
                    </div>
                    <span className="bar-label">Deterioration Probability</span>
                </div>
            </div>
            <p className="chart-footer">Deterioration Probability = {BASE_PROBABILITY}% + (Time * {INCREMENT_PER_HOUR}%)</p>
        </div>
    );
};

const renderPurchasedItemImage = (product) => {
    if (!product || !product.instructionImage) return null;
    const instructionImagePath = `/images/${product.id}-.png`;
    const productId = product.id;
    return (
        <div className="purchased-image-wrapper">
            <img
                src={instructionImagePath}
                className="purchased-instruction-image"
            />
        </div>
    );
};

const FeedbackSuccessContent = ({ navigate, selectedFeeling }) => {
    const handleReturnHome = () => {
        navigate('/');
    };

    let messageContent;
    
    if (selectedFeeling === 'happy') {
        messageContent = (
            <div className="happy-feedback-content">
                <h3 className="success-message">We are very happy to help you!</h3>
                <p>Based on our lab research data, we suggest you upgrade your purchased product in 20 months to adapt to the update of your spinal condition.</p>
                <p>We look forward to your continued improvement!</p>
            </div>
        );
    } else if (selectedFeeling === 'sad') {
        messageContent = (
            <div className="sad-feedback-content">
                <h3 className="warning-message">Please do not worry!</h3>
                <p>We recommend that you minimize screen usage as much as possible and engage in recovery exercises.</p>
                <p className="screen-time-tip">If you use the screen as advised, your posture will stop deteriorating and will slowly recover.</p>
                
                <ScreenTimeChart /> 
            </div>
        );
    } else {
        messageContent = <p>Feedback submitted, thank you for your support!</p>;
    }


    return (
        <div className="feedback-success-content">
            {messageContent}
            
            <button
                className="return-home-button" 
                onClick={handleReturnHome}
            >
                Return to Home
            </button>
        </div>
    );
};


const PurchaseSuccessPage = () => {
    const navigate = useNavigate();
    const [scannedPhoto, setScannedPhoto] = useState(null);
    const [purchasedProduct, setPurchasedProduct] = useState(null);
    const [selectedFeeling, setSelectedFeeling] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const photoData = sessionStorage.getItem('scannedFacePhoto');
        if (photoData) {
            setScannedPhoto(photoData);
        }
        const productDataString = sessionStorage.getItem('purchasedProduct');
        if (productDataString) {
            const product = JSON.parse(productDataString);
            if (product.id) {
                product.instructionImage = `/images/${product.id}-instructions.png`; 
            }
            setPurchasedProduct(product);
        }
        sessionStorage.removeItem('scannedFacePhoto');
        sessionStorage.removeItem('purchasedProduct');
    }, []);

    const handleFeelingClick = (feeling) => {
        setSelectedFeeling(feeling);
    };

    const handleSubmitFeedback = () => {
        if (!selectedFeeling) {
            alert("Please select a feeling before submitting.");
            return;
        }
        
        console.log("Submitting Feedback:", selectedFeeling);
        setHasSubmitted(true);
    };

    const FEELINGS = [
        { key: 'happy', icon: '😊', label: 'Confident/ Comfortable/ Hopeful' },
        { key: 'sad', icon: '😢', label: 'Anxious/ Awkward/ Uncomfortable' }
    ];
    
    const renderFeedbackForm = () => (
        <>
            <h3 className='feedback-title'>Customer Feedback Research</h3>
            
            <h3>Imagine you've successfully put on this device. How would you feel? </h3>

            <div className="feeling-selection-container">
                {FEELINGS.map(feeling => (
                    <button
                        key={feeling.key}
                        className={`feeling-button ${selectedFeeling === feeling.key ? 'selected' : ''}`}
                        onClick={() => handleFeelingClick(feeling.key)}
                    >
                        <span className="feeling-icon">{feeling.icon}</span>
                        <span className="feeling-label">{feeling.label}</span>
                    </button>
                ))}
            </div>
            
            <button 
                className="submit-feedback-button" 
                onClick={handleSubmitFeedback}
                disabled={!selectedFeeling} 
            >
                Submit Feedback
            </button>
        </>
    );
    
    return (
        <div className="purchase-success-container">
            <h1>Purchase successful!</h1>

            {purchasedProduct && (
                <p className="success-message">
                    Choosing to readjust to life is a great decision! Below we've provided how you can wear and use it.
                </p>
            )}

            {purchasedProduct && (
                <div className="purchased-item-content">
                    <div className="purchased-item-display">
                        {renderPurchasedItemImage(purchasedProduct)}
                    </div>

                    <div className="emotion-survey">
                        {hasSubmitted ? (
                            <FeedbackSuccessContent 
                                navigate={navigate} 
                                selectedFeeling={selectedFeeling} 
                            />
                        ) : (
                            renderFeedbackForm()
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PurchaseSuccessPage;