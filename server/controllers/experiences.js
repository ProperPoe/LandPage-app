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

    res.json(experience)
}