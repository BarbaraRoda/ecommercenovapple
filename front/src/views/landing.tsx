'use client';
import { useState, useEffect } from "react";
import { getProducts } from "@/services/products";
import { useAuth } from "@/context/authContext";
import Card from "@/components/Card/card";



const Landing = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isAuth } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        setProducts(allProducts.slice(0, 3));
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchProducts();
  }, []);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <nav className="w-full bg-colorPrimario p-4 flex justify-between items-center">
        <h1 className="text-colorSecundario text-2xl">Bienvenido a nuestra Tienda</h1>
      </nav>
      

      <div className="relative w-full max-w-lg mt-6">
        {products.length > 0 ? (
          <div className="flex flex-col items-center">
            <Card 
              name={products[currentIndex].name}
              image={products[currentIndex].image}
              description={products[currentIndex].description}
              price={products[currentIndex].price}
            />

            <div className="flex justify-between w-full mt-4">
              <button 
                onClick={prevProduct} 
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                ◀
              </button>
              <button 
                onClick={nextProduct} 
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                ▶
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Cargando productos...</p>
        )}
      </div>
    </main>
  );
}

export default Landing;
