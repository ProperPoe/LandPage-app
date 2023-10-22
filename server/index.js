const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');
const userRoutes = require('./routes/users')
const experienceRoutes = require('./routes/experiences')

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(express.json());
app.use(cors());

//middelware used to connect routes
app.use('/', userRoutes)
app.use('/', experienceRoutes)

mongoose.connect(process.env.CONNECT)

app.listen(9001, () => {
    console.log("Server listening 9001")
})