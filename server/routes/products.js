const express = require('express')
const router = express.Router()

const {getAllProducts,getAllProductsTest,getSingleProducts} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/test').get(getAllProductsTest)  

//router.route('/singleproduct').get(getSingleProducts)




module.exports = router;

//1 
   //   "https://i.pinimg.com/750x/c5/b7/4f/c5b74f11642ef1876d9ac1865685ea6e.jpg",
    //     "https://i.pinimg.com/750x/f2/88/bd/f288bd6d12cd704cf5f349fbaac55629.jpg",
    //     "https://i.pinimg.com/750x/4d/ea/4d/4dea4db93c2c2b8f5625230e55d2c8f1.jpg"],

//2
 //  "https://i.pinimg.com/736x/7e/da/5b/7eda5bec7910618d10c7031de95dd5df.jpg",
        //  "https://i.pinimg.com/736x/e8/5d/34/e85d34b3a08852f40ab2e2211880bdc0.jpg",
        //  "https://i.pinimg.com/736x/7c/8e/5c/7c8e5c6f06d5af94a4f3f5f33a0eafed.jpg"],

//3

 // "https://i.pinimg.com/736x/b7/f3/2b/b7f32b55add855a56cd108833f233589.jpg",
        // "https://i.pinimg.com/736x/ae/c2/1d/aec21d1bb47793f616f216d1d25d08a6.jpg",
        // "https://i.pinimg.com/736x/8f/f7/da/8ff7da4cd8942d2172ee86c636ffcf26.jpg" ],


//4
 //  "https://i.pinimg.com/564x/7b/d6/a8/7bd6a89a7765a39dddcbdefb5f9187a0.jpg",
        //  "https://i.pinimg.com/564x/f9/73/7a/f9737abd4430925fa1f5c9742f19eaae.jpg",
        //  "https://i.pinimg.com/564x/26/ba/43/26ba430c1590614452be297b0d2878a5.jpg"],



//5

   //  "https://i.pinimg.com/736x/d3/ac/6d/d3ac6dc9e403abba8d8d5346e987890f.jpg",
        //  "https://wallpapers.com/images/featured/h172ae39z58invy1.jpg",
        //  "https://www.pixelstalk.net/wp-content/uploads/images6/Cowboy-Bebop-Wallpaper-HD-Free-download.jpg" ]






 //6
 //"https://c4.wallpaperflare.com/wallpaper/304/507/770/league-of-legends-arcane-jinx-league-of-legends-hd-wallpaper-preview.jpg",
        
       // "https://w0.peakpx.com/wallpaper/386/717/HD-wallpaper-jinx-and-vi-league-of-legends-arcane-8k.jpg" ]


//7
// "https://c4.wallpaperflare.com/wallpaper/407/125/82/anime-hunter-x-hunter-wallpaper-preview.jpg",
//         "https://c4.wallpaperflare.com/wallpaper/410/178/349/anime-hunter-x-hunter-gon-css-killua-zoldyck-hd-wallpaper-preview.jpg",
//         "https://wallpaperaccess.com/full/1078967.jpg"]
