"use client";
import { titleFont } from "@/config/font";
import { useUIStore } from "@/store/ui/ui-store";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openSidemenu);
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* center menu */}
      <div className="hidden sm:block">
        <Link
          href="/category/men"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Hombres
        </Link>
        <Link
          href="/category/women"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Mujeres
        </Link>
        <Link
          href="/category/kid"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Kids
        </Link>
      </div>

      {/* search,cary and menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button
          onClick={() => openMenu()}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
