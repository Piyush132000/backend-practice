const express = require("express");
const fs = require('fs');

const userRouter = express.Router();


userRouter.get("/get-product",(req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods","GET")
    const data = JSON.parse(fs.readFileSync('data.json'));
      res.send({
        status:"true",
        statusCode:200,
        data: data
      })
  });

  module.exports = userRouter;