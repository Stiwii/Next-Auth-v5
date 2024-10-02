"use client"; // Asegúrate de que este componente sea un "client component"

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle"; // Importar el toggle

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-200 text-black dark:bg-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold dark:hover:text-gray-300 hover:text-gray-500"
        >
          MiTienda
        </Link>
        <div className="sm:hidden ">
          <ThemeToggle />
        </div>
        {/* Botón de menú hamburguesa para pantallas pequeñas */}
        <button
          className="dark:text-white block md:hidden text-black dark:hover:text-gray-300 hover:text-gray-500"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Enlaces de navegación */}

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto space-y-4 md:space-y-0 md:space-x-6`}
        >
          <Link
            href="/products"
            className="block md:inline dark:hover:text-gray-300 hover:text-gray-500 "
          >
            Productos
          </Link>
          <Link
            href="/cart"
            className="block md:inline dark:hover:text-gray-300 hover:text-gray-500"
          >
            Carrito
          </Link>
          <Link
            href="/checkout"
            className="block md:inline dark:hover:text-gray-300 hover:text-gray-500"
          >
            Checkout
          </Link>
          {/* Toggle de tema */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
