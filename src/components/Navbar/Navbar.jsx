import React from 'react';
import './Navbar.css';
import LogoImage from '../Navbar/logo.jpg';

const Navbar = ({ setShowModal, searchText,handleSearchChange }) => {
  const handleBagClick = () => {
    setShowModal(true);
  }
  const handleWishlistClick = () => {
    setShowModal(true);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoImage} alt="Myntra Logo" /> {/* Use your logo image */}
      </div>
      <ul className="nav-links">
        <li><a href="/"><strong>MEN</strong></a></li>
        <li><a href="/"><strong>WOMEN</strong></a></li>
        <li><a href="/"><strong>BOYS</strong></a></li>
        <li><a href="/"><strong>GIRLS</strong></a></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search for products" className='input-box' value={searchText} onChange={handleSearchChange} />
      </div>
      <div className="user-actions">
        <button className="user-profile" href="/">Profile</button>
        <button className="user-wishlist" onClick={handleWishlistClick}>Wishlist</button>
        <button className="bag-button" onClick={handleBagClick}>Bag</button>
      </div>
    </nav>
  );
}

export default Navbar;
