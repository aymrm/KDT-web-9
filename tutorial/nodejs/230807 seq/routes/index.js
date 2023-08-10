const express = require("express");
const router = express.Router();
const cont = require("../controller/Cvisitor");

router.get("/" , cont.main);
router.get("/visitor" , cont.getVisitors);

module.exports = router;