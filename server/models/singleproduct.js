const mongoose = require('mongoose')
const {Schema} = mongoose;
const productSchema = require('./product')
// let Productid = ProductsModel.ObjectId
const singleProductSchema = mongoose.Schema({

    name: {
        type:String,
        required: true
    },
    price : {
        type: Number,
        required: [true,"Price is required"],
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
    
    },
    description : {
        type:String,
   
        },
    image : {
        type: Array
    },
    colors : {
        type: Array
    }
})

const baseOptions = {
    discriminatorKey: '__type',
    collection: 'Animes'
};

const singleProductModel =  mongoose.model("singleproducts",singleProductSchema)

module.exports= singleProductModel;
//const Base  = mongoose.model('Base', new Schema({}, baseOptions));
//const productModel =Base.discriminator('allproductsbasicinfo', productSchema);
//module.exports = mongoose.model("animesingleproduct",singleProductSchema,"animes");

// module.exports = mongoose.model("Anime", productSchema); 