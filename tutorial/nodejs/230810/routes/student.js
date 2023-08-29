const express = require("express");
const router = express.Router();
const controller = require("../controller/Cstudent");

router.get("/",controller.main);
router.post("/student",controller.postStudent);
router.post("/class",controller.postClass);

router.get("/student",controller.getStudent);

module.exports = router;