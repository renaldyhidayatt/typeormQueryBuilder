import express from "express";
import productController from "../controllers/product.controller";

const router = express.Router();


router.get("/", productController.findAll);
router.post("/", productController.create);


export default router;