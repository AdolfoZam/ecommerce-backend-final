const { car } = require('../models');

class CarService { 
    static async add(userId) {
        try {
            const result = await car.create({user_id: userId})
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CarService;