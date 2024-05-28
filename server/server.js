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
const doctorRouter = require('./Router/doctor-router')
const paymentRouter = require('./Router/payment-router')
const testRouter = require('./Router/test-router')
const testBookingRouter = require('./Router/testBooking-router')
const labtestcardRouter = require('./Router/labtestcard-router')
const labtestBookingRouter = require('./Router/labtestBooking-router')
const supplementRouter = require('./Router/supplement-router')
// Middlewares
//cors policy handling
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,POST,DELETE,PUT,PATCH,HEAD",
    credentials: true
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRouter);
app.use('/api/form', contactRouter);
app.use('/api/form', appointmentRouter);
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/payment', paymentRouter)
app.use('/api/tests', testRouter)
app.use('/api/testbooking', testBookingRouter)
app.use('/api/labtestbooking', labtestBookingRouter)
app.use('/api/labtestcards', labtestcardRouter)
app.use('/api/supplement',supplementRouter)


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