const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return productInCar.init(sequelize, DataTypes);
}

/**
 * @openapi
 * components:
 *   schemas:
 *     add:
 *       type: object
 *       properties:
 *         car_id:
 *           type: int
 *           example: 1
 *         product_id:
 *           type: int
 *           example: 2
 *         quantity:
 *           type: int
 *           example: 5
 *         price:
 *           type: int
 *           example: 100
 *         status:
 *           type: boolean
 *           example: true
 */

class productInCar extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'car',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'productInCar',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "productInCar_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
