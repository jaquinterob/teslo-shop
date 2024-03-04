import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  const productInCart = [
    initialData.products[0],
    initialData.products[3],
    initialData.products[2],
  ];
  return (
    <div className="flex justify-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} subtitle="" className="" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <div
              className={
                clsx("flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                })
              }
            >
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente pago</span> */}
              <span className="mx-2">Orden pagada</span>
            </div>

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
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">John Alexander Quintero</p>
              <p>Cra 39E # 48F sur - 50</p>
              <p>Volga de la cuenca</p>
              <p>Apto 1104 torre 1</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />
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
            <div
              className={
                clsx("flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white my-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                })
              }
            >
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente pago</span> */}
              <span className="mx-2">Orden pagada</span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
