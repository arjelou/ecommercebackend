'use strict';
const {DataTypes, Sequelize} = require('sequelize');
const instance = require('../dbconnection');

const category = instance.sequelize.define('categories', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  product_category: {
    type: DataTypes.STRING
  },
  category_description: {
    type: DataTypes.STRING
  }
},
{
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  tableName: 'categories'
})

exports.model = category;
