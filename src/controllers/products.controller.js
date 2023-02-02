//importar el servicio
const ProductService = require('../services/product.services');

const addProducts = async ( req, res ) => {
    try {
        const {name, price, availableQty, userId, imageUrl, status} = req.body;
        console.log( name, price, availableQty, userId, imageUrl, status);
        if(!name || !price || !availableQty || !userId){
            return res.status(400).json({ name, price, availableQty, userId, imageUrl, status});
        }
        const products = await ProductService.add(name, price, availableQty, userId, imageUrl, status);
        res.json({message: 'Product created'})
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getProducts = async ( req, res ) => {
    try {
        
        const result = await ProductService.get();
        res.json({
            message: 'Get products',
            data:result,
        })
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getProducts,
    addProducts,
    }