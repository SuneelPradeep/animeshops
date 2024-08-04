const express = require('express')
const serverless = require('serverless-http')
const product_routes = require("../routes/products")
const connectDB = require('../db/connect')

const app = express()
app.use(express.json())
app.use(require('cors')())
const PORT = process.env.PORT

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}`);
    next();
  });
const start = async()=>{
    try {
        await connectDB(); 
        console.log('db connected in serverless')
        app.listen(PORT, (req,res)=>{
          console.log( `yes connected to DB`) 
        })
    } catch (error) {
        console.log(error) ;
    }
}

start();
app.use('/.netlify/functions/products',product_routes)
module.exports.handler = serverless(app)

// export default async (req, context) => {
//     // const requestKey = req.headers.get("X-API-Key");
//     // const apiKey = Netlify.env.get("MY_API_KEY");
  
//     // if (requestKey === apiKey) {
//       await connectDB()
//       return new Response(product_routes);
//     // }
  
//     // return new Response("Sorry, no access for you.", { status: 401 });
//   };