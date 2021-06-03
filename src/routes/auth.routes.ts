import { Router } from "express";
import { validateToken } from "../libs/validateToken";
const router = Router();

import * as authController from "../controllers/auth.controller";

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.get("/profile", [validateToken], authController.profile);

export default router;
