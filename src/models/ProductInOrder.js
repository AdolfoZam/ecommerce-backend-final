const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ProductInOrder.init(sequelize, DataTypes);
}

class ProductInOrder extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id'
      },
      unique: "ProductInOrder_order_id_key"
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
      allowNull: true
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
    tableName: 'ProductInOrder',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ProductInOrder_order_id_key",
        unique: true,
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "ProductInOrder_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
