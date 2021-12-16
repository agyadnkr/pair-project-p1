'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.hasOne(models.Detail);
      Car.belongsTo(models.User);
      Car.belongsTo(models.Brand);
    }
  };
  Car.init({
    model: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Input your car model'
        }
      }
    },
    imageUrl: DataTypes.STRING,
    year: DataTypes.INTEGER,
    color: DataTypes.STRING,
    carCode: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    BrandId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};