import { Link } from "react-router-dom"

const ProductCard = ({products}) => {
  return (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product Card */}
            {products.map((product, idx) => (
              <div
                key={idx}
                className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <figure className="px-4 pt-4">
                  <img
                    className="rounded-xl h-[250px] w-[300px]"
                    src={product.images[0].image}
                    alt={product.alt}
                  />
                </figure>
                <div className="card-body p-4">
                  <h5 className="card-title text-sm md:text-base">
                    {product.name}
                  </h5>
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
                  <p className="text-base md:text-lg font-bold">
                    ₹{product.price}
                  </p>
                  <Link
                    to={"/product/"+product._id}
                    className="btn btn-primary w-full text-sm md:text-base"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
  )
}

export default ProductCard