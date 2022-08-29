const express = require("express");
const  bodyParser = require("body-parser");


// admin routes 
const adminRoutes = require('./admin-routes/admin');


// user routes
const userRoutes = require('./user-routes/shop');


const app = express();


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR");
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  }
  if (req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
 }); 

 
app.use(bodyParser.json())

app.use('/admin',adminRoutes);
app.use('/user',userRoutes);



app.listen(3000);
