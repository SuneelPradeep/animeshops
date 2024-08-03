const mongoose = require('mongoose')

// const url = 
// "mongodb+srv://Suneel:SuperSolomon@mydata.jh422jz.mongodb.net/?retryWrites=true&w=majority"

const connectDB = ()=>{
   // ////console.log('connect DB')
    return mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser : true,
        useUnifiedTopology: true, 
    })
}


module.exports = connectDB