"use client";
import Card from "@/components/Card/card";
import React, { FC } from "react";

interface ProductDetailProps {
  description: string;
  image: string;
  name: string;
  price: number;
}

const ProductDetail: FC<ProductDetailProps> = ({ description, image, name, price }) => {
  return (
    <Card description={description} image={image} name={name} price={price} />
  );
};

export default ProductDetail;
