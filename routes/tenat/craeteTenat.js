
const e = require('express');

const createTenant = require('../../controller/tenatController/createTenantController');



const router = e.Router();



router.post('/create', createTenant)



module.exports = router;