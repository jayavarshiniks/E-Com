import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const ProductDetails = ({cartItems, setCartItems}) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/product/" + id)
      .then((res) => res.json())
      .then((res) => setProduct(res.singleProduct));
  }, [id]);

  // adding items to cart
  const addToCart = () => {
    const itemExist = cartItems.find((item)=>item.product._id == product._id)
    if(!itemExist){
       const newItem = {product, quantity};
    setCartItems((state) => [...state, newItem]);
    toast.success("Item added to cart successfully!")
    }
  }

  const increaseQty = () => {
    if(product.stock == quantity){
      return;
    }
    setQuantity((state) => state+1)
  }

  const decreaseQty = () => {
    if(quantity == 1){
      return;
    }
    setQuantity((state) => state-1)
  }

  if (!product) {
    return <div className="text-center py-10">Loading product...</div>;
  }
  return (
    <div className="container min-h-screen  mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-around items-start gap-8">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center m-2">
          <img
            src={product.images[0].image}
            alt={product.alt}
            className="rounded-lg object-cover max-h-[500px] max-w-[500px]"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 mt-5 space-y-4">
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p id="product_id" className="text-gray-500">
            {product._id}
          </p>

          <hr className="border-gray-300" />

          {/* Rating */}
          <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${product._id}`}
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked={i < product.ratings}
                      />
                    ))}
                  </div>

          <hr className="border-gray-300" />

          {/* Price */}
          <p id="product_price" className="text-2xl font-bold text-primary">
            ₹{product.price}
          </p>

          {/* Quantity Counter */}
          <div className="flex items-center gap-2">
            <button className="btn btn-error btn-sm"
            onClick={decreaseQty} 
            disabled={product.stock == 0}>-</button>
            <input
              type="number"
              className="input input-bordered w-16 text-center"
              value={quantity}
              readOnly
            />
            <button className="btn btn-success btn-sm"
            onClick={increaseQty} 
            disabled={product.stock == 0}>+</button>
          </div>

          <button type="button" id="cart_btn" className="btn btn-primary mt-2"
          onClick={addToCart} 
          disabled={product.stock == 0}>
            Add to Cart
          </button>

          <hr className="border-gray-300" />

          {/* Stock Status */}
          <p>
            Status:{" "}
            <span id="stock_status" className={product.stock > 0? "font-semibold text-green-500": "text-red-500"}>
              {product.stock > 0? 'In Stock': 'Out of Stock'}
            </span>
          </p>

          <hr className="border-gray-300" />

          {/* Description */}
          <h4 className="mt-2 text-lg font-semibold">Description:</h4>
          <p className="text-gray-600">{product.description}</p>

          <hr className="border-gray-300" />

          {/* Seller */}
          <p id="product_seller" className="py-2">
            Sold by: <strong>{product.seller}</strong>
          </p>


        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
