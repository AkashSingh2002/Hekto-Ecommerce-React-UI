import React from "react";
import './index.css'

const TopCategory = ({product}) => {
  var image = require('../../Assets/Images/'+product.img);
  return (
    <div className='col-4 col-sm-2 mx-3'>
      <div className="row d-flex justify-content-center featured">
        <img src={image} alt="Description of image" className="img-fluid featured-img" />
      </div>
      <div className="text-center featured-head">{product.name}</div>
      <div className="text-center featured-para">
      {product.oprice}
      </div>
    </div>
  );
};

export default TopCategory;
