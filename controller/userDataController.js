const getUserdata = require("../services/getUserlist");



const userData = async( req, res)=>{
    try {
        const queryPrams = req.query.search;
        const parma = req.param.tenant
        let status = 200;
        let data = await getUserdata(queryPrams, parma);
        if(data.length == 0){
            status= 204
        }
        res.status(status).json({
            data: data,
            message:'USER_ LIST',
            error:[],
            status:true
        })

    }
    catch(error) {
        res.status(500).json({
            data: [],
            message:'Something went wrong!',
            error:[],
            status:true
        })
    }

}

module.exports = userData;