const { productInCar } = require('../models');

class ProductInCarService {
    static async create (productId, carId, quantity, status, price) {
        try {
            const result = await productInCar.create({product_id: productId, car_id:carId, quantity, status, price});
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductInCarService;