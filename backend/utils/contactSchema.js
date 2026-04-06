const Joi = require("joi");

const contactSchema = Joi.object({
    Name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required()
});

module.exports = contactSchema;