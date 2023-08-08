const express = require("express");
const controller = require("../controller/Clogin");
const router = express.Router();

router.get("/user",controller.main);

router.get("/user/login",controller.userMain);

router.get("/user/register",controller.registerMain);

router.get("/login",controller.userLogin);

router.post("/register",controller.registerId);

// router.patch("/edit");

// router.delete("/delete");

module.exports = router;