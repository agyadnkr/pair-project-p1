'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Detail.belongsTo(models.Car);
    }
  };
  Detail.init({
    cc: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Please fill your car cc'
        }
      }
    },
    mileage: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Please fill your car mileage'
        }
      }
    },
    transmission: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please choose your car transmission'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          msg: 'Please fill your car description'
        }
      }
    },
    CarId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Detail',
  });
  return Detail;
};