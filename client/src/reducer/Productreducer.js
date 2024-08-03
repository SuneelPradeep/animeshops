
const ProductReducer = (state,action)=>{

    switch (action.type) {
        case "API_LOADING":
            return {
                ...state,
                isLoading : true
            };
           

        case "SET_API_DATA":
            const featuredata = action.payload.filter((item)=> item.featured === true );
                return {
                    ...state,
                   products : action.payload,
                   featuredProducts : featuredata
                };
                
        case "API_ERROR":
            return {
                ...state,
                isError :true,
                isLoading: true
            };
            
            case "API_SINGLELOADING":
            return {
                ...state,
                isSingleLoading : true
            };
            case "API_SINGLEERROR":
                return {
                    ...state,
                    isError :true,
                    isSingleLoading: true
                };
            
            case "API_SINGLEPAYLOAD":
                 return {
                        ...state,
                        singleProduct : action.payload,
                        isSingleLoading :false,
                    };
        default:
            return state;
            
            
    }
}

export default ProductReducer