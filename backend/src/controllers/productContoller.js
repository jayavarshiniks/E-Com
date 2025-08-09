import { ProductModel } from "../models/ProductModel.js";

//get all products
export const getAllProducts = async (req, res) => {
  const allProducts = await ProductModel.find({});

  res.status(200).json({
    message: "All products retrived successfully",
    allProducts,
  });
};

//get single product
export const getProduct = async (req, res) => {
  try {
    const singleProduct = await ProductModel.findById(req.params.id);

    res.status(200).json({
      message: "get single product successfull",
      singleProduct,
    });
  } catch (error) {
    res.status(404).json({message:'No data found'});
  }
};
