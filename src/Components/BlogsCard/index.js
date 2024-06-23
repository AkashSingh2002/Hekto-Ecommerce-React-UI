import React from "react";
import './index.css'

const BlogsCard = ({product}) => {
  var image = require('../../Assets/Images/'+product.img)
  return (
    <div className='col-6 col-sm-3 mx-3'>
      <div className="row d-flex justify-content-center featured">
        <img src={image} className="img-fluid featured-img" />
      </div>
      <div className="text-center featured-head my-3">{product.head}</div>
      <div className="text-center featured-para my-3">
      {product.para}
      <br />
      </div>
    </div>
  );
};

export default BlogsCard;
