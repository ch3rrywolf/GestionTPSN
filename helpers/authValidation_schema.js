const Joi = require("joi");

const authSchema = Joi.object({
    matricule: Joi.string().min(4).max(12).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(4).required(),
    role: Joi.string().valid('mqhses', 'trans', 'bilov', 'prospect').required(),
    username: Joi.string().min(2).max(30).required(),
});


module.exports = { authSchema }