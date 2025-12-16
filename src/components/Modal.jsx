import React from 'react';
import './Modal.css';

const Modal = ({ show, product, onConfirm, onCancel, status, children, style, onClose }) => {
  if (!show) return null;

  const closeHandler = onClose || onCancel;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeHandler();
    }
  };

  let content;

  if (status === 'CONFIRMATION') {
    content = (
      <>
        <h2>Confirm Purchase {product ? product.name : ''}</h2>
        <div className="modal-content-layout">
          <div className="modal-text-area">
            {product && <p className="modal-price-tag">{product.price}</p>}
            {product && <p>{product.front_desc}</p>}
            <p className="modal-prompt">
              To get this product, you will be restricted to a maximum of 7 hours of daily screen time for 30 days.
            </p>
          </div>
        </div>
        <div className="modal-actions">
          <button className="xray-button modal-cancel-btn" onClick={onCancel}>
            Not Ready
          </button>
          <button className="xray-button modal-confirm-btn" onClick={onConfirm}>
            OK
          </button>
        </div>
      </>
    );
  } else if (status === 'IMAGE_VIEW') {
    content = <div className="modal-image-view">{children}</div>;
  } else {
    content = <div>{children}</div>;
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-main" style={style}>
        <button className="modal-close-button" onClick={closeHandler}>
          &times;
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
