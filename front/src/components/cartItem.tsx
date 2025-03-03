import React, { FC } from "react";
import Button from "./Button";

interface CartItemProps {
  image: string;
  name: string;
  quantity: number;
  description: string;
  price: number;
  onTrashClick: ()=>void;
}

const CartItem: FC<CartItemProps> = ({
  image,
  name,
  quantity,
  description,
  price,
  onTrashClick
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <p className="text-sm text-gray-500">{name}</p>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">{quantity}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold text-xl">${price}</p>
      </div>
      <span onClick={onTrashClick}>
            <img 
              src="https://img.icons8.com/?size=100&id=14237&format=png&color=000000"
              alt="Eliminar"
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
          </span>
      
    </div>
  );
};

export default CartItem;
