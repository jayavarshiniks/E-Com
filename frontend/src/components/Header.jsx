import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = ({cartItems}) => {
  return (
    <div className="navbar bg-base-200 flex flex-col md:flex-row gap-4 p-4 items-center">
      {/* Logo */}
      <div className="flex-shrink-0 flex justify-center md:justify-start">
      <Link to= "/">
        <img className="w-12 md:w-10" src="./images/logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Search */}
      <div className="w-full flex justify-center order-3 md:order-none">
      <Search/>
      </div>

      {/* Cart */}
      <div className="flex items-center gap-2 order-2 md:order-none">
      <Link to="/cart" className="flex items-center gap-1">
        <FaShoppingCart className="text-lg md:text-xl" />
        <span id="cart_count" className="badge badge-secondary">
          {cartItems.length}
        </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
