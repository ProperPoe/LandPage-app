const express = require('express');
const mongoose = require('mongoose');
const ExperiencesModel = require("../models/Experiences.js");

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
    const experience = req.body;
    const newEx = new ExperiencesModel(experience);
    await newEx.save();

    res.json(newEx)
}

exports.likePost = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const listExperience = await ExperiencesModel.findById(id);

    if(listExperience.likeCount === 0){
        listExperience.likeCount += 1;
    }else if(listExperience.likeCount > 0){
        listExperience.likeCount = 0;
    }
    

    await listExperience.save();
    
    res.json(listExperience)
}
