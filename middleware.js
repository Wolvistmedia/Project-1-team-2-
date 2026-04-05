const contactSchema = require("./utils/contactSchema");
const ExpressError = require("./utils/expresserror");

const validateContact = (req, res, next) => {
    const { error } = contactSchema.validate(req.body);

    if (error) {
        throw new ExpressError(400, error.details[0].message);
    } else {
        next();
    }
};

module.exports = validateContact;