const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
//로그인
//회원가입

router.get("/register",controller.registerMain);
router.post("/register",controller.registerUser)

router.get("/login",controller.loginMain);
router.post("/login",controller.loginVerify);
router.post("/setCookie",controller.setCookie);

module.exports = router;
