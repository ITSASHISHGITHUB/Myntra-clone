import React from "react";
import ProductCard from "./ProductCard";
import "./productList.css";

const ProductList = ({ products }) => {
  let content =
    products.length !== 0 ? (
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <>
        <h1>No Products found</h1>
      </>
    );
  return <>
  {content}
  </>  ;
};

export default ProductList;
