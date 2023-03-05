require('dotenv').config({path: "./.env"})

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.MYSQLDATABASE,process.env.MYSQLUSER,process.env.MYSQLPASSWORD, {
    host: process.env.MYSQLHOST,
    dialect: 'mysql',
    port: process.env.MYSQLPORT,
    pool: {
        max: 10000,
        acquire: 30000,
        min: 0,
        idle: 10000
    }
})


sequelize.authenticate();
// try {
//     sequelize.authenticate();
// }catch(e){
//     console.log("Unable to authenticate");
//     console.log(e);
// }

exports.sequelize = sequelize;