const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
router.get('/signup',controller.signUp);
router.get('/signin',controller.signIn);
router.get('/list',controller.getList);

router.post('/signup',controller.signUpPost);
router.post('/signin',controller.signInPost);

module.exports = router;