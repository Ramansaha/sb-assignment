const express = require('express');
const router = express.Router();

const {signIn,signUp,signOut} = require('../controllers/auth');

router.post('/signin',signIn);
router.post('/signup',signUp);
router.get('/signout',signOut)


module.exports = router;
