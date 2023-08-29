const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

router.get('/member', controller.member);
router.post('/member',controller.addMember);

module.exports = router;
