"use client"; // Asegúrate de que este componente sea un "client component"

import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; // Importar el toggle
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
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

        <Sheet>
          <SheetTrigger className="dark:text-white block md:hidden text-black dark:hover:text-gray-300 hover:text-gray-500">
            ☰
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
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
