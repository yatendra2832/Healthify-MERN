const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Database Connection Successful')
    } catch (error) {
        console.log('Database connection FAILED');
        process.exit(0);
    }
}

module.exports = connectDb;