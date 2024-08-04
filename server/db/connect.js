const mongoose = require('mongoose')

// const url = 
// "mongodb+srv://Suneel:SuperSolomon@mydata.jh422jz.mongodb.net/?retryWrites=true&w=majority"

const connectDB = ()=>{
   console.log('reached here,connect DB',process.env.MONGODB_URL)
    return mongoose.connect(process.env.MONGODB_URL)
}


module.exports = connectDB