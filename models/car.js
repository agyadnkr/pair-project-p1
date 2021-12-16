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

    get formatPrice() {
      let options = { style: 'currency', currency: 'IDR' };
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.price)
    }

    static allCarList(value) {
      return Car.findAll(value)
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

        let formatPrice = instance.price.slice(0, 2)
        let formatYear = instance.year.slice(2, 4)

        instance.carCode = `${formatPrice}_${formatYear}_${instance.color}_${instance.BrandId}`
      }
    },
    modelName: 'Car',
  });
  return Car;
};