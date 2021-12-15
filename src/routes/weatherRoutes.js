const {Router} = require('express');
const {cities} = require('../controlers/weatherControlers');


const router = Router();

router.get('/cities/:city',cities);


module.exports = router;