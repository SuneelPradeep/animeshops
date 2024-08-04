import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import {FaCheck } from 'react-icons/fa'
import CurrencyFormat from '../helpers/CurrencyFormat'
import { Button } from '../styles/Button'

const FilterColumn = () => {

   const {all_products,clearFilter,filters : {text,category,colors,maxPrice,price,minPrice},updatedFilterValue} = useFilterContext();

 
   const getCategoryData = (data,getspecific)=>{
     let newData = data?.map((ele)=>ele[getspecific] )    // used ele [] instead of ele.getspific coz its a string  
     if(getspecific==='colors'){
      newData = newData.flat()
     }        
     let newVal = ["All",...new Set(newData)]
   
     return newVal;
   }

   const CategoryData = getCategoryData(all_products,"category");
  const  ColorsData = getCategoryData(all_products,"colors")
   const companyData = getCategoryData(all_products,"company")
 
 

  return (
    <Wrapper>
      <div className='filter-search'>
        <form onSubmit={(e)=> e.preventDefault()}>
          <input type='text' name='text' value={text} placeholder='SEARCH' onChange={updatedFilterValue} />
         </form></div>
          <div className='filter-category'>        
          <h3>Category</h3>
          <div >
            { CategoryData.map((ele,id)=> {
            return (
              <button key={id} name='category' type='category'  className={ele === category ? 'active': " "}
              onClick={updatedFilterValue} value={ele}> 
              {ele} </button>
            )
            }) }
            </div>
               
          </div>
          <div className='filter-company--select'>
            <h3>Company</h3>
            <div >
               
               <select onClick={updatedFilterValue} name='company' >
               {companyData.map((ele,id)=>{
                return (
                  <option key={id} value={ele} ><p>{ele}</p></option> 
                )
               })}
                
              </select>
              </div>
              </div>
              <div className='filter-colors colors'>          
              <h3>Colors</h3>
              <div className='filter-color-style'>            
               {ColorsData.map((ele,id)=>{
                if(ele ==='All') {
                  return (
                    <button  className='color-all--style'                   
                      onClick={updatedFilterValue} name='colors'
                      key={id} value={ele} > All </button>
                  )
                }
                return (
                  <button  className={`btnStyle ${colors ===ele ? 'active' : ''}`} style={{backgroundColor : `${ele}`}} onClick={updatedFilterValue} name='colors'
                    key={id} value={ele} >{colors ===ele ? <FaCheck color='white'/> : null}</button>
                )
               })}
                
              </div>                      
              </div>
              <div className='filter-price'>
                <h3> Price</h3>
                <p><CurrencyFormat price={price} /></p>             
                  <input type='range' style={{maxWidth:'none',padding:'1px',border:'none',textTransform:'none',boxShadow:'none'}} name='price' min={minPrice} max={maxPrice} onChange={updatedFilterValue} value={price}  />
                
              </div>
              <div className='filter-clear'>
                <Button className='btn' type='button' onClick={clearFilter} > Clear Filters </Button>
              </div>
      
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
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
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterColumn