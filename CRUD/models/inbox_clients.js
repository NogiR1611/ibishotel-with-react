'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inbox_clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  inbox_clients.init({
    nama_klien: DataTypes.STRING,
    email: DataTypes.STRING,
    pesan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'inbox_clients',
  });
  return inbox_clients;
};