import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { Product } from "@/interfaces";
import { Category, initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  const products = initialData.products;
  const translate: Record<Category, string> = {
    men: "para Hombres",
    women: "para Mujeres",
    kid: "para Niños",
    unisex: "para Todos",
  };
  const filteredProducs = products.filter((product) => product.gender === id);
  return (
    <>
      <div>
        <Title
          title={`Artículos ${translate[id]}`}
          subtitle="Todos los productos"
          className="mb-2"
        />
      </div>
      <ProductGrid products={filteredProducs} />
    </>
  );
}
