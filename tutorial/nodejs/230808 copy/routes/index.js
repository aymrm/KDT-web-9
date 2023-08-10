import express from "express";
import * as controller from "../controller/Clogin.js";
const router = express.Router();

router.get("/user",controller.main);

router.get("/user/login",controller.userMain);

router.get("/user/register",controller.registerMain);

router.post("/user/login",controller.userLogin);

router.post("/user/register",controller.registerId);

router.post("/user/profile",controller.postProfile);

router.patch("/user/profile/edit",controller.editProfile);

router.delete("/user/profile/delete",controller.deleteProfile);

export default router;