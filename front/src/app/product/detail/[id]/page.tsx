import { getProduct } from '@/services/products';
import ProductDetail from '@/views/productDetail';
import React from 'react';

const Page = async ({ params }: { params: { id: string } }) => {
    const id = Number(params.id);
    const product = await getProduct(id);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    const safeProduct = {
        name: product.name || "Producto sin nombre",
        description: product.description || "Sin descripción",
        image: product.image || "/placeholder.png",
        price: product.price || 0,
    };

    return (
        <div>
            <ProductDetail {...safeProduct} />
        </div>
    );
};

export default Page;
