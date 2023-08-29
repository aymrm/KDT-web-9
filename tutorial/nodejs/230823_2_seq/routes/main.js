const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

router.get('/signup',controller.signUp)  // 회원가입 페이지 열기
router.post('/signup',controller.signUpPost) // 데이터베이스에 회원가입 정보 요청 
// /signup/:id로 하면 /signup/aymrm으로 접근이 될때 req.param에 id:aymrm 객체로 들어가며 열림

router.get('/signin',controller.signIn) // 로그인 페이지 열기
router.post('/signin',controller.signInPost) // 데이터베이스에 로그인 정보 요청
router.post('/setcookie',controller.setCookie)

router.get('/profile',controller.profileMain)
router.post('/profile',controller.checkData)
router.patch('/profile',controller.updateProfile)

module.exports = router;
