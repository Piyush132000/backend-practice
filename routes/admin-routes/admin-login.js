const express = require('express');


const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    console.log("Middleware working 2")
    res.status(200)
    res.statusCode = 200;
    res.send(`<form method="POST" action="/user/product"><input type="text" name="message" /><button>Add Product</button></form>  `)
  })
  


  module.exports = router;

