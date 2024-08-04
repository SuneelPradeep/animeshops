const express = require('express');
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config()

 
const PORT = process.env.PORT
const product_routes = require('./routes/products');
var cors = require('cors')

app.use(cors())

app.get('/', (req,res)=>{

    res.send('Welcome to the page API')
})

// middleware to set routes 

app.use('/api/products', product_routes)

//app.use('/api/singleproduct', product_routes)

const start = async()=>{
    try {
        await connectDB(); 
        
        app.listen(PORT, (req,res)=>{
           //console.log( `yes connected to Port ${PORT}`) 
        })
    } catch (error) {
        ////console.log(error) ;
    }
}

start();