"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  }
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  return (
    <div className="flex items-center">
      {/* Icono para el tema */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only" // Ocultar checkbox por defecto
          checked={theme === "dark"} // Establecer el estado del interruptor
          onChange={toggleTheme} // Manejar el cambio de tema
        />
        <div
          className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out bg-transparent ${
            theme === "dark"
              ? "border-2 border-gray-200"
              : "border-2 border-gray-900 "
          }`}
        >
          <div
            className={`flex  items-center w-5 h-5  rounded-full shadow-sm transform transition-transform duration-400 ease-in-out ${
              theme === "dark"
                ? "translate-x-5 shadow-gray-100 "
                : "translate-x-1 shadow-gray-100 bg-gray-900"
            }`}
          >
            <span className="mr-2 select-none ">
              {theme === "dark" ? "🌞" : "🌙"}
            </span>{" "}
          </div>
        </div>
      </label>
    </div>
  );
}
