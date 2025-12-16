import React, { useState } from 'react';
import './FlippingCard.css';
import Modal from './Modal';

const FlippingCard = ({ product, onBuyClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const getCurrentData = (isFront) => {
    return isFront ? product.front : product.back;
  };

  const handleDetailsClick = (e) => {
    e.stopPropagation();
    setShowImageModal(true);
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
  };

  const renderCardContent = (isFront) => {
    const data = getCurrentData(isFront);

    const ContentBlock = isFront ? (
      <div className="card-side-text card-diagnosis">
        <h3 className="diagnosis-item diagnosis-title">
        <span>{data.disorder}</span>
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
      <div className="card-side-text">
        <h3 className="product-name">{data.name}</h3>
        <p className="product-tag">{data.tag}</p>
        <p className="product-desc">{data.desc}</p>
        <div className="card-footer">
          <span className="product-price">{data.price}</span>
          <button className="card-action-btn" onClick={handleDetailsClick}>
            Wearable Details
          </button>
        </div>
      </div>
    );

    return (
      <div className="card-side-content">
        <div className="card-side-image">
          <img
            src={data.image}
            alt={isFront ? '生物诊断图像' : data.name}
            className="card-image"
          />
        </div>
        {ContentBlock}
      </div>
    );
  };

  const instructionImagePath = `/images/${product.id}-.png`;

  return (
    <>
      <div
        className="card-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
          <div className="card-face card-front">{renderCardContent(true)}</div>
          <div className="card-face card-back">{renderCardContent(false)}</div>
        </div>
      </div>

      <Modal
        show={showImageModal}
        onClose={handleCloseModal}
        className="modal-image-details"
      >
        <img
          src={instructionImagePath}
          className="modal-instruction-image"
        />
      </Modal>
    </>
  );
};

export default FlippingCard;