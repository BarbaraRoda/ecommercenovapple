"use client";
import { routes } from '@/app/routes/routes';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { useAuth } from '@/context/authContext';
import { useCart } from '@/context/cartContext';
import { FaShoppingCart, FaSignOutAlt, FaUserCircle, FaSearch } from 'react-icons/fa';
import { getProducts } from '@/services/products'; 

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

const UserAuth = () => {
  const { isAuth, user, resetUserData } = useAuth();
  const { total } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: IProduct[] = await getProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts([]);
      setShowDropdown(false);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
      setShowDropdown(results.length > 0);
    }
  }, [searchTerm, products]);

  if (isAuth == null) {
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-2 border-t-2 border-opcional2 border-solid rounded-full animate-spin"></div>
        </div>
        <div className="name">
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (isAuth) {
    return (
      <div>
        <div className="flex items-center justify-center space-x-4 relative">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-colorTerciario text-texto bg-white"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500 cursor-pointer" />

            {showDropdown && (
              <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md max-h-48 overflow-y-auto z-50">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/product/detail/${product.id}`} onClick={() => setSearchTerm('')}>
                    <div className="p-2 hover:bg-gray-100 cursor-pointer">
                      {product.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <span className="hidden sm:block text-texto">{user?.name}</span>

          <Link href={routes.cart}>
            <span className="flex items-center space-x-2">
              <FaShoppingCart className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-colorPrimario hover:text-colorTerciario" />
              <span className="text-texto">{total}</span>
            </span>
          </Link>

          <Link href={routes.landing}>
            <span onClick={resetUserData} className="cursor-pointer">
              <FaSignOutAlt className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-colorPrimario hover:text-red-600" />
            </span>
          </Link>

          <Link href={routes.dashboard}>
            <FaUserCircle className="w-8 h-8 rounded-full sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-colorPrimario hover:text-colorTerciario" />
          </Link>
        </div>

        <div className="bg-colorPrimario">
          <ul className="flex px-8 py-2">
            <li>
              <Link href="/home" className="text-colorSecundario hover:text-opacity-80 transition">
                Productos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="flex space-x-4">
      <Link href={routes.register}>
        <Button variant="primary">Registrarse</Button>
      </Link>
      <Link href={routes.login}>
        <Button variant="secondary">Iniciar Sesión</Button>
      </Link>
    </div>
  );
};

export default UserAuth;
