import React from 'react'
import {BsFillGridFill,BsList} from 'react-icons/bs';
import { useFilterContext } from '../context/filter_context';
import styled from 'styled-components';

const Sort = () => {

  const {toggleGridView,filter_products,grid_view,sorTValues } = useFilterContext()
 // const [selected,setselected] = useState('low');
 const HandleSort = (e)=>{
     sorTValues (e.target.value);
 }
  return (
    <Wrapper  className='sort-section'>
      <div className='sorting-list--grid'>
      <button className={`sort-btn ${!grid_view  ? 'active' : ''}`}> <BsList onClick={()=>{toggleGridView(true)}} alt='list view'  className='icon' />
        </button>
        <button className={`sort-btn ${grid_view ? 'active' : ''}`}>
          <BsFillGridFill onClick={()=>{toggleGridView(false)}}  className='icon' alt='grid view' /></button>
      </div>
   
    <div className='product-data'>
     <p>      {filter_products.length} products available </p> 
    </div>
    <div className='sort-selection'>
      <form action='#'>

      <label htmlFor='sort'></label>
        <select name='sort' className='sort-selection--style' id='sort' onChange={HandleSort}>
          <option value='low' className='sort-select--option'> <p>Price(Lowest) </p></option>
          <option value="#" disabled />
          <option value='high' className='sort-select--option'> <p>Price(Highest) </p> </option>
          <option value="#" disabled />
          <option value='a-z' className='sort-select--option'> <p>Price(A-Z) </p> </option>
          <option value="#" disabled />
          <option value='z-a' className='sort-select--option'><p> Price(Z-A)</p> </option>
          
        </select>
      </form>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      color: #fff;
      background-color: black;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
export default Sort