const { Router } = require('express');
const { addOrder } = require('../controllers/order.controller');

const router = Router();

router.post('/', addOrder);

module.exports = router;