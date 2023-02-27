require('dotenv').config({path: "./vars/.env"})

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.MYSQLDATABASE,process.env.MYSQLUSER,process.env.MYSQLPASSWORD, {
    host: process.env.MYSQLHOST,
    dialect: 'mysql',
    pool: {
        max: 10000,
        acquire: 30000,
        min: 0,
        idle: 10000
    }
})

try {
    sequelize.authenticate();
}catch(e){
    console.log("Unable to authenticate");
    console.log(e);
}

exports.sequelize = sequelize;