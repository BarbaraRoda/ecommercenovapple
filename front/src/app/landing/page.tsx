'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { getProducts } from "@/services/products";

const Landing = () => {
  const [products, setProducts] = useState<any[]>([]);

  //useEffect(() => {
    //const fetchPromotions = async () => {
     // const allProducts = await getProducts();
     // const promoProducts = allProducts.filter((p) => p.onSale === true);  // Filtrar productos en oferta
     // setProducts(promoProducts);
    //};
    //fetchPromotions();
  //}, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-blue-600 text-white text-center p-4 text-2xl">
        Bienvenido a nuestra Tienda
      </header>

      {/* Carrusel */}
      <div className="relative w-full max-w-4xl overflow-hidden mt-6">
        <div className="flex animate-scroll">
          {products.map((product) => (
            <div key={product.id} className="w-64 p-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-500">${product.price}</p>
                <Link href={`/product/${product.id}`} className="text-blue-500 hover:underline mt-4 block">Ver detalle</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Landing;
