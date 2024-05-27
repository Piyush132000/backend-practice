
const db = require('../../database/database');

const createTenantController = async (body)=>{
    try{
        const database = await db.query(`CREATE DATABASE ${String(body.tenantName).replace(/\s/g,"").toLowerCase()};`);
       const createTable = await db.query(`
        CREATE TABLE ${String(body.tenantName).replace(/\s/g,"").toLowerCase()}.users ( 
            id INT AUTO_INCREMENT,
            name VARCHAR(255),
            email VARCHAR(255),
            password VARCHAR(255),
            PRIMARY KEY (id)
        ) `)
        console.log(createTable);
        return {dataBaseCreate:true};
    }
    catch( error){
        console.log(error)
        return{ errorMessage: error.sqlMessage, dataBaseCreate:false}
    }

}






module.exports= { createTenantController:createTenantController}