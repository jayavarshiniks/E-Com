import { OrderModel } from "../models/OrderModel.js";

//create order
export const createOrder = async (req, res) => {

    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc, item)=> acc = acc + item.product.price* item.qty, 0)).toFixed(2);
    const status = 'pending';
    // console.log(amount, "Amount");

    const order = await OrderModel.create({cartItems, amount, status});


    res.status(200).json({
        message:"Order Placed Successfully!",
        order,
    });
}