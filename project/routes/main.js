const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');


//////////////////////////get/////////////////////////

router.get('/',controller.main);
router.get('/signup',controller.signUpMain)  // 회원가입 페이지 열기
router.get('/signin',controller.signInMain) // 로그인 페이지 열기
// /signup/:id로 하면 /signup/aymrm으로 접근이 될때 req.param에 id:aymrm 객체로 들어가며 열림
router.get('/profile',controller.profileMain)


//////////////////////////post/////////////////////////

router.post('/signup',controller.signUp) // 데이터베이스에 회원가입 정보 요청 
router.post('/signin',controller.signIn) // 데이터베이스에 로그인 정보 요청


//////////////////////////patch/////////////////////////


//////////////////////////delete/////////////////////////


module.exports = router;