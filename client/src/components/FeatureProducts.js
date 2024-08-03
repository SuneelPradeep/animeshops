import React from 'react'
import { useProductContext } from '../context/productcontext'
import styled from 'styled-components'
import Product from './Product'

const FeatureProducts = () => {

 const {isLoading, featuredProducts} = useProductContext()
  
 
  
if(isLoading){
    <div> ........Loading </div>
}
return (
    <Wrapper >
        <div  > 
            <div className='container'>
                <div className='intro-data'>
                    Check Now
                </div>
                <div className='common-header'> Our Featured Potraits </div>
                <div className='grid grid-three-column'>
                    {
                    featuredProducts.map((item,id)=>(
                        <Product key={id} data={item} />
                    ))
                }
                </div>
            </div>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  /* transition: transform 1s;
    transform: translateY(0); */
    transition-timing-function: ease-in-out;
  
  transform: translateY(20px);
  /* transition: opacity 0.8s ease, transform 0.8s ease; */
  .animate {
    animation: animate-rocket 5s;
      opacity: 1;
  transform: translateY(0) scale(1);
  transition: opacity 0.8s ease, transform 0.8s ease;
    }
   /* @keyframes animate-rocket {
      0%{
        transform: scale(1) rotate(10deg);
      }
      20%{
        transform: scale(1.5) rotate(20deg);
      }
      30%{
        transform: scale(2) rotate(50deg);
      }
      100%{
        transform: scale(20) translate3d(100vw, -100vh,0 ) rotate(0);
      }
    }  */

  .container {
    max-width: 120rem;
  }
  .intro-data{
    font-size: 2.3rem;
    margin-bottom: 0.5rem;

  }
  .common-header{
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .card {
    background-color: #fff;
    border-radius: 1rem;
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;
export default FeatureProducts