const Contact = require('../Models/contact-model');

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ message: "Form Submitted Successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server Error!" });
    }
}

module.exports = { contactForm };