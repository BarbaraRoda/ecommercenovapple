'use client';
import { routes } from '@/app/routes/routes';
import Link from 'next/link';
import React from 'react';
import Button from '../Button';
import { useAuth } from '@/context/authContext';
import { useCart } from '@/context/cartContext';


const UserAuth = () => {
  const { isAuth, user, resetUserData } = useAuth();
  const {total} =useCart();
  
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
        <span>
          <img 
            src="https://img.icons8.com/?size=100&id=15893&format=png&color=000000"
            alt="Comprar"
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
          />
          {total}
        </span>
        </Link>

        <span onClick={resetUserData} className="cursor-pointer">
          <img
            src="https://img.icons8.com/?size=100&id=2445&format=png&color=000000"
            alt="Cerrar sesión"
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
          />
        </span>

        <Link href={routes.dashboard}>
          <img
            src="https://img.icons8.com/?size=100&id=WWIRij774QJt&format=png&color=000000"
            alt="Perfil"
            className="w-8 h-8 rounded-full sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />
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
