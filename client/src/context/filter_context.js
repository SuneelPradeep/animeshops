
import { useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react'
import { useProductContext } from './productcontext';
import { useEffect } from 'react';
import FilterReducer from '../reducer/FilterReducer';

const FilterContext= createContext();

 const initialState = {
   filter_products : [],
   all_products : [],
   grid_view : true,
   sort_value : "low",
   filters : {
    text: '',
    company :'All',
    category : 'All',
    colors: 'All',
    maxPrice : 0,
    price : 0,
    minPrice : 0
   }
 }

 const FilterContextProvider = ({children})=>{

    const { products } = useProductContext();
    const [state,dispatch] = useReducer(FilterReducer,initialState);
 
    const setGridView = ()=>{
        return dispatch({type: 'LOAD_GRID_VIEW'})
    }
   const toggleGridView = (viewtype)=>{
    return dispatch({type:"TOGGLE_GRID_VIEW", payload: viewtype})
   }
  const sorTValues = (val)=>{
    dispatch({type:"SORT_VALUES",payload: val})
  }
 const updatedFilterValue = (e)=>{
    let name=e.target.name ;
    let value = e.target.value;
     dispatch({type: "FILTER_DATA" , payload: {name,value}})
 }
 const clearFilter = ()=>{
    dispatch({type : "CLEAR_FILTER",payload: initialState.filters})
 }
   useEffect(()=>{
    dispatch({type : "LOAD_DATA_AFTER_FILTERS"})
     dispatch({type: "LOAD_DATA_AFTER_SORT"})
   },[products,state.sort_value,state.filters])

    useEffect(()=>{
       dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products})
     },[products])

    return(
        <FilterContext.Provider value={{...state,setGridView,toggleGridView,
        sorTValues,updatedFilterValue,clearFilter }}  >
          {children}
        </FilterContext.Provider>
    )
}
 const useFilterContext = ()=>{
   return useContext(FilterContext)
}

export {useFilterContext,FilterContextProvider};
