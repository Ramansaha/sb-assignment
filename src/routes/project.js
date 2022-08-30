const express = require('express');
const router = express.Router();

const {createProject,getProject,updateProject} = require('../controllers/project');
const {isAuthenticated} = require('../controllers/auth');


router.post('/project/create',isAuthenticated,createProject);
router.get('/project/:projectId',isAuthenticated,getProject);
router.put('/project/update/:projectId',isAuthenticated,updateProject)


module.exports = router;
