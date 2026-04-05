const Contact = require("../models/contact");

module.exports.createContact = async (req, res, next) => {
    try {
        let newContact = new Contact(req.body);
        await newContact.save();

        res.status(201).json({
            message: "Contact saved successfully"
        });

    } catch (err) {
        next(err);
    }
};