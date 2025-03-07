import { getProduct } from "@/services/products";
import ProductDetail from "@/views/productDetail";

// Definir el tipo de los props
interface PageProps {
  params: { id: string };
}

// Función para obtener los datos del producto
const fetchProductData = async (id: string) => {
  const productId = Number(id);
  if (isNaN(productId)) return null;

  try {
    const product = await getProduct(productId);
    return product || null;
  } catch (error) {
    console.error("Error al cargar el producto:", error);
    return null;
  }
};

// Componente de la página
const Page = async ({ params }: PageProps) => {
  // Asegúrate de que params.id esté disponible
  if (!params?.id) {
    return <div>ID inválido o no proporcionado</div>;
  }

  const product = await fetchProductData(params.id);

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <ProductDetail
      name={product.name || "Producto sin nombre"}
      description={product.description || "Sin descripción"}
      image={product.image || "/placeholder.png"}
      price={product.price || 0}
    />
  );
};

export default Page;

