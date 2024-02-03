const express = require('express');
const app = express();
const connectDb = require('./utils/db')
const authRouter = require('./Router/auth-router')


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is Running at PORT : ${PORT}`)
        })
    })
    .catch((err) => {
        console.log("Error in Connection with Backend");

    })