const ProductInCarService = require('../services/productInCar.services');

const productInCar = async ( req, res ) => {
    try {
        const product = req.body;
        const result = await ProductInCarService.create(product);
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {productInCar};