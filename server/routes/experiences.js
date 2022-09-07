const express = require('express');

const { getExperiences, createExperience, updatePost } = require('../controllers/experiences.js');

const router = express.Router();

router.get('/getExperiences', getExperiences);
router.post('/createExperience', createExperience);

module.exports = router;