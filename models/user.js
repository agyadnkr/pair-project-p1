'use strict';
const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Car)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please fill username"
        }
      },
      unique: {
        args: false,
        msg: "Username is already registered"
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please type in password"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Email format is invalid"
        }
      },
      unique: {
        args: false,
        msg: "Email is already registered"
      }
    },
    role: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: (instance, option) => {
        let salt = bcrypt.genSaltSync(3);
        let hash = bcrypt.hashSync(instance.password, salt);

        instance.role = 'Seller';
        instance.password = hash;
      }
    },
    modelName: 'User',
  });
  return User;
};