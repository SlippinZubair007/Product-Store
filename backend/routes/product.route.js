import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/product.controller.js";

const router =express.Router();
console.log(process.env.MONGO_URI);

router.post("/",createProduct);
router.get("/",getProducts);
router.delete("/:id",deleteProduct)
router.put("/:id",updateProduct);

export default router;  