require("dotenv").config();
const express = require('express');
const app = express();
const connectDb = require('./utils/db')
const errorMiddleware = require('./Middleware/error-middleware')

// Routers
const authRouter = require('./Router/auth-router')
const contactRouter = require('./Router/contact-router')

// Middlewares
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/form', contactRouter);

app.use(errorMiddleware)


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