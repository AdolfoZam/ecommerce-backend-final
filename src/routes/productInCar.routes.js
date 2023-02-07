const { Router } = require('express');
//importo el controlador
const { productInCar, getAllProductInCar } = require('../controllers/productInCar.controller');

/**
 * @openapi
 * /api/v1/productsInCar:
 *   post:
 *     summary: add a new product to car
 *     tags: [Products in Car]
 *     requestBody:
 *       description: Required field into body request to add products
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/add'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product add
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: error add product
 */

const router = Router();

router.get('/', getAllProductInCar);
router.post('/', productInCar);

module.exports = router;