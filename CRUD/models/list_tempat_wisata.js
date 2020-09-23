'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class list_tempat_wisata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  list_tempat_wisata.init({
    nama_tempat_wisata: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    harga: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'list_tempat_wisata',
  });
  return list_tempat_wisata;
};