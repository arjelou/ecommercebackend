'use strict';
const {DataTypes, Sequelize} = require('sequelize');
const instance = require('../dbconnection');

const estimate = instance.sequelize.define('estimates', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customerId: {
    type: DataTypes.INTEGER
  },
  quotationId: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.INTEGER
  },
  message: {
    type: DataTypes.STRING
  },
  estimate_pickup_date: {
    type: DataTypes.STRING
  }
},
{
  createdAt: true,
  updatedAt: true,
  tableName: 'estimates',
})