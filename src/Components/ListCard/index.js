import React from "react";
import './index.css'

function ListCard({ product }) {
  var image = require("../../Assets/Images/" + product.img);
  return (
    <>
      <div className="col-12 col-md-4 my-2">
        <div className="d-flex justify-content-center featured">
          <img
            src={image}
            alt={product.name}
            className="img-fluid list-img"
          />
        </div>
      </div>
      <div className="col-11 col-md-5 offset-md-1 mt-3 ml-1">
          <div className="row text-center featured-head my-2">{product.name}</div>
          <div className="row text-center featured-para">
            {product.nprice} &nbsp; &nbsp; 
            <span className="latest-mini">{product.oprice}</span> &nbsp; &nbsp; 
            <div className="text-center">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
          </div>
          </div>
          <div className="list-para row my-1">
            {product.para}
          </div>
            <div className="row text-center featured-para my-2">
            <span className="fa list-icon fa-shopping-cart"></span>
            <span className="fa list-icon fa-heart-o"></span>
            <span className="fa list-icon fa-search-plus"></span>
          </div>
          
          
          </div>
    </>
  );
}

export default ListCard;
