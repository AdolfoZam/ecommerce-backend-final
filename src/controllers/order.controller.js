//falta importar el servicio
const OrderService = require('../services/order.services');

const addOrder = async ( req, res ) => {
    try {
        const newOrder = req.body;
        console.log(newOrder)
        const result = OrderService.create({user_id: userId});
        res.json({Message: "add new order", data: result,})
    } catch (error) {
        res.status(400).json(error.Message)
    }
}

module.exports = { addOrder}