module.exports = function (sequelize, DataTypes) {

  var Cart = sequelize.define('Cart', {
    totalPrice: DataTypes.FLOAT,
    totalQty: DataTypes.FLOAT
  });
  Cart.associate = function (models) {
    Cart.belongsTo(models.User)
  };
  return Cart;
};