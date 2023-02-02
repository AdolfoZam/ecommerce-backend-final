const DataTypes = require("sequelize").DataTypes;
const _ProductInOrder = require("./ProductInOrder");
const _car = require("./car");
const _order = require("./order");
const _product = require("./product");
const _productInCar = require("./productInCar");
const _users = require("./users");

function initModels(sequelize) {
  const users = _users(sequelize, DataTypes);
  const car = _car(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const productInCar = _productInCar(sequelize, DataTypes);
  const ProductInOrder = _ProductInOrder(sequelize, DataTypes);
  
  productInCar.belongsTo(car, { as: "car", foreignKey: "car_id"});
  car.hasMany(productInCar, { as: "productInCars", foreignKey: "car_id"});
  ProductInOrder.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasOne(ProductInOrder, { as: "ProductInOrder", foreignKey: "order_id"});
  ProductInOrder.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(ProductInOrder, { as: "ProductInOrders", foreignKey: "product_id"});
  productInCar.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(productInCar, { as: "productInCars", foreignKey: "product_id"});
  car.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(car, { as: "cars", foreignKey: "user_id"});
  order.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(order, { as: "orders", foreignKey: "user_id"});
  product.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(product, { as: "products", foreignKey: "user_id"});

  return {
    ProductInOrder,
    car,
    order,
    product,
    productInCar,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
