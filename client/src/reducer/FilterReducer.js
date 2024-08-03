
const  FilterReducer = (state,action)=>{
 
     switch(action.type){
        case "LOAD_FILTER_PRODUCTS" : 
        let pricearr = (action.payload).map((e)=> e.price)
               // ////console.log('the price is',price);
             //   ////console.log('math apply',Math.max.apply(null,price));      // to not get -Infinity we should keep first value as null or Math or undefined, anything so that it takes it and thinks of it as first and runs according to it by applying one by one
            // 1st way 
            // second is 
           // let hey = price.reduce((init,ele)=> Math.max(init,ele),0)     // have to use initial vlaue so
           // ////console.log('the hey is ',hey);
           //3rd 
           //////console.log('sus', Math.max(...price));
           let maxPriceval = Math.max(...pricearr);
             return{ ...state ,filter_products :[...action.payload] ,
                all_products : [...action.payload] ,filters: {...state.filters, maxPrice: maxPriceval,price : maxPriceval}}
        case "LOAD_GRID_VIEW": 
        return {...state, grid_view : true}
        case "TOGGLE_GRID_VIEW":
         return {...state,grid_view : !action.payload}
        case  "SORT_VALUES":
            return { ...state, sort_value : action.payload}
        case "LOAD_DATA_AFTER_SORT":
            let newsortdata;
            const {filter_products,sort_value} = state;
            let tempdata = [...filter_products]
            const sortfunction = (a,b)=>{
                switch(sort_value){
                    case 'low':
                        return  a.price - b.price;                        
                    case 'high' :
                        return  b.price - a.price;                        
                  case 'a-z':
                     return a.name.localeCompare(b.name) ;
                  case 'z-a':
                    return b.name.localeCompare(a.name);
                    default : 
                    return a.price- b.price;
            }}
           
             newsortdata = tempdata.sort(sortfunction)
            
            return {...state, filter_products: newsortdata}
        
            case "FILTER_DATA":
               const {name,value} = action.payload; 
               return {...state, filters : {...state.filters,[name]: value}}

            case "LOAD_DATA_AFTER_FILTERS":
               
                const {all_products} = state
                let tempdatas = [...all_products]
                
                const {text,category,company,colors,price} = state.filters
                if(text){
                    tempdatas = tempdatas.filter((ele)=>{
                        return ele.name.toLowerCase().includes(text)     // startsWith(text)
                    })
                }
               if(category !=='All'){                  
                        tempdatas= tempdatas.filter((ele)=> ele.category === category)
                    } 
                
                if(company !=='All'){
                 tempdatas = tempdatas.filter((ele)=> ele.company === company)
                }
                if(colors !=='All'){                  
                     tempdatas = tempdatas.filter((ele)=> (ele.colors).includes(colors))
                }
                if(price ===0){
                    tempdatas =  tempdatas.filter((ele)=> ele.price === price)
                }
                else {
                    tempdatas =  tempdatas.filter((ele)=> ele.price <= price)
                }
                ////console.log('final',{...state, filter_products: tempdatas});
               
                
                
                return {...state, filter_products: tempdatas}
            case "CLEAR_FILTER" :
                ////console.log('intial',action.payload);
                let data = action.payload;
                data = {...data, price : state.filters.maxPrice,  maxPrice :state.filters.maxPrice}
                return {...state, filters: data}
                return {...state, filters : { text: '',
                company :'All',
                category : 'All',
                colors: 'All',
                maxPrice : state.filters.maxPrice,
                price : state.filters.maxPrice,
                minPrice : state.filters.minPrice}}
            default: 
        return state;
     }
   
}


export default FilterReducer;