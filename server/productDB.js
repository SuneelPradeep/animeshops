const connectDB = require('./db/connect')
require('dotenv').config();
const ProductsModel  = require('./models/product')
const singleProductSchema = require('./models/singleproduct')
const productjson = require('./product.json')
const singleproductjson = require('./singleproduct.json')


const start = async () => {
  try{
    await connectDB(process.env.MONGODB_URL)
    await ProductsModel.deleteMany()
   let newproduct =  await ProductsModel.create(productjson)
    ////console.log('success added of product');
   // await singleProductSchema.deleteMany()
   // await singleProductSchema.create(singleproductjson)
   //  singleProductSchema.findOne({_id: userId })
  //  .then(user => {
  //     res.json(user); 
  //  });
  // newproduct = await Destination.create(newDestination);
  // ////console.log('the findone is ',);
  // //  
  //   let result = await singleProductSchema.findByIdAndUpdate(
  //     id,
  //     {
  //       $push: { id: newproduct._id }
  //     },
  //     { new: true }
  //   );
  //   ////console.log('success added of 2nd singleproudct');
  }
  catch(error){
    ////console.log(error);
  }
}


start()
