const { productInCar } = require('../models');

class ProductInCarService {
    static async create (product) {
        try {
            const result = await productInCar.create(product);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async get() {
        try {
            const result = await productInCar.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductInCarService;