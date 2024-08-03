import styled from "styled-components";
import { useProductContext } from "./context/productcontext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageNavigation } from "./components/PageNavigation";
import {Container} from './styles/Container';
import MyImage from './components/MyImage'
import CurrencyFormat from "./helpers/CurrencyFormat";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import {GlobalStyle } from './GlobalStyle'
import Star from "./components/Star";
import AddtoCart from "./components/AddtoCart";

// const API = "http://localhost:5000/api/products/"; //
const API = process.env.REACT_APP_API_URL
const SingleProduct= ()=>{

    const {id}  = useParams();
  ////console.log('the _id in singleproduct is ', id);
   const {isSingleLoading,getSingleProduct,singleProduct} = useProductContext();
   const {id: alias,image,rating,stars, reviews,name,company, description,category,price,stock} = singleProduct;
   //console.log('singleProduct is',singleProduct,id ,image,rating,stars);
 
  
 useEffect(()=>{

      // getSingleProduct(`${API}?id=${id}`)
 if(id !==undefined || id !==null) 
      {
      let ids = id.replace(':','') 
      getSingleProduct(`${API}?_id=${ids}`) 
      }
  },[])
 
   if(isSingleLoading){
    return <div className="page_loading"
     style={{alignItems:'center',fontSize:'3.2rem',justifyContent:'center',
     display:'flex'}}> Loading....</div>
   }

  return ( 
     <Wrapper>
    <PageNavigation name={name}     />
    <Container > 
      <div className="grid grid-two-column">
        <div className="product_images">
             <MyImage img = {image} /> 
        </div>
        <div className="product-data">
             <h2> {name} </h2>
             <Star star={stars} review={reviews} />
             
             <p className="product-data-price">
              MRP :<del> <CurrencyFormat price={price +250000} /> </del>
             </p>
             <p className="product-data-price product-data-real-price">
              Deal of the Day : <CurrencyFormat price={price} />
             </p>
             <p>{description } </p>
             <div className="product-data-warranty">
               <div className="product-warranty-data" >
                 <TbTruckDelivery className="warranty-icon"/>
                 <p>Free Delivery </p>
               </div>
               <div className="product-warranty-data" >
                 <TbReplace className="warranty-icon"/>
                 <p>30 Days Replacement </p>
               </div>
               <div className="product-warranty-data"  >
                 <TbTruckDelivery className="warranty-icon"/>
                 <p> Delivered </p>
               </div>
               <div className="product-warranty-data" >
                 <MdSecurity className="warranty-icon"/>
                 <p>2 Year warranty  </p>
               </div>
              </div>
              <div className="product-data-info">
                    <p> Available : <span>{stock >0 ? "In Stock": "Not in Stock"}</span></p>
                    <p> ID : <span> {id}</span></p>
                    <p> Anime: <span>{company}</span></p>
                   
              </div>
              <hr />
              {stock >0 && <AddtoCart product={singleProduct} /> }
        </div>
      </div>
    </Container>
    
    </Wrapper>
    )
    ;
}


const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;
export default SingleProduct;
