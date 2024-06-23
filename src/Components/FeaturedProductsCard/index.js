import React from "react";
import './index.css'

const FeaturedProducts = ({product}) => {
  var image = require('../../Assets/Images/'+product.img);
  return (
    <div className='col-4 col-sm-2 mx-3'>
      <div className="row d-flex justify-content-center featured">
        <img src={image} className="img-fluid featured-img" />
      </div>
      <div className="text-center featured-head">{product.name}</div>
      <div className="text-center featured-para">
      {product.code}
      <br />
      {product.oprice}
      </div>
    </div>
  );
};

export default FeaturedProducts;
