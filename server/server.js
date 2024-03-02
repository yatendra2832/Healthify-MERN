require("dotenv").config();
const express = require('express');
const cors = require('cors')
const app = express();
const connectDb = require('./utils/db')
const errorMiddleware = require('./Middleware/error-middleware')

// Routers
const authRouter = require('./Router/auth-router')
const contactRouter = require('./Router/contact-router')
const appointmentRouter = require('./Router/appointment-router')
const adminRouter = require('./Router/admin-router')
// Middlewares
//cors policy handling
const corsOptions = {
    origin: "http://localhost:5173",
    mehtods: "GET,POST,DELETE,PUT,PATCH,HEAD",
    creadentials: true
}
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/form', contactRouter);
app.use('/api/form', appointmentRouter);
app.use('/api/admin',adminRouter)
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