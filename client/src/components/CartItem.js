import React from 'react'
import { FaTrash } from 'react-icons/fa'
import CurrencyFormat from '../helpers/CurrencyFormat'
import CartToToggle from './CartToToggle'
import { useCartContext } from '../context/cart_context'


const CartItem = ({id,image,color,amount,price,name}) => {
   //console.log('id in cartitem',id,image,color);
   const {removeItem,IncDecQuantity} = useCartContext();
  const setDecrease = (id,str)=>{
    IncDecQuantity(id,str)
   // amount > 1  ? setamount(amount-1) : setamount(1)
}
const setIncrease = (id,str)=>{
  //console.log('reached increase',id,str);
  IncDecQuantity(id,str)
   // amount <stock   ? setamount(amount+1) : setamount(stock)
}
  return (
    <div className='cart_heading grid grid-five-column'>
       <div className='cart-image--name'>
     <div><figure> <img src={image} alt={name} /></figure></div>
     <div>
     <p> {name}</p>
     <div className='color-div'>  
        <p>color :</p>
        
     <div className='color-style' style={{backgroundColor : `${color}`,color:color}}> </div>
       </div></div>
     </div>
     
      <div className='cart-hide'> <p> <CurrencyFormat  price={price} /></p></div>
      <CartToToggle amount={amount} setIncrease={()=>setIncrease(id,'+')} setDecrease={()=>setDecrease(id,'-')}  />
      <div className='cart-hide'> 
       <p><CurrencyFormat price={price*amount}  /></p>
      </div>
      <div><FaTrash className='remove_icon' onClick={()=>removeItem(id)}/></div>



       </div>
  )
}

export default CartItem