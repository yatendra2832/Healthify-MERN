const Test = require('../Models/test-model')

const testsData = async (req, res) => {
    try {
        const response = await Test.find();
        if (!response) {
            return res.status(404).json({ msg: "No Tests Data is Found" })
        }
        res.status(200).json(response)

    } catch (error) {
        console.error("Error Occured in the Tests Data", error)
    }
}

module.exports = { testsData }