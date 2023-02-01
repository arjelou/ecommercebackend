const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce','root','', {
    host: 'localhost',
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