import React from 'react';
import './SidebarPopup.css';
import Img1 from './assets/asta.jpg'; // Update the import path for your images
import Img2 from './assets/img1.jpg';
import Img3 from './assets/img4.jpg';

const SidebarPopup = ({ onClose }) => {
  // Sample images for demonstration
  const images = [
    Img1,
    Img2,
    Img3,
    // Add more image imports as needed
  ];

  return (
    <div className="modal-overlay">
      <div className="sidebar-popup">
        <div className="sidebar-content">
          <h2>Similar Products</h2>
          <div className="product-list">
            {images.map((image, index) => (
              <div key={index} className="product-item">
                <img src={image} alt={`Product ${index + 1}`} />
                <button className="buy-now-btn">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SidebarPopup;
