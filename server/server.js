const express = require('express');
const app = express();

const authRouter = require('./Router/auth-router')


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at PORT : ${PORT}`);
})