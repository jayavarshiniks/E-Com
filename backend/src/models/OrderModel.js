import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    cartItems: {
      type: Array,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model('Order', orderSchema);