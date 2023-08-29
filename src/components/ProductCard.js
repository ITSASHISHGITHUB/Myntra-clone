import React, { useState } from "react";
import "./ProductCard.css";
import SidebarPopup from "../SidebarPopup";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [wishlistVisible, setWishlistVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const handleMouseEnter = () => {
    setWishlistVisible(true);
  };

  const handleImageClick = () => {
    setIsImageZoomed(!isImageZoomed);
  };

  const handleMouseLeave = () => {
    setWishlistVisible(false);
    setSidebarVisible(false); // Hide the sidebar when leaving the button area
  };

  const handleViewSimilarClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div
      className="product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          onClick={handleImageClick}
        />
      </Link>
      <div className={`btn-container ${wishlistVisible ? "active" : ""}`}>
        <div className="buttons-wrapper">
          {wishlistVisible && (
            <button className="wishlist-btn">Wishlist</button>
          )}
          {wishlistVisible && (
            <div className="view-similar-wrapper">
              <button
                className="view-similar-btn"
                onClick={handleViewSimilarClick}
              >
                View Similar
              </button>
              {sidebarVisible && (
                <SidebarPopup onClose={handleViewSimilarClick} />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="bottom-text">
        <p className="title">{product.title}</p>
        <p className="desc">{product.description}</p>
        <p className="price">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
