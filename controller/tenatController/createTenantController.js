
const { createTenantController} = require('../../services/createTenat/createTenantService');


const createTenant = async (req, res)=>{
    const body = req.body;
    console.log(body)
    if(body.tenantName){
     const data = await createTenantController(body);
     if(!data.dataBaseCreate){
        res.status(404).json({message: "Tenant already Exists."});
     }else {
        res.status(200).json({
            message: "Tenant Created Successfully",
            status:true,
            response:'DATABASE CREATED'
        })
     }

    }
    

}


module.exports = createTenant