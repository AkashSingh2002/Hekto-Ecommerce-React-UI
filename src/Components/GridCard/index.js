import React from "react";
import './index.css';

const GridCard = ({ product, isFavorite, toggleFavorite }) => {
  const image = require('../../Assets/Images/' + product.img);

  return (
    <div className="col-4 col-sm-3 mx-3 my-2">
      <div className="featured-card">
        <div className="favorite-icon" onClick={toggleFavorite}>
          <i className={`fa ${isFavorite ? 'fa-heart' : 'fa-heart-o'}`} aria-hidden="true"></i>
        </div>
        <div className="row d-flex justify-content-center featured">
          <img src={image} alt={product.name} className="img-fluid featured-img" />
        </div>
        <br />
        <div className="text-center featured-head">{product.name}</div>
        <div className="text-center featured-para">
          {product.nprice} &nbsp;
          <span className="latest-mini">{product.oprice}</span>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
