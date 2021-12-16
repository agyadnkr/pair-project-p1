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
          msg: 'Please fill your car model'
        }
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Please fill your car image'
        }
      }
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Please fill your car year'
        }
      }
    },
    color: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Please fill your car color'
        }
      }
    },
    carCode: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    BrandId: DataTypes.INTEGER,
    price: {
      type: DataTypes.BIGINT,
      validate: {
        notEmpty: {
          msg: 'Please fill your car price'
        }
      }
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: (instance, options) => {
        instance.status = 'Available'

        instance.carCode = `${instance.id}_${instance.model}_${instance.BrandId}`
      }
    },
    modelName: 'Car',
  });
  return Car;
};