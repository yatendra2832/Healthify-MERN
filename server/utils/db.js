const mongoose = require('mongoose');
const URI = "mongodb+srv://yatendrayadav2832:yatendra@cluster0.ldyncxi.mongodb.net/Healthify?retryWrites=true&w=majority"

const connectDb = async () => {
    try {
        mongoose.connect(URI);
        console.log('Database Connection Successful')
    } catch (error) {
        console.log('Database connection FAILED');
        process.exit(0);
    }
}

module.exports = connectDb;