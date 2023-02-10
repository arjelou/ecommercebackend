const {sign, verify} = require('jsonwebtoken');
const validateUsers = require('./controllers/productControllers')

const createTokens = (validateUsers) => {

    const accessToken = sign({
        email: validateUsers.email,
        password: validateUsers.password
    },'secretKeyForToken' );

    return accessToken;
}

module.exports = {createTokens}