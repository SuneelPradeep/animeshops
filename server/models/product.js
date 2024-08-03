const mongoose = require('mongoose')
const {Schema} = mongoose;
const productSchema = mongoose.Schema({
    
    name: {
        type:String,
        required: true
    },
    price : {
        type: Number,
        required: [true,"Price is required"],
    },
    featured : {
        type: Boolean,
        default : false
    },
    
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company : {
        type: String,
       // enum : {
           // values : ["Demon Slayer","Dragon Ball Super","Naruto","FullMetal Alchemist: BrotherHood","FMAB","DBS","DBZ",
           //     "Attack of the Titan",  "Hunter x Hunter","Netflix","Movies","Arcane","Death Note","Legend of Korra","Capeta","Dragon Ball",
           //    "Dragon Ball Z","Kaizetsu Ren","Detective Conan" ,"Avatar:The Last Air Bender","Cowboy Beebop"],
       // message: `{VALUE} is not supported`,    // we are talking about above field when user enters
       // }
    },
    description : {
        type:String,
   
        },
    aimage : {
        type: String
    },
    category: {
        type : String
    },
    stock : {
         type: Number
    },
    reviews : {
        type : Number
    },
    stars : {
          type : Number
    },
    image : {
        type : Array
    },
    colors : {
        type: Array
    },
   
}, );


// in sql its called table we call here collection 


//const Base  = mongoose.model('Base', mongoose.Schema({}, baseOptions));
 const ProductsModel = mongoose.model("products", productSchema); 
//const Productsmodel =Base.discriminator('allproductsbasicinfo', productSchema);
//const singleproductModel = Base.discriminator('singleproduct',singleProductSchema)


module.exports =  ProductsModel ;
