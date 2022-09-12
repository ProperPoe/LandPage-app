const express = require('express');

const { getExperiences, createExperience, likePost } = require('../controllers/experiences.js');

const router = express.Router();

router.get('/', getExperiences);
router.post('/', createExperience);
router.put('/:id/likePost', likePost)

module.exports = router;