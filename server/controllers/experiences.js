const express = require('express');
const mongoose = require('mongoose');
const ExperiencesModel = require("../models/Experiences.js");
const UserModel = require('../models/Users.js');

const router = express.Router();

exports.getExperiences = (req, res) => {
    ExperiencesModel.find({}, (err, result) => {
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

exports.createExperience = async (req, res) => {
    const {location, image, likeCount} = req.body;

    /*let existingUser;
    try {
        existingUser = UserModel.findById(user)
    } catch (err) {
        console.log(err)
    }*/
    const newEx = new ExperiencesModel({location, image, likeCount});
    /*try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await newEx.save({session});
        existingUser.posts.push(newEx);
        await existingUser.save({session});
        await session.commitTransaction();
    } catch (err) {
        console.log(err)
    }*/
    await newEx.save();
    
    res.json(newEx)
    
}

exports.likePost = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const listExperience = await ExperiencesModel.findByIdAndUpdate(id);

    /*if(listExperience.likeCount === 0){
        listExperience.likeCount += 1;
    }else if(listExperience.likeCount > 0){
        listExperience.likeCount = 0;
    }*/
    listExperience.likeCount += 1;
    

    await listExperience.save();
    
    res.json(listExperience)
}

exports.deletePost = async (req, res) => {
    const id = req.params.id;
    await ExperiencesModel.findByIdAndRemove(id).exec();

    res.send('deleteSuccess')
}

exports.getPost = async (req, res) => {
    const id = req.params.id;
    const singlePost = await ExperiencesModel.findById(id);

    res.send(singlePost)
}
