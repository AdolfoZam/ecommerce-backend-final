const { product, users } = require('../models');

const { Op } = require("sequelize");

class ProductService {

    static async add( name, price, availableQty, userId, imageUrl, status ){
        try {
            console.log( name, price, availableQty, userId, imageUrl, status );
            const result = await product.create({name, price, availableQty, user_id: userId, imageUrl, status})
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async get(){
        try {
               const result = await product.findAll({
                where: {
                    availableQty:{
                        [Op.gt]: 0
                    }
                },
                include: {
                    model: users,
                    as:"user",
                    attributes: ["username"],
                },
            });
            return result;
        } catch (error) {
            throw error; 
        }
    }
};

module.exports = ProductService;