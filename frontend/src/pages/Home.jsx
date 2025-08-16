import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=> {
      fetch(import.meta.env.VITE_API_URL + '/products?'+searchParams)
      .then(res => res.json())
      .then(res => setProducts(res.allProducts))
  },[searchParams])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow px-4">
        {/* Heading */}
        <h1
          id="products_heading"
          className="text-xl md:text-2xl font-bold text-center mt-6"
        >
          Latest Products
        </h1>

        {/* Products Grid */}
        <section id="products" className="container mx-auto mt-6">

        <ProductCard products={products}/>
        </section>
      </main>

    </div>
  );
};

export default Home;
