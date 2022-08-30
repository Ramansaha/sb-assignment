const express = require('express');
const router = express.Router();

const {createTask,getTask,updateTask} = require('../controllers/task');
const {isAuthenticated} = require('../controllers/auth');


router.post('/task/create',isAuthenticated,createTask);
router.get('/task/:taskId',isAuthenticated,getTask);
router.put('/task/update/:taskId',isAuthenticated,updateTask)


module.exports = router;
