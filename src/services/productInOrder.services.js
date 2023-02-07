const { ProductInOrder, order, product} = require('../models');

class ProductInOrderService {
    static async create(newOrder) {
        try {
            const result = Order.create({})
            const newORdenBuy = await order.create({id:result.user_id})
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductInOrderService;