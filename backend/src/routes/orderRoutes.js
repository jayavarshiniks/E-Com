import express from "express";
import { createOrder } from "../controllers/orderController.js";
const router = express.Router();

router.post('/createOrder', createOrder);

export default router;