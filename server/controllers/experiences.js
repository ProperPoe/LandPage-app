const express = require('express');
const mongoose = require('mongoose');
const ExperiencesModel = require("../models/Experiences.js");
const UserModel = require('../models/Users.js');


const router = express.Router();

exports.getExperiences = async (req, res) => {
    ExperiencesModel.find({}, (err, result) => {
        if(err){
            res.status(400).json(err)
        }else{
            res.status(200).json(result)
        }
    }).populate("user")
    
}

exports.createExperience = async (req, res) => {
    const {location, image, likeCount, user} = req.body;

    let existingUser;
    try {
        existingUser = await UserModel.findById(user)
    } catch (err) {
        return console.log(err)
    }
    if(!existingUser){
        return res.status(400).json({message: "Unable To Find User By This ID"})
    }

    const newEx = new ExperiencesModel({location, image, likeCount, user});
    
    /*try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await newEx.save({session});
        existingUser.posts.push(newEx);
        await existingUser.save({session});
        await session.commitTransaction();
    
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err})
    }*/

    await newEx.save();
    
    res.status(200).json({newEx})
    
}

exports.updatePost = async (req, res) => {
    const newLocation = req.body.newLocation;
    const id = req.body.editID;

    let post;
    try {
            post = await ExperiencesModel.findById(id);
            post.location = newLocation;
            post.save();
    } catch (error) {
        return console.log(error)
    }
    if(!post){
        return res.status(500).json({ message: "Unable to update post" })
    }

    res.status(200).json({ post });
}

exports.deletePost = async (req, res) => {
    const id = req.params.id;
    
    let post;
    try {
        post = await ExperiencesModel.findByIdAndRemove(id).populate('user');
        await post.user.posts.pull(post);
        await post.user.save();
    } catch (err) {
        console.log
    }
    if(!post){
        return res.status(500).json({message: "Unable To Delete"})
    }

    res.status(200).json({message: "Successfully Deleted"})
}

exports.getPost = async (req, res) => {
    const id = req.params.id;
    const singlePost = await ExperiencesModel.findById(id);

    res.send(singlePost)
}
