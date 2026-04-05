const Joi = require("joi");

const contactSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().optional(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    industry: Joi.string().optional(),
    message: Joi.string().required()
});

module.exports = contactSchema;