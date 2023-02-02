const ProductInCarService = require('../services/productInCar.services');
const car = require('../models/car');
const CarService = require('../services/car.services');


const productInCar = async ( req, res ) => {
    try {
        const product = req.body;
        const result = await ProductInCarService.create(product);
        const {userId} = result;
        await CarService.get(car);
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {productInCar};