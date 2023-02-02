const { Router } = require('express');
//importo el controlador
const { productInCar } = require('../controllers/productInCar.controller');

const router = Router();

router.post('/', productInCar);

module.exports = router;