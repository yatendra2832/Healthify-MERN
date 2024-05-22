const LabTestCard = require('../Models/labtestcard-model');

const labtestcards = async (req, res) => {
    try {
        const response = await LabTestCard.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ msg: "No Lab Test Cards Found" });
        }
        res.status(200).json(response);
    } catch (error) {
        console.error("Error at labtestcard Controller:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

const labtestcardById = async (req, res) => {
    try {
        const id = req.params.id;
        // Validate ObjectId format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ msg: "Invalid ID format" });
        }
        const data = await LabTestCard.findOne({ _id: id });
        if (!data) {
            return res.status(404).json({ msg: "Lab Test Card not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error("Error at labtestcardById Controller:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = { labtestcards, labtestcardById };
