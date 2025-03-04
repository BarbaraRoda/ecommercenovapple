"use client";
import { useAuth } from "@/context/authContext";
import React, { FC } from "react";
import Button from "../Button";
import { useCart } from "@/context/cartContext";
import { useRouter } from "next/navigation";
import { routes } from "@/app/routes/routes";
import { FaShoppingCart } from "react-icons/fa";

interface CardProps {
  description: string;
  image: string;
  name: string;
  price: number;
  onClick?: () => void;
  onCartClick?: (e: any) => void;
}

const Card: FC<CardProps> = ({ description, image, name, price, onClick, onCartClick }) => {
  const { isAuth } = useAuth();
  const { addToCart } = useCart();
  const router = useRouter();

  const handleCardClick = () => {
    if (!isAuth) {
      router.push(routes.login); 
    } else {
      onClick?.();
    }
  };

  return (
    <div
      className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      onClick={handleCardClick}
      role="button"
    >
      <h3 className="text-lg font-semibold text-center">{name}</h3>

      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>

      <div>
        <p className="mt-2 text-gray-600 text-sm md:text-base text-center">{description}</p>
        <p className="mt-2 text-lg font-bold text-colorPrimario">${price}</p>
      </div>

      <div>
        {isAuth && (
          <Button onClick={onCartClick}>
            <FaShoppingCart className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" /> 
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
