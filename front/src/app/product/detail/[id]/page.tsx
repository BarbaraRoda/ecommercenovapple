import { getProduct } from '@/services/products';
import ProductDetail from '@/views/productDetail';

type PageProps = {
    params: Awaited<{ id: string }>; // Forzar que params NO sea una promesa
  };  

const Page = async ({ params }: PageProps) => {
  const { id } = params;

  // Asegúrate de que `getProduct` esté bien manejado
  const productId = Number(id);
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
