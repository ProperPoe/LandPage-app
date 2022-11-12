const express = require('express');

const { getExperiences, createExperience, updatePost, deletePost, getPost } = require('../controllers/experiences.js');

const { auth } = require('../middleware/auth.js')

const router = express.Router();

router.get('/', getExperiences);
router.post('/', createExperience);
router.put('/:id/updatePost', updatePost)
router.delete('/:id/delete', deletePost)
router.get('/:id/getPost', getPost)

module.exports = router;