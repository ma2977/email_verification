const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
// En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
});
User.prototype.toJson = function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  return values;
}
module.exports = User;
