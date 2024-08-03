import React from 'react'
import { useState } from 'react'
import {Button} from '../styles/Button'
import {NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {FaCheck} from 'react-icons/fa';
import CartToToggle from './CartToToggle';
import { useCartContext } from '../context/cart_context'

const AddtoCart = ({product}) => {
    const {_id : id,colors,stock} = product
    const {AddToCart} = useCartContext();
    const [usecolor,setusecolor] = useState(colors[0] ? colors[0] : '');
    const [amount, setamount] = useState(1);

    const setDecrease = ()=>{
        amount > 1  ? setamount(amount-1) : setamount(1)
    }
    const setIncrease = ()=>{
        amount <stock   ? setamount(amount+1) : setamount(stock)
    }

  return (
    
    <Wrapper>
        
        <p> Colors :
        {colors.map((ele,i)=>{
            return(
         <button key={i}  style={{backgroundColor: ele}} onClick={()=> {setusecolor(ele)}} 
         className={usecolor === ele ? 'btnStyle active': 'btnStyle'}>
                  {usecolor ===ele ? <FaCheck color='white'/> : null}
                  </button>               
            )         
        })}
        </p>
        
        <CartToToggle amount={amount}  setIncrease={setIncrease} setDecrease={setDecrease}  />
        <NavLink to='/cart' onClick={()=>AddToCart(id,usecolor,amount,product)}>
       <Button> Add To Cart</Button>
        </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.colors p {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.btnStyle {
  width: 2rem;
  height: 2rem;
  background-color: #000;
  border-radius: 50%;
  margin-left: 1rem;
  border: none;
  outline: none;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
.active {
  opacity: 1;
}
.checkStyle {
  font-size: 1rem;
  color: #fff;
}
/* we can use it as a global one too  */
.amount-toggle {
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
  }
  .amount-style {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.btn};
  }
}
`;
export default AddtoCart