const { Router } = require('express');
const { addProductsBuy } = require('../controllers/productInOrder.controller');

const router = Router();

router.post('/', addProductsBuy);

module.exports = router;