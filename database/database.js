
const mysql = require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
}).promise()


module.exports = pool;

