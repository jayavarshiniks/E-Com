import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar bg-base-200 flex flex-col md:flex-row gap-4 p-4 items-center">
      {/* Logo */}
      <div className="flex-shrink-0 flex justify-center md:justify-start">
        <img className="w-28 md:w-36" src="./images/logo.png" alt="Logo" />
      </div>

      {/* Search */}
      <div className="w-full flex justify-center order-3 md:order-none">
        <div className="join w-full max-w-sm md:max-w-md">
          <input
            type="text"
            id="search_field"
            placeholder="Enter Product Name ..."
            className="input input-bordered join-item w-full text-sm md:text-base"
          />
          <button id="search_btn" className="btn btn-primary join-item">
            <FaSearch className="text-sm md:text-lg" />
          </button>
        </div>
      </div>

      {/* Cart */}
      <div className="flex items-center gap-2 order-2 md:order-none">
        <FaShoppingCart className="text-lg md:text-xl" />
        <span id="cart_count" className="badge badge-secondary">
          2
        </span>
      </div>
    </div>
  );
};

export default Header;
