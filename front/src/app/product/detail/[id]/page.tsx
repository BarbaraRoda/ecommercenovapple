import { getProduct } from '@/services/products'; 
import ProductDetail from '@/views/productDetail'; 

type PageProps = {
  params: { id: string };
};

const Page = async ({ params }: PageProps) => {
  const { id } = params;  // Aquí, params no es una promesa

  const productId = Number(id);

  // Espera a que el producto sea obtenido
  const product = await getProduct(productId);

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
