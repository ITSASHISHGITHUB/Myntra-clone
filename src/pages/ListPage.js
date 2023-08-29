import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ProductList";
import ComboBox from "../components/ComboBox";
import "./ListPage.css";
import Modal from "../components/Modal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {useDispatch} from 'react-redux'
import { addProducts } from "../store/reducers/productsReducer";

import {data} from "../data"

const options = [
  { value: "lth", label: "Low to High" },
  { value: "htl", label: "High to Low" },
];

const ListPage = () => {
  const products = useSelector(state=>state.products);
  const dispatch=useDispatch()
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {

          dispatch(addProducts(data)) 
          setFilteredProducts(data)
  }, [dispatch]);
  // console.log(products)
  const handleSearchChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);

    if (newSearchText === "") {
      setFilteredProducts(products); // Set the original full list of products
    } else {
      const newProducts = products.filter((item) =>
        item.title.includes(newSearchText)
      );
      setFilteredProducts(newProducts);
    }
  };
  console.log(products)

  return (
    <div className="listpage-container">
      <Navbar
        setShowModal={setShowModal}
        searchText={searchText}
        handleSearchChange={handleSearchChange}
      />
<div className="basic-start">
  Home / Clothing / <strong>Shirts For Men & Women</strong>
</div>
      {showModal && <Modal />}
      <div className="basic-start"><strong>Shirts For Men & Women 
        </strong>- 98665 items</div>
      
      <div className="basic-start1">
        FILTERS
        <ul className="list-details">
          <li>
            <a href="/">Country of Origin</a>
            </li>
          <li>
            <a href="/">Clear all</a>
          </li>
          
          <li>
            <a href="/">Add-Ons</a>
          </li>
          <li>
            <a href="/">Bundles</a>
          </li>
          <li>
            <a href="/">Collar</a>
          </li>
          <li>
            <a href="/">Fabric</a>
          </li>
          <li>
            <a href="/">Fit</a>
          </li>
          <div className="Combo-box">
            <ComboBox options={options} setFilteredProducts={setFilteredProducts} products={products}/>
          </div>

        </ul>
      </div>
      <div className="App"></div>
      <hr/>
      <Layout setFilteredProducts={setFilteredProducts} products={products}>
      {showModal && <Modal/>}
        <h1>Shirt Collection</h1>
        <ProductList products={filteredProducts} />
      </Layout>
    </div>
  );
};

export default ListPage;
