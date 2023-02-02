const initModels = require('./init-models'); 
const db = require('../utils/database');

const models = initModels(db);

const { car, order, product, productInCar, ProductInOrder, users } = models;

module.exports = {
    car, 
    users,
    order, 
    product, 
    productInCar, 
    ProductInOrder, 
};