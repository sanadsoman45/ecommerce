import React from "react";
import "./Products.css";

const Products = ({ filteredResult }) => {
  console.log(filteredResult)
  return <section className="card-container">{filteredResult}</section>;
};

export default Products;
