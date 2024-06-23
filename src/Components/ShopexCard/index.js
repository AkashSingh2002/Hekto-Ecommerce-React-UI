import React from 'react'
import './index.css'

export const ShopexCard = ({product}) => {
  var image = require('../../Assets/Images/'+product.img)
  return (
    
        <div className='col-6 col-sm-3'>
            <div className='d-flex justify-content-center'>
            <img src={image} className="img-fluid shopex"/></div>
            <div className='text-center head'>{product.name}</div>
            <div className='text-center para'>{product.para}</div>
        </div>
  )
}
