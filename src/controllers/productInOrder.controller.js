const ProductInOrderService = require('../services/productInOrder.services');


const addProductsBuy = async ( req, res ) => {
    try {
        const newOrder = req.body;
        const result = await ProductInOrderService.create(newOrder);
        res.json({message: "Done Order", data: result})
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = { addProductsBuy }