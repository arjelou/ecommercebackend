// require('dotenv').config({path: "./vars/.env"})

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('railway','root','Rckc5bDA5MJk7QE0n7XD', {
    host: 'containers-us-west-74.railway.app',
    dialect: 'mysql',
    port: '5611',
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