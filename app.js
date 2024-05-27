const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();


const adminRoutes = require('./routes/admin-routes/admin-login');
const userRoutes = require('./routes/user-routes/user-login');
const tenatRouter = require('./routes/tenat/craeteTenat');


app.use(cors())

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:42583', // Update this to your client's origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type']
// }));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// app.use( async(req, res, next)=>{

//   console

//     // database.query(`create table if not exists employee_data (
//     //   id int primary key auto_increment,
//     //   name varchar(255) not null,
//     //   email varchar(255) not null,
//     //   password varchar(8) not null
//     // )`).then(response=>{
//     //   console.log(req.body);
//     //   next();
//     // }).catch(error=>{
//     //   console.log(error)
//     // })
   
// })


app.use('/admin', adminRoutes)

app.use('/user', userRoutes )

app.use('/tenant', tenatRouter)


// app.use((req, res)=>{
//   res.status(404).send(`<h1>404 Error Page</h1> `)
// })


app.listen(3000)