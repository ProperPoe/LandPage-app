const express = require('express');

const { getExperiences, createExperience, likePost, deletePost, getPost } = require('../controllers/experiences.js');

const router = express.Router();

router.get('/', getExperiences);
router.post('/', createExperience);
router.put('/:id/likePost', likePost)
router.delete('/:id/delete', deletePost)
router.get('/:id/getPost', getPost)

module.exports = router;