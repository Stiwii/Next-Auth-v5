"use client"; // Asegúrate de que este componente sea un "client component"

import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; // Importar el toggle
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el Sheet

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Cerrar el Sheet al hacer clic en un enlace
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
        <div className="md:hidden ">
          <ThemeToggle />
        </div>
        {/* Botón de menú hamburguesa para pantallas pequeñas */}

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            className="dark:text-white block md:hidden text-black dark:hover:text-gray-300 hover:text-gray-500"
            onClick={toggleSheet}
          >
            ☰
          </SheetTrigger>

          <SheetContent>
            <SheetHeader className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-2">
                <div
                  onClick={handleLinkClick}
                  className="p-2 cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200"
                >
                  <Link
                    href="/products"
                    className="block dark:hover:text-gray-300 hover:text-gray-500"
                  >
                    Productos
                  </Link>
                </div>
                <div
                  onClick={handleLinkClick}
                  className="p-2 cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200"
                >
                  <Link
                    href="/cart"
                    className="block dark:hover:text-gray-300 hover:text-gray-500"
                  >
                    Carrito
                  </Link>
                </div>
                <div
                  onClick={handleLinkClick}
                  className="p-2 cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200"
                >
                  <Link
                    href="/checkout"
                    className="block dark:hover:text-gray-300 hover:text-gray-500"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        {/* Enlaces de navegación */}

        <nav
          className={`hidden w-full md:flex md:items-center md:w-auto space-y-4 md:space-y-0 md:space-x-6`}
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
