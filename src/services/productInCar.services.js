const { productInCar } = require('../models');

class ProductInCarService {
    static async create (product, car) {
        try {
            const result = productInCar.create({productId, carId});
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductInCarService;