
 const cartReducer = (state,action)=>{
 
     switch(action.type){
     
      case "GET_ALL_CART_ITEMS":
        const {id,color,amount,product} = action.payload
        // let newCartItems = {
        //     id : product.id +color , amount, image : product.image[0].url,max : product.stock,
        //     name : product.name, price : product.price, color : color
        // }
        //console.log('REDUCER id color',id,color,amount,product,state.cart);
        let existingProduct = state.cart.find(
          (curItem) => curItem.id === id + (color ? color : '')
        );
        //console.log('REDUCER existingproduct is',existingProduct);
        ////console.log('MAIN -1th CHECK',id,color,amount,existingProduct);
        if(existingProduct){
            let updatedcart = (state.cart).map((ele)=>  {
              
              if(ele.id === id+color){
                let newAmount = ele.amount + amount;
                if(newAmount >= ele.max){
                  newAmount = ele.max
                }
                return {...ele, amount : newAmount}
              } 
              else return ele                         
            })
            //console.log('REDUCER  updatedcart',updatedcart);
            return {...state, cart : updatedcart}
        }
        else {
          
          let newCartItems = {
            id : product._id +(color ? color :'') , amount, image : product.image[0].url,max : product.stock,
            name : product.name, price : product.price, color : color
        }
          //console.log('REDUCER newcartitems',newCartItems);
          return {...state, cart : [...state.cart,newCartItems]};
        }
        

      case "REMOVE_ITEM":
        let newCart = state.cart.filter((ele)=> ele.id !== action.payload)
        return { ...state, cart : newCart}
      case "CLEAR_CART":
        
        // let {cart,total_items , total_amount  , shipping_fee }=action.payload
        //  return {...total_items,total_amount,shipping_fee,cart : []}
        return {...state,cart : []}

      case "INCR_DECR_QUANTITY" :
        
         const {id : ids,str} = action.payload 
         //console.log('reached reducer',ids ,str);
         ////console.log('MAIN 0TH CHECK',ids ,str);           
      if(str === '+'){
        let CartItem = state.cart.map((ele)=>{
          if(ele.id === ids){
           let amountt = ele.amount + 1; 
           if(amountt >= ele.max )     amountt = ele.max
 
          
            return {...ele, amount :amountt}        
          } 
          else return ele
         })
         //////console.log('MAIN 1ST CHECK',CartItem); 
         
        return {...state , cart : CartItem}
      }
      else{
        let CartItem = state.cart.map((ele)=>{
          if(ele.id === ids){
           let amountt= ele.amount - 1;
            if(amountt<=1)  amountt = 1;   
            return {...ele, amount :amountt}        
          } 
          else return ele
         })
         //////console.log('MAIN 2ndT CHECK',CartItem); 
        return {...state , cart : CartItem}
      }

    case 'UPDATE_TOTAL_ITEMS_AND_PRICE':
   //my trick
    // let newprice =0; let newamount =0;
    //  let  totalitem =  (action.payload).map((ele)=> {     
    //   newamount = newamount + ele.amount;
    //   return newamount
    //  })
     
    //  let totalprice = (action.payload).map((ele)=> {     
    //   newprice = newprice + (ele.price) * ele.amount;
    //   return newprice
    //  })    
    //   return {...state, total_items : newamount, total_amount : newprice }

    
    // let newPrice = state.cart.reduce((init,ele)=>{   // comma 0 is added coz of init value 0 
    //   let {price,amount} = ele;
    //   init += price*amount
    //   return init;
    // },0)
    // let newItems = state.cart.reduce((init,ele)=>{
    //   let {amount} = ele
    //   init += amount;
    //   return init;
    // },0)
    // return {...state, total_items : newItems, total_amount : newPrice}

    //ANOTHER EASY REDUCE METHOD IS accummaltorTHE 

    ////console.log('CART inside is IN REDUCER IS',state.cart);
    if(state.cart !==null){
      let { total_items, total_amount } = state.cart.reduce(
        (accum, curElem) => {
          let { price, amount } = curElem;
  
          accum.total_items += amount;
          accum.total_amount += price * amount;
  
          return accum;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );

      return {
        ...state,
        total_items,
        total_amount,
      };
    }
    
    return state;

      default : 
      return {...state};  
     }
}

export default cartReducer;