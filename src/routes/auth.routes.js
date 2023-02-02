//registro y loguin
const { Router } = require('express');
const { register, login } = require('../controllers/auth.controller');
// const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

/**
* @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: Create un new user into application
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
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
 *                   example: User Created
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Validation error
 * /api/v1/auth/login:
 *   post:
 *     summary: login an existing user into the app
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to login a existing user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/loginResponse"
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found / something went wrong / not password or email provided
 */


//router get/post/create/put, delete
router.post('/register', register);
router.post("/login", login);

module.exports = router;


