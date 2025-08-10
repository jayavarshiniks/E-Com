
const ProductCard = () => {
  return (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product Card */}
            {[
              {
                img: "./images/products/1.jpg",
                alt: "OPPO F21s Pro",
                title:
                  "OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128GB Storage)",
                price: "₹24,500.67",
              },
              {
                img: "./images/products/2.jpg",
                alt: "Samsung Galaxy S23",
                title:
                  "Samsung Galaxy S23 Ultra (Phantom Black, 12GB RAM, 256GB Storage)",
                price: "₹1,99,990.99",
              },
              {
                img: "./images/products/3.jpg",
                alt: "Apple MacBook Air",
                title:
                  "Apple MacBook Air M2 (13-inch, Midnight, 8GB RAM, 256GB SSD)",
                price: "₹1,09,997.00",
              },
              {
                img: "./images/products/4.jpg",
                alt: "Sony WH-1000XM5",
                title:
                  "Sony WH-1000XM5 Wireless Noise Cancelling Headphones (Black)",
                price: "₹3,999.99",
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <figure className="px-4 pt-4">
                  <img
                    className="rounded-xl h-[250px] w-[300px]"
                    src={product.img}
                    alt={product.alt}
                  />
                </figure>
                <div className="card-body p-4">
                  <h5 className="card-title text-sm md:text-base">
                    <a href="#">{product.title}</a>
                  </h5>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${idx}`}
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked={i < 4}
                      />
                    ))}
                  </div>
                  <p className="text-base md:text-lg font-bold">
                    {product.price}
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary w-full text-sm md:text-base"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
  )
}

export default ProductCard