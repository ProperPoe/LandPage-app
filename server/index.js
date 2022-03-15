const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get('/getUsers', (req, res) => {
    UserModel.find({}, (err, result) => {
        if(err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
})

mongoose.connect(process.env.CONNECT)

app.listen(9001, () => {
    console.log("Server listening 9001")
})