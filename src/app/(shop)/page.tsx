"use client";

import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import { useEffect } from "react";

const products = initialData.products;

export default function Home() {
  useEffect(() => {
    console.log("entró a home");
  });
  return (
    <>
      <div>
        <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      </div>

      <ProductGrid products={products} />
    </>
  );
}
