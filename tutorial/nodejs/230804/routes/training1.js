const express=require("express");
const router = express.Router();
const controller = require("../controller/training1Controller");

router.get("/",controller.main);

router.post("/axios",controller.loginAxiosPost);

module.exports = router;