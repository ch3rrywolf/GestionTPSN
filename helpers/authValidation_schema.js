const Joi = require("joi");

const authSchema = Joi.object({
    matricule: Joi.string().min(4).max(8).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(4).required(),
    role: Joi.string().valid('admin', 'mqhses', 'prospect').required(),
    username: Joi.string().min(4).max(30).required(),
});


module.exports = { authSchema }