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

const getTestById = async (req, res) => {
    try {
        const id = req.params.id
        const test = await Test.findOne({ _id: id })
        return res.status(200).json(test)
    } catch (error) {
        console.log("Error occured at Test Controller :", error)
    }

}

module.exports = { testsData ,getTestById}