const ProductInCarService = require('../services/productInCar.services');
//importar el servicio de obtener productos por usuario
const productInCar = async ( req, res ) => {
    try {
        const product = req.body;
        console.log(product)
        const result = await ProductInCarService.create(product);
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getAllProductInCar = async ( req, res ) => {
    try {
        const result = await ProductInCarService.get();
        res.json({Message: "Get products for users", data: result,});
    } catch (error) {
        res.status(400).json({message: "Something went wrong"});
    }
}

module.exports = {productInCar, getAllProductInCar,};