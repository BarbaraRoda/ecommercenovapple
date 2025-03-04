'use client';
import { routes } from '@/app/routes/routes';
import Link from 'next/link';
import React from 'react';
import Button from '../Button';
import { useAuth } from '@/context/authContext';
import { useCart } from '@/context/cartContext';
import { FaShoppingCart, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

const UserAuth = () => {
  const { isAuth, user, resetUserData } = useAuth();
  const { total } = useCart();

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
      <div className="flex items-center justify-center space-x-4">
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
