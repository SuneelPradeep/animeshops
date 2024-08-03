import React from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa';

const CartToToggle = ({amount,setIncrease,setDecrease}) => {
  return (
    <div className='cart-button'>
    <div className='amount-toggle' style={{display:'flex'}}>
        <button onClick={()=>setDecrease()}>  <FaMinus /> </button> 
         <h3 className='amount-style'>{amount} </h3>    
         <button onClick={()=>setIncrease()}> <FaPlus /> </button>     
           </div> 
     

    </div>
  )
}

export default CartToToggle