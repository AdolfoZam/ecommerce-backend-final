const {order} = require('../models');

class OrderService {
    static async create(newOrder){
        try {
            const result = order.create(newOrder)
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OrderService;