
const db = require('../database/database')


 const getUserdata = async(query, tenant)=>{
    console.log(query)
    let statement ="" 
    if(query){
        statement = `Select * from ${tenant}.users WHERE name LIKE  '%${query}%' OR email LIKE '%${query}%'`;

    } else {
        statement = `Select * from ${tenant}.users`;
    }
    const response =  await db.query(statement);
    return Array.from(response[0]).map((data)=> {return  {name: data.name , email: data.email, id: data.id}});
    }
     
module.exports = getUserdata;