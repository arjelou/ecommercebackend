'use strict';
const {DataTypes, Sequelize} = require('sequelize');
const instance = require('../dbconnection');

const product = instance.sequelize.define('products', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  product_name: {
    type: DataTypes.STRING
  },
  product_price: {
    type: DataTypes.INTEGER
  },
  product_caterogy: {
    type: DataTypes.STRING
  },
  product_description: {
    type: DataTypes.STRING
  }
},
{
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  tableName: 'products'
})

exports.model = product;
