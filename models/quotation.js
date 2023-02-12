'use strict';
const {DataTypes, Sequelize} = require('sequelize');
const instance = require('../dbconnection');

const quotation = instance.sequelize.define('quotations', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  design: {
    type: DataTypes.STRING
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.INTEGER
  }
},
{
  createdAt: true,
  updatedAt: true,
  tableName: 'quotations',
})

exports.model = quotation;