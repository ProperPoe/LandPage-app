const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('../models/Users.js');

const router = express.Router();

exports.getUsers = (req, res) => {
    UserModel.find({}, (err, result) => {
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

exports.createUser = async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
}