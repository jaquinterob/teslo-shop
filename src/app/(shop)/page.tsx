import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <div>
        <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      </div>

      <ProductGrid products={products} />
    </>
  );
}
