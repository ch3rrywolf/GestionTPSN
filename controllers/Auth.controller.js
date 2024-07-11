const db = require('../models')
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const { authSchema } = require("../helpers/authValidation_schema");
const { singAccessToken } = require("../helpers/jwt_authentication");
// create main Model
const User = db.Users
const Profile = db.Profile

// Register
const register = async (req, res, next) => {
    try {

        const result = await authSchema.validateAsync(req.body);

        if (!User || !Profile) throw createError.InternalServerError('Users Or Profile model is not defined.');

        const existingUser = await User.findOne({ where: { email: result.email } });
        if (existingUser) throw createError.Conflict(`${result.email} is already registered.`);

        const hashpassword = await bcrypt.hash(result.password, 10);

        const user = await User.create({
            matricule: result.matricule,
            email: result.email,
            password: hashpassword,
            role: result.role,
            isAdmin: false
        });
        
        const profile = await Profile.create({
            username: result.username,
            Users_id: user.id
        });


        res.status(200).json({ user: result, message: "User created !"});

    } catch (error) {
        if(error.isJoi === true ) error.status = 422;
        next(error); 
    }
};

module.exports = {
    register
}