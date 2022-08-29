const express = require('express');
const fs = require('fs');

const router = express.Router();


router.post("/post-product",(req, res, next) => {
    const payload  =  req.body;
    const data = JSON.parse(fs.readFileSync("data.json"));
    data.push(payload);
    fs.writeFile("data.json", JSON.stringify(data), (error)=>{
      if(error)
      {
        res.sendStatus(409);
        res.end();
      }
  
      })
  
    res.send({
      status:true,
      data:"Product Updated"
    })
    res.end();
  
  });




module.exports = router;