import React, { FC } from "react";
import { FaTrash } from "react-icons/fa";
import Button from "./Button";

interface CartItemProps {
  image: string;
  name: string;
  quantity: number;
  description: string;
  price: number;
  onTrashClick: () => void;
}

const CartItem: FC<CartItemProps> = ({
  image,
  name,
  description,
  price,
  onTrashClick
}) => {
  return (
    <div className="flex flex-col items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4 w-full">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex-1">
          <p className="text-sm text-gray-500">{name}</p>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </div>

      <p className="font-semibold text-xl mt-4">${price}</p>

      <div className="mt-4 w-full flex justify-center">
        <Button
          onClick={onTrashClick}
          className="bg-colorPrimario text-colorSecundario px-4 py-2 rounded-lg hover:bg-red-600 flex items-center"
        >
          <FaTrash className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
