const Supplement = require('../Models/supplementcard-model');
const mongoose = require('mongoose')
const gettingAllSupplements = async (req, res) => {
    try {
        const supplements = await Supplement.find();
        if (!supplements || supplements.length === 0) {
            return res.status(404).json({ message: "No Supplements Found!" });
        }
        return res.status(200).json(supplements);
    } catch (error) {
        console.error('Error in fetching all supplements:', error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const gettingSupplementById = async (req, res) => {
    try {
        const { id } = req.params;
        // Check if the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
        const supplement = await Supplement.findById(id);
        if (!supplement) {
            return res.status(404).json({ message: "No Supplement Found" });
        }
        return res.status(200).json(supplement);
    } catch (error) {
        console.error('Error in getting supplement by ID:', error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    gettingAllSupplements,
    gettingSupplementById
};
