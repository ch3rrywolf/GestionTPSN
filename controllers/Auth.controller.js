const db = require('../models')
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const { authSchema } = require("../helpers/authValidation_schema");
// create main Model
const User = db.Users

// main work
// Register
const register = async (req, res, next) => {
    try {

        const result = await authSchema.validateAsync(req.body);

        if (!User) throw createError.InternalServerError('Users model is not defined.');

        const existingUser = await User.findOne({ where: { email: result.email } });
        if (existingUser) throw createError.Conflict(`${result.email} is already registered.`);

        const hashpassword = await bcrypt.hash(result.password, 10);

        const user = await User.create({
            username: result.username,
            email: result.email,
            password: hashpassword
        }); 

        res.status(200).send(result);

    } catch (error) {
        if(error.isJoi === true ) error.status = 422;
        next(error); 
    }
};


module.exports = {
    register
}