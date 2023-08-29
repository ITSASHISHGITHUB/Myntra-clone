import React from 'react';
import './Modal.css';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const Modal = ({ onClose,clicked }) => {
  // const cart = useSelector(state => state.bag);

  const  cart=useSelector(state=>state.bag)
  const  wishlist=useSelector(state=>state.wishlist)

  const data=clicked==='bag'?cart:wishlist;
  return (
    <div className='modal-container'>
      <div className='container'>
        <button className='close-button' onClick={onClose}>
          <i className='fa fa-times'></i>
          X
        </button>
        {data.length>0?data?.map(eachItem => <ProductCard key={eachItem.id} product={eachItem} />):<h1>No products</h1>}
      </div>
    </div>
  );
};
export default Modal;
