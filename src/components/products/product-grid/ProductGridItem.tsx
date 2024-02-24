import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

const ProductGridItem = ({ product }: Props) => {
  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Image
        src={`/products/${product.images[0]}`}
        alt={product.title}
        className="w-full object-cover"
        width={500}
        height={500}
      />
      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-700" href={`/product/${product.slug}`}>{product.title}</Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductGridItem;
