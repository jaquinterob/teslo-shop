import { titleFont } from "@/config/font";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <h1 className={`${titleFont.className} font-bold`}>Hola Mundo</h1>
      <h1 className={titleFont.className}>Hola Mundo</h1>
    </>
  );
}
