const e = require("express");
const userData = require("../../controller/userDataController");
const db = require('../../database/database')
const {replace} = require('../../utils/utils');

const router = e.Router();

// router.post('/product',(req, res, next)=>{
//     console.log(req.body)
//     res.status(200)
//     res.statusCode = 200;
//     res.send(`<h1>${JSON.stringify(req.body)} </h1>`)
//   })


router.post('/register', (req, res) => {
  const data = req.body;
  console.log(data);
 
  if (data && Object.keys(data).length > 0) {
    const { name, email, password , tenantName} = data;
    db.query(`
    INSERT INTO ${replace(tenantName)}.users (name, email, password) VALUES (?, ?, ?)`, [name, email, password])
      .then(response => {
        return res.status(200).send({
          message: 'User Registered Successfully!',
          data: {
            id: response[0].insertId, 
            name,
            email,
            password
          },
          error: [],
          response: 'USER_REGISTERED'
        });
      })
      .catch(error => {
        console.error(error);
        return res.status(500).send({
          message: 'Something went wrong',
          error: error.message
        });
      });
  } else {
    return res.status(204).send({
      message: 'No data Found!'
    });
  }
});


router.get('/user-list',userData)


  module.exports = router;