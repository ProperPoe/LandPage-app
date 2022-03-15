const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');
const userRoutes = require('./routes/users')

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

//middelware used to connect routes
app.use('/', userRoutes)

mongoose.connect(process.env.CONNECT)

app.listen(9001, () => {
    console.log("Server listening 9001")
})