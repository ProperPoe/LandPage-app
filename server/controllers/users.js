const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('../models/Users.js');
const bcrypt = require('bcryptjs');
const { restart } = require('nodemon');

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
    const {name, email, password} = req.body;

    const hashedPassword = bcrypt.hashSync(password);

    const newUser = new UserModel({name, email, password: hashedPassword, posts: [],});
    await newUser.save();

    return res.status(200).json({newUser})
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    let existingUser;
    try{
        existingUser = await UserModel.findOne({ email });
    }catch(err){
        return console.log(err)
    }
    if (!existingUser){
        return res.status(404).json({message: "Couldn't Find User By This Email"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({message: "Incorrect Password"})
    }
    return res.status(200).json({message: "Login Successful"})
}