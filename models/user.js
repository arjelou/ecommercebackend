'use strict';
const {DataTypes, Sequelize} = require('sequelize');
const instance = require('../dbconnection');

const user = instance.sequelize.define('users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fullname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  total_employee: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  zipcode: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  confirmpassword: {
    type: DataTypes.STRING
  },
  
},
{
  createdAt: true,
  updatedAt: true,
  tableName: 'users',
})
exports.model = user;