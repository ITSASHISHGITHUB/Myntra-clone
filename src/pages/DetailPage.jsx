import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

import Img2 from '../assets/neom.jpg';
import Img3 from '../assets/img1.jpg';
import Img4 from '../assets/img4.jpg';

import './DetailPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToBag } from '../store/reducers/bagReducer';
import Modal from '../components/Modal';
import { addToWishlist } from '../store/reducers/wishlistReducer';
import { toast } from 'react-hot-toast'
import {useParams} from 'react-router-dom'



const DetailPage = () => {
  const [itemSize, setItemsSize] = useState(0);
  const [showBagModal, setShowBagModal] = useState(false);
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [activeBtn, setActiveBtn] = useState(-1)

  const {id}=useParams()

  const dispatch = useDispatch();;
  const products=useSelector(state=>state.products.find(obj => obj.id === +id))

  console.log(products)
  const handleAddToBag = e => {
    e.preventDefault();

    if (itemSize < 30) {
      toast.error('Please select a size');
      return;
    }
    // dispatch(removeFromBag(id))

    dispatch(
      addToBag({
        ...products,
        size: itemSize
      })
    );
    toast.success("Item added to Bag")
  };

  const handleSelectSize = e => {
    e.preventDefault();
    setItemsSize(e.target.innerText);

  };

  const handleWishlistModal = () => {
    setShowWishlistModal(false)
  };
  const handleBagModal = () => {
    setShowBagModal(false);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault()
    dispatch(
      addToWishlist({
        ...products,
        size: itemSize
      })
    );
    toast.success("Item added to wishlist")
  }

  const [zoomedImage, setZoomedImage] = useState(null);
  const [isZoomActive, setIsZoomActive] = useState(false);
   const handleImageClick = (imageSrc) => {
    setZoomedImage(imageSrc);
    setIsZoomActive(true);
  };

  // Function to close the zoom modal
  const handleCloseZoom = () => {
    setZoomedImage(null);
    setIsZoomActive(false);
  };
  return (
    <div className='detail-container'>
      <Navbar setShowModal={setShowWishlistModal ?? setShowBagModal} />
      <div className='slug-container'>
        <p>Home / Clothing / Men Clothing / Shirts / <strong> Mast & Harbour Shirts &gt; More By Mast & Harbour</strong></p>
      </div>
      {showBagModal && <Modal onClose={handleBagModal} clicked={'bag'}/>}
      {showWishlistModal && <Modal onClose={handleWishlistModal}  clicked={'wishlist'}/>}
      <div className='content-container'>
        <div className='image-container'>
        {[
            products?.image, Img2, Img3, Img4, Img3
          ].map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`Product ${index + 1}`}
              onClick={() => handleImageClick(imageSrc)} // Attach the click handler
            />
          ))}
        </div>
        <div className='content-detail-container'>
          <div className='product-name-container'>
            <h2> {products?.title}</h2>
            <p> {products?.description}</p>
            <p><strong> {products?.rating?.rate}/5 |</strong> {products?.rating?.count} Ratings </p>
          </div>
          <hr />
          <div className='cta-container'>
            <p>₹{products?.price} <strong>(65% OFF)</strong></p>
            <p className='text-inclusive'> inclusive of all taxes </p>
            <div className='size-btn-container' onClick={handleSelectSize}>
              {[30, 32, 34, 36, 38].map((size, i) => (
                <button key={i} className={`circle-button ${activeBtn === i ? 'active' : ""}`} onClick={() => setActiveBtn(i)}>{size}</button>
              ))}
              {/* <button className="circle-button">30</button>
              <button className="circle-button">32</button>
              <button className="circle-button">34</button>
              <button className="circle-button">36</button>
              <button className="circle-button">38</button> */}
            </div>

            <div className='btn-container'>
              <button className='custom-btn btn-bag' onClick={handleAddToBag}>Add to Bag</button>
              <button className='custom-btn btn-wishlist' onClick={handleAddToWishlist}>Add to Wishlist</button>
            </div>
            <hr />
            <div>
              <h3>
                DELIVERY OPTIONS
              </h3>
              <div className="search-bar">
                <input type="text" placeholder="Enter pincode" className='input-box' />
                <button className='pincode-button'>
                  Search
                </button>
              </div>
              <p> Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
              <p>100% Original Products</p>
              <p>Pay on delivery might be available</p>
              <p>Easy 14 days returns and exchanges</p>
              <p>Try & Buy might be available</p>
              <h3> BEST OFFERS</h3>

              <h4>Best Price: Rs.600</h4>
              <menu>
                <li>Coupon Discount: Rs. 134 off (check cart for final savings)</li>
                <li>Coupon code: MYNTRA200</li>
                <li>Applicable on: Orders above Rs. 1099 (only on first purchase)</li>
              </menu>
              <p className='text-inclusive'>View Eligible Products</p>
              <h3> 7.5% Instant Discount on Myntra Kotak Credit Card.</h3>
              <li> Max Discount Up to ₹750 on every spends.</li>

              <p className='text-inclusive'>Terms & Condition</p>
              <h3> Upto ₹500 Cashback on CRED pay UPI transactions</h3>
              <li> Min Spend ₹1000. Available only on Android Devices.</li>

              <p className='text-inclusive'>Terms & Condition</p>
              <h3> EMI option available</h3>
              <li> EMI starting from Rs.35/month</li>

              <p className='text-inclusive'>View Plan</p>
              <hr />
              <h3>
                PRODUCT DETAILS
              </h3>
              <p>spread collar, button placket, 1 patch pocket, long roll-up sleeves, curved hem</p>
              <h3>
                Size & Fit
              </h3>
              <p>
                Regular Fit
              </p>
              <p>
                The model (height 6') is wearing a size 40
              </p>
              <h3>
                Material & Care
              </h3>
              <p>
                100% Cotton
              </p>
              <p>
                Machine wash
              </p>
            </div>
          </div>
      

        </div></div>
        {isZoomActive && (
  <div className='zoom-modal'>
    <button className='close-zoom' onClick={handleCloseZoom}>
      Close
    </button>
    <div className='zoomed-image-container'>
      <img src={zoomedImage} alt='Zoomed Product' />
    </div>
  </div>
)}
      <hr />
    </div>


  );
};

export default DetailPage;
