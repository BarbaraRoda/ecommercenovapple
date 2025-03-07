import { getProduct } from '@/services/products';
import ProductDetail from '@/views/productDetail';

type PageProps = {
    params: Awaited<{ id: string }>;
  };  

const Page = async ({ params }: { params: { id: string } }) => { // Forzamos tipado correcto
  const { id } = params;

  // Convertir `id` a número de forma segura
  const productId = Number(id);
  if (isNaN(productId)) {
    return <div>ID inválido</div>;
  }

  try {
    const product = await getProduct(productId);
    if (!product) return <div>Producto no encontrado</div>;

    const safeProduct = {
      name: product.name || "Producto sin nombre",
      description: product.description || "Sin descripción",
      image: product.image || "/placeholder.png",
      price: product.price || 0,
    };

    return <ProductDetail {...safeProduct} />;
  } catch (error) {
    console.error("Error al cargar el producto:", error);
    return <div>Error al cargar el producto</div>;
  }
};

export default Page;
