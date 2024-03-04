import Link from "next/link";
import { IoCardOutline, IoCartOutline } from "react-icons/io5";

export default function () {
  return (
    <div className="flex  justify-center items-center h-[800px]">
      <IoCartOutline size={80} />
      <div className="flex flex-col items-center mx-3">
        <h1 className="text-xl items-center font-semibold">Tu carrito está vacio</h1>
        <Link href="/" className="text-blue-500 mt-2 text-4xl">
          Regresar
        </Link>
      </div>
    </div>
  );
}
