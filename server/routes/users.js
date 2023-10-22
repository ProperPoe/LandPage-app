const express = require('express');

const { getUsers, createUser, login } = require('../controllers/users.js');


const router = express.Router();

router.get('/getUsers', getUsers);
router.post('/createUser', createUser)
router.post('/login', login)

module.exports = router;