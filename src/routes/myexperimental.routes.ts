import express from "express";
import experimentalController from "../controllers/experimental.controller";

const router = express.Router();

router.get("/:id", experimentalController.findAll);

export default router;
