import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Cart({ cartItems, setCartItems }) {
  // console.log("cartItems", cartItems)

    const increaseQty = (item) => {
    if(item.product.stock == item.quantity){
      return;
    }

  }

  const decreaseQty = () => {
    if(quantity == 1){
      return;
    }

  }
  return (
    <div className="min-h-screen container mx-auto px-4">
      <h2 className="mt-5 text-2xl font-semibold">
        Your Cart: <b>{cartItems.length}</b>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Cart Items */}

        <div className="lg:col-span-8">
          <hr className="mb-4 border-gray-300" />

          {cartItems.map((item) => (
            <div className="card bg-base-100 shadow-md mb-4 p-4" key={item.id}>
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Image */}
                <div className="col-span-4 lg:col-span-3">
                  <img
                    src={item.product.images[0].image }
                    alt={item.product.name}
                    className="w-28 h-24 object-cover rounded"
                  />
                </div>

                {/* Title */}
                <div className="col-span-5 lg:col-span-3">
                  <Link  to={"/product/"+item.product._id} className="link link-primary text-sm">
                    {item.product.name}
                  </Link>
                </div>

                {/* Price */}
                <div className="col-span-4 lg:col-span-2 text-gray-700">
                  <p id="card_item_price" className="font-semibold">
                    {item.product.price}
                  </p>
                </div>

                {/* Quantity Counter */}
                <div className="col-span-4 lg:col-span-3 flex items-center space-x-2">
                  <button className="btn btn-error btn-sm minus" onClick={()=> decreaseQty()}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    readOnly
                    className="input input-bordered w-16 text-center count"
                  />
                  <button className="btn btn-primary btn-sm plus" onClick={()=> increaseQty()}>+</button>
                </div>

                {/* Delete Icon */}
                <div className="col-span-4 lg:col-span-1 flex justify-center">
                  <button className="btn btn-error btn-sm">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <hr className="border-gray-300" />
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="card bg-base-100 shadow-lg p-4">
            <h4 className="text-lg font-semibold">Order Summary</h4>
            <hr className="my-2 border-gray-300" />

            <p>
              Subtotal: <span className="font-medium">1 (Units)</span>
            </p>
            <p>
              Est. total: <span className="font-medium">$245.67</span>
            </p>

            <hr className="my-2 border-gray-300" />

            <button id="checkout_btn" className="btn btn-primary w-full">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
