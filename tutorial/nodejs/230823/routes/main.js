const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

router.get("/comments",controller.commentsMain);

router.get("/comment/:id",controller.commentMain);

module.exports = router;
