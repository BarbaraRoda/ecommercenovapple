import React from "react";
import Cards from "../components/cards";
import { getProducts } from "@/services/products";

const HomeView = async () => {
    const product = await getProducts()
    return (
        <div className="flex flex-col items-center mt-10 md:mt-16 lg:mt-20 px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
                Nuestros Productos
            </h1>
            <Cards list={product} />
        </div>
    );
};

export default HomeView;
