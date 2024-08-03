import React from 'react'
import { NavLink } from 'react-router-dom';
import CurrencyFormat from '../helpers/CurrencyFormat';

const Product = ({data}) => {
    
    const {_id: id,name,price,category,image,aimage} = data;
    ////console.log('the id in productjs is',id,data,aimage);
         // befoer it was  <NavLink to={`/singleproduct/${id}`}>
  return ( 
    <NavLink to={`/singleproduct/:${id}`}>
    <div className='card'>
        <figure>
            <img src={aimage} alt={name}  />
            <figcaption className='caption'>{category}</figcaption>
        </figure>
        <div className='card-data'>
            <div className='card-data-flex'>
                <h3>{name} </h3>
                <p className='card-data--price' >{ <CurrencyFormat price ={price} />}</p>
            </div>
        </div>
        </div>
        </NavLink>
  )
}

export default Product