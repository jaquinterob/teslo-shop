import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";
import Title from "@/components/ui/title/Title";
import { Product } from "@/interfaces";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function () {
  const productInCart:Product[] = [
    initialData.products[0],
    initialData.products[3],
    initialData.products[2],
  ];
  if (productInCart.length === 0) {
    redirect("/empty");
  }
  return (
    <div className="flex justify-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" subtitle="" className="" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar items</span>
            <Link href="/" className="underline mb-5">
              Continúa comprando
            </Link>
            {productInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{ width: "100px", height: "100px" }}
                  alt={product.slug}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <QuantitySelector quantity={3} />
                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 Artículos</span>
              <span>Subtotal</span>
              <span className="text-right">$ 100</span>
              <span>Impuestos</span>
              <span className="text-right">$ 15</span>
              <span className="mt-5 text-2xl">Total</span>
              <span className=" mt-5 text-2xl text-right">$ 100</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <Link
                className="flex btn-primary justify-center"
                href="/checkout/address"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
