//  create context 

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "../reducer/Productreducer";

//  provider // like delivery guy who he needs product from value passed in it and then he delivers who provides to us

//  consumer // us who uses the delivered product  useContext and context api is diff

 
const AppContext = createContext();

// const api = "http://localhost:5000/api/products/"; 
const api = process.env.REACT_APP_API_URL
console.log('the api is',api)

const initialValue = {
  isLoading :false,
  isError: false,
  products : [],
  featuredProducts : [],
  isSingleLoading : false,
  singleProduct : {}
}

const AppProvider = ( { children }) => {

  const [state,dispatch] = useReducer(reducer,initialValue);

  console.log('state is',state)
  const getProducts = async (url)=>{
    dispatch({type : 'API_LOADING'})
   try {
    const res = await axios.get(url);
   const products = await res.data;
   dispatch({type : 'SET_API_DATA',payload: products});

   } catch (error) {
     dispatch({type : 'API_ERROR'})
   }
  }

  const getSingleProduct = async (url)=>{
   ////console.log('the url for singleproduct in context',url);

    dispatch({type:'API_SINGLELOADING'})
    try {
      const res = await axios.get(url)
      
      const sproduct = await res.data;
    
      dispatch({type:'API_SINGLEPAYLOAD',payload: sproduct});
    } catch (error) {
      dispatch({type: 'API_SINGLEERROR'})
    }
  }
  
  useEffect(()=>{
   getProducts(api)
 
  },[])

  return  <AppContext.Provider value={{...state,getSingleProduct}} >{children} </AppContext.Provider>;
};

// use custom hook 

const useProductContext = ()=>{
    
    return useContext(AppContext);
}


export { AppProvider, AppContext ,useProductContext };


// now app.js is children as we wrapped it in index .js