const JWT = require("jsonwebtoken");
const createError = require("http-errors");

const singAccessToken = (userId) => {
    return new Promise((resolve, reject) => {

        const payload = {};
        const secret = process.env.ACCESS_TOKEN_SECRET;

        const options = {
            subject : `${userId}`,
            audience: 'GlobalENR',
            expiresIn: '30s'
        }

        JWT.sign(payload, secret, options, (err, token) => {
            if(err){ 
                reject(createError.InternalServerError())
            }
            resolve(token);
        })
    })
}

module.exports = { singAccessToken }