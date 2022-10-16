import express from "express";
import productImageController from "../controllers/productImage.controller";

const router = express.Router();


router.get("/", productImageController.findAll);
router.get("/:id", productImageController.find);
router.post("/", productImageController.create);
router.put("/:id", productImageController.update)
router.delete("/:id", productImageController.deleteProductImage)

export default router;