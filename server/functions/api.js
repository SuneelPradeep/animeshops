const express = require('express')
const serverless = require('serverless-http')
const product_routes = require('../routes/products');
const app = express()
const router = express.Router()
router.use(require('cors')())

router.get('/',(req,res)=>{
    res.send("Welcome to AnimeShop API")
})


app.use('/.netlify/functions/api',router);
module.exports.handler = serverless(app)
