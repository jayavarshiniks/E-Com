import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import orderRoutes from "./routes/orderRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/v1/', productRoutes);
app.use('/api/v1/', orderRoutes);

const port = process.env.PORT;

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server started on PORT:", port);
  });
});
