"use client";
import React, { FC, useState } from "react";
import Card from "./Card/card";
import { useRouter } from "next/navigation";
import { routes } from "@/app/routes/routes";
import { useCart } from "@/context/cartContext";

interface CardProps {
    list: Record<string, any>[]; 
}

const Cards: FC<CardProps> = ({ list }) => {
  const [items, setItems] = useState<Record<string, any>[]>(list);
  const router = useRouter();
  const { addToCart } = useCart();

  const onClickItem = (id: string) => () => {
    router.push(routes.product_detail + "/" + id);
  };

  const onCartClick = (product: any) => (event: React.MouseEvent) => {
    event.stopPropagation();
    return addToCart(product);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((product, idx) => {
          const { description, image, name, price, id } = product;
          return (
            <Card
              key={idx}
              description={description}
              image={image}
              name={name}
              price={price}
              onClick={onClickItem(id)}
              onCartClick={onCartClick(product)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

